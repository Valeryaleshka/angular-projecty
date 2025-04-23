import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalStateService } from './store/global/global.service';
import { AsyncPipe } from '@angular/common';
import { GlobalThemeType } from './store/global/global.state.models';
import { localstorageThemeName } from './shared/common/constants/application.constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  private store = inject(GlobalStateService);

  ngOnInit() {
    const savedTheme = localStorage.getItem(localstorageThemeName) ?? 'light';

    this.store.setTheme(savedTheme as GlobalThemeType);
  }

  protected isDarkTheme$ = this.store.isDarkTheme$;
  title = 'angular-projecty';
}
