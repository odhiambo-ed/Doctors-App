import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

const http = axios.create({ baseURL: API_BASE_URL });

export default http;
