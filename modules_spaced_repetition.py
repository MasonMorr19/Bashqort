"""
Spaced Repetition System (SM-2 Algorithm)
"""

from datetime import datetime, timedelta
from typing import Dict, List, Tuple
import math
import logging

from .memory_palace import MemoryItem
from config import INITIAL_INTERVAL, EASY_BONUS, HARD_PENALTY

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class SpacedRepetitionSystem:
    """Implement SM-2 spaced repetition algorithm"""
    
    @staticmethod
    def calculate_next_review(item: MemoryItem, quality: int) -> Tuple[MemoryItem, int]:
        """
        Calculate next review date based on response quality
        
        Args:
            item: MemoryItem to update
            quality: Response quality (0-5)
        
        Returns:
            Updated item and points earned
        """
        from config import XP_PER_REVIEW, XP_PER_PERFECT_REVIEW
        
        item.review_count += 1
        item.last_reviewed = datetime.now().isoformat()
        
        points_earned = XP_PER_REVIEW
        
        # Calculate new easiness factor
        ef = item.easiness_factor
        ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
        ef = max(1.3, ef)
        item.easiness_factor = ef
        
        # Calculate new interval
        if quality < 3:
            interval = INITIAL_INTERVAL
            points_earned = 0
        else:
            if item.interval == 0:
                interval = INITIAL_INTERVAL
            elif item.interval == 1:
                interval = 6
            else:
                interval = math.ceil(item.interval * ef)
            
            if quality == 5:
                interval = math.ceil(interval * EASY_BONUS)
                points_earned = XP_PER_PERFECT_REVIEW
            elif quality == 3:
                interval = math.ceil(interval * HARD_PENALTY)
        
        item.interval = interval
        next_review_date = datetime.now() + timedelta(days=interval)
        item.next_review = next_review_date.isoformat()
        
        logger.info(f"Updated review for '{item.bashkir_word}': quality={quality}, interval={interval} days")
        
        return item, points_earned
    
    @staticmethod
    def get_due_items(items: Dict[str, MemoryItem], limit: int = None) -> List[MemoryItem]:
        """Get items due for review"""
        now = datetime.now()
        due = []
        
        for item in items.values():
            if item.next_review is None:
                due.append(item)
            else:
                next_review = datetime.fromisoformat(item.next_review)
                if now >= next_review:
                    due.append(item)
        
        # Sort by urgency (oldest reviews first)
        due.sort(key=lambda x: x.next_review or "")
        
        if limit:
            due = due[:limit]
        
        return due
    
    @staticmethod
    def get_statistics(items: Dict[str, MemoryItem]) -> Dict:
        """Get SRS statistics"""
        now = datetime.now()
        
        stats = {
            'due_now': 0,
            'due_today': 0,
            'due_this_week': 0,
            'young': 0,  # interval < 21 days
            'mature': 0,  # interval >= 21 days
            'average_interval': 0,
            'average_easiness': 0
        }
        
        if not items:
            return stats
        
        total_interval = 0
        total_ef = 0
        count = 0
        
        for item in items.values():
            if item.next_review:
                next_review = datetime.fromisoformat(item.next_review)
                
                if now >= next_review:
                    stats['due_now'] += 1
                
                if next_review.date() == now.date():
                    stats['due_today'] += 1
                
                if next_review <= now + timedelta(days=7):
                    stats['due_this_week'] += 1
                
                if item.interval < 21:
                    stats['young'] += 1
                else:
                    stats['mature'] += 1
                
                total_interval += item.interval
                total_ef += item.easiness_factor
                count += 1
        
        if count > 0:
            stats['average_interval'] = total_interval / count
            stats['average_easiness'] = total_ef / count
        
        return stats