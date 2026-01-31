/**
 * Environment configuration
 * Loads and validates environment variables
 */

interface EnvConfig {
  apiUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

// Get API URL from environment variables or use default
const getApiUrl = (): string => {
  // Vite exposes env variables with VITE_ prefix
  const envApiUrl = import.meta.env.VITE_API_URL;

  if (envApiUrl) {
    return envApiUrl;
  }

  // Default to localhost in development
  if (import.meta.env.DEV) {
    return 'http://localhost:8000';
  }

  // In production, this should be set via environment variable
  console.warn('VITE_API_URL not set, using default localhost');
  return 'http://localhost:8000';
};

export const env: EnvConfig = {
  apiUrl: getApiUrl(),
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

// Log configuration in development
if (env.isDevelopment) {
  console.log('Environment config:', {
    apiUrl: env.apiUrl,
    mode: import.meta.env.MODE,
  });
}
