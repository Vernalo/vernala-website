export interface Language {
  code: string;
  name: string;
  region: string;
  speakers: string;
  description: string;
  type: "source" | "target" | "both";
}

export const languages: Language[] = [
  {
    code: "english",
    name: "English",
    region: "International",
    speakers: "1.5+ billion",
    description:
      "Global lingua franca and one of Cameroon's official languages.",
    type: "both",
  },
  {
    code: "french",
    name: "French",
    region: "International",
    speakers: "300+ million",
    description: "Global language and one of Cameroon's official languages.",
    type: "both",
  },
  {
    code: "ghomala",
    name: "Ghomala'",
    region: "West Cameroon",
    speakers: "1+ million",
    description:
      "A Grassfields Bantu language spoken by the Bamileke people in the West Region of Cameroon.",
    type: "both",
  },
  {
    code: "ngiemboon",
    name: "Ngiemboon",
    region: "West Cameroon",
    speakers: "100,000+",
    description:
      "A Grassfields Bantu language spoken in the Menoua division of the West Region of Cameroon.",
    type: "both",
  },
  {
    code: "bafut",
    name: "Bafut",
    region: "Northwest Cameroon",
    speakers: "100,000+",
    description:
      "A Grassfields Bantu language spoken by the Bafut people in the Northwest Region of Cameroon.",
    type: "both",
  },
];

// Translation rules: source -> allowed targets
export const translationRules: Record<string, string[]> = {
  english: ["ngiemboon"],
  french: ["ngiemboon"],
  // ghomala: ["french"],
  ngiemboon: ["english", "french"],
  // bafut: ["english", "french"],
};

// Get allowed target languages for a source language
export function getTargetLanguages(sourceCode: string): Language[] {
  const allowedCodes = translationRules[sourceCode] || [];
  return languages.filter((lang) => allowedCodes.includes(lang.code));
}

// Get allowed source languages
export function getSourceLanguages(): Language[] {
  return languages.filter((lang) =>
    Object.keys(translationRules).includes(lang.code),
  );
}

// Dictionary type definition
export type Dictionary = Record<string, Record<string, string>>;

