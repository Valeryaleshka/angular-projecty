import { Component } from '@angular/core';
import { ContentContainerComponent } from '../../shared/components/content-container/content-container.component';

@Component({
  selector: 'app-about',
  imports: [ContentContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less',
})
export class AboutComponent {}
