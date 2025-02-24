export interface YoutubeResponse {
  items: Item[];
}

export interface Item {
  id: {
    videoId: string;
  };
  snippet: Snippet;
}

export interface Snippet {
  publishedAt: Date;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  medium: {
    url: string;
    width: number;
    height: number;
  };
}

export interface VideoItem {
  id: string;
  title: string;
  channelTitle: string;
  description: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
}
