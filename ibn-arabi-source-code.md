# Ibn Arabi Memory Palace - Complete Source Code

## React Component Code

This is the complete, ready-to-use React component for the Ibn Arabi Memory Palace interactive app.

---

### Installation Instructions

#### Option 1: Use with Create React App

```bash
# Create a new React app
npx create-react-app ibn-arabi-memory-palace
cd ibn-arabi-memory-palace

# Copy the component code below into src/App.js
# Replace everything in src/App.js with the code below

# Install required dependencies (already included in Create React App)
# lucide-react is used for icons
npm install lucide-react

# Run the app
npm start
```

#### Option 2: Use with Next.js

```bash
# Create a new Next.js app
npx create-next-app@latest ibn-arabi-memory-palace
cd ibn-arabi-memory-palace

# Install dependencies
npm install lucide-react

# Copy the component code to app/page.tsx (remove "use client" directive if needed)
# Or create components/MemoryPalace.tsx and import it

# Run the app
npm run dev
```

#### Option 3: Use in Claude.ai Artifacts (Already Working!)

The code is already running in the artifact above. You can:
- Interact with it directly
- Copy the code below for your own use
- Modify and enhance it as needed

---

### Complete Component Code

```jsx
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Book, TreePine, Bird, Heart, Sun, Moon, Star, Flame, Eye, Crown } from 'lucide-react';

const MemoryPalaceSystem = () => {
  const [currentStation, setCurrentStation] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [completedStations, setCompletedStations] = useState(new Set());

  const stations = [
    {
      number: 0,
      peg: "HERO",
      title: "The Garden Gate: Sheikh al-Akbar",
      location: "Standing at the entrance to a magnificent Andalusian garden",
      image: "🌟",
      story: "You see an elderly man with a GLOWING CROWN (representing 'al-Akbar' - The Greatest). He's holding THREE BOOKS that are BREATHING (Futuhat, Fusus, Tarjuman). Water flows from his MOUTH forming Arabic letters that spell 'Muhyiddin' (Revivifier). He points to himself and says 'I AM IN LOVE WITH NO OTHER THAN MYSELF' - his body splits into MIRROR IMAGES infinitely.",
      teaching: "Sheikh al-Akbar (1165-1240): The Greatest Master who unified all mystical knowledge",
      keyPoints: [
        "Born in Murcia, Spain (Andalusia)",
        "~300 works written",
        "Seal of Muhammadan Sainthood",
        "Settled finally in Damascus"
      ],
      technique: "The HERO method: H=Hear the name, E=Establish location, R=Relate to yourself, O=Organize the journey"
    },
    {
      number: 1,
      peg: "TIE/TEA",
      title: "The First Fountain: Ittihad (Unification)",
      location: "A fountain where water becomes light becomes water",
      image: "💧✨",
      story: "You dip your hands in the fountain and they become TRANSPARENT LIGHT. Your fingers start TYING KNOTS in the water itself (TIE = 1). But the knots DON'T SEPARATE the water - they just make PATTERNS IN THE LIGHT. A voice says: 'TWO ESSENCES CANNOT TRULY MERGE, but ATTRIBUTES can INTERPENETRATE like DYE in CLOTH.' You watch as RED DYE spreads through WHITE FABRIC but neither disappears.",
      teaching: "Ittihad: Not fusion of essences but interpenetration of attributes through love",
      keyPoints: [
        "Union = attributes mixing, not essences merging",
        "Like light cohering with light",
        "Like dye penetrating cloth",
        "Servant becomes God's hearing, seeing, speaking",
        "Station of Abraham's Khulla (Intimate Friendship)"
      ],
      technique: "Peg 1 = T/D sound. TIE physically connects things without making them one thing."
    },
    {
      number: 2,
      peg: "NOAH",
      title: "The Two Seas: The Barzakh",
      location: "Standing between two vast seas that don't mix",
      image: "🌊🌊",
      story: "You're standing on an INVISIBLE BARRIER between a SEA OF LIGHT (right) and a SEA OF DARKNESS (left). NOAH'S ARK is STUCK on this barrier - half in light, half in darkness (NOAH = 2). The prophet KHALID ibn SINAN emerges from underground, covered in COAL DUST and carrying a GLOWING STAFF. He strikes a ROCK (SAKHR) and TWELVE STREAMS flow out - six toward each sea. He says: 'I am NEITHER ALIVE NOR DEAD, but I know BOTH worlds.'",
      teaching: "Barzakh: The isthmus between opposites - neither one nor the other, but containing both",
      keyPoints: [
        "Separates and connects simultaneously",
        "Between Being and nothingness is existence",
        "Between life and death is the grave",
        "Between spiritual and material is imagination",
        "Khalid = Prophet of the Barzakh",
        "Perfect Human Being = Supreme Barzakh"
      ],
      technique: "Peg 2 = N sound. NOAH between waters. Everything is a barzakh between two states."
    },
    {
      number: 3,
      peg: "MA/ME",
      title: "The Triple Mirror: The Self Knowing Itself",
      location: "A chamber with three mirrors forming a triangle",
      image: "🪞🪞🪞",
      story: "You walk into a triangular room where THREE MIRRORS face each other, creating INFINITE REFLECTIONS. In the center, you see YOURSELF but you're simultaneously the VIEWER, the VIEWED, and the ACT OF VIEWING (MA = 3 = ME, the self). Your reflection SPEAKS: 'I fled from myself TO myself THROUGH myself.' Suddenly all the reflections COLLAPSE into ONE IMAGE and you understand: 'MY MOTHER GAVE BIRTH TO HER FATHER' (al-Hallaj's paradox). The ANQA bird appears - it has a NAME on its chest but NO BODY underneath.",
      teaching: "The Self contemplating the Self through infinite forms - God knowing Himself through creation",
      keyPoints: [
        "Subject, Object, and Act of knowing are One",
        "Creation is God's self-contemplation",
        "The seeker, sought, and seeking are identical",
        "Paradox of Anqa: has name but no body",
        "Reality of Realities embraces existence and non-existence"
      ],
      technique: "Peg 3 = M sound. ME/MIRRORS = triadic structure of consciousness"
    },
    {
      number: 4,
      peg: "RYE/RAY",
      title: "The Four Birds: The Cosmic Hierarchy",
      location: "The Universal Tree in the center of the garden",
      image: "🌳🦅🕊️🔥🐦‍⬛",
      story: "An ENORMOUS TREE with FOUR DISTINCT BRANCHES. On each sits a bird made of PURE LIGHT-RAY (RYE = 4). The GOLDEN EAGLE (top) has a GLOWING PEN for a beak, writing in the air. The SILVER RINGDOVE wears a WEDDING RING around her neck and coos 'DOUBLE, DOUBLE.' The STRANGE ANQA is INVISIBLE except for her NAME flickering in fire. The JET-BLACK CROW is so dark he's a HOLE in space, but STARS shine from inside him. They sing together: 'We are FATHER (Eagle), MOTHER (Dove), DAUGHTER (Anqa), and SON (Crow).'",
      teaching: "The Four Cosmic Principles: Intellect → Soul → Prime Matter → Body",
      keyPoints: [
        "EAGLE = First Intellect/Pen (masculine, active, light)",
        "RINGDOVE = Universal Soul/Tablet (feminine, receptive)",
        "ANQA = Prime Matter/Dust (potentiality, neither-nor)",
        "CROW = Universal Body (manifestation, darkness containing lights)",
        "Genealogy: God → Eagle → (Eagle+Dove) → Anqa → Crow"
      ],
      technique: "Peg 4 = R sound. Four birds on four branches (RYE field has ROWS). Remember: E-R-A-C = Eagle-Ringdove-Anqa-Crow"
    },
    {
      number: 5,
      peg: "LAW/LEO",
      title: "The Five Senses: The Lover's Annoyance",
      location: "A pavilion with five pillars, each a sense organ",
      image: "👁️👂👃👄🖐️",
      story: "Five MASSIVE PILLARS shaped like EYE, EAR, NOSE, MOUTH, HAND. A LION (LEO = 5) paces between them, ROARING in frustration. 'I want to touch my BELOVED but my HAND is the veil! I want to see Her but my EYE blocks the view! I AM the barrier between me and ME!' The pillars begin to GLOW and the lion DISSOLVES INTO LIGHT. A voice: 'When you realize your senses are GOD'S SENSES, the veil becomes the vision.' The lion re-forms but now it's TRANSPARENT.",
      teaching: "The paradox of nearness: Nothing separates you from God except your self, which you cannot remove",
      keyPoints: [
        "The only veil between lover and Beloved is creation itself",
        "You cannot remove yourself from yourself",
        "Hadith: 'I am his hearing, sight, hands, feet'",
        "The annoyed lover doesn't understand this",
        "The knower of God accepts the paradox",
        "Supererogatory acts make your faculties His faculties"
      ],
      technique: "Peg 5 = L sound. LION/LAW of senses. Five senses are five veils that are also five revelations."
    },
    {
      number: 6,
      peg: "SHOE/SHAH",
      title: "The Six Directions: Khalwa and Jalwa",
      location: "A perfect cube with six faces",
      image: "🔲",
      story: "You're inside a GIANT CUBE. On each of the SIX FACES is a DOOR. Above (heaven), Below (earth), Front (future), Back (past), Right (exterior), Left (interior). You're wearing SHOES (SHOE = 6) that let you walk on ANY surface. First you RETREAT into the INTERIOR door (khalwa/seclusion) - it leads to a DARK CAVE where you practice ALONE. Then you put on the OTHER SHOE and walk through the EXTERIOR door (jalwa/society) - suddenly you're in a MARKETPLACE full of people. The SHAH (king) appears and says: 'Muhammad PERFECTED both - he withdrew to the cave, ascended to heaven, and RETURNED to teach. Khalid only knew khalwa and got STUCK in the tomb.'",
      teaching: "The perfect path requires both seclusion (khalwa) and return to society (jalwa)",
      keyPoints: [
        "Khalwa = spiritual seclusion, retreat",
        "Jalwa = manifestation in the world, teaching",
        "Muhammad: cave → ascent → return (PERFECT)",
        "Khalid: cave → arrival → stuck (INCOMPLETE)",
        "Perfection = return to creatures with knowledge",
        "Six directions = total encompassment of space"
      ],
      technique: "Peg 6 = SH/J sound. SHOES for walking between worlds. Six directions = complete orientation."
    },
    {
      number: 7,
      peg: "COW/KEY",
      title: "The Seven Prophets: Guardians of the Heavens",
      location: "A spiral staircase with seven landings",
      image: "🌙☿♀☉♂♃♄",
      story: "You climb a SPIRAL STAIRCASE. At each landing, a prophet holds a GLOWING KEY. A COW (COW = 7) climbs with you - it represents BODY/EARTH. Moon-ADAM gives you the KEY OF FLESH. Mercury-JESUS gives you DIVERSE SCIENCES. Venus-JOSEPH gives you BEAUTY'S MIRROR. Sun-IDRIS ASCENDS before you. Mars-AARON gives you WISDOM-STAFF. Jupiter-MOSES speaks FACE TO FACE with flames. Saturn-ABRAHAM at the top gives you his HEART - but SURPRISE! When you reach the bottom, ABRAHAM is there AGAIN with the SAME HEART, saying: 'The highest and lowest are ONE in the Perfect Human.'",
      teaching: "The Seven Heavens and their prophetic guardians - spiritual stations of ascent",
      keyPoints: [
        "1-Moon-Adam: Body, physical foundation",
        "2-Mercury-Jesus: Diverse sciences, spiritual knowledge",
        "3-Venus-Joseph: Form, beauty, divine attraction",
        "4-Sun-Idris: Elevation, ascension itself",
        "5-Mars-Aaron: Vicegerency, wisdom of governance",
        "6-Jupiter-Moses: Direct conversation with God",
        "7-Saturn-Abraham: Intimacy (khulla), the heart",
        "Abraham appears at top AND bottom = Perfect Human unites all"
      ],
      technique: "Peg 7 = K/G sound. KEY opens each heaven. Seven = completion. Memorize: Moon-Mercury-Venus-Sun-Mars-Jupiter-Saturn"
    },
    {
      number: 8,
      peg: "FEE/IVY",
      title: "The Eight Qualities: The Heart's Infinite Forms",
      location: "An octagonal garden with eight gates",
      image: "❤️🕌⛪🕍🛕",
      story: "An OCTAGONAL GARDEN where IVY (IVY = 8) grows into EIGHT different structures: a MOSQUE, a CHURCH, a SYNAGOGUE, a HINDU TEMPLE, a BUDDHIST SHRINE, a FIRE TEMPLE, a GROVE OF TREES, and a PHILOSOPHER'S ACADEMY. In the center is a GIANT HEART that TRANSFORMS into each structure. The heart recites: 'My heart has become capable of EVERY FORM.' As you watch, the heart becomes PRIME MATTER (hyle) - formless potential that can receive ALL FORMS. Eight BELLS ring, and with each ring the heart takes a new shape. The IVY connects all eight structures, showing they're ONE GARDEN.",
      teaching: "The heart as hyle - capable of receiving all forms of belief and manifestation",
      keyPoints: [
        "Heart embraces all religions and forms",
        "Not relativism - each form is a valid divine self-disclosure",
        "Perfect Human = receptacle for all Divine Names",
        "Like prime matter receiving all forms",
        "Famous verse: 'pasture for gazelles, convent for monks, temple for idols, Ka'ba, Torah, Quran'",
        "Eight = infinity symbol on its side (∞)",
        "Doctrinal essentialism: all religions have truth at core"
      ],
      technique: "Peg 8 = F/V sound. IVY connects all. Eight directions = all-encompassing receptivity."
    },
    {
      number: 9,
      peg: "BEE/PIE",
      title: "The Nine Circles: Cosmic Emanation",
      location: "Nine concentric circles rippling outward",
      image: "⭕⭕⭕",
      story: "You're at the center of NINE CONCENTRIC CIRCLES rippling outward like water. A GIANT BEE (BEE = 9) flies in a spiral from center to edge, leaving HONEY at each circle. The bee explains: 'From the ONE center, NINE levels emerge.' At center: THE ESSENCE (unknowable). Circle 1: NAMES AND ATTRIBUTES. Circle 2: THE BREATH. Circle 3: THE CLOUD. Circle 4: INTELLECT (Eagle appears). Circle 5: SOUL (Dove appears). Circle 6: PRIME MATTER (Anqa appears). Circle 7: BODY (Crow appears). Circle 8: CELESTIAL SPHERES. Circle 9: ELEMENTAL WORLD where you stand. You taste the HONEY at each level - each has a different flavor but it's all from ONE BEE.",
      teaching: "The nine levels of existence from Divine Essence to material world",
      keyPoints: [
        "Essence → Names → Breath → Cloud → Intellect → Soul → Matter → Body → Spheres → Elements",
        "Not linear descent but eternal emanation",
        "All levels exist NOW simultaneously",
        "Higher levels 'contain' lower ones",
        "Like light becoming colors in a prism",
        "Nine = completion before return to One (10)",
        "Each level is a theophany (tajalli) - divine self-disclosure"
      ],
      technique: "Peg 9 = P/B sound. BEE from center to circumference. Nine circles = complete cosmic structure."
    },
    {
      number: 10,
      peg: "TOES/DICE",
      title: "The Perfect Ten: Return to Unity",
      location: "Back at the Garden Gate, but transformed",
      image: "🔟➡️1️⃣",
      story: "You've walked through the garden and arrived back at the GATE. Your TEN TOES (TOES = 10) have touched every path. You roll DICE and they always show TEN. But then the numbers SEPARATE: 1 and 0. The ZERO disappears and only ONE remains. Sheikh al-Akbar is still there but now you SEE: his face is YOUR FACE is EVERY FACE. The gate was never locked. You were never outside. The TREE speaks: 'You never left your SELF. The journey was INSIDE you, toward YOURSELF.' All FOUR BIRDS land on your shoulders: the knowledge (Eagle), love (Dove), potential (Anqa), and manifestation (Crow) were YOUR faculties all along. The ten becomes ONE.",
      teaching: "The return: Multiplicity was always Unity appearing in diverse forms",
      keyPoints: [
        "The spiritual journey ends where it began - in the Self",
        "10 = 1 + 0 = the One manifesting through the Zero of possibility",
        "Perfect Human = ten fingers, ten toes = complete",
        "Ibn Arabi: 'The journey I made was inside myself'",
        "The Tree, Birds, and Garden were aspects of your own consciousness",
        "Realization: 'I am the Beloved and the lover, my separation is my union'",
        "Ten = completion of cycle, return to Unity with knowledge"
      ],
      technique: "Peg 10 = T+S sound. Ten TOES complete the journey. 10 reduces to 1 - back to Unity but enriched by multiplicity."
    }
  ];

  const handleComplete = (stationNum) => {
    setCompletedStations(prev => new Set([...prev, stationNum]));
  };

  const currentData = stations[currentStation];
  const progress = ((completedStations.size) / stations.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <TreePine className="w-8 h-8 text-green-700" />
              <h1 className="text-3xl font-bold text-gray-800">
                Ibn Arabi's Memory Palace
              </h1>
            </div>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Book className="w-4 h-4" />
              {showNotes ? 'Hide' : 'Show'} Guide
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 text-center">
            {completedStations.size} of {stations.length} stations mastered
          </p>
        </div>

        {/* Memory Technique Guide */}
        {showNotes && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-lg p-6 mb-6 border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <Star className="w-6 h-6" />
              The Master Memory System
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-purple-700 mb-2">🎯 The Major System (Harry Lorayne)</h3>
                <p className="mb-2">Numbers become sounds, sounds become words, words become vivid images:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>0</strong> = S, Z (Zero) | <strong>1</strong> = T, D (one downstroke) | <strong>2</strong> = N (two downstrokes)</li>
                  <li><strong>3</strong> = M (three downstrokes) | <strong>4</strong> = R (fouR) | <strong>5</strong> = L (Roman L = 50)</li>
                  <li><strong>6</strong> = J, SH, CH (6 looks like J) | <strong>7</strong> = K, G (K = two 7s) | <strong>8</strong> = F, V (script f = 8)</li>
                  <li><strong>9</strong> = P, B (9 = upside-down P) | <strong>10</strong> = T+S (ToeS, DiCE)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-orange-700 mb-2">🏛️ The Memory Palace (Method of Loci)</h3>
                <p className="mb-2"><strong>Journey through Ibn Arabi's Garden:</strong></p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Always travel the SAME route (Gate → Fountain → Seas → Mirrors → Tree → etc.)</li>
                  <li>Place one teaching at each station</li>
                  <li>Use all five senses in your imagery</li>
                  <li>Make images BIZARRE, EXAGGERATED, and EMOTIONAL</li>
                  <li>Let each station FLOW naturally to the next</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-green-700 mb-2">📖 Bruno's Storytelling Enhancement</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Action:</strong> Make everything MOVE (birds flying, water flowing, mirrors reflecting)</li>
                  <li><strong>Emotion:</strong> Feel frustration, love, wonder at each station</li>
                  <li><strong>Connection:</strong> Each station leads logically to the next</li>
                  <li><strong>Symbolism:</strong> Multiple layers (literal, metaphorical, mystical)</li>
                  <li><strong>Review:</strong> Walk the palace daily for 5 days, then weekly, then monthly</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-lg text-blue-700 mb-2">⚡ Quick Retrieval Tips</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Want station 4? Think: 4=R sound → RYE → Four birds on the tree!</li>
                  <li>Need to remember the barzakh? Station 2 → NOAH between two seas</li>
                  <li>Forgot the cosmic hierarchy? Tree with FOUR birds (E-R-A-C mnemonic)</li>
                  <li>Close your eyes and WALK through the garden in your mind</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Main Station Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Station Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-4xl mb-2">{currentData.image}</div>
                <h2 className="text-3xl font-bold mb-1">
                  Station {currentData.number}: {currentData.peg}
                </h2>
                <p className="text-emerald-100 text-lg">{currentData.title}</p>
              </div>
              {completedStations.has(currentData.number) && (
                <div className="bg-white text-green-600 rounded-full p-2">
                  <Star className="w-6 h-6 fill-current" />
                </div>
              )}
            </div>
            <p className="text-emerald-50 italic flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {currentData.location}
            </p>
          </div>

          {/* Story Section */}
          <div className="p-6 bg-gradient-to-b from-amber-50 to-white">
            <div className="flex items-center gap-2 mb-3">
              <Book className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold text-gray-800">The Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {currentData.story}
            </p>
          </div>

          {/* Teaching Section */}
          <div className="p-6 bg-blue-50">
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">The Teaching</h3>
            </div>
            <p className="text-blue-900 font-semibold text-lg mb-4">
              {currentData.teaching}
            </p>
            <ul className="space-y-2">
              {currentData.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technique Section */}
          <div className="p-6 bg-purple-50 border-t-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">Memory Technique</h3>
            </div>
            <p className="text-purple-900 font-mono bg-white p-3 rounded border-l-4 border-purple-500">
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
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
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

        {/* Review Schedule */}
        <div className="mt-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg shadow-lg p-6 border-2 border-rose-200">
          <h3 className="font-bold text-rose-800 text-xl mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Your Review Schedule (Dominic O'Brien's Rule of Five)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-bold text-rose-700">Immediately</div>
              <div className="text-sm text-gray-600">Right after learning</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🌙</div>
              <div className="font-bold text-rose-700">24 Hours</div>
              <div className="text-sm text-gray-600">Tomorrow</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📅</div>
              <div className="font-bold text-rose-700">1 Week</div>
              <div className="text-sm text-gray-600">Next week</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🗓️</div>
              <div className="font-bold text-rose-700">1 Month</div>
              <div className="text-sm text-gray-600">Monthly review</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📆</div>
              <div className="font-bold text-rose-700">3 Months</div>
              <div className="text-sm text-gray-600">Quarterly review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryPalaceSystem;
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

### Usage Instructions

1. **Save the Code**: Copy the entire component code above
2. **Create React App**: Use the installation instructions above
3. **Replace App.js**: Paste the code into your main component file
4. **Install Dependencies**: Run `npm install lucide-react`
5. **Run**: Execute `npm start` and view at `http://localhost:3000`

