import { Component } from '@angular/core';
import { ContentContainerComponent } from '../../shared/components/content-container/content-container.component';
import { NgOptimizedImage } from '@angular/common';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-home',
  imports: [ContentContainerComponent, NgOptimizedImage, NzIconDirective],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
