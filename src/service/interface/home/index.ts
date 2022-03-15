/*
 * @Description: homepage
 * @Author: 李明宇
 * @Date: 2022-02-20 20:42:27
 */

import service, { IBaseResponse } from '@/service';
import { IUIElement, ICreative, ActionType } from '@types';

export interface IBannerInfo {}

type HomePageResponse = IBaseResponse<{
  cursor: string;
  blocks: Block[];
  hasMore: boolean;
  pageConfig: {
    nodataToast: string;
  };
}>;

export type Block = IHomePageBannerBlock | HomePageBlock;

interface HomePageBlock {
  blockCode?: string;
  showType:
    | 'BANNER'
    | 'SHUFFLE_MUSIC_CALENDAR'
    | 'DRAGON_BALL'
    | 'HOMEPAGE_SLIDE_SONGLIST_ALIGN'
    | 'HOMEPAGE_SLIDE_PLAYLIST';
  uiElement?: IUIElement;
  creatives?: ICreative[];
  extInfo?: {
    banners?: IBannerInfo[];
  };
}

export interface IHomePageBannerBlock extends HomePageBlock {
  showType: 'BANNER';
  extInfo: {
    banners: {
      pic: string;
      url: string;
      typeTitle: string;
      titleColor: string;
    }[];
  };
}

export interface IHomePageSlidePlaylistBlock extends HomePageBlock {
  showType: 'HOMEPAGE_SLIDE_PLAYLIST';
  uiElement: IUIElement;
  creatives: ICreative[];
  action: string;
  actionType: ActionType;
}

export interface IHomePageStyleRecommendBlock extends HomePageBlock {
  showType: 'HOMEPAGE_SLIDE_SONGLIST_ALIGN';
  uiElement: IUIElement;
  creatives: ICreative[];
}

export interface IHomePageDragonBall {
  id: string;
  name: string;
  iconUrl: string;
  url: string;
  skinSupport: boolean;
  homepageMode: string;
}

export function getHomepage(refresh = false, cursor = '') {
  return service.get<any, HomePageResponse>('/homepage/block/page', {
    params: {
      refresh,
      cursor
    }
  });
}

export function getHomepageDragonBall() {
  return service.get<any, IBaseResponse<IHomePageDragonBall[]>>(
    '/homepage/dragon/ball'
  );
}
