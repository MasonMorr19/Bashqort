# Bashkir Language and Culture Learning App

An innovative language learning app combining Memory Palace techniques, the Method of Loci, and the Major Memory System to learn Bashkir language and culture.

## Features

- 🎙️ **Audio Processing**: Transcribe and translate Bashkir audio using Whisper AI
- 🏛️ **Memory Palace**: Organize vocabulary using the Method of Loci
- 🧠 **Major Memory System**: Convert words to memorable numeric codes
- 📅 **Spaced Repetition**: SM-2 algorithm for optimal review timing
- 🎮 **Gamification**: Achievements, challenges, and progression system
- 🤖 **AI Mnemonics**: Generate creative memory aids with GPT-4
- 📊 **Visual Palace Map**: Interactive 2D visualization of your palace
- 🌍 **Cultural Context**: Learn about Bashkir culture alongside language
- 📚 **Comprehensive Content**: Rich cultural narratives and historical context

## Installation

### Prerequisites

- Python 3.8 or higher
- FFmpeg (for audio processing)

### Setup

1. Clone or download this repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env to add your OpenAI API key if needed
   ```

### Running the Application

```bash
python app.py
```

## About Bashkir Culture

The app includes rich cultural content about the Bashkir people, including:

- Traditional customs and beliefs
- Historical figures like Salawat Yulaev
- The epic of Ural-Batyr
- Traditional music and instruments (like the Kuralay)
- The importance of beekeeping (bortnichestvo)
- The significance of the Ural Mountains region

## How It Works

The app uses the Memory Palace technique to help learners remember Bashkir vocabulary and cultural concepts by associating them with visual locations in a traditional Bashkir village. Each location contains words and phrases along with their cultural context.

The system implements:
- Spaced repetition for effective memorization
- Cultural storytelling to make learning meaningful
- Interactive exploration of the memory palace
- Progress tracking and gamification elements
