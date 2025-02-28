import { GlobalSetTheme, GlobalSwitchTheme } from './global.actions';

import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GlobalState } from './global.state';
import { GlobalThemeType } from './global.state.models';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  store = inject(Store);

  public lightTheme = this.store.select(GlobalState.lightTheme);

  switchTheme() {
    this.store.dispatch(new GlobalSwitchTheme());
  }

  setTheme(theme: GlobalThemeType) {
    this.store.dispatch(new GlobalSetTheme(theme));
  }
}
