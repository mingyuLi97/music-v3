import axios from 'axios';
import { DEFAULT_CONFIG } from './config';

const service = axios.create(DEFAULT_CONFIG);

service.interceptors.request.use(config => {
  const { method, params } = config;
  const headers: any = {};
  if (method === 'get') {
    // headers['Cache-Control'] = 'no-cache';
  }
  return {
    ...config,
    headers
  };
});

export default service;
