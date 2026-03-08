import axios from 'axios';

const STEAM_API_KEY = 'ТВОЙ_КЛЮЧ'; // В .env для безопасности: import.meta.env.VITE_STEAM_KEY
const api = axios.create({ baseURL: 'https://api.steampowered.com' });

export const getGames = async () => {
  const response = await api.get('/ISteamApps/GetAppList/v2/', { params: { key: STEAM_API_KEY } });
  return response.data.applist.apps; // Массив {appid, name}
};

export const getGameDetails = async (appId) => {
  const response = await api.get('/IStoreService/GetAppInfo/v1/', { params: { appids: appId, key: STEAM_API_KEY } });
  return response.data[appId].data; // Детали: цена, описание, изображения
};