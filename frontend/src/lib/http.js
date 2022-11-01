import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1/';

const http = axios.create({ baseURL: API_BASE_URL });

export default http;
