import { Component } from '@angular/core';
import { ContentContainerComponent } from '../../shared/components/content-container/content-container.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [ContentContainerComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
})
export class AboutComponent {}