// English to Cameroonian languages dictionary
export const englishDictionary: Dictionary = {
  ngiemboon: {
    hello: "mbwò",
    goodbye: "kàa wɔ́",
    welcome: "kàbɔ́",
    thanks: "àkìbà",
    please: "ngə̀",
    sorry: "mbɔ̀ɔ́",
    yes: "ìì",
    no: "àà",
    mother: "màà",
    father: "tàà",
    child: "mwàn",
    children: "pɔ́n",
    brother: "ndɔ̀m",
    sister: "njwè",
    family: "ndà",
    husband: "fà",
    wife: "kɛ̀",
    water: "njì",
    fire: "mɔ̀",
    sun: "nàm",
    moon: "njwè",
    earth: "nsì",
    rain: "mvə̀",
    tree: "tì",
    food: "mbɔ́",
    meat: "nàm",
    fish: "shì",
    head: "thì",
    eye: "lì",
    ear: "tòŋ",
    mouth: "shwə̀",
    hand: "pù",
    foot: "kwɔ̀",
    heart: "ntə̀m",
    dog: "mbvù",
    cat: "pùsì",
    chicken: "kwàp",
    goat: "mbì",
    cow: "nàk",
    bird: "nɔ̀n",
    snake: "nyə̀",
    eat: "pfà",
    drink: "nwɔ́",
    sleep: "lyàp",
    walk: "ghɛ̀",
    run: "khì",
    speak: "ghɔ̀",
    listen: "yù",
    see: "yɛ̀",
    come: "zə̀",
    go: "ghɛ̀",
    give: "hà",
    take: "kwè",
    love: "kɔ̀ŋ",
    work: "fà",
    one: "mɔ̀",
    two: "pfɔ̀",
    three: "tàà",
    four: "kwà",
    five: "tàn",
    six: "ntùk",
    seven: "sàmbɔ̀",
    eight: "hɔ̀m",
    nine: "fwà",
    ten: "ghàm",
    today: "nkɛ̀",
    tomorrow: "mbɔ̀ŋ",
    yesterday: "zhwɔ́",
    morning: "tə̀ŋ",
    evening: "tsə̀m",
    night: "tə̀sə̀",
    good: "pùŋ",
    bad: "bɛ̀",
    big: "ghɔ̀",
    small: "kɛ̀tì",
    hot: "hàk",
    cold: "vyə̀",
    new: "fə̀fɔ̀",
    old: "lɔ̀",
    house: "ndà",
    road: "mə̀zhyə̀",
    village: "pə̀",
    market: "pàt",
    money: "ŋkàp",
    friend: "ndɔ̀m",
    king: "fɔ̀",
    god: "nsì",
    peace: "mfɛ̀",
    life: "lwə̀",
    death: "kwù",
    name: "lì",
    person: "mɔ̀",
    people: "pɔ̀",
    man: "fà",
    woman: "kɛ̀",
    boy: "mwàn fà",
    girl: "mwàn kɛ̀",
  },

  bafut: {
    hello: "àkòbə́",
    goodbye: "kàwɔ́",
    welcome: "àkɔ̀bɔ́",
    thanks: "àbùy",
    please: "ngə̀",
    sorry: "àsàwə̀",
    yes: "ǹnì",
    no: "bɛ̀ɛ̀",
    mother: "màà",
    father: "tàà",
    child: "mwàn",
    children: "bɔ̀n",
    brother: "ndɔ̀m",
    sister: "wìdzì",
    family: "ndà",
    husband: "mbɛ̀",
    wife: "ngɔ̀",
    water: "ǹdzù",
    fire: "mɔ̀ʔ",
    sun: "nɔ̀ɔ́m",
    moon: "ǹsɔ́",
    earth: "ǹsì",
    rain: "ǹdzù",
    tree: "tì",
    food: "ǹjɔ̀",
    meat: "nàm",
    fish: "shwì",
    head: "àtùʔù",
    eye: "ǹdìsì",
    ear: "àtòʔ",
    mouth: "ǹnùʔù",
    hand: "àwɔ̀",
    foot: "àkùʔù",
    heart: "ǹtɛ̀m",
    dog: "ǹbvù",
    cat: "pùsì",
    chicken: "ǹgàʔ",
    goat: "ǹbɛ̀",
    cow: "ǹnàk",
    bird: "ǹnɔ̀n",
    snake: "ǹnyɔ̀",
    eat: "jyɛ̀",
    drink: "ǹywɔ́",
    sleep: "lyɔ̀p",
    walk: "ghɛ̀",
    run: "ǹkwì",
    speak: "ghàà",
    listen: "yùʔù",
    see: "yɛ̀nì",
    come: "zə̀",
    go: "ghɛ̀",
    give: "fɛ̀",
    take: "kwɛ̀",
    love: "kɔ́ŋnì",
    work: "fàʔ",
    one: "ǹmɔ̀ʔ",
    two: "ǹbàʔ",
    three: "ǹtàʔ",
    four: "ǹkwà",
    five: "ǹtàʔàn",
    six: "ǹtùʔùk",
    seven: "àsàmbàʔ",
    eight: "àfùàm",
    nine: "àbwùm",
    ten: "ǹghàm",
    today: "ǹsòʔò",
    tomorrow: "àjwì",
    yesterday: "ànyì",
    morning: "àtɔ̀ŋkì",
    evening: "àtsɛ̀m",
    night: "àtsɛ̀sə̀",
    good: "mbɔ̀ŋ",
    bad: "bɛ̀",
    big: "àghɔ̀",
    small: "kɛ̀kɛ̀",
    hot: "àhàk",
    cold: "àvyə̀",
    new: "àfìfɔ̀",
    old: "àlɔ̀",
    house: "ǹdà",
    road: "àmə̀zhyə̀",
    village: "àlà",
    market: "ǹtɔ̀ʔɔ̀",
    money: "ǹkàp",
    friend: "ndɔ̀m",
    king: "fɔ̀n",
    god: "ǹywì",
    peace: "ǹbɔ̀ŋ",
    life: "ǹtsɛ̀m",
    death: "ǹkù",
    name: "ǹdzìnì",
    person: "ǹnù",
    people: "bɔ̀ʔɔ̀",
    man: "ǹnù mbɛ̀",
    woman: "ǹnù ngɔ̀",
    boy: "mwàn mbɛ̀",
    girl: "mwàn ngɔ̀",
  },
};

