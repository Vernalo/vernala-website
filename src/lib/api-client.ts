/**
 * API Client for translation service
 * Handles HTTP requests and error handling
 */

import axios, { AxiosError, AxiosInstance } from 'axios';
import { env } from '@/config/env';
import type {
  TranslationResponse,
  TranslationParams,
  ApiError,
} from '@/types/api';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: env.apiUrl,
      timeout: 10000, // 10 second timeout
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor for logging in development
    this.client.interceptors.request.use(
      (config) => {
        if (env.isDevelopment) {
          console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, config.params);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => {
        if (env.isDevelopment) {
          console.log('API Response:', response.data);
        }
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(this.handleError(error));
      }
    );
  }

  /**
   * Handles API errors and converts them to a consistent format
   */
  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      let message = 'An error occurred while communicating with the server';

      switch (status) {
        case 400:
          message = 'Invalid request. Please check your input.';
          break;
        case 404:
          message = 'Translation service not found. Please check the API URL.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          break;
        case 503:
          message = 'Service unavailable. Please try again later.';
          break;
      }

      return {
        message,
        status,
        code: error.code,
      };
    } else if (error.request) {
      // Request made but no response received
      return {
        message: 'Unable to reach the translation service. Please check your connection and ensure the API is running.',
        code: error.code,
      };
    } else {
      // Error setting up the request
      return {
        message: error.message || 'An unexpected error occurred',
        code: error.code,
      };
    }
  }

  /**
   * Translates a word from source language to target language(s)
   */
  async translate(params: TranslationParams): Promise<TranslationResponse> {
    try {
      const response = await this.client.get<TranslationResponse>('/translate', {
        params: {
          source: params.source,
          word: params.word,
          match: params.match || 'exact',
          limit: params.limit || 10,
          ...(params.target && { target: params.target }),
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Health check endpoint (if available)
   */
  async healthCheck(): Promise<boolean> {
    try {
      await this.client.get('/health');
      return true;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export convenience method
export const translateWord = (params: TranslationParams) =>
  apiClient.translate(params);
