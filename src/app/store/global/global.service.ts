import { GlobalSetTheme } from './global.actions';

import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GlobalState } from './global.state';

@Injectable({
  providedIn: 'root', // Make the service available globally
})
export class GlobalStateService {
  store = inject(Store);

  public lightTheme = this.store.select(GlobalState.lightTheme);

  // Dispatch actions
  changeTheme() {
    this.store.dispatch(new GlobalSetTheme());
  }
}
