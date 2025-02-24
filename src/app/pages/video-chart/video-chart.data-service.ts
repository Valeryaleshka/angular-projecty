import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppHttpService } from '../../shared/common/services/app-http.service';
import { Item, VideoItem, YoutubeResponse } from './vide-chart.types';

@Injectable({
  providedIn: 'root',
})
export class VideoChartDataService {
  private apiKey = 'AIzaSyAAnjwUEtVH4kZGxUkrxemRERKRcfAq7fk';
  private http = inject(AppHttpService);

  getVideosForChanel(name?: string): Observable<VideoItem[]> {
    const params = {
      part: 'snippet',
      key: this.apiKey,
      maxResults: 20,
      order: 'viewCount',
      type: 'video',
      q: name ?? '',
      videoCategoryId: 10,
    };

    return this.http
      .get<YoutubeResponse>(
        'https://www.googleapis.com/youtube/v3/search',
        params
      )
      .pipe(
        map((response: YoutubeResponse) => {
          console.log(response);
          return response.items.map((item: Item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            icon: {
              url: item.snippet.thumbnails.medium.url,
              height: item.snippet.thumbnails.medium.height,
              width: item.snippet.thumbnails.medium.width,
            },
          }));
        })
      );
  }
}
