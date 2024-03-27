import axios from 'axios';

const api = axios.create({

  baseURL: 'https://sell-iphone-backend-production.up.railway.app/api/device/',
  headers: { 'Content-Type': 'application/json' }});


export default api;

