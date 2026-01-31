/**
 * Translation API types
 */

export interface TranslationQuery {
  source: string;
  target: string | null;
  word: string;
  match: string;
}

export interface TranslationResult {
  source_word: string;
  source_language: string;
  target_word: string;
  target_language: string;
  webonary_link: string;
}

export interface TranslationResponse {
  query: TranslationQuery;
  results: TranslationResult[];
  count: number;
}

export interface TranslationParams {
  source: string;
  word: string;
  match?: 'exact' | 'partial';
  limit?: number;
  target?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}
