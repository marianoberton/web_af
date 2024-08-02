// lib/api.js
import axios from 'axios';

export async function fetchAPI(endpoint) {
  const apiUrl = process.env.STRAPI_API_URL || 'http://127.0.0.1:1337';
  try {
    const response = await axios.get(`${apiUrl}/api${endpoint}`);
    console.log('Data fetched from API:', response.data); // Verificar los datos recibidos
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
