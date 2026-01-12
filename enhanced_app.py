#!/usr/bin/env python3
"""
Enhanced Bashkir Language and Culture Promotion App
Main application that integrates all modules from the existing codebase
with fallback implementations for missing dependencies
"""

import os
import sys
from pathlib import Path
import logging
from datetime import datetime
import json

try:
    # Import from existing modules if available
    from modules_memory_palace import MemoryPalace, MemoryLocation, MemoryItem
    from modules_major_system import MajorSystemEncoder
    
    # Try to import optional modules
    try:
        from modules_audio_processor import BashkirAudioProcessor
    except ImportError as e:
        print(f"Audio processor not available: {e}")
        BashkirAudioProcessor = None
    
    try:
        from modules_spaced_repetition import SpacedRepetitionSystem
    except ImportError as e:
        print(f"Spaced repetition system not available: {e}")
        SpacedRepetitionSystem = None
    
    try:
        from modules_mnemonic_generator import MnemonicGenerator
    except ImportError as e:
        print(f"Mnemonic generator not available: {e}")
        MnemonicGenerator = None
    
    try:
        from modules_gamification import GamificationSystem
    except ImportError as e:
        print(f"Gamification system not available: {e}")
        GamificationSystem = None
    
    try:
        from modules_visual_renderer import VisualPalaceRenderer
    except ImportError as e:
        print(f"Visual renderer not available: {e}")
        VisualPalaceRenderer = None
    
    try:
        from modules_database import DatabaseManager
    except ImportError as e:
        print(f"Database manager not available: {e}")
        DatabaseManager = None
        
    from config import *
