import { appConfig } from '#/configs/config';

export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = `${appConfig.name}_access_token`;
export const LOCAL_STORAGE_REFRESH_TOKEN_KEY = `${appConfig.name}_refresh_token`;

// Token

export const getAccessToken = () => localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
  };
  
export const clearAccessToken = () => {
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
  };