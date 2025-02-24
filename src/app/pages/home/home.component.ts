import { Component } from '@angular/core';
import { ContentContainerComponent } from '../../shared/components/content-container/content-container.component';

@Component({
  selector: 'app-home',
  imports: [ContentContainerComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
