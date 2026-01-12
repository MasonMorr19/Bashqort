"""
Audio processing module for Bashkir language
Handles transcription and translation
"""

import whisper
import torch
from deep_translator import GoogleTranslator
from pathlib import Path
from typing import Dict, Optional
import logging

from config import WHISPER_MODEL, WHISPER_DEVICE, DEFAULT_SOURCE_LANG, DEFAULT_TARGET_LANG

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class BashkirAudioProcessor:
    """Process Bashkir audio files: transcription and translation"""
    
    def __init__(self, model_size: str = WHISPER_MODEL, device: str = WHISPER_DEVICE):
        """
        Initialize audio processor
        
        Args:
            model_size: Whisper model size (tiny, base, small, medium, large, large-v3)
            device: Device to use (cuda, cpu)
        """
        logger.info(f"Loading Whisper model: {model_size} on {device}")
        
        try:
            self.model = whisper.load_model(model_size, device=device)
            self.device = device
            logger.info("Whisper model loaded successfully")
        except Exception as e:
            logger.error(f"Failed to load Whisper model: {e}")
            # Fallback to smaller model
            logger.info("Falling back to base model")
            self.model = whisper.load_model("base", device="cpu")
            self.device = "cpu"
        
        self.translator = GoogleTranslator(source='auto', target=DEFAULT_TARGET_LANG)
    
    def transcribe_bashkir(self, audio_path: str, language: str = DEFAULT_SOURCE_LANG) -> Dict:
        """
        Transcribe Bashkir audio to text
        
        Args:
            audio_path: Path to audio file
            language: Language code (default: ba for Bashkir)
        
        Returns:
            Dictionary with transcription results
        """
        logger.info(f"Transcribing audio: {audio_path}")
        
        try:
            result = self.model.transcribe(
                audio_path,
                language=language,
                task='transcribe',
                fp16=(self.device == 'cuda'),
                verbose=False
            )
            
            logger.info(f"Transcription complete: {len(result['text'])} characters")
            return result
            
        except Exception as e:
            logger.error(f"Transcription failed: {e}")
            return {'text': '', 'segments': [], 'language': language}
    
    def translate_to_english(self, bashkir_text: str) -> str:
        """
        Translate Bashkir text to English
        
        Args:
            bashkir_text: Text in Bashkir
        
        Returns:
            Translated English text
        """
        if not bashkir_text.strip():
            return ""
        
        try:
            # Split long texts into chunks (Google Translator limit: ~5000 chars)
            max_chunk_size = 4500
            chunks = [
                bashkir_text[i:i+max_chunk_size] 
                for i in range(0, len(bashkir_text), max_chunk_size)
            ]
            
            translations = []
            for chunk in chunks:
                translation = self.translator.translate(chunk)
                translations.append(translation)
            
            return ' '.join(translations)
            
        except Exception as e:
            logger.error(f"Translation failed: {e}")
            return f"[Translation error: {str(e)}]"
    
    def extract_words(self, text: str, min_length: int = 2) -> list:
        """
        Extract individual words from text
        
        Args:
            text: Input text
            min_length: Minimum word length
        
        Returns:
            List of words
        """
        import re
        
        # Remove punctuation and split
        words = re.findall(r'\b\w+\b', text.lower())
        
        # Filter by length
        words = [w for w in words if len(w) >= min_length]
        
        return words
    
    def process_audio(self, audio_path: str) -> Dict:
        """
        Complete pipeline: Audio → Bashkir text → English translation
        
        Args:
            audio_path: Path to audio file
        
        Returns:
            Dictionary with processing results
        """
        logger.info(f"Processing audio: {audio_path}")
        
        # Transcribe
        transcription_result = self.transcribe_bashkir(audio_path)
        bashkir_text = transcription_result['text']
        
        # Translate
        english_text = self.translate_to_english(bashkir_text)
        
        # Extract words
        bashkir_words = self.extract_words(bashkir_text)
        english_words = self.extract_words(english_text)
        
        result = {
            'bashkir': bashkir_text,
            'english': english_text,
            'bashkir_words': bashkir_words,
            'english_words': english_words,
            'segments': transcription_result.get('segments', []),
            'language': transcription_result.get('language', DEFAULT_SOURCE_LANG),
            'audio_path': audio_path
        }
        
        logger.info(f"Processing complete: {len(bashkir_words)} Bashkir words extracted")
        return result
    
    def get_phonetic_transcription(self, bashkir_word: str) -> str:
        """
        Get phonetic transcription of Bashkir word
        This is a simplified version - in production, use a proper phonetic library
        
        Args:
            bashkir_word: Bashkir word
        
        Returns:
            Phonetic transcription
        """
        # Basic Bashkir to IPA mapping (simplified)
        phonetic_map = {
            'ә': 'æ',
            'ө': 'ø',
            'ү': 'y',
            'ҡ': 'q',
            'ғ': 'ɣ',
            'ҙ': 'ð',
            'ҫ': 'θ',
            'һ': 'h',
            'ң': 'ŋ',
        }
        
        phonetic = bashkir_word.lower()
        for bashkir_char, ipa_char in phonetic_map.items():
            phonetic = phonetic.replace(bashkir_char, ipa_char)
        
        return phonetic