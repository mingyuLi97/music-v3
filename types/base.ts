export type ActionType = 'client_customized' | 'orpheus';
export type CreativeType = 'scroll_playlist' | 'list' | 'SONG_LIST_HOMEPAGE';
export type Action = 'play_all_song_from_current_index';

export interface IResource {
  uiElement: IUIElement;
  resourceType: 'list';
  resourceId: string;
  resourceUrl: string;
  resourceExtInfo: {
    playCount: number;
    highQuality: boolean;
    specialType: number;
    artists: IArtist[];
    songData: ISongData;
  };
  action: Action;
  actionType: ActionType;
  valid: boolean;
  alg: 'official_image_album_sub';
}

export interface ICreative {
  creativeType: CreativeType;
  creativeId: string;
  action: Action;
  actionType: ActionType;
  uiElement: IUIElement;
  resources: IResource[];
}
export interface IUIElement {
  mainTitle?: {
    title: string;
  };
  subTitle?: {
    title: string;
    titleType: 'songRcmdTag' | 'songRcmdFromComment';
  };

  image?: {
    imageUrl: string;
  };
  labelTexts?: string[];

  button?: {
    action: string;
    actionType: ActionType;
    text: string;
    iconUrl: string;
  };
}

export interface IArtist {
  albumSize: number;
  alias: any[];
  briefDesc: string;
  id: number;
  img1v1Id: number;
  img1v1Url: string;
  musicSize: number;
  name: string;
  picId: number;
  picUrl: string;
  topicPerson: number;
  trans: string;
}

export interface ISongData {
  album: any;
  alias: any[];
  artist: IArtist;
  artists: IArtist[];
  blurPicUrl: string;
  briefDesc: string;
  commentThreadId: string;
  company: string;
  companyId: number;
  copyrightId: number;
  description: string;
  id: number;
  mark: number;
  name: string;
  onSale: boolean;
  pic: number;
  picId: number;
  picId_str: string;
  picUrl: string;
  publishTime: number;
  size: number;
  songs: any[];
  status: number;
  subType: 'Remix';
  tags: string;
  transName: null;
  type: '专辑';
}
