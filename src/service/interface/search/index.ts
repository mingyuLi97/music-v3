/*
 * @Description: 搜索相关
 * @Author: 李明宇
 * @Date: 2022-02-13 19:27:39
 */

import service from '@/service';

export function searchSong(keywords: string) {
  return service.get('/search', {
    params: {
      keywords
    }
  });
}
