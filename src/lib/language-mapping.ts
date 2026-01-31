/**
 * Language code mapping between frontend and API
 * Maps frontend language codes to API language codes
 */

export const LANGUAGE_CODE_MAP: Record<string, string> = {
  english: 'en',
  french: 'fr',
  ngiemboon: 'nnh',
  bafut: 'bft',
  ghomala: 'bbj',
};

/**
 * Converts frontend language code to API language code
 */
export const toApiLanguageCode = (frontendCode: string): string => {
  return LANGUAGE_CODE_MAP[frontendCode] || frontendCode;
};

/**
 * Converts API language code to frontend language code
 */
export const toFrontendLanguageCode = (apiCode: string): string => {
  const entry = Object.entries(LANGUAGE_CODE_MAP).find(
    ([, value]) => value === apiCode
  );
  return entry ? entry[0] : apiCode;
};
