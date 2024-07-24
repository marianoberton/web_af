// lib/api.js
import axios from 'axios';

export async function fetchAPI(endpoint) {
  const apiUrl = process.env.STRAPI_API_URL || 'http://127.0.0.1:1337/api';
  try {
    const response = await axios.get(`${apiUrl}${endpoint}`);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