except ImportError as e:
    print(f"Critical import failed: {e}")
    # Fall back to simplified implementations
    from modules_major_system import MajorSystemEncoder

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class BashkirCultureApp:
    """
    Main application class that brings together all functionality to promote Bashkir language and culture
    """
    
    def __init__(self, user_id="default_user"):
        self.user_id = user_id
        
        # Initialize core systems with fallbacks
        self.palace = MemoryPalace("Bashkir Cultural Journey", "Traditional Bashkir Village")
        
        # Initialize optional systems with fallbacks
        self.audio_processor = None
        if BashkirAudioProcessor:
            try:
                self.audio_processor = BashkirAudioProcessor()
            except Exception as e:
                print(f"Could not initialize audio processor: {e}")
        
        self.spaced_repetition = None
        if SpacedRepetitionSystem:
            try:
                self.spaced_repetition = SpacedRepetitionSystem()
            except Exception as e:
                print(f"Could not initialize spaced repetition: {e}")
        
        self.mnemonic_generator = None
        if MnemonicGenerator:
            try:
                self.mnemonic_generator = MnemonicGenerator()
            except Exception as e:
                print(f"Could not initialize mnemonic generator: {e}")
        
        self.gamification = None
        if GamificationSystem:
            try:
                self.gamification = GamificationSystem()
            except Exception as e:
                print(f"Could not initialize gamification system: {e}")
        
        self.visual_renderer = None
        if VisualPalaceRenderer:
            try:
                self.visual_renderer = VisualPalaceRenderer()
            except Exception as e:
                print(f"Could not initialize visual renderer: {e}")
        
        self.database = None
        if DatabaseManager:
            try:
                self.database = DatabaseManager()
            except Exception as e:
                print(f"Could not initialize database: {e}")
        
        # Load cultural content
        self._load_cultural_content()
        
        logger.info("Bashkir Culture App initialized successfully")
    
    def _load_cultural_content(self):
        """Load initial Bashkir cultural content into the memory palace"""
        
        # Add key Bashkir cultural terms and concepts
        cultural_terms = [
            {
                "bashkir": "Башҡортостан",
                "english": "Bashkortostan",
                "phonetic": "Bash-kor-tos-tan",
                "location_id": 1,
                "cultural_context": "The Republic of Bashkortostan is a federal subject of Russia located in the Ural Mountains region."
            },
            {
                "bashkir": "Башҡорт",
                "english": "Bashkir",
                "phonetic": "Bash-kort",
                "location_id": 1,
                "cultural_context": "The Bashkir people are a Turkic ethnic group native to the Bashkortostan region."
            },
            {
                "bashkir": "Урал-Батыр",
                "english": "Ural-Batyr",
                "phonetic": "U-ral Ba-tir",
                "location_id": 2,
                "cultural_context": "The greatest epic of the Bashkir people, telling the story of the hero Ural-Batyr."
            },
            {
                "bashkir": "Куралай",
                "english": "Kuralay",
                "phonetic": "Ku-ra-lay",
                "location_id": 2,
                "cultural_context": "A traditional Bashkir musical instrument similar to a flute."
            },
            {
                "bashkir": "Тирмә",
                "english": "Yurt",
                "phonetic": "Tir-ma",
                "location_id": 3,
                "cultural_context": "Traditional nomadic dwelling of the Bashkir people."
            },
            {
                "bashkir": "Бал",
                "english": "Honey",
                "phonetic": "Bal",
                "location_id": 5,
                "cultural_context": "Bashkir honey is world-renowned for its quality, and beekeeping is an important cultural practice."
            },
            {
                "bashkir": "Салауат Юлаев",
                "english": "Salawat Yulaev",
                "phonetic": "Sa-la-wat Yu-la-ev",
                "location_id": 6,
                "cultural_context": "National hero of the Bashkir people, poet, and leader of the peasant war."
            },
            {
                "bashkir": "Күрәй",
                "english": "Kurey",
                "phonetic": "Ku-rey",
                "location_id": 7,
                "cultural_context": "Traditional Bashkir feather grass, a symbol of the republic."
            }
        ]
        
        # Add terms to the memory palace
        for term in cultural_terms:
            self.palace.add_word(
                bashkir=term["bashkir"],
                english=term["english"],
                phonetic=term["phonetic"],
                location_id=term["location_id"],
                cultural_context=term["cultural_context"]
            )
        
        logger.info(f"Loaded {len(cultural_terms)} cultural terms into the memory palace")
    
    def display_palace_map(self):
        """Display visual representation of the memory palace"""
        print("\n=== BASHKIR MEMORY PALACE MAP ===")
        print(f"Theme: {self.palace.theme}")
        print(f"Name: {self.palace.name}")
        print("\nLocations in the Palace:")
        
        for location_id, location in self.palace.locations.items():
            words_here = self.palace.get_words_at_location(location_id)
            print(f"\n📍 Location {location_id}: {location.name}")
            print(f"   Description: {location.description}")
            print(f"   Cultural Significance: {location.cultural_significance}")
            print(f"   Connected to: {location.connected_to}")
            print(f"   Words stored here: {len(words_here)}")
            
            for word in words_here:
                print(f"     • {word.bashkir_word} ({word.phonetic}) - {word.english_translation}")
                print(f"       Cultural context: {word.cultural_context[:60]}...")
    
    def start_learning_session(self):
        """Start an interactive learning session"""
        print("\n🌟 WELCOME TO THE BASHKIR LANGUAGE AND CULTURE LEARNING APP! 🌟")
        print("This app helps you learn Bashkir language and culture through memory techniques.")
        
        while True:
            print("\n--- MENU ---")
            print("1. Browse the Bashkir Memory Palace")
            print("2. Practice vocabulary")
            print("3. View cultural stories and mnemonics")
            print("4. Check your progress")
            print("5. Add new Bashkir word")
            print("6. Exit")
            
            choice = input("\nEnter your choice (1-6): ").strip()
            
            if choice == "1":
                self.display_palace_map()
            elif choice == "2":
                self.practice_vocabulary()
            elif choice == "3":
                self.view_cultural_stories()
            elif choice == "4":
                self.check_progress()
            elif choice == "5":
                self.add_new_word()
            elif choice == "6":
                print("\nThank you for learning about Bashkir language and culture!")
                print("Until next time! Берәү генә урында! (See you again!)")
                break
            else:
                print("Invalid choice. Please try again.")
    
    def practice_vocabulary(self):
        """Practice vocabulary"""
        print("\n📖 VOCABULARY PRACTICE SESSION")
        
        # Get items for review
        items_for_review = []
        for item in self.palace.items.values():
            items_for_review.append(item)
        
        if not items_for_review:
            print("No items available for review right now.")
            return
        
        # Simple review of all items (limit to 5)
        for i, item in enumerate(items_for_review[:5]):  # Limit to 5 items per session
            print(f"\nQuestion {i+1}/{min(len(items_for_review), 5)}:")
            print(f"What does '{item.bashkir_word}' mean in English?")
            input("Press Enter to see the answer...")
            print(f"Answer: {item.english_translation}")
            print(f"Pronunciation: {item.phonetic}")
            print(f"Cultural context: {item.cultural_context}")
            
            # Update review stats
            item.review_count += 1
            item.last_reviewed = datetime.now().isoformat()
    
    def view_cultural_stories(self):
        """View cultural stories and mnemonics"""
        print("\n📚 BASHKIR CULTURAL STORIES")
        
        for location_id, location in self.palace.locations.items():
            words_here = self.palace.get_words_at_location(location_id)
            if words_here:
                print(f"\n🏛️  Location: {location.name}")
                print(f"   Cultural Significance: {location.cultural_significance}")
                
                for item in words_here:
                    print(f"   Word: {item.bashkir_word}")
                    print(f"   Meaning: {item.english_translation}")
                    print(f"   Mnemonic: {item.image_mnemonic[:100]}...")
                    print(f"   Context: {item.cultural_context}")
                    print()
    
    def check_progress(self):
        """Check learning progress"""
        print("\n📊 YOUR LEARNING PROGRESS")
        
        stats = self.palace.get_statistics()
        print(f"Total words in palace: {stats['total_words']}")
        print(f"Words reviewed: {stats['reviewed_words']}")
        print(f"Total reviews completed: {stats['total_reviews']}")
        print(f"Total locations: {stats['total_locations']}")
        print(f"Locations with words: {stats['locations_with_words']}")
        
        print("\nWords by location:")
        for location, count in stats['words_by_location'].items():
            print(f"  {location}: {count} words")
    
    def add_new_word(self):
        """Add a new Bashkir word to the memory palace"""
        print("\n➕ ADD NEW BASHKIR WORD")
        
        bashkir_word = input("Enter Bashkir word: ").strip()
        if not bashkir_word:
            print("Word cannot be empty.")
            return
            
        english_translation = input("Enter English translation: ").strip()
        phonetic = input("Enter phonetic transcription: ").strip()
        
        print("\nAvailable locations:")
        for lid, loc in self.palace.locations.items():
            print(f"  {lid}. {loc.name}")
        
        try:
            location_id = int(input("Select location ID (1-8): "))
            if location_id not in self.palace.locations:
                print("Invalid location ID.")
                return
        except ValueError:
            print("Invalid location ID.")
            return
        
        cultural_context = input("Enter cultural context (optional): ").strip()
        
        self.palace.add_word(
            bashkir=bashkir_word,
            english=english_translation,
            phonetic=phonetic,
            location_id=location_id,
            cultural_context=cultural_context
        )
        
        print(f"Successfully added '{bashkir_word}' to the memory palace!")


def main():
    """Main entry point"""
    print("🚀 Initializing Bashkir Language and Culture Promotion App...")
    
    # Create the app
    app = BashkirCultureApp()
    
    # Start the learning session
    app.start_learning_session()


if __name__ == "__main__":
    main()