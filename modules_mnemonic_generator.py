"""
AI-powered mnemonic generator using OpenAI GPT
"""

from openai import OpenAI
import os
from typing import Dict, Optional
import json
import logging

from .memory_palace import MemoryLocation, MemoryItem
from config import OPENAI_API_KEY

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class MnemonicGenerator:
    """Generate creative mnemonics using AI"""
    
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or OPENAI_API_KEY
        self.client = None
        self.cache = {}
        
        if self.api_key:
            try:
                self.client = OpenAI(api_key=self.api_key)
                logger.info("OpenAI client initialized")
            except Exception as e:
                logger.error(f"Failed to initialize OpenAI: {e}")
    
    def is_available(self) -> bool:
        """Check if API is available"""
        return self.client is not None
    
    def generate_mnemonic(self,
                         bashkir_word: str,
                         english_word: str,
                         phonetic: str,
                         location: MemoryLocation,
                         cultural_context: str = "") -> Dict[str, str]:
        """Generate multiple mnemonic techniques"""
        
        if not self.is_available():
            return self._generate_fallback_mnemonic(
                bashkir_word, english_word, location
            )
        
        cache_key = f"{bashkir_word}_{location.id}"
        if cache_key in self.cache:
            return self.cache[cache_key]
        
        prompt = f"""Create vivid, memorable mnemonics for learning Bashkir vocabulary.

Word Information:
- Bashkir: {bashkir_word}
- English: {english_word}
- Pronunciation: {phonetic}
- Memory Location: {location.name} - {location.description}
- Cultural Context: {cultural_context}

Generate 4 different mnemonic techniques:

1. VISUAL SCENE: Create an absurd, vivid image combining the word meaning with the location
2. SOUND_ALIKE: Find English words that sound similar to the Bashkir word and create a story
3. ETYMOLOGY: Connect to word roots or similar words in other languages
4. EMOTIONAL: Create a multi-sensory memory (touch, smell, taste, emotion)

Return as JSON with keys: visual, sound_alike, etymology, emotional"""

        try:
            response = self.client.chat.completions.create(
                model="gpt-4-turbo-preview",
                messages=[
                    {"role": "system", "content": "You are a memory expert specializing in language learning mnemonics."},
                    {"role": "user", "content": prompt}
                ],
                response_format={"type": "json_object"},
                temperature=0.8,
                max_tokens=500
            )
            
            mnemonics = json.loads(response.choices[0].message.content)
            self.cache[cache_key] = mnemonics
            return mnemonics
            
        except Exception as e:
            logger.error(f"Mnemonic generation failed: {e}")
            return self._generate_fallback_mnemonic(bashkir_word, english_word, location)
    
    def _generate_fallback_mnemonic(self,
                                     bashkir_word: str,
                                     english_word: str,
                                     location: MemoryLocation) -> Dict[str, str]:
        """Generate simple mnemonics without AI"""
        return {
            "visual": f"Imagine a giant {english_word} at the {location.name}. {location.description}",
            "sound_alike": f"The word '{bashkir_word}' sounds like... (try to find a similar English word)",
            "etymology": f"Research the etymology of {bashkir_word}",
            "emotional": f"Think about how {english_word} makes you feel at {location.name}"
        }
    
    def generate_story_chain(self, items: list) -> str:
        """Generate a story connecting multiple words"""
        
        if not self.is_available():
            return self._generate_fallback_story(items)
        
        words_info = "\n".join([
            f"- {item.bashkir_word} ({item.english_translation})"
            for item in items[:10]
        ])
        
        prompt = f"""Create a memorable SHORT STORY (max 200 words) connecting these Bashkir words:

{words_info}

The story should be bizarre, emotionally engaging, and culturally relevant to Bashkir culture."""

        try:
            response = self.client.chat.completions.create(
                model="gpt-4-turbo-preview",
                messages=[
                    {"role": "system", "content": "You are a creative writer specializing in mnemonic stories."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.9,
                max_tokens=400
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            logger.error(f"Story generation failed: {e}")
            return self._generate_fallback_story(items)
    
    def _generate_fallback_story(self, items: list) -> str:
        """Generate simple story without AI"""
        words = [f"{item.bashkir_word} ({item.english_translation})" for item in items[:5]]
        return f"Create a story using these words: {', '.join(words)}"