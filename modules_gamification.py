"""
Gamification system with achievements and challenges
"""

from dataclasses import dataclass, asdict
from enum import Enum
from typing import Dict, List, Optional, Set
from datetime import datetime, timedelta
import random
import json
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class AchievementType(Enum):
    FIRST_WORD = "first_word"
    STREAK_7 = "week_streak"
    STREAK_30 = "month_streak"
    WORDS_50 = "fifty_words"
    WORDS_100 = "hundred_words"
    PERFECT_REVIEW = "perfect_review"
    PALACE_COMPLETE = "palace_complete"
    SPEED_DEMON = "speed_demon"
    CULTURAL_EXPLORER = "cultural_explorer"
    AUDIO_MASTER = "audio_master"


@dataclass
class Achievement:
    id: str
    name: str
    description: str
    icon: str
    points: int
    unlocked: bool = False
    unlocked_date: Optional[str] = None
    progress: float = 0.0


@dataclass
class Challenge:
    id: str
    name: str
    description: str
    target: int
    current: int
    reward_points: int
    expires: str
    completed: bool = False


class GamificationSystem:
    """Manage achievements, challenges, and progression"""
    
    def __init__(self):
        self.achievements = self._initialize_achievements()
        self.daily_challenges = []
        self.weekly_challenges = []
        logger.info("Gamification system initialized")
    
    def _initialize_achievements(self) -> Dict[str, Achievement]:
        """Initialize all achievements"""
        return {
            "first_word": Achievement(
                "first_word", "First Steps", "Learn your first Bashkir word",
                "🌱", 10
            ),
            "week_streak": Achievement(
                "week_streak", "Dedicated Learner", "Practice 7 days in a row",
                "🔥", 50
            ),
            "month_streak": Achievement(
                "month_streak", "Master of Consistency", "Practice 30 days in a row",
                "💎", 200
            ),
            "fifty_words": Achievement(
                "fifty_words", "Vocabulary Builder", "Learn 50 words",
                "📚", 75
            ),
            "hundred_words": Achievement(
                "hundred_words", "Word Hoarder", "Learn 100 words",
                "🏆", 150
            ),
            "perfect_review": Achievement(
                "perfect_review", "Perfect Recall", "Get 10 words correct in a row",
                "⭐", 30
            ),
            "palace_complete": Achievement(
                "palace_complete", "Palace Master", "Visit all palace locations",
                "🏛️", 100
            ),
            "speed_demon": Achievement(
                "speed_demon", "Speed Demon", "Review 50 words in one session",
                "⚡", 60
            ),
            "cultural_explorer": Achievement(
                "cultural_explorer", "Cultural Explorer", "Read 20 cultural notes",
                "🌍", 40
            ),
            "audio_master": Achievement(
                "audio_master", "Audio Master", "Process 10 audio files",
                "🎵", 50
            )
        }
    
    def check_achievements(self, user_stats: Dict) -> List[Achievement]:
        """Check and unlock achievements"""
        newly_unlocked = []
        
        # Word count achievements
        word_count = user_stats.get('total_words', 0)
        if word_count >= 1:
            newly_unlocked.extend(self._unlock("first_word"))
        if word_count >= 50:
            newly_unlocked.extend(self._unlock("fifty_words"))
        if word_count >= 100:
            newly_unlocked.extend(self._unlock("hundred_words"))
        
        # Streak achievements
        streak = user_stats.get('current_streak', 0)
        if streak >= 7:
            newly_unlocked.extend(self._unlock("week_streak"))
        if streak >= 30:
            newly_unlocked.extend(self._unlock("month_streak"))
        
        # Other achievements
        if user_stats.get('perfect_streak', 0) >= 10:
            newly_unlocked.extend(self._unlock("perfect_review"))
        
        if user_stats.get('session_reviews', 0) >= 50:
            newly_unlocked.extend(self._unlock("speed_demon"))
        
        if user_stats.get('locations_visited', 0) >= user_stats.get('total_locations', 8):
            newly_unlocked.extend(self._unlock("palace_complete"))
        
        if user_stats.get('cultural_notes_read', 0) >= 20:
            newly_unlocked.extend(self._unlock("cultural_explorer"))
        
        if user_stats.get('audio_files_processed', 0) >= 10:
            newly_unlocked.extend(self._unlock("audio_master"))
        
        return newly_unlocked
    
    def _unlock(self, achievement_id: str) -> List[Achievement]:
        """Unlock an achievement"""
        achievement = self.achievements.get(achievement_id)
        if achievement and not achievement.unlocked:
            achievement.unlocked = True
            achievement.unlocked_date = datetime.now().isoformat()
            logger.info(f"Achievement unlocked: {achievement.name}")
            return [achievement]
        return []
    
    def generate_daily_challenges(self) -> List[Challenge]:
        """Generate random daily challenges"""
        tomorrow = (datetime.now() + timedelta(days=1)).replace(
            hour=0, minute=0, second=0
        ).isoformat()
        
        challenge_pool = [
            Challenge("daily_review_10", "Quick Review", "Review 10 words", 
                     10, 0, 20, tomorrow),
            Challenge("daily_new_5", "Expand Vocabulary", "Learn 5 new words", 
                     5, 0, 25, tomorrow),
            Challenge("daily_perfect_5", "Perfect Streak", "Get 5 correct in a row", 
                     5, 0, 30, tomorrow),
            Challenge("daily_audio", "Listening Practice", "Process 1 audio file", 
                     1, 0, 15, tomorrow),
            Challenge("daily_cultural", "Cultural Insight", "Read 3 cultural notes", 
                     3, 0, 15, tomorrow),
        ]
        
        return random.sample(challenge_pool, 3)
    
    def calculate_level(self, total_points: int) -> tuple:
        """Calculate user level and progress"""
        level = 1
        points_for_current = 0
        
        while points_for_current <= total_points:
            level += 1
            points_for_current = int(100 * (level ** 1.5))
        
        level -= 1
        points_for_current_level = int(100 * (level ** 1.5))
        points_for_next_level = int(100 * ((level + 1) ** 1.5))
        
        progress = total_points - points_for_current_level
        needed = points_for_next_level - points_for_current_level
        
        return level, progress, needed
    
    def save_progress(self, filepath: str):
        """Save gamification progress"""
        data = {
            'achievements': {k: asdict(v) for k, v in self.achievements.items()},
            'daily_challenges': [asdict(c) for c in self.daily_challenges],
            'saved_date': datetime.now().isoformat()
        }
        
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=2)