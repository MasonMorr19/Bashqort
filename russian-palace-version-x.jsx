import React, { useState, useMemo, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// РУССКИЙ ДВОРЕЦ ПАМЯТИ — VERSION X
// THE UNITY OF BEING EDITION (وحدة الوجود)
// Ibn Arabi's 1/0: All multiplicity returns to Unity
// 1600+ Words • 9 Tabs • Situational Phrases • Audio-Ready Architecture
// ═══════════════════════════════════════════════════════════════════════════════

/*
 * IBN ARABI'S 1 AND 0:
 * 
 * In Ibn Arabi's metaphysics, all numbers emerge from 1 (الواحد - The One).
 * 0 represents العدم (non-existence) - the mirror that reflects Unity.
 * Together, 1 and 0 generate all binary possibilities.
 * 
 * The Memory Palace is البرزخ (al-barzakh) - the isthmus between:
 *   1 (Unity/Being) and 0 (Multiplicity/Non-being)
 *   Russian (the foreign) and your mother tongue (the familiar)
 *   Abstraction (the word) and Embodiment (the meaning)
 * 
 * Each word you learn is a تجلي (tajalli) - a self-disclosure of meaning.
 */

const C = {
  // The spectrum from 0 (void) to 1 (light)
  zero:'#000000',void:'#0a0a0f',abyss:'#12121a',shadow:'#1a1a24',mist:'#2a2a3a',
  blood:'#6b1c1c',crimson:'#8b2020',rust:'#6d4c3d',bone:'#d4cfc4',
  parchment:'#e8e4d9',gold:'#b8960c',amber:'#c9a227',silver:'#9a9aaa',
  purple:'#4a1a6b',violet:'#6b3a8a',teal:'#1a4a4a',fog:'#8890a0',
  eye:'#2ecc71',candle:'#f4d03f',tomb:'#3a3a4a',
  barzakh:'#3d2a4a',imaginal:'#2a3d4a',
  one:'#ffffff',unity:'#f8f4e8',
};

const s = {
  flex:(j='center',a='center',g=0)=>({display:'flex',justifyContent:j,alignItems:a,gap:`${g}px`,flexWrap:'wrap'}),
  pad:p=>({padding:`${p}px`}),
  bg:(c,o=1)=>({background:o<1?`${c}${Math.round(o*255).toString(16).padStart(2,'0')}`:c}),
  bdr:(c,w=1,r=8)=>({border:`${w}px solid ${c}`,borderRadius:`${r}px`}),
  txt:(sz,c,w='normal')=>({fontSize:`${sz}px`,color:c,fontWeight:w}),
};

// ═══════════════════════════════════════════════════════════════════════════════
// THE UNITY CONCEPT (وحدة الوجود)
// ═══════════════════════════════════════════════════════════════════════════════

const UNITY = {
  one: {
    arabic: "الواحد",
    concept: "Al-Wahid — The One. All words emerge from silence, all meaning from unity.",
    principle: "Every Russian word you learn is a ray (تجلي) from the sun of meaning."
  },
  zero: {
    arabic: "العدم", 
    concept: "Al-'Adam — Non-existence. The blank page before writing, the silence before speech.",
    principle: "Forgetting is not failure—it is the canvas on which memory paints."
  },
  barzakh: {
    arabic: "البرزخ",
    concept: "Al-Barzakh — The Isthmus. The memory palace exists between knowing and not-knowing.",
    principle: "You stand between worlds. The word transforms from sound to meaning in this space."
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// VOCABULARY — 1600+ WORDS
// ═══════════════════════════════════════════════════════════════════════════════

const V = {
// VERBS (200)
v:[
["быть","be"],["иметь","have"],["хотеть","want"],["мочь","can"],["делать","do"],["знать","know"],
["видеть","see"],["идти","go"],["сказать","say"],["думать","think"],["говорить","speak"],["смотреть","watch"],
["слышать","hear"],["понимать","understand"],["читать","read"],["писать","write"],["работать","work"],
["жить","live"],["любить","love"],["есть","eat"],["пить","drink"],["спать","sleep"],["стоять","stand"],
["сидеть","sit"],["лежать","lie"],["бежать","run"],["ходить","walk"],["ехать","ride"],["летать","fly"],
["плавать","swim"],["приходить","come"],["уходить","leave"],["входить","enter"],["выходить","exit"],
["начинать","begin"],["кончать","end"],["открывать","open"],["закрывать","close"],["брать","take"],
["давать","give"],["получать","receive"],["посылать","send"],["покупать","buy"],["продавать","sell"],
["платить","pay"],["помогать","help"],["просить","ask"],["отвечать","answer"],["ждать","wait"],
["искать","seek"],["находить","find"],["терять","lose"],["забывать","forget"],["помнить","remember"],
["учить","teach"],["учиться","learn"],["играть","play"],["петь","sing"],["танцевать","dance"],
["рисовать","draw"],["готовить","cook"],["мыть","wash"],["убирать","clean"],["одеваться","dress"],
["вставать","rise"],["ложиться","lie down"],["звонить","call"],["встречать","meet"],["целовать","kiss"],
["обнимать","embrace"],["плакать","weep"],["смеяться","laugh"],["улыбаться","smile"],["бояться","fear"],
["верить","believe"],["надеяться","hope"],["мечтать","dream"],["решать","decide"],["выбирать","choose"],
["менять","change"],["показывать","show"],["объяснять","explain"],["рассказывать","narrate"],
["приглашать","invite"],["благодарить","thank"],["прощать","forgive"],["ненавидеть","hate"],
["бороться","struggle"],["побеждать","conquer"],["умирать","die"],["рождаться","be born"],["расти","grow"],
["падать","fall"],["нести","carry"],["класть","place"],["резать","cut"],["бить","strike"],
["ломать","break"],["строить","build"],["создавать","create"],["уничтожать","destroy"],["спасать","save"],
["защищать","defend"],["нападать","attack"],["убегать","flee"],["прятать","hide"],["красть","steal"],
["лгать","deceive"],["доверять","trust"],["сомневаться","doubt"],["соглашаться","agree"],
["отказываться","refuse"],["возвращать","return"],["продолжать","continue"],["останавливать","halt"],
["двигать","move"],["толкать","push"],["тянуть","pull"],["бросать","hurl"],["ловить","catch"],
["держать","hold"],["касаться","touch"],["чувствовать","feel"],["болеть","ache"],["лечить","heal"],
["кричать","scream"],["шептать","whisper"],["молчать","be silent"],["гореть","burn"],["светить","shine"],
["исчезать","vanish"],["появляться","appear"],["существовать","exist"],["принадлежать","belong"],
["зависеть","depend"],["отличаться","differ"],["превращаться","transform"],["развиваться","develop"],
["увеличивать","increase"],["уменьшать","decrease"],["улучшать","improve"],["ухудшать","worsen"],
["разрушать","ruin"],["восстанавливать","restore"],["заканчивать","finish"],["проклинать","curse"],
["благословлять","bless"],["предсказывать","prophesy"],["вызывать","summon"],["изгонять","banish"],
["запечатывать","seal"],["освобождать","liberate"],["порабощать","enslave"],["пожирать","devour"],
["воскресать","resurrect"],["преследовать","haunt"],["наблюдать","observe"],["исследовать","explore"],
["изучать","study"],["анализировать","analyze"],["сравнивать","compare"],["оценивать","evaluate"],
["планировать","plan"],["организовать","organize"],["управлять","manage"],["контролировать","control"],
["влиять","influence"],["убеждать","convince"],["вдохновлять","inspire"],["мотивировать","motivate"],
["поддерживать","support"],["сопровождать","accompany"],["следовать","follow"],["вести","lead"],
["направлять","guide"],["указывать","point"],["предупреждать","warn"],["угрожать","threaten"],
["обещать","promise"],["клясться","swear"],["предавать","betray"],["жертвовать","sacrifice"],
["страдать","suffer"],["терпеть","endure"],["выживать","survive"],["процветать","thrive"],
["господствовать","dominate"],["подчиняться","submit"],["сопротивляться","resist"],["бунтовать","rebel"],
["размышлять","ponder"],["созерцать","contemplate"],["медитировать","meditate"],["концентрироваться","concentrate"],
["фокусироваться","focus"],["расслабляться","relax"],["напрягаться","tense up"],["успокаиваться","calm down"],
["волноваться","worry"],["переживать","experience/worry"],["радоваться","rejoice"],["огорчаться","grieve"],
["удивляться","be surprised"],["восхищаться","admire"],["презирать","despise"],["уважать","respect"],
["игнорировать","ignore"],["замечать","notice"],["признавать","acknowledge"],["отрицать","deny"],
["утверждать","affirm"],["сомневаться","doubt"],["подозревать","suspect"],["доказывать","prove"],
["опровергать","refute"],["спорить","argue"],["дискутировать","debate"],["обсуждать","discuss"],
["договариваться","negotiate"],["соглашаться","agree"],["отказывать","refuse"],["разрешать","permit"],
["запрещать","forbid"],["требовать","demand"],["настаивать","insist"],["уступать","yield"],
],
// ADJECTIVES (180)
a:[
["большой","big"],["маленький","small"],["новый","new"],["старый","old"],["хороший","good"],
["плохой","bad"],["красивый","beautiful"],["страшный","terrible"],["длинный","long"],["короткий","short"],
["высокий","tall"],["низкий","low"],["широкий","wide"],["узкий","narrow"],["толстый","thick"],
["тонкий","thin"],["тяжёлый","heavy"],["лёгкий","light"],["трудный","hard"],["простой","simple"],
["быстрый","fast"],["медленный","slow"],["горячий","hot"],["холодный","cold"],["тёплый","warm"],
["молодой","young"],["сильный","strong"],["слабый","weak"],["богатый","rich"],["бедный","poor"],
["дорогой","dear"],["дешёвый","cheap"],["чистый","clean"],["грязный","dirty"],["сухой","dry"],
["мокрый","wet"],["светлый","bright"],["тёмный","dark"],["громкий","loud"],["тихий","quiet"],
["острый","sharp"],["тупой","dull"],["мягкий","soft"],["твёрдый","hard"],["сладкий","sweet"],
["горький","bitter"],["кислый","sour"],["солёный","salty"],["свежий","fresh"],["гнилой","rotten"],
["здоровый","healthy"],["больной","sick"],["счастливый","happy"],["грустный","sad"],["злой","angry"],
["добрый","kind"],["умный","clever"],["глупый","foolish"],["интересный","interesting"],["скучный","boring"],
["важный","important"],["странный","strange"],["опасный","dangerous"],["безопасный","safe"],
["секретный","secret"],["древний","ancient"],["вечный","eternal"],["смертный","mortal"],
["бессмертный","immortal"],["живой","alive"],["мёртвый","dead"],["пустой","empty"],["полный","full"],
["целый","whole"],["сломанный","broken"],["потерянный","lost"],["найденный","found"],["скрытый","hidden"],
["проклятый","cursed"],["благословенный","blessed"],["святой","holy"],["грешный","sinful"],
["чистый","pure"],["порочный","corrupt"],["невинный","innocent"],["виновный","guilty"],
["красный","red"],["синий","blue"],["зелёный","green"],["жёлтый","yellow"],["белый","white"],
["чёрный","black"],["серый","gray"],["розовый","pink"],["оранжевый","orange"],["фиолетовый","violet"],
["коричневый","brown"],["золотой","golden"],["серебряный","silver"],["кровавый","bloody"],
["бледный","pale"],["призрачный","ghostly"],["туманный","misty"],["мрачный","gloomy"],
["жуткий","eerie"],["зловещий","ominous"],["таинственный","mysterious"],["потусторонний","otherworldly"],
["одинокий","lonely"],["забытый","forgotten"],["заброшенный","abandoned"],["разрушенный","ruined"],
["первый","first"],["последний","last"],["единственный","only"],["каждый","every"],["весь","all"],
["другой","other"],["такой","such"],["какой","what kind"],["никакой","none"],["любой","any"],
["реальный","real"],["воображаемый","imaginary"],["возможный","possible"],["невозможный","impossible"],
["необходимый","necessary"],["достаточный","sufficient"],["избыточный","excessive"],["редкий","rare"],
["частый","frequent"],["постоянный","constant"],["временный","temporary"],["бесконечный","infinite"],
["свободный","free"],["занятой","busy"],["готовый","ready"],["способный","capable"],["мудрый","wise"],
["глубокий","deep"],["мелкий","shallow"],["широкий","broad"],["узкий","tight"],["плотный","dense"],
["редкий","sparse"],["густой","thick"],["жидкий","liquid"],["твёрдый","solid"],["газообразный","gaseous"],
["прозрачный","transparent"],["мутный","murky"],["ясный","clear"],["туманный","foggy"],["облачный","cloudy"],
["солнечный","sunny"],["дождливый","rainy"],["снежный","snowy"],["ветреный","windy"],["штормовой","stormy"],
["спокойный","calm"],["бурный","turbulent"],["тихий","peaceful"],["шумный","noisy"],["громкий","loud"],
["немой","mute"],["слепой","blind"],["глухой","deaf"],["хромой","lame"],["здоровый","healthy"],
["больной","ill"],["раненый","wounded"],["усталый","tired"],["бодрый","alert"],["сонный","sleepy"],
],
// NOUNS - BEINGS (120)
n:[
["человек","person"],["мужчина","man"],["женщина","woman"],["ребёнок","child"],["старик","elder"],
["душа","soul"],["дух","spirit"],["призрак","ghost"],["тень","shadow"],["демон","demon"],
["ангел","angel"],["бог","god"],["дьявол","devil"],["ведьма","witch"],["колдун","sorcerer"],
["пророк","prophet"],["жрец","priest"],["монах","monk"],["отшельник","hermit"],["странник","wanderer"],
["сталкер","stalker"],["прогрессор","progressor"],["наблюдатель","observer"],["мокрец","clammy"],
["мать","mother"],["отец","father"],["сын","son"],["дочь","daughter"],["брат","brother"],
["сестра","sister"],["муж","husband"],["жена","wife"],["друг","friend"],["враг","enemy"],
["король","king"],["королева","queen"],["принц","prince"],["раб","slave"],["господин","master"],
["слуга","servant"],["воин","warrior"],["рыцарь","knight"],["убийца","assassin"],["вор","thief"],
["судья","judge"],["палач","executioner"],["жертва","victim"],["свидетель","witness"],["пленник","captive"],
["мертвец","corpse"],["скелет","skeleton"],["вампир","vampire"],["оборотень","werewolf"],["зомби","zombie"],
["чудовище","monster"],["зверь","beast"],["птица","bird"],["змея","serpent"],["паук","spider"],
["ворон","raven"],["волк","wolf"],["крыса","rat"],["летучая мышь","bat"],["кошка","cat"],
["собака","dog"],["лошадь","horse"],["медведь","bear"],["дракон","dragon"],["существо","creature"],
["тварь","abomination"],["сущность","entity"],["создание","creation"],["избранный","chosen one"],
["проклятый","damned one"],["одержимый","possessed"],["безумец","madman"],["провидец","seer"],
["хранитель","keeper"],["страж","guardian"],["охотник","hunter"],["жнец","reaper"],["вестник","herald"],
["учёный","scientist"],["философ","philosopher"],["художник","artist"],["поэт","poet"],["писатель","writer"],
["музыкант","musician"],["врач","doctor"],["инженер","engineer"],["солдат","soldier"],["генерал","general"],
["президент","president"],["министр","minister"],["посол","ambassador"],["шпион","spy"],["предатель","traitor"],
["герой","hero"],["злодей","villain"],["спаситель","savior"],["разрушитель","destroyer"],["творец","creator"],
["наследник","heir"],["изгнанник","exile"],["беженец","refugee"],["пилигрим","pilgrim"],["искатель","seeker"],
["мечтатель","dreamer"],["скептик","skeptic"],["циник","cynic"],["идеалист","idealist"],["реалист","realist"],
["пессимист","pessimist"],["оптимист","optimist"],["интроверт","introvert"],["экстраверт","extrovert"],
["гений","genius"],["талант","talent"],["любитель","amateur"],["профессионал","professional"],
["новичок","beginner"],["эксперт","expert"],["мастер","master"],["ученик","apprentice"],
["партнёр","partner"],["конкурент","competitor"],["союзник","ally"],["противник","opponent"],
["соратник","comrade"],["коллега","colleague"],["начальник","boss"],["подчинённый","subordinate"],
["клиент","client"],["пациент","patient"],["гость","guest"],["хозяин","host"],
["незнакомец","stranger"],["знакомый","acquaintance"],["сосед","neighbor"],["родственник","relative"],
["племянник","nephew"],["племянница","niece"],["дядя","uncle"],["тётя","aunt"],
["дедушка","grandfather"],["бабушка","grandmother"],["внук","grandson"],["внучка","granddaughter"],
["крёстный","godfather"],["крёстная","godmother"],["свидетель","witness"],["очевидец","eyewitness"],
],
// NOUNS - PLACES (100)
p:[
["место","place"],["мир","world"],["земля","earth"],["небо","sky"],["ад","hell"],
["рай","paradise"],["бездна","abyss"],["пустота","void"],["тьма","darkness"],["свет","light"],
["зона","zone"],["город","city"],["деревня","village"],["кладбище","cemetery"],["склеп","crypt"],
["гробница","tomb"],["храм","temple"],["церковь","church"],["монастырь","monastery"],["руины","ruins"],
["замок","castle"],["башня","tower"],["подземелье","dungeon"],["пещера","cave"],["лабиринт","labyrinth"],
["лес","forest"],["болото","swamp"],["пустыня","desert"],["гора","mountain"],["река","river"],
["озеро","lake"],["море","sea"],["остров","island"],["берег","shore"],["граница","border"],
["дом","house"],["комната","room"],["подвал","cellar"],["чердак","attic"],["коридор","corridor"],
["дверь","door"],["окно","window"],["стена","wall"],["пол","floor"],["потолок","ceiling"],
["лестница","stairs"],["порог","threshold"],["врата","gates"],["мост","bridge"],["путь","path"],
["дорога","road"],["тропа","trail"],["перекрёсток","crossroads"],["туннель","tunnel"],["колодец","well"],
["алтарь","altar"],["трон","throne"],["могила","grave"],["костёр","bonfire"],["очаг","hearth"],
["институт","institute"],["лепрозорий","leprosarium"],["гостиница","inn"],["бар","bar"],["тройка","troika"],
["арена","arena"],["тюрьма","prison"],["убежище","refuge"],["святилище","sanctuary"],["логово","lair"],
["библиотека","library"],["архив","archive"],["музей","museum"],["театр","theater"],["стадион","stadium"],
["рынок","market"],["порт","port"],["вокзал","station"],["аэропорт","airport"],["граница","frontier"],
["столица","capital"],["провинция","province"],["королевство","kingdom"],["империя","empire"],["республика","republic"],
["поле битвы","battlefield"],["окоп","trench"],["крепость","fortress"],["бастион","bastion"],["цитадель","citadel"],
["оазис","oasis"],["джунгли","jungle"],["тундра","tundra"],["степь","steppe"],["саванна","savanna"],
],
// NOUNS - THINGS (100)
t:[
["вещь","thing"],["предмет","object"],["артефакт","artifact"],["реликвия","relic"],["талисман","talisman"],
["амулет","amulet"],["кольцо","ring"],["ключ","key"],["замок","lock"],["цепь","chain"],
["книга","book"],["свиток","scroll"],["карта","map"],["письмо","letter"],["печать","seal"],
["знак","sign"],["символ","symbol"],["руна","rune"],["заклинание","spell"],["проклятие","curse"],
["меч","sword"],["нож","knife"],["кинжал","dagger"],["топор","axe"],["копьё","spear"],
["лук","bow"],["стрела","arrow"],["щит","shield"],["доспехи","armor"],["шлем","helmet"],
["маска","mask"],["плащ","cloak"],["капюшон","hood"],["перчатки","gloves"],["сапоги","boots"],
["посох","staff"],["жезл","scepter"],["чаша","chalice"],["кубок","goblet"],["котёл","cauldron"],
["зеркало","mirror"],["свеча","candle"],["факел","torch"],["фонарь","lantern"],["лампа","lamp"],
["гроб","coffin"],["череп","skull"],["кость","bone"],["кровь","blood"],["пепел","ash"],
["прах","dust"],["туман","mist"],["дым","smoke"],["огонь","fire"],["вода","water"],
["камень","stone"],["кристалл","crystal"],["драгоценность","gem"],["золото","gold"],["серебро","silver"],
["железо","iron"],["яд","poison"],["зелье","potion"],["эликсир","elixir"],["шар","sphere"],
["верёвка","rope"],["сеть","net"],["ловушка","trap"],["клетка","cage"],["оковы","shackles"],
["часы","clock"],["песочные часы","hourglass"],["компас","compass"],["весы","scales"],["маятник","pendulum"],
["колокол","bell"],["флейта","flute"],["барабан","drum"],["арфа","harp"],["орган","organ"],
["телефон","phone"],["компьютер","computer"],["машина","car"],["поезд","train"],["самолёт","plane"],
["деньги","money"],["монета","coin"],["билет","ticket"],["паспорт","passport"],["документ","document"],
["оружие","weapon"],["пистолет","pistol"],["ружьё","rifle"],["бомба","bomb"],["граната","grenade"],
["синяя тетрадь","blue notebook"],["золотой шар","golden sphere"],["вечная рюмка","eternal glass"],
["ноутбук","laptop"],["планшет","tablet"],["смартфон","smartphone"],["наушники","headphones"],
["зарядка","charger"],["кабель","cable"],["флешка","flash drive"],["принтер","printer"],
["камера","camera"],["объектив","lens"],["штатив","tripod"],["микрофон","microphone"],
["колонка","speaker"],["экран","screen"],["клавиатура","keyboard"],["мышка","mouse"],
["пульт","remote"],["батарейка","battery"],["лампочка","light bulb"],["розетка","outlet"],
["выключатель","switch"],["провод","wire"],["удлинитель","extension cord"],
["рюкзак","backpack"],["чемодан","suitcase"],["сумка","bag"],["кошелёк","wallet"],
["ключи","keys"],["очки","glasses"],["зонтик","umbrella"],["часы","watch"],
["браслет","bracelet"],["цепочка","necklace"],["серьги","earrings"],["кольцо","ring"],
["ручка","pen"],["карандаш","pencil"],["тетрадь","notebook"],["блокнот","notepad"],
["конверт","envelope"],["марка","stamp"],["открытка","postcard"],["газета","newspaper"],
["журнал","magazine"],["словарь","dictionary"],["учебник","textbook"],["роман","novel"],
],
// ABSTRACT (80)
b:[
["жизнь","life"],["смерть","death"],["судьба","fate"],["рок","doom"],["время","time"],
["вечность","eternity"],["мгновение","instant"],["начало","beginning"],["конец","end"],["цикл","cycle"],
["душа","soul"],["разум","mind"],["память","memory"],["сон","dream"],["кошмар","nightmare"],
["видение","vision"],["пророчество","prophecy"],["знамение","omen"],["предчувствие","premonition"],
["страх","fear"],["ужас","terror"],["паника","panic"],["тревога","anxiety"],["отчаяние","despair"],
["надежда","hope"],["вера","faith"],["сомнение","doubt"],["безумие","madness"],["одиночество","solitude"],
["любовь","love"],["ненависть","hatred"],["гнев","wrath"],["месть","vengeance"],["жалость","pity"],
["милосердие","mercy"],["жестокость","cruelty"],["боль","pain"],["страдание","suffering"],["мука","torment"],
["грех","sin"],["искупление","redemption"],["благословение","blessing"],["тайна","mystery"],["загадка","riddle"],
["истина","truth"],["ложь","lie"],["обман","deception"],["знание","knowledge"],["мудрость","wisdom"],
["невежество","ignorance"],["сила","power"],["власть","dominion"],["свобода","freedom"],["рабство","slavery"],
["война","war"],["мир","peace"],["хаос","chaos"],["порядок","order"],["справедливость","justice"],
["бюрократия","bureaucracy"],["эксперимент","experiment"],["посещение","visitation"],["вмешательство","intervention"],
["трансформация","transformation"],["эволюция","evolution"],["аномалия","anomaly"],["парадокс","paradox"],
["идея","idea"],["теория","theory"],["гипотеза","hypothesis"],["факт","fact"],["мнение","opinion"],
["единство","unity"],["множество","multiplicity"],["бытие","being"],["небытие","non-being"],["сущность","essence"],
],
// TIME & NUMBERS (70)
m:[
["секунда","second"],["минута","minute"],["час","hour"],["день","day"],["ночь","night"],
["утро","dawn"],["вечер","dusk"],["полночь","midnight"],["рассвет","daybreak"],["закат","sunset"],
["неделя","week"],["месяц","month"],["год","year"],["век","century"],["эпоха","epoch"],
["прошлое","past"],["настоящее","present"],["будущее","future"],["всегда","always"],["никогда","never"],
["сейчас","now"],["потом","later"],["раньше","before"],["скоро","soon"],["вечно","eternally"],
["понедельник","Monday"],["вторник","Tuesday"],["среда","Wednesday"],["четверг","Thursday"],
["пятница","Friday"],["суббота","Saturday"],["воскресенье","Sunday"],
["ноль","0"],["один","1"],["два","2"],["три","3"],["четыре","4"],["пять","5"],
["шесть","6"],["семь","7"],["восемь","8"],["девять","9"],["десять","10"],
["одиннадцать","11"],["двенадцать","12"],["двадцать","20"],["тридцать","30"],["сорок","40"],
["пятьдесят","50"],["шестьдесят","60"],["семьдесят","70"],["восемьдесят","80"],["девяносто","90"],
["сто","100"],["двести","200"],["триста","300"],["пятьсот","500"],["тысяча","1000"],["миллион","million"],
["первый","1st"],["второй","2nd"],["третий","3rd"],["пятый","5th"],["десятый","10th"],
["половина","half"],["четверть","quarter"],["треть","third"],["дважды","twice"],["трижды","thrice"],
["позавчера","day before yesterday"],["вчера","yesterday"],["сегодня","today"],["завтра","tomorrow"],
["послезавтра","day after tomorrow"],["рано","early"],["поздно","late"],["вовремя","on time"],
["иногда","sometimes"],["часто","often"],["редко","rarely"],["обычно","usually"],["всегда","always"],
["когда-нибудь","someday"],["однажды","once upon a time"],["недавно","recently"],["давно","long ago"],
["мгновенно","instantly"],["постепенно","gradually"],["внезапно","suddenly"],["медленно","slowly"],
["быстро","quickly"],["немедленно","immediately"],["срочно","urgently"],["временно","temporarily"],
["навсегда","forever"],["пока","meanwhile"],["одновременно","simultaneously"],["последовательно","consecutively"],
["периодически","periodically"],["регулярно","regularly"],["ежедневно","daily"],["еженедельно","weekly"],
["ежемесячно","monthly"],["ежегодно","annually"],["сначала","first"],["потом","then"],["наконец","finally"],
["опять","again"],["снова","once more"],["ещё раз","one more time"],["больше не","no more"],
["пора","it's time"],["рано или поздно","sooner or later"],["в конце концов","in the end"],
["с тех пор","since then"],["до сих пор","until now"],["отныне","from now on"],["впредь","henceforth"],
],
// PARTICLES & CONNECTORS (60)
d:[
["в","in"],["на","on"],["из","from"],["к","to"],["от","from"],["с","with"],
["без","without"],["для","for"],["о","about"],["по","along"],["за","behind"],
["перед","before"],["после","after"],["между","between"],["под","under"],["над","above"],
["и","and"],["но","but"],["или","or"],["если","if"],["когда","when"],["потому что","because"],
["чтобы","in order to"],["хотя","although"],["пока","while"],["как","as/how"],["где","where"],
["кто","who"],["что","what"],["почему","why"],["сколько","how much"],["какой","which"],
["да","yes"],["нет","no"],["не","not"],["ни","neither"],["же","indeed"],["ли","whether"],
["очень","very"],["слишком","too"],["совсем","completely"],["почти","almost"],["едва","barely"],
["только","only"],["ещё","still"],["уже","already"],["тоже","also"],["даже","even"],
["здесь","here"],["там","there"],["везде","everywhere"],["нигде","nowhere"],
["вверх","up"],["вниз","down"],["вперёд","forward"],["назад","backward"],
["быстро","quickly"],["медленно","slowly"],["хорошо","well"],["плохо","badly"],
],
// SITUATIONAL PHRASES - AT THE AIRPORT (30)
sa:[
["Где регистрация?","Where is check-in?"],["Мой рейс задерживается","My flight is delayed"],
["Где выход на посадку?","Where is the gate?"],["Я потерял багаж","I lost my luggage"],
["Сколько весит чемодан?","How much does the suitcase weigh?"],["Место у окна","Window seat"],
["Место у прохода","Aisle seat"],["Посадочный талон","Boarding pass"],
["Паспортный контроль","Passport control"],["Таможня","Customs"],
["Ручная кладь","Hand luggage"],["Зал ожидания","Waiting area"],
["Рейс отменён","Flight cancelled"],["Пересадка","Transfer/Connection"],
["Во сколько посадка?","What time is boarding?"],["Объявляется посадка","Boarding is announced"],
["Пристегните ремни","Fasten seatbelts"],["Взлёт","Takeoff"],["Посадка","Landing"],
["Турбулентность","Turbulence"],["Я боюсь летать","I'm afraid of flying"],
["Есть ли Wi-Fi?","Is there Wi-Fi?"],["Можно воду?","Can I have water?"],
["Где туалет?","Where is the toilet?"],["Мне плохо","I feel sick"],
["Нужен врач","I need a doctor"],["Экстренный выход","Emergency exit"],
["Спасательный жилет","Life jacket"],["Кислородная маска","Oxygen mask"],
["Добро пожаловать на борт","Welcome aboard"],
],
// SITUATIONAL PHRASES - AT THE RESTAURANT (30)
sr:[
["Столик на двоих","Table for two"],["Меню, пожалуйста","Menu, please"],
["Что вы порекомендуете?","What do you recommend?"],["Я вегетарианец","I'm vegetarian"],
["У меня аллергия на...","I'm allergic to..."],["Без глютена","Gluten-free"],
["Острое?","Is it spicy?"],["Счёт, пожалуйста","Bill, please"],
["Чаевые включены?","Is tip included?"],["Можно карточкой?","Can I pay by card?"],
["Очень вкусно","Very delicious"],["Это холодное","This is cold"],
["Принесите ещё","Bring more"],["Что это?","What is this?"],
["Без соли","Without salt"],["Хорошо прожаренный","Well done"],
["Средней прожарки","Medium"],["С кровью","Rare"],
["Десерт","Dessert"],["Кофе с молоком","Coffee with milk"],
["Чай с лимоном","Tea with lemon"],["Бокал вина","Glass of wine"],
["Пиво, пожалуйста","Beer, please"],["Воду без газа","Still water"],
["Воду с газом","Sparkling water"],["Суп дня","Soup of the day"],
["Фирменное блюдо","Specialty dish"],["Можно забрать с собой?","Can I take this to go?"],
["Зарезервировать столик","Reserve a table"],["На какое время?","For what time?"],
],
// SITUATIONAL PHRASES - AT THE DOCTOR (30)
sd:[
["Мне нужен врач","I need a doctor"],["Где больница?","Where is the hospital?"],
["Скорая помощь","Ambulance"],["У меня болит...","I have pain in..."],
["Голова болит","Headache"],["Живот болит","Stomach ache"],
["Горло болит","Sore throat"],["Я простудился","I caught a cold"],
["У меня температура","I have a fever"],["Меня тошнит","I feel nauseous"],
["Я порезался","I cut myself"],["Мне нужен рецепт","I need a prescription"],
["Аптека","Pharmacy"],["Таблетки","Pills"],["Обезболивающее","Painkiller"],
["Антибиотики","Antibiotics"],["Бинт","Bandage"],["Пластырь","Band-aid"],
["Аллергия","Allergy"],["Астма","Asthma"],["Диабет","Diabetes"],
["Беременность","Pregnancy"],["Страховка","Insurance"],["Медицинская карта","Medical card"],
["Анализ крови","Blood test"],["Рентген","X-ray"],["УЗИ","Ultrasound"],
["Операция","Surgery"],["Выздоравливайте","Get well soon"],["Вызовите скорую","Call an ambulance"],
],
// SITUATIONAL PHRASES - SHOPPING (30)
ss:[
["Сколько стоит?","How much?"],["Слишком дорого","Too expensive"],
["Есть скидка?","Is there a discount?"],["Распродажа","Sale"],
["Где примерочная?","Where is the fitting room?"],["Мне нужен размер...","I need size..."],
["Это мало","This is too small"],["Это велико","This is too big"],
["Другой цвет?","Another color?"],["Можно посмотреть?","Can I see?"],
["Я просто смотрю","I'm just looking"],["Где касса?","Where is the checkout?"],
["Наличными","Cash"],["Картой","By card"],["Чек","Receipt"],
["Возврат","Return"],["Обмен","Exchange"],["Гарантия","Warranty"],
["Это подделка?","Is this fake?"],["Оригинал","Original"],
["Где сделано?","Where is it made?"],["Сумка нужна?","Do you need a bag?"],
["Подарочная упаковка","Gift wrapping"],["Это подарок","It's a gift"],
["Открыто до...","Open until..."],["Закрыто","Closed"],
["Рабочие часы","Working hours"],["Супермаркет","Supermarket"],
["Торговый центр","Shopping mall"],["Рынок","Market"],
],
// SITUATIONAL PHRASES - EMERGENCY (25)
se:[
["Помогите!","Help!"],["Пожар!","Fire!"],["Вызовите полицию","Call the police"],
["Меня ограбили","I was robbed"],["Украли кошелёк","My wallet was stolen"],
["Я потерялся","I'm lost"],["Авария","Accident"],["Осторожно!","Careful!"],
["Опасно!","Dangerous!"],["Не двигайтесь","Don't move"],["Выход","Exit"],
["Вход","Entrance"],["Запасной выход","Emergency exit"],["Не входить","Do not enter"],
["Стоп!","Stop!"],["Посольство","Embassy"],["Консульство","Consulate"],
["Я гражданин...","I am a citizen of..."],["Мне нужен переводчик","I need a translator"],
["Я не понимаю","I don't understand"],["Говорите медленнее","Speak slower"],
["Напишите это","Write it down"],["Где полиция?","Where is the police?"],
["Это срочно","It's urgent"],["Позвоните...","Call..."],
],
// SITUATIONAL - TRANSPORTATION (30)
st:[
["Где автобусная остановка?","Where is the bus stop?"],["Метро рядом?","Is the metro nearby?"],
["Сколько стоит билет?","How much is the ticket?"],["Один билет","One ticket"],["Туда и обратно","Round trip"],
["Какая следующая остановка?","What's the next stop?"],["Где выход?","Where is the exit?"],
["Пересадка здесь?","Transfer here?"],["Поезд опаздывает","The train is late"],["Платформа номер...","Platform number..."],
["Где такси?","Where are taxis?"],["Сколько до центра?","How much to the center?"],["Остановите здесь","Stop here"],
["Подождите минуту","Wait a minute"],["Можно квитанцию?","Can I have a receipt?"],
["Где парковка?","Where is parking?"],["Бензоколонка","Gas station"],["Полный бак","Full tank"],
["Машина сломалась","The car broke down"],["Нужна помощь","I need help"],["Где ближайший...?","Where is the nearest...?"],
["Поверните направо","Turn right"],["Поверните налево","Turn left"],["Прямо","Straight ahead"],
["Далеко отсюда?","Is it far from here?"],["Пешком или на машине?","On foot or by car?"],
["Сколько минут?","How many minutes?"],["Я заблудился","I'm lost"],["Покажите на карте","Show me on the map"],
["Вызовите такси","Call a taxi"],
],
// SITUATIONAL - HOTEL (30)
sh:[
["Есть свободные номера?","Are there any rooms available?"],["Номер на одного","Single room"],
["Номер на двоих","Double room"],["На сколько ночей?","For how many nights?"],["Сколько стоит за ночь?","How much per night?"],
["Завтрак включён?","Is breakfast included?"],["Где лифт?","Where is the elevator?"],["Какой этаж?","What floor?"],
["Ключ от номера","Room key"],["Не работает...","...doesn't work"],["Кондиционер","Air conditioning"],
["Отопление","Heating"],["Горячая вода","Hot water"],["Полотенце","Towel"],["Мыло","Soap"],
["Туалетная бумага","Toilet paper"],["Уборка номера","Room cleaning"],["Не беспокоить","Do not disturb"],
["Разбудите меня в...","Wake me up at..."],["Где ресторан?","Where is the restaurant?"],["Где бассейн?","Where is the pool?"],
["Wi-Fi пароль?","Wi-Fi password?"],["Сейф в номере","In-room safe"],["Мини-бар","Mini-bar"],
["Прачечная","Laundry"],["Выезд в...","Check-out at..."],["Продлить номер","Extend the room"],
["Счёт, пожалуйста","Bill, please"],["Оплата картой?","Card payment?"],["Спасибо за всё","Thank you for everything"],
],
// SITUATIONAL - SOCIAL (30)
so:[
["Как тебя зовут?","What's your name?"],["Меня зовут...","My name is..."],["Откуда ты?","Where are you from?"],
["Я из...","I'm from..."],["Чем занимаешься?","What do you do?"],["Я работаю...","I work as..."],["Я учусь","I'm studying"],
["Сколько тебе лет?","How old are you?"],["Мне ... лет","I'm ... years old"],["Ты женат/замужем?","Are you married?"],
["У тебя есть дети?","Do you have children?"],["Давай встретимся","Let's meet"],["Во сколько?","At what time?"],
["Где встретимся?","Where shall we meet?"],["Дай мне номер","Give me your number"],["Напиши мне","Text me"],
["Позвони мне","Call me"],["Было приятно познакомиться","Nice to meet you"],["Увидимся","See you"],
["Пока","Bye"],["До завтра","See you tomorrow"],["Удачи","Good luck"],["Береги себя","Take care"],
["Скучаю по тебе","I miss you"],["Люблю тебя","I love you"],["Ты мне нравишься","I like you"],
["Давай дружить","Let's be friends"],["Ты свободен сегодня?","Are you free today?"],
["Пойдём гулять","Let's go for a walk"],["Хочешь кофе?","Want some coffee?"],
],
// HOME & BODY (80)
f:[
["еда","food"],["хлеб","bread"],["мясо","meat"],["рыба","fish"],["суп","soup"],
["молоко","milk"],["сыр","cheese"],["яйцо","egg"],["соль","salt"],["сахар","sugar"],
["вода","water"],["чай","tea"],["кофе","coffee"],["сок","juice"],["вино","wine"],
["яблоко","apple"],["картошка","potato"],["морковь","carrot"],["помидор","tomato"],["лук","onion"],
["завтрак","breakfast"],["обед","lunch"],["ужин","dinner"],["тарелка","plate"],["чашка","cup"],
["ложка","spoon"],["вилка","fork"],["нож","knife"],["стакан","glass"],["бутылка","bottle"],
["голова","head"],["лицо","face"],["глаз","eye"],["нос","nose"],["рот","mouth"],["ухо","ear"],
["зуб","tooth"],["язык","tongue"],["шея","neck"],["плечо","shoulder"],["рука","arm"],["палец","finger"],
["нога","leg"],["колено","knee"],["спина","back"],["грудь","chest"],["живот","belly"],["сердце","heart"],
["кровь","blood"],["кость","bone"],["кожа","skin"],["волосы","hair"],["мозг","brain"],
["дом","home"],["комната","room"],["кухня","kitchen"],["спальня","bedroom"],["ванная","bathroom"],
["мебель","furniture"],["стол","table"],["стул","chair"],["кровать","bed"],["диван","sofa"],
["шкаф","wardrobe"],["полка","shelf"],["ковёр","carpet"],["лампа","lamp"],["зеркало","mirror"],
["одежда","clothes"],["рубашка","shirt"],["брюки","pants"],["платье","dress"],["пальто","coat"],
["шапка","hat"],["обувь","shoes"],["носки","socks"],["ремень","belt"],["карман","pocket"],
],
// NATURE & COSMOS (60)
h:[
["природа","nature"],["погода","weather"],["солнце","sun"],["луна","moon"],["звезда","star"],
["небо","sky"],["облако","cloud"],["дождь","rain"],["снег","snow"],["ветер","wind"],
["гроза","storm"],["молния","lightning"],["гром","thunder"],["радуга","rainbow"],["туман","fog"],
["жара","heat"],["холод","cold"],["мороз","frost"],["лёд","ice"],["пламя","flame"],
["река","river"],["озеро","lake"],["море","sea"],["океан","ocean"],["волна","wave"],
["гора","mountain"],["холм","hill"],["долина","valley"],["лес","forest"],["поле","field"],
["трава","grass"],["дерево","tree"],["цветок","flower"],["лист","leaf"],["корень","root"],
["животное","animal"],["птица","bird"],["рыба","fish"],["змея","snake"],["насекомое","insect"],
["вселенная","universe"],["галактика","galaxy"],["планета","planet"],["комета","comet"],["астероид","asteroid"],
["пространство","space"],["материя","matter"],["энергия","energy"],["атом","atom"],["свет","light"],
["тень","shadow"],["отражение","reflection"],["спектр","spectrum"],["цвет","color"],["звук","sound"],
["тишина","silence"],["эхо","echo"],["волна","wave"],["поле","field"],["сила","force"],
["гравитация","gravity"],["магнетизм","magnetism"],["электричество","electricity"],["радиация","radiation"],
["частица","particle"],["квант","quantum"],["измерение","dimension"],["бесконечность","infinity"],
["чёрная дыра","black hole"],["сверхновая","supernova"],["созвездие","constellation"],["орбита","orbit"],
["затмение","eclipse"],["прилив","tide"],["отлив","ebb"],["землетрясение","earthquake"],["извержение","eruption"],
["лавина","avalanche"],["оползень","landslide"],["засуха","drought"],["наводнение","flood"],
["ураган","hurricane"],["торнадо","tornado"],["цунами","tsunami"],["вулкан","volcano"],
],
// ADDITIONAL ABSTRACT (50)
ab:[
["причина","cause"],["следствие","effect"],["связь","connection"],["разрыв","break"],["союз","union"],
["конфликт","conflict"],["гармония","harmony"],["баланс","balance"],["дисбаланс","imbalance"],["равновесие","equilibrium"],
["процесс","process"],["результат","result"],["цель","goal"],["средство","means"],["метод","method"],
["подход","approach"],["стратегия","strategy"],["тактика","tactic"],["план","plan"],["схема","scheme"],
["модель","model"],["теория","theory"],["практика","practice"],["опыт","experience"],["эксперимент","experiment"],
["открытие","discovery"],["изобретение","invention"],["творчество","creativity"],["вдохновение","inspiration"],["озарение","insight"],
["интуиция","intuition"],["логика","logic"],["анализ","analysis"],["синтез","synthesis"],["абстракция","abstraction"],
["конкретика","specificity"],["общее","general"],["частное","particular"],["универсальное","universal"],["уникальное","unique"],
["вечное","eternal"],["временное","temporal"],["абсолютное","absolute"],["относительное","relative"],["объективное","objective"],
["субъективное","subjective"],["реальное","real"],["виртуальное","virtual"],["возможное","possible"],["невозможное","impossible"],
["вероятное","probable"],["невероятное","improbable"],["очевидное","obvious"],["скрытое","hidden"],
["явное","explicit"],["неявное","implicit"],["простое","simple"],["сложное","complex"],
],
};

// ═══════════════════════════════════════════════════════════════════════════════
// STATIONS, CHARACTERS, QUOTES, PHILOSOPHY (Same as v9 but trimmed for space)
// ═══════════════════════════════════════════════════════════════════════════════

const ST = [
  {id:0,n:"Зона",e:"The Zone",i:"👁️",c:C.eye,k:["Danger","Artifacts"]},
  {id:1,n:"Бар",e:"Borscht Bar",i:"🕯️",c:C.candle,k:["Drinks","Secrets"]},
  {id:2,n:"НИИЧАВО",e:"Institute",i:"🔮",c:C.violet,k:["Magic","Science"]},
  {id:3,n:"Арканар",e:"Arkanar",i:"⚔️",c:C.crimson,k:["Blood","Power"]},
  {id:4,n:"Город",e:"Doomed City",i:"🌑",c:C.fog,k:["Fate","Void"]},
  {id:5,n:"Квартира",e:"Apartment",i:"📜",c:C.amber,k:["Knowledge","Fear"]},
  {id:6,n:"Гостиница",e:"Dead Inn",i:"💀",c:C.bone,k:["Mystery","Isolation"]},
  {id:7,n:"Лепрозорий",e:"Leprosarium",i:"🌧️",c:C.teal,k:["Change","Future"]},
  {id:8,n:"Тройка",e:"Troika",i:"📋",c:C.rust,k:["Bureaucracy","Absurdity"]},
];

const PEGS = [{n:0,r:"яйцо",e:"egg",i:"🥚",m:"Zero—the cosmic egg before creation"},{n:1,r:"свеча",e:"candle",i:"🕯️",m:"One—single flame of unity"},{n:2,r:"лебедь",e:"swan",i:"🦢",m:"Two—duality emerges"},{n:3,r:"трезубец",e:"trident",i:"🔱",m:"Three—trinity"},{n:4,r:"стул",e:"chair",i:"🪑",m:"Four—stability"},{n:5,r:"рука",e:"hand",i:"✋",m:"Five—human"},{n:6,r:"слон",e:"elephant",i:"🐘",m:"Six—memory"},{n:7,r:"коса",e:"scythe",i:"⚔️",m:"Seven—harvest"},{n:8,r:"песочные часы",e:"hourglass",i:"⏳",m:"Eight—infinity"},{n:9,r:"воздушный шар",e:"balloon",i:"🎈",m:"Nine—completion"}];

const Q = [
  {r:"Счастье для всех, даром!",e:"Happiness for everyone, free!",s:"Roadside Picnic"},
  {r:"Трудно быть богом.",e:"Hard to be a god.",s:"Hard to Be a God"},
  {r:"Понедельник начинается в субботу.",e:"Monday begins on Saturday.",s:"Monday Begins on Saturday"},
  {r:"Бюрократия бессмертна.",e:"Bureaucracy is immortal.",s:"Tale of the Troika"},
  {r:"Мироздание защищается.",e:"The universe defends itself.",s:"Definitely Maybe"},
  {r:"Дети уже не наши.",e:"Children are no longer ours.",s:"Ugly Swans"},
];

const SOUL = {
  deliberative:{n:"ОСМОТРИТЕЛЬНОСТЬ",e:"Deliberative",w:[["осторожность","caution"],["взвешенность","deliberation"],["рассудительность","prudence"],["серьёзность","seriousness"],["основательность","thoroughness"],["вдумчивость","thoughtfulness"]]},
  intellection:{n:"МЫСЛИТЕЛЬНОСТЬ",e:"Intellection",w:[["размышление","contemplation"],["созерцание","meditation"],["погружённость","immersion"],["интроспекция","introspection"],["углублённость","depth"],["сосредоточенность","concentration"]]},
  restorative:{n:"ВОССТАНОВЛЕНИЕ",e:"Restorative",w:[["исправление","correction"],["починка","repair"],["восстановление","restoration"],["излечение","healing"],["улучшение","improvement"],["устранение","elimination"]]},
  connectedness:{n:"СВЯЗАННОСТЬ",e:"Connectedness",w:[["взаимосвязь","interconnection"],["единство","unity"],["сопричастность","communion"],["целостность","wholeness"],["судьба","destiny"],["предназначение","purpose"]]},
  strategic:{n:"СТРАТЕГИЯ",e:"Strategic",w:[["предвидение","foresight"],["планирование","planning"],["тактика","tactics"],["маневрирование","maneuvering"],["расчёт","calculation"],["альтернатива","alternative"]]},
};

const MAJOR = [['0','с, з','s, z'],['1','т, д','t, d'],['2','н','n'],['3','м','m'],['4','р','r'],['5','л','l'],['6','ш, ж','sh'],['7','к, г','k, g'],['8','ф, в','f, v'],['9','п, б','p, b']];

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function RussianPalaceX() {
  const [tab, setTab] = useState('unity');
  const [st, setSt] = useState(null);
  const [sel, setSel] = useState([]);
  const [q, setQ] = useState('');
  const [exp, setExp] = useState({});
  const [fi, setFi] = useState(0);
  const [ans, setAns] = useState(false);
  const [showMnem, setShowMnem] = useState(true);
  const [showStrength, setShowStrength] = useState(null);
  const [sitCat, setSitCat] = useState('sa');

  const vocab = useMemo(() => Object.entries(V).flatMap(([cat, arr]) => arr.map(([r,e], i) => ({id:`${cat}${i}`,r,e,cat}))), []);
  const cats = useMemo(() => Object.fromEntries(Object.keys(V).map(k => [k, vocab.filter(w => w.cat === k)])), [vocab]);
  const catL = {v:'⚔️ Verbs',a:'🎭 Adjectives',n:'👤 Beings',p:'🏚️ Places',t:'🗝️ Things',b:'💀 Abstract',ab:'🔮 Concepts',m:'⏳ Time',d:'🔗 Connectors',sa:'✈️ Airport',sr:'🍽️ Restaurant',sd:'🏥 Doctor',ss:'🛒 Shopping',se:'🚨 Emergency',st:'🚌 Transport',sh:'🏨 Hotel',so:'👋 Social',f:'🏠 Home & Body',h:'🌿 Nature'};
  const filt = useMemo(() => q ? vocab.filter(w => w.r.toLowerCase().includes(q.toLowerCase()) || w.e.toLowerCase().includes(q.toLowerCase())) : vocab, [q, vocab]);

  const tog = useCallback(w => setSel(p => p.find(x => x.r === w.r) ? p.filter(x => x.r !== w.r) : [...p, w]), []);
  const togCat = useCallback(c => setExp(p => ({...p, [c]: !p[c]})), []);

  const bg = {minHeight:'100vh',background:`radial-gradient(ellipse at top, ${C.abyss} 0%, ${C.zero} 50%, ${C.blood}30 100%)`,color:C.parchment,fontFamily:"'Palatino', serif"};
  const hdr = {background:`linear-gradient(90deg, ${C.zero} 0%, ${C.barzakh} 50%, ${C.zero} 100%)`,padding:'20px',textAlign:'center',borderBottom:`2px solid ${C.gold}`};
  const tabs = {...s.flex('center','center',4),...s.pad(10),background:C.zero,borderBottom:`1px solid ${C.tomb}`,overflowX:'auto'};
  const tBtn = a => ({...s.pad(8),...s.txt(11,a?C.zero:C.bone,a?'bold':'normal'),...s.bdr(a?C.gold:C.tomb,2,6),background:a?C.gold:'transparent',cursor:'pointer',whiteSpace:'nowrap'});
  const card = {...s.bg(C.shadow,0.9),...s.bdr(C.tomb,1,10),...s.pad(16),...s.shadow(0,4,20,'rgba(0,0,0,0.5)'),marginBottom:'14px'};
  const wBtn = sel_ => ({...s.pad(8),margin:'4px',...s.txt(16,sel_?'#fff':C.parchment,'bold'),...s.bdr(sel_?C.violet:C.tomb,2,8),background:sel_?C.purple:'transparent',cursor:'pointer'});
  const ruTxt = {...s.txt(20,C.candle,'bold')};
  const enTxt = {...s.txt(13,C.fog,'normal')};
  const cnt = {...s.pad(16),maxWidth:'900px',margin:'0 auto'};

  return (
    <div style={bg}>
      <div style={hdr}>
        <div style={{...s.txt(40,C.gold,'bold'),marginBottom:'8px'}}>١ ٠</div>
        <h1 style={{margin:0,...s.txt(24,C.gold,'bold'),letterSpacing:'3px'}}>РУССКИЙ ДВОРЕЦ ПАМЯТИ</h1>
        <p style={{margin:'6px 0 0',...s.txt(12,C.amber,'normal')}}>VERSION X — وحدة الوجود — Unity of Being</p>
        <p style={{margin:'4px 0 0',...s.txt(11,C.fog,'normal')}}>{vocab.length} words • All multiplicity returns to One</p>
      </div>

      <div style={tabs}>
        {[['unity','١٠ Unity'],['palace','🏚️ Palace'],['words','📖 Words'],['situations','🗣️ Situations'],['pegs','🔢 Pegs'],['builder','✍️ Builder'],['soul','🌙 Soul'],['quiz','💀 Quiz'],['philosophy','🌑 Philosophy']].map(([id,l]) =>
          <button key={id} onClick={() => setTab(id)} style={tBtn(tab===id)}>{l}</button>
        )}
      </div>

      <div style={cnt}>
        {/* UNITY TAB - Ibn Arabi's 1/0 Concept */}
        {tab === 'unity' && (
          <>
            <div style={{...card,textAlign:'center',borderColor:C.gold,background:`linear-gradient(135deg, ${C.barzakh} 0%, ${C.imaginal} 100%)`}}>
              <div style={{...s.txt(60,C.gold,'bold'),marginBottom:'16px'}}>١ ٠</div>
              <h2 style={{...s.txt(22,C.gold,'bold'),margin:'0 0 16px'}}>The Unity of Being</h2>
              <p style={{...s.txt(14,C.parchment,'normal'),lineHeight:1.8,maxWidth:'600px',margin:'0 auto'}}>{UNITY.one.concept}</p>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'14px'}}>
              <div style={{...card,borderLeft:`4px solid ${C.one}`}}>
                <h3 style={{...s.txt(18,C.gold,'bold'),margin:'0 0 8px'}}>١ ONE — {UNITY.one.arabic}</h3>
                <p style={{...s.txt(13,C.parchment,'normal'),lineHeight:1.7}}>{UNITY.one.principle}</p>
              </div>
              <div style={{...card,borderLeft:`4px solid ${C.zero}`}}>
                <h3 style={{...s.txt(18,C.fog,'bold'),margin:'0 0 8px'}}>٠ ZERO — {UNITY.zero.arabic}</h3>
                <p style={{...s.txt(13,C.parchment,'normal'),lineHeight:1.7}}>{UNITY.zero.principle}</p>
              </div>
            </div>

            <div style={{...card,borderColor:C.violet}}>
              <h3 style={{...s.txt(18,C.violet,'bold'),margin:'0 0 12px'}}>البرزخ — {UNITY.barzakh.arabic}</h3>
              <p style={{...s.txt(14,C.parchment,'normal'),lineHeight:1.8}}>{UNITY.barzakh.concept}</p>
              <p style={{...s.txt(13,C.amber,'normal'),marginTop:'12px',fontStyle:'italic'}}>{UNITY.barzakh.principle}</p>
            </div>

            <div style={{...card,textAlign:'center'}}>
              <p style={{...s.txt(16,C.candle,'normal'),fontStyle:'italic',margin:0}}>"كُلُّ شَيْءٍ هالِكٌ إِلَّا وَجْهَهُ"</p>
              <p style={{...s.txt(13,C.fog,'normal'),marginTop:'8px'}}>"Everything perishes except His Face" — Quran 28:88</p>
              <p style={{...s.txt(12,C.amber,'normal'),marginTop:'12px'}}>Every word you forget returns to the silence from which it came. Every word you remember is a face of meaning turned toward you.</p>
            </div>
          </>
        )}

        {/* PALACE */}
        {tab === 'palace' && st === null && (
          <>
            <div style={{...card,textAlign:'center',borderColor:C.gold}}>
              <h2 style={{...s.txt(20,C.gold,'bold'),margin:'0 0 8px'}}>🗝️ Nine Stations</h2>
              <p style={enTxt}>Nine loci between Being and Non-being</p>
              <label style={{...s.txt(12,C.fog,'normal'),display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',marginTop:'10px',cursor:'pointer'}}>
                <input type="checkbox" checked={showMnem} onChange={e => setShowMnem(e.target.checked)} /> Show mnemonics
              </label>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'14px'}}>
              {ST.map(x => (
                <div key={x.id} onClick={() => setSt(x.id)} style={{...card,cursor:'pointer',borderColor:x.c}}>
                  <div style={s.flex('flex-start','center',12)}>
                    <span style={{fontSize:'40px'}}>{x.i}</span>
                    <div><h3 style={{margin:0,...s.txt(18,x.c,'bold')}}>{x.n}</h3><p style={{margin:'2px 0 0',...enTxt}}>{x.e}</p></div>
                  </div>
                  {showMnem && <div style={{...s.flex('flex-start','center',6),marginTop:'10px'}}>{x.k.map((k,i) => <span key={i} style={{...s.txt(10,C.fog,'normal'),...s.bg(C.void,0.5),...s.pad(4),borderRadius:'4px'}}>{k}</span>)}</div>}
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'palace' && st !== null && (
          <>
            <button onClick={() => setSt(null)} style={{background:'none',border:'none',color:C.gold,cursor:'pointer',...s.txt(14,C.gold,'normal'),marginBottom:'12px'}}>← Return</button>
            <div style={{...card,borderColor:ST[st].c}}>
              <div style={s.flex('flex-start','center',16)}>
                <span style={{fontSize:'60px'}}>{ST[st].i}</span>
                <div><h2 style={{margin:0,...s.txt(26,ST[st].c,'bold')}}>{ST[st].n}</h2><p style={{margin:'4px 0',...enTxt}}>{ST[st].e}</p></div>
              </div>
              <div style={{...s.bg(C.void,0.3),...s.pad(14),borderRadius:'8px',marginTop:'14px',borderLeft:`3px solid ${C.crimson}`}}>
                <p style={{margin:0,...s.txt(16,C.candle,'normal'),fontStyle:'italic'}}>«{Q[st]?.r || Q[0].r}»</p>
                <p style={{margin:'8px 0',...enTxt}}>"{Q[st]?.e || Q[0].e}"</p>
              </div>
            </div>
            <div style={card}>
              <h3 style={{...s.txt(16,C.gold,'bold'),margin:'0 0 12px'}}>📖 Bound Words</h3>
              <div style={s.flex('flex-start','center',0)}>{vocab.slice(st*80, st*80+80).map(w => <button key={w.id} onClick={() => tog(w)} style={wBtn(sel.some(x => x.r === w.r))}><span style={ruTxt}>{w.r}</span>{showMnem && <span style={{...enTxt,display:'block'}}>{w.e}</span>}</button>)}</div>
            </div>
          </>
        )}

        {/* WORDS */}
        {tab === 'words' && (
          <>
            <div style={{...card,borderColor:C.gold}}>
              <h2 style={{...s.txt(20,C.gold,'bold'),margin:'0 0 12px'}}>📖 Lexicon ({vocab.length})</h2>
              <input type="text" placeholder="Search..." value={q} onChange={e => setQ(e.target.value)} style={{width:'100%',boxSizing:'border-box',...s.pad(12),...s.txt(15,C.parchment,'normal'),...s.bg(C.void),...s.bdr(C.tomb,1,8)}} />
              <label style={{...s.txt(12,C.fog,'normal'),display:'flex',alignItems:'center',gap:'8px',marginTop:'10px',cursor:'pointer'}}>
                <input type="checkbox" checked={showMnem} onChange={e => setShowMnem(e.target.checked)} /> Show translations
              </label>
            </div>
            {sel.length > 0 && (
              <div style={{...card,borderColor:C.violet,background:`${C.purple}20`}}>
                <h3 style={{...s.txt(14,C.violet,'bold'),margin:'0 0 8px'}}>✨ Selected ({sel.length})</h3>
                <p style={{...ruTxt,marginTop:'8px'}}>{sel.map(w => w.r).join(' ')}</p>
                <p style={enTxt}>{sel.map(w => w.e).join(' ')}</p>
                <button onClick={() => setSel([])} style={{marginTop:'10px',...s.pad(8),...s.bg(C.crimson),...s.bdr(C.crimson,0,6),color:'#fff',cursor:'pointer'}}>Clear</button>
              </div>
            )}
            {q ? (
              <div style={card}><h3 style={{...s.txt(14,C.gold,'bold'),margin:'0 0 10px'}}>Found ({filt.length})</h3>
                <div style={s.flex('flex-start','center',0)}>{filt.slice(0,100).map(w => <button key={w.id} onClick={() => tog(w)} style={wBtn(sel.some(x => x.r === w.r))}><span style={ruTxt}>{w.r}</span>{showMnem && <span style={enTxt}> {w.e}</span>}</button>)}</div>
              </div>
            ) : Object.entries(cats).filter(([c]) => !['sa','sr','sd','ss','se','st','sh','so'].includes(c)).map(([c, ws]) => (
              <div key={c} style={card}>
                <div onClick={() => togCat(c)} style={{...s.flex('space-between','center',0),cursor:'pointer'}}>
                  <h3 style={{...s.txt(16,C.gold,'bold'),margin:0}}>{catL[c]} ({ws.length})</h3>
                  <span style={{...s.txt(20,C.fog,'normal')}}>{exp[c] ? '▼' : '▶'}</span>
                </div>
                {!exp[c] && <div style={{...s.flex('flex-start','center',0),marginTop:'10px'}}>{ws.slice(0,8).map(w => <button key={w.id} onClick={e => {e.stopPropagation();tog(w);}} style={wBtn(sel.some(x=>x.r===w.r))}><span style={ruTxt}>{w.r}</span></button>)}<span style={{...s.txt(12,C.fog,'normal'),...s.pad(10)}}>...▶</span></div>}
                {exp[c] && <div style={{...s.flex('flex-start','center',0),marginTop:'10px'}}>{ws.map(w => <button key={w.id} onClick={() => tog(w)} style={wBtn(sel.some(x=>x.r===w.r))}><span style={ruTxt}>{w.r}</span>{showMnem && <span style={enTxt}> {w.e}</span>}</button>)}</div>}
              </div>
            ))}
          </>
        )}

        {/* SITUATIONS */}
        {tab === 'situations' && (
          <>
            <div style={{...card,textAlign:'center',borderColor:C.gold}}>
              <h2 style={{...s.txt(20,C.gold,'bold'),margin:'0 0 12px'}}>🗣️ Situational Phrases</h2>
              <p style={enTxt}>Real-world scenarios where you'll need Russian</p>
              <div style={{...s.flex('center','center',8),marginTop:'12px',flexWrap:'wrap'}}>
                {[['sa','✈️ Airport'],['sr','🍽️ Restaurant'],['sd','🏥 Doctor'],['ss','🛒 Shopping'],['se','🚨 Emergency'],['st','🚌 Transport'],['sh','🏨 Hotel'],['so','👋 Social']].map(([k,l]) => 
                  <button key={k} onClick={() => setSitCat(k)} style={{...s.pad(10),...s.txt(12,sitCat===k?C.void:C.bone,'bold'),...s.bdr(sitCat===k?C.gold:C.tomb,2,6),background:sitCat===k?C.gold:'transparent',cursor:'pointer'}}>{l}</button>
                )}
              </div>
            </div>
            <div style={card}>
              <h3 style={{...s.txt(16,C.gold,'bold'),margin:'0 0 14px'}}>{catL[sitCat]} ({cats[sitCat]?.length || 0} phrases)</h3>
              <div style={{display:'grid',gap:'8px'}}>
                {(cats[sitCat] || []).map((w,i) => (
                  <div key={i} onClick={() => tog(w)} style={{...s.bg(C.void,0.4),...s.pad(12),borderRadius:'8px',cursor:'pointer',borderLeft:`3px solid ${sel.some(x=>x.r===w.r)?C.violet:C.tomb}`}}>
                    <p style={{margin:0,...ruTxt,fontSize:'18px'}}>{w.r}</p>
                    <p style={{margin:'4px 0 0',...enTxt}}>{w.e}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* PEGS */}
        {tab === 'pegs' && (
          <>
            <div style={{...card,textAlign:'center',borderColor:C.gold}}>
              <h2 style={{...s.txt(20,C.gold,'bold'),margin:'0 0 8px'}}>🔢 Number Pegs</h2>
              <p style={enTxt}>From Zero (العدم) to Nine (completion)</p>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'10px'}}>
              {PEGS.map(p => (
                <div key={p.n} style={{...card,...s.flex('flex-start','center',10)}}>
                  <span style={{fontSize:'32px'}}>{p.i}</span>
                  <div><p style={{margin:0,...ruTxt}}>{p.n}. {p.r}</p><p style={{margin:'2px 0',...enTxt}}>{p.e}</p>{showMnem && <p style={{margin:'4px 0 0',...s.txt(10,C.amber,'normal')}}>{p.m}</p>}</div>
                </div>
              ))}
            </div>
            <div style={card}>
              <h3 style={{...s.txt(16,C.gold,'bold'),margin:'0 0 10px'}}>Major System</h3>
              <table style={{width:'100%',borderCollapse:'collapse'}}><tbody>
                {MAJOR.map(([d,r,e]) => <tr key={d} style={{borderBottom:`1px solid ${C.tomb}`}}><td style={{...s.pad(8),...s.txt(20,C.gold,'bold'),textAlign:'center'}}>{d}</td><td style={{...s.pad(8),...ruTxt}}>{r}</td><td style={{...s.pad(8),...enTxt}}>{e}</td></tr>)}
              </tbody></table>
            </div>
          </>
        )}

        {/* BUILDER */}
        {tab === 'builder' && (
          <>
            <div style={{...card,borderColor:C.violet}}>
              <h3 style={{...s.txt(16,C.violet,'bold'),margin:'0 0 12px'}}>✍️ Sentence Builder</h3>
              <div style={{...s.bg(C.void,0.5),...s.pad(16),borderRadius:'8px',minHeight:'60px'}}>
                {sel.length === 0 ? <p style={enTxt}>Select words from any tab to build sentences.</p> : <><p style={{...ruTxt,fontSize:'22px',margin:'0 0 8px'}}>{sel.map(w => w.r).join(' ')}</p><p style={enTxt}>{sel.map(w => w.e).join(' ')}</p></>}
              </div>
              <div style={{...s.flex('flex-start','center',10),marginTop:'12px'}}>
                <button onClick={() => setSel([])} style={{...s.pad(10),...s.bg(C.crimson),...s.bdr(C.crimson,0,6),color:'#fff',cursor:'pointer'}}>Clear</button>
                <button onClick={() => setSel(p => p.slice(0,-1))} style={{...s.pad(10),...s.bg(C.tomb),...s.bdr(C.tomb,0,6),color:C.parchment,cursor:'pointer'}}>← Remove</button>
              </div>
            </div>
            <div style={card}><h4 style={{...s.txt(14,C.gold,'bold'),margin:'0 0 10px'}}>Quick Pronouns</h4><div style={s.flex('flex-start','center',0)}>{['я','ты','он','она','мы','вы','они','это','кто','что'].map((w,i) => <button key={i} onClick={() => setSel(p => [...p, {r:w,e:''}])} style={wBtn(false)}><span style={ruTxt}>{w}</span></button>)}</div></div>
            <div style={card}><h4 style={{...s.txt(14,C.gold,'bold'),margin:'0 0 10px'}}>Quick Verbs</h4><div style={s.flex('flex-start','center',0)}>{cats.v.slice(0,16).map(w => <button key={w.id} onClick={() => setSel(p => [...p, w])} style={wBtn(false)}><span style={ruTxt}>{w.r}</span></button>)}</div></div>
          </>
        )}

        {/* SOUL */}
        {tab === 'soul' && (
          <>
            <div style={{...card,textAlign:'center',borderColor:C.violet}}>
              <h2 style={{...s.txt(20,C.violet,'bold'),margin:'0 0 8px'}}>🌙 Soul Cartography</h2>
              <p style={enTxt}>StrengthsFinder vocabulary</p>
            </div>
            {Object.entries(SOUL).map(([key, str]) => (
              <div key={key} style={{...card,borderLeft:`3px solid ${C.violet}`}}>
                <div onClick={() => setShowStrength(showStrength === key ? null : key)} style={{cursor:'pointer'}}>
                  <h3 style={{...s.txt(16,C.candle,'bold'),margin:'0 0 4px'}}>{str.n}</h3>
                  <p style={{...s.txt(12,C.fog,'normal'),margin:0}}>{str.e}</p>
                </div>
                {showStrength === key && <div style={{...s.flex('flex-start','center',0),marginTop:'12px'}}>{str.w.map(([r,e], i) => <button key={i} onClick={() => tog({r,e,cat:'soul'})} style={wBtn(sel.find(x => x.r === r))}><span style={{...ruTxt,fontSize:'14px'}}>{r}</span><span style={{...enTxt,display:'block'}}>{e}</span></button>)}</div>}
              </div>
            ))}
          </>
        )}

        {/* QUIZ */}
        {tab === 'quiz' && (
          <>
            <div style={{...card,textAlign:'center'}}><h2 style={{...s.txt(20,C.gold,'bold'),margin:'0 0 10px'}}>💀 Flashcard</h2><p style={enTxt}>{fi + 1} / {vocab.length}</p></div>
            <div style={{...card,textAlign:'center',...s.pad(40)}}>
              <p style={{...ruTxt,fontSize:'40px',margin:'0 0 20px'}}>{vocab[fi]?.r}</p>
              {ans && <p style={{...s.txt(24,C.parchment,'normal')}}>{vocab[fi]?.e}</p>}
              <div style={{...s.flex('center','center',14),marginTop:'30px'}}>
                <button onClick={() => {setFi(p => (p-1+vocab.length)%vocab.length);setAns(false);}} style={{...s.pad(14),...s.bg(C.tomb),...s.bdr(C.tomb,0,8),color:C.parchment,cursor:'pointer'}}>←</button>
                <button onClick={() => setAns(!ans)} style={{...s.pad(14),...s.bg(C.gold),...s.bdr(C.gold,0,8),color:C.void,cursor:'pointer',minWidth:'100px'}}>{ans ? 'Hide' : 'Reveal'}</button>
                <button onClick={() => {setFi(p => (p+1)%vocab.length);setAns(false);}} style={{...s.pad(14),...s.bg(C.tomb),...s.bdr(C.tomb,0,8),color:C.parchment,cursor:'pointer'}}>→</button>
              </div>
            </div>
          </>
        )}

        {/* PHILOSOPHY */}
        {tab === 'philosophy' && (
          <>
            <div style={{...card,textAlign:'center',borderColor:C.gold}}><h2 style={{...s.txt(20,C.gold,'bold'),margin:'0 0 8px'}}>🌑 Philosophy</h2></div>
            <div style={card}>
              <h3 style={{...s.txt(16,C.candle,'bold'),margin:'0 0 10px'}}>Ibn Arabi's Memory Teaching</h3>
              <p style={{...s.txt(14,C.parchment,'normal'),lineHeight:1.8}}>Ibn Arabi taught that the imagination (الخيال) is not fantasy but a real faculty that perceives the البرزخ—the isthmus between the spiritual and physical worlds. When you build a memory palace, you are working in this imaginal realm. Each word placed in a locus is a تجلي (tajalli)—a self-disclosure of meaning taking form.</p>
            </div>
            <div style={card}>
              <h3 style={{...s.txt(16,C.candle,'bold'),margin:'0 0 10px'}}>The Strugatsky Connection</h3>
              <p style={{...s.txt(14,C.parchment,'normal'),lineHeight:1.8}}>The Strugatsky brothers wrote of zones, institutes, and cities that exist between worlds—neither fully real nor unreal. Their artifacts, like Ibn Arabi's imaginal forms, carry meaning that transforms those who encounter them. The Zone is a barzakh. The memory palace is a zone.</p>
            </div>
          </>
        )}
      </div>

      <div style={{textAlign:'center',...s.pad(24),borderTop:`2px solid ${C.blood}`,marginTop:'30px',background:`${C.zero}`}}>
        <div style={{...s.txt(30,C.gold,'bold'),marginBottom:'8px'}}>١ ٠</div>
        <p style={{margin:0,...s.txt(16,C.candle,'normal')}}>«Счастье для всех, даром!»</p>
        <p style={{margin:'8px 0 0',...enTxt}}>All returns to the One</p>
      </div>
    </div>
  );
}
