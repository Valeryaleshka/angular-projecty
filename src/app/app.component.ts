import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalStateService } from './store/global/global.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  private store = inject(GlobalStateService);

  protected isLightTheme$ = this.store.lightTheme;
  title = 'angular-projecty';
}