---

### Customization Guide

#### To Add Your Own Stations:

```javascript
// In the stations array, add a new object:
{
  number: 11,
  peg: "YOUR_PEG_WORD", // Use Major System
  title: "Your Station Title",
  location: "Description of location",
  image: "🎯", // Pick an emoji
  story: "Your vivid, bizarre story...",
  teaching: "The core teaching",
  keyPoints: [
    "Point 1",
    "Point 2",
    // etc.
  ],
  technique: "Memory technique explanation"
}
```

#### To Change Colors:

Find these Tailwind classes and modify:
- `from-amber-50 via-orange-50 to-rose-50` - Background gradient
- `from-emerald-600 to-teal-600` - Header gradient
- `bg-green-600` - Button colors

#### To Add Local Storage (Persistent Progress):

Add this code before the return statement:

```javascript
// Save to localStorage
useEffect(() => {
  localStorage.setItem('completedStations', JSON.stringify([...completedStations]));
}, [completedStations]);

// Load from localStorage
useEffect(() => {
  const saved = localStorage.getItem('completedStations');
  if (saved) {
    setCompletedStations(new Set(JSON.parse(saved)));
  }
}, []);
```

---

### Features Included

✅ 11 Interactive Stations (0-10)
✅ Progress Tracking with Visual Bar
✅ "Mark as Mastered" Functionality
✅ Quick Navigation Grid
✅ Expandable Memory Technique Guide
✅ Review Schedule Display
✅ Responsive Design
✅ Smooth Animations
✅ Color-Coded Sections
✅ Mobile-Friendly Layout

---

### Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile Browsers
- ⚠️ Internet Explorer (not supported - use modern browser)

---

### License

This code is provided as educational material. Feel free to use, modify, and distribute.

---

### Support & Questions

The code is designed to be self-contained and fully functional. If you need modifications or enhancements, you can:

1. Ask Claude to modify specific sections
2. Reference React and Tailwind CSS documentation
3. Experiment with the code yourself

---

*"Investigation like an intelligent man who seeks the salvation of his soul." — Ibn Arabi*