import axios, { type AxiosError, type AxiosInstance } from "axios";
import { env } from "@/config/env";
import type {
  TranslationResponse,
  TranslationParams,
  ApiError,
  LanguagesResponse,
} from "@/types/api";

class ApiClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: env.apiUrl,
      timeout: 10000, // 10 second timeout
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.request.use(
      (config) => {
        if (env.isDevelopment) {
          console.log(
            `API Request: ${config.method?.toUpperCase()} ${config.url}`,
            config.params,
          );
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      (response) => {
        if (env.isDevelopment) {
          console.log("API Response:", response.data);
        }
        return response;
      },
      (error: AxiosError) => {
        const apiError = this.handleError(error);
        const errorObj = new Error(apiError.message);
        Object.assign(errorObj, apiError);
        return Promise.reject(errorObj);
      },
    );
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      const status = error.response.status;
      let message = "An error occurred while communicating with the server";

      switch (status) {
        case 400:
          message = "Invalid request. Please check your input.";
          break;
        case 404:
          message = "Translation service not found. Please check the API URL.";
          break;
        case 500:
          message = "Server error. Please try again later.";
          break;
        case 503:
          message = "Service unavailable. Please try again later.";
          break;
      }

      return {
        message,
        status,
        code: error.code,
      };
    } else if (error.request) {
      return {
        message:
          "Unable to reach the translation service. Please check your connection and ensure the API is running.",
        code: error.code,
      };
    } else {
      return {
        message: error.message || "An unexpected error occurred",
        code: error.code,
      };
    }
  }

  async translate(params: TranslationParams): Promise<TranslationResponse> {
    const response = await this.client.get<TranslationResponse>("/translate", {
      params: {
        source: params.source,
        word: params.word,
        match: params.match || "exact",
        limit: params.limit || 10,
        ...(params.target && { target: params.target }),
      },
    });

    return response.data;
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.client.get("/health");
      return true;
    } catch {
      return false;
    }
  }

  async getLanguages(): Promise<LanguagesResponse> {
    const response = await this.client.get<LanguagesResponse>("/languages");
    return response.data;
  }
}

export const apiClient = new ApiClient();

export const translateWord = (params: TranslationParams) =>
  apiClient.translate(params);

export const getLanguages = () => apiClient.getLanguages();
