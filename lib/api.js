import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api',
});

export const fetchAPI = async (path) => {
  try {
    const response = await api.get(path);
    return response.data;
  } catch (error) {
    console.error(`Error fetching API data at path ${path}:`, error.message);
    throw error;
  }
};
