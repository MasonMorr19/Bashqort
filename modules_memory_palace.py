"""
Memory Palace system using Method of Loci
"""

import json
from typing import List, Dict, Tuple, Optional
from dataclasses import dataclass, asdict
from datetime import datetime
from pathlib import Path
import logging

from config import PALACES_DIR, MAX_WORDS_PER_LOCATION

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@dataclass
class MemoryLocation:
    """A location in the memory palace"""
    id: int
    name: str
    description: str
    coordinates: Tuple[int, int]
    connected_to: List[int]
    image_url: Optional[str] = None
    cultural_significance: str = ""


@dataclass
class MemoryItem:
    """A word/phrase stored in the memory palace"""
    bashkir_word: str
    english_translation: str
    phonetic: str
    major_system_code: str
    image_mnemonic: str
    location_id: int
    cultural_context: str = ""
    audio_path: Optional[str] = None
    review_count: int = 0
    last_reviewed: Optional[str] = None
    easiness_factor: float = 2.5
    interval: int = 0
    next_review: Optional[str] = None
    created_date: str = ""
    
    def __post_init__(self):
        if not self.created_date:
            self.created_date = datetime.now().isoformat()


class MemoryPalace:
    """Memory Palace for organizing vocabulary using Method of Loci"""
    
    def __init__(self, name: str, theme: str = "Bashkir Village"):
        self.name = name
        self.theme = theme
        self.locations: Dict[int, MemoryLocation] = {}
        self.items: Dict[str, MemoryItem] = {}
        self._create_default_locations()
        
        logger.info(f"Memory Palace created: {name}")
    
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
        
        logger.info(f"Created {len(default_locations)} locations")
    
    def add_word(self, 
                 bashkir: str, 
                 english: str, 
                 phonetic: str,
                 location_id: int, 
                 cultural_context: str = "", 
                 audio_path: Optional[str] = None,
                 image_mnemonic: Optional[str] = None) -> MemoryItem:
        """
        Add a word to the memory palace
        
        Args:
            bashkir: Bashkir word
            english: English translation
            phonetic: Phonetic transcription
            location_id: Location to place the word
            cultural_context: Cultural information
            audio_path: Path to audio file
            image_mnemonic: Custom mnemonic (auto-generated if None)
        
        Returns:
            Created MemoryItem
        """
        from modules_major_system import MajorSystemEncoder
        
        # Check location capacity
        words_at_location = sum(
            1 for item in self.items.values() 
            if item.location_id == location_id
        )
        
        if words_at_location >= MAX_WORDS_PER_LOCATION:
            logger.warning(f"Location {location_id} is at capacity")
        
        # Generate major system code
        major_code = MajorSystemEncoder.create_mnemonic_code(bashkir, english)
        
        # Generate or use provided mnemonic
        if image_mnemonic is None:
            image_mnemonic = self._generate_image_mnemonic(
                bashkir, english, self.locations[location_id]
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
        logger.info(f"Added word: {bashkir} → {english} at location {location_id}")
        
        return item
    
    def _generate_image_mnemonic(self, 
                                  bashkir: str, 
                                  english: str,
                                  location: MemoryLocation) -> str:
        """Generate a vivid mnemonic combining word and location"""
        return (
            f"At the {location.name}, imagine a vivid scene with '{english}' "
            f"({bashkir}). {location.description}. "
            f"Make it absurd, colorful, and emotionally engaging."
        )
    
    def get_word(self, bashkir: str) -> Optional[MemoryItem]:
        """Get a word from the palace"""
        return self.items.get(bashkir)
    
    def get_words_at_location(self, location_id: int) -> List[MemoryItem]:
        """Get all words at a specific location"""
        return [
            item for item in self.items.values()
            if item.location_id == location_id
        ]
    
    def get_journey(self, start_location: int = 1) -> List[MemoryLocation]:
        """
        Get ordered path through palace using BFS
        
        Args:
            start_location: Starting location ID
        
        Returns:
            Ordered list of locations
        """
        visited = set()
        journey = []
        queue = [start_location]
        
        while queue:
            loc_id = queue.pop(0)
            if loc_id in visited:
                continue
            
            visited.add(loc_id)
            journey.append(self.locations[loc_id])
            
            # Add connected locations
            for connected_id in self.locations[loc_id].connected_to:
                if connected_id not in visited:
                    queue.append(connected_id)
        
        return journey
    
    def get_statistics(self) -> Dict:
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
    
    def save(self, filepath: Optional[Path] = None):
        """Save palace to JSON file"""
        if filepath is None:
            filepath = PALACES_DIR / f"{self.name.lower().replace(' ', '_')}.json"
        
        data = {
            'name': self.name,
            'theme': self.theme,
            'locations': {k: asdict(v) for k, v in self.locations.items()},
            'items': {k: asdict(v) for k, v in self.items.items()},
            'saved_date': datetime.now().isoformat()
        }
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        logger.info(f"Palace saved to: {filepath}")
    
    @classmethod
    def load(cls, filepath: Path) -> 'MemoryPalace':
        """Load palace from JSON file"""
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        palace = cls(data['name'], data['theme'])
        
        # Load locations
        palace.locations = {
            int(k): MemoryLocation(**v) 
            for k, v in data['locations'].items()
        }
        
        # Load items
        palace.items = {
            k: MemoryItem(**v) 
            for k, v in data['items'].items()
        }
        
        logger.info(f"Palace loaded from: {filepath}")
        return palace