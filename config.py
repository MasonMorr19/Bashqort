"""
Configuration settings for Bashkir Memory Palace
"""
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# Base directories
BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR / "data"
PALACES_DIR = DATA_DIR / "palaces"
AUDIO_DIR = DATA_DIR / "audio"
USER_DATA_DIR = DATA_DIR / "user_data"

# Create directories if they don't exist
for directory in [DATA_DIR, PALACES_DIR, AUDIO_DIR, USER_DATA_DIR]:
    directory.mkdir(parents=True, exist_ok=True)

# API Keys
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

# Whisper settings
WHISPER_MODEL = "large-v3"  # Options: tiny, base, small, medium, large, large-v3
WHISPER_DEVICE = "cuda" if os.getenv("USE_GPU", "false").lower() == "true" else "cpu"

# Translation settings
DEFAULT_SOURCE_LANG = "ba"  # Bashkir
DEFAULT_TARGET_LANG = "en"  # English

# Memory Palace settings
DEFAULT_PALACE_NAME = "Bashkir Village"
MAX_WORDS_PER_LOCATION = 10

# Spaced Repetition settings
INITIAL_INTERVAL = 1  # days
EASY_BONUS = 1.3
HARD_PENALTY = 0.8

# Gamification settings
XP_PER_WORD_LEARNED = 10
XP_PER_REVIEW = 5
XP_PER_PERFECT_REVIEW = 15

# UI settings
THEME_COLOR = "#3498db"
SUCCESS_COLOR = "#2ecc71"
WARNING_COLOR = "#f39c12"
ERROR_COLOR = "#e74c3c"

# File size limits
MAX_AUDIO_SIZE_MB = 50
MAX_AUDIO_LENGTH_SECONDS = 600  # 10 minutes

# Debug mode
DEBUG = os.getenv("DEBUG", "false").lower() == "true"