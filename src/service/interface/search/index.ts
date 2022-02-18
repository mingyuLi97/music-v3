/*
 * @Description: 搜索相关
 * @Author: 李明宇
 * @Date: 2022-02-13 19:27:39
 */

import service from '@/service';

export interface SearchDefaultResponse {
  code: number;
  data: {
    showKeyword: string;
    realkeyword: string;
    searchType: number;
    action: number;
    alg: string;
    gap: number;
    bizQueryInfo: string;
  };
}

export function searchSong(keywords: string) {
  return service.get('/search', {
    params: {
      keywords
    }
  });
}

// 默认搜索关键词
export function searchDefault() {
  return service.get<any, SearchDefaultResponse>('/search/default');
}
