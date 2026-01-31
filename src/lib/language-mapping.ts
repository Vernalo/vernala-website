export const LANGUAGE_CODE_MAP: Record<string, string> = {
  english: "en",
  french: "fr",
  ngiemboon: "nnh",
  bafut: "bft",
  ghomala: "bbj",
};

export const toApiLanguageCode = (frontendCode: string): string => {
  return LANGUAGE_CODE_MAP[frontendCode] || frontendCode;
};

export const toFrontendLanguageCode = (apiCode: string): string => {
  const entry = Object.entries(LANGUAGE_CODE_MAP).find(
    ([, value]) => value === apiCode,
  );
  return entry ? entry[0] : apiCode;
};
