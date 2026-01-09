# Bashkir Memory Palace - Complete Source Code

## React Component Code

A companion to the Ibn Arabi Memory Palace, this interactive app teaches the essential elements of Bashkir culture, history, and identity using the same powerful mnemonic techniques.

---

### Installation Instructions

#### Option 1: Use with Create React App

```bash
# Create a new React app
npx create-react-app bashkir-memory-palace
cd bashkir-memory-palace

# Copy the component code below into src/App.js
# Replace everything in src/App.js with the code below

# Install required dependencies
npm install lucide-react

# Run the app
npm start
```

#### Option 2: Use with Next.js

```bash
# Create a new Next.js app
npx create-next-app@latest bashkir-memory-palace
cd bashkir-memory-palace

# Install dependencies
npm install lucide-react

# Copy the component code to app/page.tsx
npm run dev
```

#### Option 3: Use in Claude.ai Artifacts

The code is ready to run in Claude Artifacts - just paste and go!

---

### Complete Component Code

```jsx
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Book, Mountain, Wind, Flame, Eye, Crown, Star, Heart, TreePine, Bird } from 'lucide-react';

const BashkirMemoryPalace = () => {
  const [currentStation, setCurrentStation] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [completedStations, setCompletedStations] = useState(new Set());

  const stations = [
    {
      number: 0,
      peg: "HERO",
      title: "The Ural Gate: Land of the Bashkirs",
      location: "Standing at the summit of the Ural Mountains, where Europe meets Asia",
      image: "🏔️",
      story: "You stand on a MOUNTAIN PEAK where the wind carries the scent of wild honey. A GREAT WOLF (kuk bure - the grey wolf) appears with GLOWING BLUE EYES. Behind him, endless STEPPES stretch to the horizon. He speaks: 'I am Bashqort - the HEAD WOLF, the leader of the pack.' His fur becomes a MAP showing the land between the Urals and the Volga. He howls and the sound becomes the word 'BASHKORTOSTAN' echoing through the valleys. On his forehead glows the date: 1919 - the year the Bashkir Republic was born.",
      teaching: "Bashkortostan: Land of the Bashkirs, where the Ural Mountains divide continents",
      keyPoints: [
        "Bashqort = 'head wolf' or 'main wolf' (bash = head, qort = wolf)",
        "Located in the Southern Urals, between Volga and Ural rivers",
        "1919: Formation of Bashkir Autonomous Republic (first in Russia)",
        "1990: Declaration of State Sovereignty",
        "Capital: Ufa (founded 1574)"
      ],
      technique: "The HERO method: You ARE the wolf at the gateway. Feel the wind, smell the honey, see the endless land."
    },
    {
      number: 1,
      peg: "TIE/TEA",
      title: "The Sacred Beehive: Bal (Honey)",
      location: "An ancient hollow tree filled with wild bees and golden honey",
      image: "🐝🍯",
      story: "You descend from the peak to a massive HOLLOW TREE buzzing with MILLIONS OF BEES. A Bashkir bortnik (beekeeper) is climbing with a ROPE TIED around his waist (TIE = 1). He offers you TEA sweetened with LIQUID GOLD honey. 'We invented bortnichestvo - wild beekeeping!' he says. The bees form patterns spelling 'BASHKORT BAL' (Bashkir honey). Each bee carries a tiny CONSTITUTION, because like bees in a hive, the people work together under shared laws. The honey tastes of LIBERTY and UNITY.",
      teaching: "Bortnichestvo: The ancient Bashkir art of wild forest beekeeping - a UNESCO heritage",
      keyPoints: [
        "Bashkir honey is world-famous for its quality",
        "Bortnichestvo = wild beekeeping in forest tree hollows",
        "Inscribed on UNESCO Intangible Heritage list",
        "The bee is a symbol of industriousness and community",
        "Wild Bashkir bees are a protected species"
      ],
      technique: "Peg 1 = T/D sound. The ROPE is TIED. The bees work as ONE unified community."
    },
    {
      number: 2,
      peg: "NOAH",
      title: "The Two Languages: Bashkir & Russian",
      location: "A school where two rivers of words flow and merge",
      image: "📚🗣️",
      story: "You enter a grand SCHOOLHOUSE where NOAH stands at a chalkboard (NOAH = 2). But this Noah has TWO MOUTHS - one speaks BASHKIR (a Turkic tongue), the other speaks RUSSIAN. The words flow out like TWO RIVERS that run side by side. On one wall: Cyrillic script. On the other: the beautiful curves of Bashkir letters. Noah writes 'Həümalər' (Hello) and 'Рахмат' (Thank you). Children sit in PAIRED DESKS, learning both tongues. Noah declares: 'BOTH languages are STATE languages - neither is above the other!'",
      teaching: "Article 1: Bashkir and Russian are BOTH official state languages of the Republic",
      keyPoints: [
        "Bashkir language: Turkic language family (closest to Tatar)",
        "Both Bashkir and Russian are official state languages",
        "Constitution guarantees right to use native language",
        "Article 32: Freedom to choose and use native language",
        "Bashkir uses modified Cyrillic alphabet with extra letters"
      ],
      technique: "Peg 2 = N sound. NOAH with TWO mouths. Two languages, equal status, flowing together."
    },
    {
      number: 3,
      peg: "MA/ME",
      title: "The Triple Council: Three Powers",
      location: "A hall with three thrones arranged in a triangle",
      image: "⚖️",
      story: "You enter a TRIANGULAR HALL with THREE THRONES. On each sits a figure: MOTHER JUSTICE (Legislative), MIGHTY FATHER (Executive), and YOU as the JUDGE (ME = 3). Your MOTHER (MA = 3) holds the scales of the State Assembly - the KURULTAI. Your father wears the sash of the HEAD OF THE REPUBLIC. You realize: 'I AM the judicial power!' The three of you cannot sit on each other's thrones - invisible walls separate you. Article 5 glows on the floor: 'State power is exercised on the basis of SEPARATION.'",
      teaching: "Article 5: Separation of Powers - Legislative, Executive, and Judicial are INDEPENDENT",
      keyPoints: [
        "Legislative: State Assembly (Kurultai) - 110 deputies",
        "Executive: Head of the Republic + Government",
        "Judicial: Constitutional Court, Supreme Court, courts",
        "Each branch is independent (Article 5)",
        "Kurultai = traditional Turkic-Mongol assembly of elders"
      ],
      technique: "Peg 3 = M sound. MA + ME + PA = Mother, Self, Father = Three separate powers."
    },
    {
      number: 4,
      peg: "RYE/RAY",
      title: "The Four Sacred Animals: Bashkir Symbols",
      location: "A meadow where four legendary creatures gather",
      image: "🐴🐺🦅🐝",
      story: "You walk into a golden FIELD OF RYE (RYE = 4). FOUR creatures stand at the cardinal directions. NORTH: A magnificent HORSE (the Bashkir breed, sturdy and free). EAST: The grey WOLF (kuk bure, spirit of the ancestors). SOUTH: A golden EAGLE with SEVEN FEATHERS (the state emblem). WEST: The sacred BEE. Sunlight RAYS stream down like golden ropes connecting all four. They circle you and speak in unison: 'We are the SOUL of Bashkortostan - strength, wisdom, courage, and labor.'",
      teaching: "The Four Sacred Creatures of Bashkir culture and their symbolic meanings",
      keyPoints: [
        "HORSE: Freedom, endurance, the nomadic spirit",
        "WOLF (Kuk Bure): Ancestor spirit, strength, the people's origin",
        "EAGLE: State emblem, sovereignty, watchfulness",
        "BEE: Industry, community, the famous Bashkir honey"
      ],
      technique: "Peg 4 = R sound. RYE field + sun RAYS. Four animals at four directions: H-W-E-B (Horse, Wolf, Eagle, Bee)."
    },
    {
      number: 5,
      peg: "LAW/LEO",
      title: "The Five Freedoms: Rights of the People",
      location: "A courthouse with five great pillars, each inscribed with rights",
      image: "🏛️✋",
      story: "A LION (LEO = 5) guards a temple with FIVE PILLARS. On each pillar, a fundamental right is carved. The lion roars: 'These are the LAWS of liberty!' Pillar 1: LIFE (Article 22). Pillar 2: DIGNITY (Article 23). Pillar 3: LIBERTY (Article 24). Pillar 4: PRIVACY (Article 25). Pillar 5: PROPERTY (Article 38). You place your FIVE FINGERS on the pillars and feel power surge through you. The lion says: 'Human beings and their rights are the HIGHEST VALUE' (Article 2).",
      teaching: "Chapter 2 of the Constitution: Human and Citizen Rights, Freedoms, and Duties",
      keyPoints: [
        "Article 2: Human rights are the HIGHEST VALUE",
        "Article 22: Right to LIFE",
        "Article 23: DIGNITY is inviolable",
        "Article 24: Right to LIBERTY and personal inviolability",
        "Article 19: EQUALITY before the law regardless of origin, gender, nationality"
      ],
      technique: "Peg 5 = L sound. LION guards the LAW. Five fingers = five fundamental freedoms."
    },
    {
      number: 6,
      peg: "SHOE/SHAH",
      title: "The Six Directions: Multi-Ethnic Unity",
      location: "A great tent where many peoples gather from all directions",
      image: "🎪🤝",
      story: "You enter a massive YURT (the nomadic tent) where people from SIX directions have gathered. You remove your SHOES at the entrance (SHOE = 6). Inside, a wise SHAH sits on cushions. Around him: Bashkirs, Russians, Tatars, Chuvash, Mari, and Ukrainians - the major peoples of the Republic. The Shah holds up the Constitution: 'We, the MULTI-ETHNIC PEOPLE, united by a common destiny on our land...' The tent has no walls between peoples - they sit together around a common fire. Six flags become one banner.",
      teaching: "The Preamble: 'We, the multi-ethnic people of the Republic of Bashkortostan, united by a common destiny'",
      keyPoints: [
        "Multi-ethnic population: 160+ nationalities",
        "Bashkirs: ~29%, Russians: ~36%, Tatars: ~25%",
        "Constitution emphasizes UNITY in diversity",
        "Article 30: Freedom of religion guaranteed",
        "Tolerance and respect among all peoples (Article 30)"
      ],
      technique: "Peg 6 = SH sound. Remove your SHOES, bow to the SHAH. Six peoples, one yurt, one destiny."
    },
    {
      number: 7,
      peg: "COW/KEY",
      title: "The Seven Feathers: State Emblem",
      location: "Before the great seal of the Republic, where the eagle flies",
      image: "🦅⚔️",
      story: "A massive EAGLE descends, and you notice it has exactly SEVEN FEATHERS in each wing (COW sounds like 7, KEY unlocks meaning). The eagle carries a GOLDEN KEY in its talons. Behind it rises the SHULGAN-TASH mountain with its famous cave. On the eagle's breast: the image of SALAVAT YULAEV riding his horse! The eagle speaks: 'I am the STATE EMBLEM. My seven feathers represent the seven clans of the Bashkir people.' It drops the KEY - it opens the door to sovereignty.",
      teaching: "The State Emblem: A golden eagle bearing the image of Salavat Yulaev",
      keyPoints: [
        "State Emblem: Eagle with Salavat Yulaev monument image",
        "Salavat Yulaev (1754-1800): National hero, poet, rebel leader",
        "Seven traditional Bashkir clans (yürğanlar)",
        "Blue background = peace and openness",
        "National flower: kurai (feather grass)"
      ],
      technique: "Peg 7 = K sound. Seven feathers, golden KEY. The eagle unlocks sovereignty."
    },
    {
      number: 8,
      peg: "FEE/IVY",
      title: "The Eight-Note Kurai: Music of the Soul",
      location: "A meadow where the wind plays through hollow reeds",
      image: "🎵🌾",
      story: "In a meadow, wild grasses sway. A master musician cuts a KURAI (a Bashkir flute) from a hollow plant stem. IVY grows around the reed (IVY = 8). He plays EIGHT NOTES that float through the air like birds. The music tells the story of the EPIC OF URAL-BATYR - the hero who defeated death! You feel the melody wrap around you like vines. 'This is the sound of our SOUL,' the musician says. 'The kurai speaks what words cannot.' No FEE is charged - the music is free like the wind.",
      teaching: "The Kurai: Traditional Bashkir wind instrument, symbol of the national spirit",
      keyPoints: [
        "Kurai: Traditional flute made from hollow plant stem",
        "Produces unique overtone-rich sound",
        "Symbol of Bashkir musical heritage",
        "Ural-Batyr: Greatest Bashkir epic poem",
        "State anthem features kurai melody"
      ],
      technique: "Peg 8 = F/V sound. IVY wraps the reed. Eight notes, infinite soul."
    },
    {
      number: 9,
      peg: "BEE/PIE",
      title: "The Nine Lakes: Treasures of the Land",
      location: "A landscape of sacred lakes surrounded by forest",
      image: "💧🌲",
      story: "A GIANT BEE (BEE = 9) leads you to NINE sacred lakes scattered across the landscape. Each lake reflects a different treasure: MINERALS, FORESTS, OIL, WATER, FERTILE SOIL, WILDLIFE, HERBS, FISH, and PURE AIR. Article 9 echoes across the water: 'Land and other natural resources are used as the basis for the life of the multi-ethnic population.' The bee lands on a PIE made of nine ingredients from the land - the traditional Bashkir 'gubadiya' (sweet layered pie). 'This land PROVIDES,' the bee hums.",
      teaching: "Article 9: Land and natural resources belong to the people and must be preserved",
      keyPoints: [
        "Republic rich in: oil, gas, copper, gold, forests",
        "Article 9: Resources = basis for life of the people",
        "Article 10: State property is the wealth of the people",
        "Famous lakes: Kandry-Kul, Asly-Kul, Yaktykul",
        "Shulgan-Tash cave: UNESCO site with ancient paintings"
      ],
      technique: "Peg 9 = P/B sound. BEE leads to lakes. Nine treasures feed the PIE of prosperity."
    },
    {
      number: 10,
      peg: "TOES/DICE",
      title: "The Perfect Ten: Return to the Kurultai",
      location: "Back at the mountain summit, where all paths converge",
      image: "🏔️🔟",
      story: "You have traveled the whole land on your TEN TOES (TOES = 10) and now stand again at the Ural summit. The wolf is there, but now you see: HE HAS YOUR FACE. Roll the DICE of democracy - they always land on the people's will! All the stations converge: the bee, the two languages, the three powers, the four animals, the five freedoms, the six peoples, the seven feathers, the eight notes, the nine lakes. Article 3 thunders: 'The people exercise power DIRECTLY!' You ARE Bashkortostan. The journey through the land was a journey INTO yourself.",
      teaching: "Article 3: Popular Sovereignty - 'The highest direct expression of power is through referendums and free elections'",
      keyPoints: [
        "Article 3: People are the source of all power",
        "Direct democracy through referendums",
        "Free elections for representation",
        "Local self-government recognized (Article 7)",
        "The ten stations are aspects of ONE identity"
      ],
      technique: "Peg 10 = T+S sound. TEN TOES walked the land. Ten aspects, one people, one Bashkortostan."
    }
  ];

  const handleComplete = (stationNum) => {
    setCompletedStations(prev => new Set([...prev, stationNum]));
  };

  const currentData = stations[currentStation];
  const progress = ((completedStations.size) / stations.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-amber-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Mountain className="w-8 h-8 text-blue-700" />
              <h1 className="text-3xl font-bold text-gray-800">
                Bashkir Memory Palace
              </h1>
            </div>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            >
              <Book className="w-4 h-4" />
              {showNotes ? 'Hide' : 'Show'} Guide
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 text-center">
            {completedStations.size} of {stations.length} stations mastered
          </p>
        </div>

        {/* Memory Technique Guide */}
        {showNotes && (
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-6 mb-6 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Star className="w-6 h-6" />
              Journey Through Bashkortostan
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-blue-700 mb-2">🏔️ The Ural Mountain Palace</h3>
                <p className="mb-2">Your journey follows the landscape of Bashkortostan:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Start:</strong> Ural Mountain summit (the gateway)</li>
                  <li><strong>Descend:</strong> Through forests of wild beehives</li>
                  <li><strong>Visit:</strong> Schools, courts, yurts, sacred meadows</li>
                  <li><strong>Explore:</strong> Lakes, caves, and grasslands</li>
                  <li><strong>Return:</strong> Back to the summit, transformed</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-green-700 mb-2">🐺 Connecting Both Palaces</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Ibn Arabi's Garden:</strong> The inner journey of mystical knowledge</li>
                  <li><strong>Bashkir Mountains:</strong> The outer journey of cultural identity</li>
                  <li><strong>Both use:</strong> Major System pegs (0-10)</li>
                  <li><strong>Both teach:</strong> Unity in multiplicity</li>
                  <li><strong>Together:</strong> Spirit and Land become One</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-amber-700 mb-2">🎯 The Major System Pegs</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>0</strong> = HERO (the wolf at the gate)</li>
                  <li><strong>1</strong> = TIE (rope around the beekeeper)</li>
                  <li><strong>2</strong> = NOAH (two mouths, two languages)</li>
                  <li><strong>3</strong> = MA/ME (mother, father, self = three powers)</li>
                  <li><strong>4</strong> = RYE (field with four sacred animals)</li>
                  <li><strong>5</strong> = LEO/LAW (lion guarding five pillars)</li>
                  <li><strong>6</strong> = SHOE (remove at yurt entrance)</li>
                  <li><strong>7</strong> = KEY (eagle's key to sovereignty)</li>
                  <li><strong>8</strong> = IVY (wrapped around the kurai)</li>
                  <li><strong>9</strong> = BEE/PIE (lakes and land's bounty)</li>
                  <li><strong>10</strong> = TOES (walked the whole journey)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Main Station Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Station Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-4xl mb-2">{currentData.image}</div>
                <h2 className="text-3xl font-bold mb-1">
                  Station {currentData.number}: {currentData.peg}
                </h2>
                <p className="text-blue-100 text-lg">{currentData.title}</p>
              </div>
              {completedStations.has(currentData.number) && (
                <div className="bg-white text-green-600 rounded-full p-2">
                  <Star className="w-6 h-6 fill-current" />
                </div>
              )}
            </div>
            <p className="text-blue-50 italic flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {currentData.location}
            </p>
          </div>

          {/* Story Section */}
          <div className="p-6 bg-gradient-to-b from-blue-50 to-white">
            <div className="flex items-center gap-2 mb-3">
              <Book className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">The Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {currentData.story}
            </p>
          </div>

          {/* Teaching Section */}
          <div className="p-6 bg-green-50">
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">The Teaching</h3>
            </div>
            <p className="text-green-900 font-semibold text-lg mb-4">
              {currentData.teaching}
            </p>
            <ul className="space-y-2">
              {currentData.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technique Section */}
          <div className="p-6 bg-amber-50 border-t-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold text-gray-800">Memory Technique</h3>
            </div>
            <p className="text-amber-900 font-mono bg-white p-3 rounded border-l-4 border-amber-500">
              {currentData.technique}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 gap-4">
          <button
            onClick={() => setCurrentStation(Math.max(0, currentStation - 1))}
            disabled={currentStation === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleComplete(currentData.number)}
              disabled={completedStations.has(currentData.number)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              {completedStations.has(currentData.number) ? '✓ Mastered' : 'Mark as Mastered'}
            </button>
          </div>

          <button
            onClick={() => setCurrentStation(Math.min(stations.length - 1, currentStation + 1))}
            disabled={currentStation === stations.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-gray-800 mb-4">Quick Station Access</h3>
          <div className="grid grid-cols-5 gap-3">
            {stations.map((station, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStation(idx)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  currentStation === idx
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : completedStations.has(idx)
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="text-2xl mb-1">{station.image}</div>
                <div className="text-xs font-semibold text-gray-700">{station.number}</div>
                <div className="text-xs text-gray-600">{station.peg}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Cultural Connection Footer */}
        <div className="mt-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg p-6 border-2 border-blue-200">
          <h3 className="font-bold text-blue-800 text-xl mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Twin Palaces: Spirit & Land
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">🌹</div>
              <div className="font-bold text-rose-700">Ibn Arabi's Garden</div>
              <div className="text-sm text-gray-600">The Andalusian mystical journey inward - from the Gate to Unity</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl mb-2">🏔️</div>
              <div className="font-bold text-blue-700">Bashkir Mountains</div>
              <div className="text-sm text-gray-600">The Ural cultural journey outward - from Summit to Sovereignty</div>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-4 italic">
            "The journey I made was inside myself" — Ibn Arabi<br/>
            "We, the multi-ethnic people, united by a common destiny" — Bashkir Constitution
          </p>
        </div>
      </div>
    </div>
  );
};

export default BashkirMemoryPalace;
```

