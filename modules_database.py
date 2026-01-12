"""
Database management for persistence
"""

import json
from pathlib import Path
from typing import Dict, Optional
import logging

from config import USER_DATA_DIR

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class DatabaseManager:
    """Manage user data persistence"""
    
    def __init__(self, user_id: str = "default_user"):
        self.user_id = user_id
        self.user_file = USER_DATA_DIR / f"{user_id}.json"
        self.data = self._load_data()
    
    def _load_data(self) -> Dict:
        """Load user data from file"""
        if self.user_file.exists():
            try:
                with open(self.user_file, 'r') as f:
                    return json.load(f)
            except Exception as e:
                logger.error(f"Failed to load user data: {e}")
                return self._create_default_data()
        return self._create_default_data()
    
    def _create_default_data(self) -> Dict:
        """Create default user data structure"""
        return {
            'user_id': self.user_id,
            'total_points': 0,
            'current_streak': 0,
            'last_practice_date': None,
            'stats': {
                'total_words': 0,
                'reviewed_words': 0,
                'total_reviews': 0,
                'perfect_streak': 0,
                'session_reviews': 0,
                'cultural_notes_read': 0,
                'audio_files_processed': 0,
                'locations_visited': set()
            },
            'settings': {
                'daily_goal': 20,
                'notifications_enabled': True
            }
        }
    
    def save(self):
        """Save user data to file"""
        try:
            # Convert sets to lists for JSON serialization
            data_copy = self.data.copy()
            if 'stats' in data_copy and 'locations_visited' in data_copy['stats']:
                data_copy['stats']['locations_visited'] = list(
                    data_copy['stats']['locations_visited']
                )
            
            with open(self.user_file, 'w') as f:
                json.dump(data_copy, f, indent=2)
            
            logger.info(f"User data saved: {self.user_file}")
        except Exception as e:
            logger.error(f"Failed to save user data: {e}")
    
    def update_stat(self, key: str, value):
        """Update a statistic"""
        if 'stats' not in self.data:
            self.data['stats'] = {}
        self.data['stats'][key] = value
        self.save()
    
    def increment_stat(self, key: str, amount: int = 1):
        """Increment a statistic"""
        if 'stats' not in self.data:
            self.data['stats'] = {}
        self.data['stats'][key] = self.data['stats'].get(key, 0) + amount
        self.save()
    
    def add_points(self, points: int):
        """Add points to user total"""
        self.data['total_points'] = self.data.get('total_points', 0) + points
        self.save()