import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  OnDestroy,
  signal,
  AfterViewInit,
} from '@angular/core';
import { VideoChartDataService } from './video-chart.data-service';
import { ContentContainerComponent } from '../../shared/components/content-container/content-container.component';
import { SafeXxsPipe } from '../../shared/common/pipes/save-xss.pipe';
import { VideoItem } from './vide-chart.types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { loadingStatus } from '../../shared/common/pipes/loading-status.pipe';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-video-chart',
  imports: [
    ContentContainerComponent,
    SafeXxsPipe,
    FormsModule,
    MatTableModule,
  ],
  providers: [VideoChartDataService],
  templateUrl: './video-chart.component.html',
  styleUrl: './video-chart.component.less',
})
export class VideoChartComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('youtubeiframe') iframe!: ElementRef<HTMLIFrameElement>;

  private resizeObserver: ResizeObserver | undefined = undefined;
  private dataService = inject(VideoChartDataService);
  private destroyRef = inject(DestroyRef);

  protected searchValue = signal('');

  protected videoList: VideoItem[] = [];
  protected isMobile = false;
  private customBreakpoint = '(max-width: 1200px)';
  loadingListStatus = false;
  selectedItem: VideoItem | null = null;
  displayedColumns: string[] = ['preview', 'title'];

  ngOnInit() {
    this.getList();
  }

  ngAfterViewInit() {
    this.setIframeHeight();
    this.subscribeToIframeResize();
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  getList() {
    this.dataService
      .getVideosForChanel(this.searchValue())
      .pipe(loadingStatus(isLoading => (this.loadingListStatus = isLoading)))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.videoList = data;

        if (!this.selectedItem) {
          this.selectedItem = data.length
            ? (this.selectedItem = data[0])
            : null;
        }
      });
  }

  private setIframeHeight() {
    const iframe = this.iframe.nativeElement;
    const iframeWidth = iframe.offsetWidth;
    const iframeHeight = (iframeWidth * 9) / 16;
    iframe.style.height = `${iframeHeight}px`;
  }

  private subscribeToIframeResize() {
    this.resizeObserver = new ResizeObserver(() => {
      this.setIframeHeight();
    });

    this.resizeObserver.observe(this.iframe.nativeElement);
  }

  clickRow(item: VideoItem) {
    this.selectedItem = item;
  }
}