// French to Cameroonian languages dictionary
export const frenchDictionary: Dictionary = {
  ghomala: {
    bonjour: "mbʉ́",
    "au revoir": "kə̄ yī",
    bienvenue: "ɑ́ pɑ̄ɑ́",
    merci: "ŋkwə́tə́",
    "s'il vous plaît": "ghə̀",
    pardon: "pɔ̀p",
    oui: "ə́ə̄",
    non: "kɑ̀",
    mère: "mɑ́",
    père: "tɑ́",
    enfant: "mwɑ̀n",
    enfants: "pɔ́",
    frère: "dzʉ̀ mbɛ́",
    soeur: "dzʉ̀ mjwì",
    famille: "ndāp",
    mari: "mbɛ́",
    femme: "mjwì",
    eau: "shyə̀",
    feu: "mɔ̀k",
    soleil: "nām",
    lune: "jwə́",
    terre: "sī",
    pluie: "mvʉ̀",
    arbre: "tʉ́",
    nourriture: "tsɑ́",
    viande: "nɑ̀m",
    poisson: "shwə́",
    tête: "thʉ́",
    oeil: "lʉ́",
    oreille: "tóŋ",
    bouche: "shwə́",
    main: "pú",
    pied: "kwɔ́",
    coeur: "ntʉ̀m",
    chien: "mbvʉ́",
    chat: "pùsì",
    poulet: "kwɑ̀p",
    chèvre: "mbʉ̀",
    vache: "nɑ́k",
    oiseau: "nɔ̀m",
    serpent: "nyʉ̀",
    manger: "pfɑ́",
    boire: "nwə́",
    dormir: "lyə̄p",
    marcher: "ghɛ̄",
    courir: "khʉ́",
    parler: "ghɔ̀m",
    écouter: "yú",
    voir: "yɛ́",
    venir: "sɔ̄",
    aller: "ghɛ̄",
    donner: "hɑ́",
    prendre: "kwì",
    aimer: "kə̀ŋnə́",
    travailler: "fɑ̀",
    un: "mɔ̀",
    deux: "pfʉ̀ɑ́",
    trois: "tɑ́rə́",
    quatre: "kwɑ́",
    cinq: "tɑ̂n",
    six: "ntɔ̀k",
    sept: "sɑ̀mbʉ́ɑ́",
    huit: "hɔ̀m",
    neuf: "pfʉ̀ɑ́ kə́ kwɑ́",
    dix: "ghɑ̀m",
    "aujourd'hui": "lɑ̀",
    demain: "mfə́ŋ",
    hier: "zhwə́",
    matin: "tə́ŋ",
    soir: "tsʉ́m",
    nuit: "tə̀sʉ́",
    bon: "pùŋ",
    mauvais: "bɛ́",
    grand: "gɑ̀p",
    petit: "kə̀tí",
    chaud: "hɑ̀k",
    froid: "vyə̀",
    nouveau: "fə́fɔ́",
    vieux: "lɑ̀",
    maison: "ndāp",
    route: "mə̀zhyə́",
    village: "pə̄",
    marché: "pàt",
    argent: "ŋkɑ́p",
    ami: "dzʉ̀",
    roi: "fɔ̀",
    dieu: "sī",
    paix: "mfɛ̄",
    vie: "lwə̀",
    mort: "vʉ́",
    nom: "lí",
    personne: "mɔ̀",
    gens: "pɔ̀",
    homme: "mbɛ́",
    garçon: "mwɑ̀n mbɛ́",
    fille: "mwɑ̀n mjwì",
  },

  ngiemboon: {
    bonjour: "mbwò",
    "au revoir": "kàa wɔ́",
    bienvenue: "kàbɔ́",
    merci: "àkìbà",
    "s'il vous plaît": "ngə̀",
    pardon: "mbɔ̀ɔ́",
    oui: "ìì",
    non: "àà",
    mère: "màà",
    père: "tàà",
    enfant: "mwàn",
    enfants: "pɔ́n",
    frère: "ndɔ̀m",
    soeur: "njwè",
    famille: "ndà",
    mari: "fà",
    femme: "kɛ̀",
    eau: "njì",
    feu: "mɔ̀",
    soleil: "nàm",
    lune: "njwè",
    terre: "nsì",
    pluie: "mvə̀",
    arbre: "tì",
    nourriture: "mbɔ́",
    viande: "nàm",
    poisson: "shì",
    tête: "thì",
    oeil: "lì",
    oreille: "tòŋ",
    bouche: "shwə̀",
    main: "pù",
    pied: "kwɔ̀",
    coeur: "ntə̀m",
    chien: "mbvù",
    chat: "pùsì",
    poulet: "kwàp",
    chèvre: "mbì",
    vache: "nàk",
    oiseau: "nɔ̀n",
    serpent: "nyə̀",
    manger: "pfà",
    boire: "nwɔ́",
    dormir: "lyàp",
    marcher: "ghɛ̀",
    courir: "khì",
    parler: "ghɔ̀",
    écouter: "yù",
    voir: "yɛ̀",
    venir: "zə̀",
    aller: "ghɛ̀",
    donner: "hà",
    prendre: "kwè",
    aimer: "kɔ̀ŋ",
    travailler: "fà",
    un: "mɔ̀",
    deux: "pfɔ̀",
    trois: "tàà",
    quatre: "kwà",
    cinq: "tàn",
    six: "ntùk",
    sept: "sàmbɔ̀",
    huit: "hɔ̀m",
    neuf: "fwà",
    dix: "ghàm",
    "aujourd'hui": "nkɛ̀",
    demain: "mbɔ̀ŋ",
    hier: "zhwɔ́",
    matin: "tə̀ŋ",
    soir: "tsə̀m",
    nuit: "tə̀sə̀",
    bon: "pùŋ",
    mauvais: "bɛ̀",
    grand: "ghɔ̀",
    petit: "kɛ̀tì",
    chaud: "hàk",
    froid: "vyə̀",
    nouveau: "fə̀fɔ̀",
    vieux: "lɔ̀",
    maison: "ndà",
    route: "mə̀zhyə̀",
    village: "pə̀",
    marché: "pàt",
    argent: "ŋkàp",
    ami: "ndɔ̀m",
    roi: "fɔ̀",
    dieu: "nsì",
    paix: "mfɛ̀",
    vie: "lwə̀",
    mort: "kwù",
    nom: "lì",
    personne: "mɔ̀",
    gens: "pɔ̀",
    homme: "fà",
    garçon: "mwàn fà",
    fille: "mwàn kɛ̀",
  },

  bafut: {
    bonjour: "àkòbə́",
    "au revoir": "kàwɔ́",
    bienvenue: "àkɔ̀bɔ́",
    merci: "àbùy",
    "s'il vous plaît": "ngə̀",
    pardon: "àsàwə̀",
    oui: "ǹnì",
    non: "bɛ̀ɛ̀",
    mère: "màà",
    père: "tàà",
    enfant: "mwàn",
    enfants: "bɔ̀n",
    frère: "ndɔ̀m",
    soeur: "wìdzì",
    famille: "ndà",
    mari: "mbɛ̀",
    femme: "ngɔ̀",
    eau: "ǹdzù",
    feu: "mɔ̀ʔ",
    soleil: "nɔ̀ɔ́m",
    lune: "ǹsɔ́",
    terre: "ǹsì",
    pluie: "ǹdzù",
    arbre: "tì",
    nourriture: "ǹjɔ̀",
    viande: "nàm",
    poisson: "shwì",
    tête: "àtùʔù",
    oeil: "ǹdìsì",
    oreille: "àtòʔ",
    bouche: "ǹnùʔù",
    main: "àwɔ̀",
    pied: "àkùʔù",
    coeur: "ǹtɛ̀m",
    chien: "ǹbvù",
    chat: "pùsì",
    poulet: "ǹgàʔ",
    chèvre: "ǹbɛ̀",
    vache: "ǹnàk",
    oiseau: "ǹnɔ̀n",
    serpent: "ǹnyɔ̀",
    manger: "jyɛ̀",
    boire: "ǹywɔ́",
    dormir: "lyɔ̀p",
    marcher: "ghɛ̀",
    courir: "ǹkwì",
    parler: "ghàà",
    écouter: "yùʔù",
    voir: "yɛ̀nì",
    venir: "zə̀",
    aller: "ghɛ̀",
    donner: "fɛ̀",
    prendre: "kwɛ̀",
    aimer: "kɔ́ŋnì",
    travailler: "fàʔ",
    un: "ǹmɔ̀ʔ",
    deux: "ǹbàʔ",
    trois: "ǹtàʔ",
    quatre: "ǹkwà",
    cinq: "ǹtàʔàn",
    six: "ǹtùʔùk",
    sept: "àsàmbàʔ",
    huit: "àfùàm",
    neuf: "àbwùm",
    dix: "ǹghàm",
    "aujourd'hui": "ǹsòʔò",
    demain: "àjwì",
    hier: "ànyì",
    matin: "àtɔ̀ŋkì",
    soir: "àtsɛ̀m",
    nuit: "àtsɛ̀sə̀",
    bon: "mbɔ̀ŋ",
    mauvais: "bɛ̀",
    grand: "àghɔ̀",
    petit: "kɛ̀kɛ̀",
    chaud: "àhàk",
    froid: "àvyə̀",
    nouveau: "àfìfɔ̀",
    vieux: "àlɔ̀",
    maison: "ǹdà",
    route: "àmə̀zhyə̀",
    village: "àlà",
    marché: "ǹtɔ̀ʔɔ̀",
    argent: "ǹkàp",
    ami: "ndɔ̀m",
    roi: "fɔ̀n",
    dieu: "ǹywì",
    paix: "ǹbɔ̀ŋ",
    vie: "ǹtsɛ̀m",
    mort: "ǹkù",
    nom: "ǹdzìnì",
    personne: "ǹnù",
    gens: "bɔ̀ʔɔ̀",
    homme: "ǹnù mbɛ̀",
    garçon: "mwàn mbɛ̀",
    fille: "mwàn ngɔ̀",
  },
};

