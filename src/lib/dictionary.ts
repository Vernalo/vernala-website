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
    name: "Ghomala' (Coming soon)",
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
    name: "Bafut (Coming soon)",
    region: "West Cameroon",
    speakers: "100,000+",
    description:
      "A Grassfields Bantu language spoken by the Bafut people in the Great West Region of Cameroon.",
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
};

// French to Cameroonian languages dictionary
export const frenchDictionary: Dictionary = {
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
  // ghomala: createReverseDictionary(englishDictionary.ghomala),
  ngiemboon: createReverseDictionary(englishDictionary.ngiemboon),
  // bafut: createReverseDictionary(englishDictionary.bafut),
};

export const reverseFrenchDictionary: Dictionary = {
  // ghomala: createReverseDictionary(frenchDictionary.ghomala),
  ngiemboon: createReverseDictionary(frenchDictionary.ngiemboon),
  // bafut: createReverseDictionary(frenchDictionary.bafut),
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
