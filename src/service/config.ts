import { AxiosRequestConfig } from 'axios';

export const DEFAULT_CONFIG = {
  // 基础url前缀
  baseURL: 'api',
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json'
} as AxiosRequestConfig;
