#!/usr/bin/env python3
"""
Simplified Bashkir Language and Culture Promotion App
Main application that demonstrates the concept without requiring all dependencies
"""

import os
import sys
from pathlib import Path
import logging
from datetime import datetime
import json

# Simplified versions of the core modules
class MemoryLocation:
    """A location in the memory palace"""
    def __init__(self, id, name, description, coordinates, connected_to, cultural_significance="", image_url=None):
        self.id = id
        self.name = name
        self.description = description
        self.coordinates = coordinates
        self.connected_to = connected_to
        self.image_url = image_url
        self.cultural_significance = cultural_significance

class MemoryItem:
    """A word/phrase stored in the memory palace"""
    def __init__(self, bashkir_word, english_translation, phonetic, major_system_code, 
                 image_mnemonic, location_id, cultural_context="", audio_path=None):
        self.bashkir_word = bashkir_word
        self.english_translation = english_translation
        self.phonetic = phonetic
        self.major_system_code = major_system_code
        self.image_mnemonic = image_mnemonic
        self.location_id = location_id
        self.cultural_context = cultural_context
        self.audio_path = audio_path
        self.review_count = 0
        self.last_reviewed = None
        self.easiness_factor = 2.5
        self.interval = 0
        self.next_review = None
        self.created_date = datetime.now().isoformat()

class MemoryPalace:
    """Memory Palace for organizing vocabulary using Method of Loci"""
    
    def __init__(self, name, theme="Bashkir Village"):
        self.name = name
        self.theme = theme
        self.locations = {}
        self.items = {}
        self._create_default_locations()
        
        print(f"Memory Palace created: {name}")
    
    def _create_default_locations(self):
        """Create a traditional Bashkir village layout"""
        default_locations = [
            MemoryLocation(
                1, "Village Gate (Ҡала Ҡапҡаһы)", 
                "Wooden entrance gate with traditional carvings",
                (0, 0), [2],
                cultural_significance="The gate represents the boundary between worlds"
            ),
            MemoryLocation(
                2, "Central Square (Урта мәйҙан)", 
                "Village gathering place with well and benches",
                (5, 0), [1, 3, 4],
                cultural_significance="Center of community life and celebrations"
            ),
            MemoryLocation(
                3, "Yurt (Тирмә)", 
                "Traditional felt dwelling with wooden frame",
                (10, 5), [2, 5],
                cultural_significance="Symbol of nomadic heritage"
            ),
            MemoryLocation(
                4, "Stable (Ат ҡотоһо)", 
                "Horse shelter - horses are sacred in Bashkir culture",
                (10, -5), [2, 6],
                cultural_significance="Horses represent freedom and nobility"
            ),
            MemoryLocation(
                5, "Kitchen House (Аш йорто)", 
                "Outdoor cooking area with traditional oven",
                (15, 5), [3, 7],
                cultural_significance="Where traditional dishes are prepared"
            ),
            MemoryLocation(
                6, "Workshop (Осталыҡ)", 
                "Craft-making space for traditional arts",
                (15, -5), [4, 8],
                cultural_significance="Preserves ancient crafts and skills"
            ),
            MemoryLocation(
                7, "Garden (Баҡса)", 
                "Herb and vegetable garden with medicinal plants",
                (20, 5), [5],
                cultural_significance="Connection to nature and healing traditions"
            ),
            MemoryLocation(
                8, "Forest Edge (Урманситендә)", 
                "Sacred gathering place near ancient trees",
                (20, -5), [6],
                cultural_significance="Place of spiritual connection and folk tales"
            )
        ]
        
        for loc in default_locations:
            self.locations[loc.id] = loc
        
        print(f"Created {len(default_locations)} locations")
    
    def add_word(self, bashkir, english, phonetic, location_id, cultural_context="", 
                 audio_path=None, image_mnemonic=None):
        """Add a word to the memory palace"""
        
        # Generate major system code (simplified)
        major_code = f"{len(bashkir)}-{len(english)}"
        
        # Generate or use provided mnemonic
        if image_mnemonic is None:
            location = self.locations[location_id]
            image_mnemonic = (
                f"At the {location.name}, imagine a vivid scene with '{english}' "
                f"({bashkir}). {location.description}. "
                f"Make it absurd, colorful, and emotionally engaging."
            )
        
        item = MemoryItem(
            bashkir_word=bashkir,
            english_translation=english,
            phonetic=phonetic,
            major_system_code=major_code,
            image_mnemonic=image_mnemonic,
            location_id=location_id,
            cultural_context=cultural_context,
            audio_path=audio_path
        )
        
        self.items[bashkir] = item
        print(f"Added word: {bashkir} → {english} at location {location_id}")
        
        return item
    
    def get_words_at_location(self, location_id):
        """Get all words at a specific location"""
        return [
            item for item in self.items.values()
            if item.location_id == location_id
        ]
    
    def get_statistics(self):
        """Get palace statistics"""
        total_words = len(self.items)
        reviewed_words = sum(1 for item in self.items.values() if item.review_count > 0)
        total_reviews = sum(item.review_count for item in self.items.values())
        
        words_by_location = {}
        for item in self.items.values():
            loc_name = self.locations[item.location_id].name
            words_by_location[loc_name] = words_by_location.get(loc_name, 0) + 1
        
        return {
            'total_words': total_words,
            'reviewed_words': reviewed_words,
            'total_reviews': total_reviews,
            'words_by_location': words_by_location,
            'total_locations': len(self.locations),
            'locations_with_words': len(set(item.location_id for item in self.items.values()))
        }

class BashkirCultureApp:
    """
    Main application class that brings together all functionality to promote Bashkir language and culture
    """
    
    def __init__(self, user_id="default_user"):
        self.user_id = user_id
        
        # Initialize core systems
        self.palace = MemoryPalace("Bashkir Cultural Journey", "Traditional Bashkir Village")
        
        # Load cultural content
        self._load_cultural_content()
        
        print("Bashkir Culture App initialized successfully")
    
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
        
        print(f"Loaded {len(cultural_terms)} cultural terms into the memory palace")
    
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
        items_for_review = list(self.palace.items.values())
        
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