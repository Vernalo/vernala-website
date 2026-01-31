interface EnvConfig {
  apiUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

const getApiUrl = (): string => {
  const envApiUrl = import.meta.env.VITE_API_URL;

  if (envApiUrl) {
    return envApiUrl;
  }

  if (import.meta.env.DEV) {
    return "http://localhost:8000";
  }

  console.warn("VITE_API_URL not set, using default localhost");
  return "http://localhost:8000";
};

export const env: EnvConfig = {
  apiUrl: getApiUrl(),
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

if (env.isDevelopment) {
  console.log("Environment config:", {
    apiUrl: env.apiUrl,
    mode: import.meta.env.MODE,
  });
}
