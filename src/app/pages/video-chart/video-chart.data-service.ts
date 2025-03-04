import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppHttpService } from '../../shared/common/services/app-http.service';
import { Item, VideoItem, YoutubeResponse } from './vide-chart.types';
import { videoResponse } from './video-chart.mock';
import { map } from 'rxjs/operators';
import { shuffle } from './video-chart.helper';

@Injectable({
  providedIn: 'root',
})
export class VideoChartDataService {
  private apiKey = 'someApiKey';
  private http = inject(AppHttpService);

  getVideosForChanel(name?: string): Observable<VideoItem[]> {
    console.log(name);
    // const params = {
    //   part: 'snippet',
    //   key: this.apiKey,
    //   maxResults: 20,
    //   order: 'viewCount',
    //   type: 'video',
    //   q: name ?? '',
    //   videoCategoryId: 10,
    // };

    return of(videoResponse as never as YoutubeResponse).pipe(
      map((response: YoutubeResponse) => {
        console.log(response);
        return shuffle(
          response.items.map((item: Item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            icon: {
              url: item.snippet.thumbnails.medium.url,
              height: item.snippet.thumbnails.medium.height,
              width: item.snippet.thumbnails.medium.width,
            },
          }))
        );
      })
    );
  }
}
