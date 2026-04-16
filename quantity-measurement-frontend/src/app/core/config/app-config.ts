export type AppConfig = {
  apiBaseUrl: string;
  googleOAuthStartUrl: string;
  appName: string;
};

export const APP_CONFIG: AppConfig = {
  apiBaseUrl: 'http://localhost:8080',
  googleOAuthStartUrl: 'http://localhost:8080/oauth2/authorization/google',
  appName: 'Quantity Measurement'
};