// Helper function to create reverse dictionary
function createReverseDictionary(
  dict: Record<string, string>,
): Record<string, string> {
  const reversed: Record<string, string> = {};
  for (const [key, value] of Object.entries(dict)) {
    reversed[value.toLowerCase()] = key;
  }
  return reversed;
}

// Reverse dictionaries for vernacular to English/French
export const reverseEnglishDictionary: Dictionary = {
  ghomala: createReverseDictionary(englishDictionary.ghomala),
  ngiemboon: createReverseDictionary(englishDictionary.ngiemboon),
  bafut: createReverseDictionary(englishDictionary.bafut),
};

export const reverseFrenchDictionary: Dictionary = {
  ghomala: createReverseDictionary(frenchDictionary.ghomala),
  ngiemboon: createReverseDictionary(frenchDictionary.ngiemboon),
  bafut: createReverseDictionary(frenchDictionary.bafut),
};

// Main translation function
export function translateWord(
  word: string,
  sourceLanguage: string,
  targetLanguage: string,
): string | null {
  const normalizedWord = word.toLowerCase().trim();

  // English to Cameroonian
  if (sourceLanguage === "english" && englishDictionary[targetLanguage]) {
    return englishDictionary[targetLanguage][normalizedWord] || null;
  }

  // French to Cameroonian
  if (sourceLanguage === "french" && frenchDictionary[targetLanguage]) {
    return frenchDictionary[targetLanguage][normalizedWord] || null;
  }

  // Cameroonian to English
  if (
    targetLanguage === "english" &&
    reverseEnglishDictionary[sourceLanguage]
  ) {
    return reverseEnglishDictionary[sourceLanguage][normalizedWord] || null;
  }

  // Cameroonian to French
  if (targetLanguage === "french" && reverseFrenchDictionary[sourceLanguage]) {
    return reverseFrenchDictionary[sourceLanguage][normalizedWord] || null;
  }

  return null;
}

// Get word count for a language pair
export function getWordCount(
  sourceLanguage: string,
  targetLanguage: string,
): number {
  if (sourceLanguage === "english" && englishDictionary[targetLanguage]) {
    return Object.keys(englishDictionary[targetLanguage]).length;
  }
  if (sourceLanguage === "french" && frenchDictionary[targetLanguage]) {
    return Object.keys(frenchDictionary[targetLanguage]).length;
  }
  if (
    targetLanguage === "english" &&
    reverseEnglishDictionary[sourceLanguage]
  ) {
    return Object.keys(reverseEnglishDictionary[sourceLanguage]).length;
  }
  if (targetLanguage === "french" && reverseFrenchDictionary[sourceLanguage]) {
    return Object.keys(reverseFrenchDictionary[sourceLanguage]).length;
  }
  return 0;
}

// Get example words for hints
export function getExampleWords(sourceLanguage: string): string[] {
  if (sourceLanguage === "english") {
    return ["love", "family", "peace"];
  }
  if (sourceLanguage === "french") {
    return ["merci", "famille", "paix"];
  }
  if (sourceLanguage === "ngiemboon") {
    return ["nkwòŋe", "tsìŋe ndá", "mbʉ́lè"];
  }
  return [];
}
