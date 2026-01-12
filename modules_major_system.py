"""
Major Memory System for converting words to numbers
"""

from typing import Dict, List


class MajorSystemEncoder:
    """Convert words to numbers using the Major System"""
    
    # Major System mapping: digit → consonant sounds
    MAJOR_SYSTEM = {
        '0': ['s', 'z', 'soft-c'],
        '1': ['t', 'd', 'th'],
        '2': ['n'],
        '3': ['m'],
        '4': ['r'],
        '5': ['l'],
        '6': ['j', 'sh', 'ch', 'soft-g'],
        '7': ['k', 'hard-c', 'hard-g', 'q', 'ck'],
        '8': ['f', 'v', 'ph'],
        '9': ['p', 'b']
    }
    
    # Reverse mapping for encoding
    _REVERSE_MAP = None
    
    @classmethod
    def _get_reverse_map(cls) -> Dict[str, str]:
        """Create reverse mapping: consonant → digit"""
        if cls._REVERSE_MAP is None:
            cls._REVERSE_MAP = {}
            for digit, consonants in cls.MAJOR_SYSTEM.items():
                for consonant in consonants:
                    if '-' not in consonant:  # Skip compound descriptions
                        cls._REVERSE_MAP[consonant] = digit
        return cls._REVERSE_MAP
    
    @classmethod
    def word_to_number(cls, word: str) -> str:
        """
        Convert word consonants to numbers using Major System
        
        Args:
            word: Input word
        
        Returns:
            String of digits
        """
        reverse_map = cls._get_reverse_map()
        result = []
        word = word.lower()
        
        i = 0
        while i < len(word):
            # Check for two-character combinations
            if i < len(word) - 1:
                two_char = word[i:i+2]
                if two_char in ['sh', 'ch', 'th', 'ph', 'ck']:
                    if two_char in reverse_map:
                        result.append(reverse_map[two_char])
                        i += 2
                        continue
            
            # Single character
            char = word[i]
            if char in reverse_map:
                result.append(reverse_map[char])
            i += 1
        
        return ''.join(result) if result else '0'
    
    @classmethod
    def number_to_word(cls, number: str, vowels: str = "aeiou") -> str:
        """
        Convert number to a word using Major System (for peg words)
        
        Args:
            number: String of digits
            vowels: Vowels to insert between consonants
        
        Returns:
            Mnemonic word
        """
        if not number:
            return ""
        
        consonants = []
        for digit in number:
            if digit in cls.MAJOR_SYSTEM:
                # Take first consonant option
                consonants.append(cls.MAJOR_SYSTEM[digit][0])
        
        # Insert vowels between consonants
        word = ""
        vowel_cycle = 0
        for i, consonant in enumerate(consonants):
            word += consonant
            if i < len(consonants) - 1:
                word += vowels[vowel_cycle % len(vowels)]
                vowel_cycle += 1
        
        return word
    
    @classmethod
    def create_mnemonic_code(cls, bashkir_word: str, english_word: str) -> str:
        """
        Create a memorable numeric code from both words
        
        Args:
            bashkir_word: Word in Bashkir
            english_word: Word in English
        
        Returns:
            Numeric code (e.g., "52-914")
        """
        bash_code = cls.word_to_number(bashkir_word)
        eng_code = cls.word_to_number(english_word)
        
        return f"{bash_code}-{eng_code}"
    
    @classmethod
    def get_peg_word(cls, number: int) -> str:
        """
        Get peg word for a number (0-99)
        This is a simplified version - you can expand with a full peg list
        
        Args:
            number: Number (0-99)
        
        Returns:
            Peg word
        """
        # Basic peg words for 0-20
        basic_pegs = {
            0: "sea", 1: "tie", 2: "Noah", 3: "ma", 4: "rye",
            5: "law", 6: "shoe", 7: "cow", 8: "ivy", 9: "bee",
            10: "toes", 11: "tot", 12: "tin", 13: "tomb", 14: "tire",
            15: "towel", 16: "dish", 17: "tack", 18: "dove", 19: "tub",
            20: "nose"
        }
        
        if number in basic_pegs:
            return basic_pegs[number]
        else:
            # Generate programmatically
            return cls.number_to_word(str(number))