---

### Dependencies Required

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "lucide-react": "^0.263.1"
  }
}
```

---

### The Journey Stations Summary

| # | Peg | Station | Theme |
|---|-----|---------|-------|
| 0 | HERO | Ural Gate | Land of the Bashkirs, the Wolf |
| 1 | TIE | Sacred Beehive | Bortnichestvo, wild beekeeping |
| 2 | NOAH | Two Languages | Bashkir & Russian as state languages |
| 3 | MA/ME | Triple Council | Separation of three powers |
| 4 | RYE | Four Animals | Horse, Wolf, Eagle, Bee |
| 5 | LAW | Five Freedoms | Constitutional rights |
| 6 | SHOE | Six Directions | Multi-ethnic unity |
| 7 | KEY | Seven Feathers | State emblem, Salavat Yulaev |
| 8 | IVY | Eight-Note Kurai | Traditional music |
| 9 | BEE | Nine Lakes | Natural resources |
| 10 | TOES | Return to Kurultai | Popular sovereignty |

---

### Cultural Notes

**Bashkir Vocabulary Used:**
- **Bashqort** (باشقورت) - Bashkir (people/language)
- **Kuk Bure** - Grey Wolf (ancestral spirit)
- **Kurultai** - Traditional assembly/parliament
- **Bortnichestvo** - Wild forest beekeeping
- **Kurai** - Traditional wind instrument
- **Ural-Batyr** - Greatest Bashkir epic hero
- **Salavat Yulaev** - National hero (1754-1800)
- **Həümalər** - Hello in Bashkir
- **Рахмат** - Thank you in Bashkir

---

*"Two palaces, one truth: The inner garden of the mystic and the outer mountains of the homeland both lead to the same realization - you are what you seek."*
