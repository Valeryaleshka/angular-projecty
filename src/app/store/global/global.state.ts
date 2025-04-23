import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { GlobalStateModel } from './global.state.models';
import { GlobalSetTheme, GlobalSwitchTheme } from './global.actions';
import { localstorageThemeName } from '../../shared/common/constants/application.constants';

@State<GlobalStateModel>({
  name: 'global',
  defaults: {
    theme: 'light',
  },
})
@Injectable()
export class GlobalState {
  @Selector()
  static lightTheme(state: GlobalStateModel) {
    return state.theme === 'dark';
  }

  @Selector()
  static getThemeItself(state: GlobalStateModel) {
    return state.theme;
  }

  @Action(GlobalSwitchTheme)
  switchTheme(ctx: StateContext<GlobalStateModel>) {
    const state = ctx.getState();
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(localstorageThemeName, newTheme);

    ctx.setState({
      theme: newTheme,
    });
  }

  @Action(GlobalSetTheme)
  setTheme(ctx: StateContext<GlobalStateModel>, { name }: GlobalSetTheme) {
    ctx.setState({
      theme: name,
    });
  }
}
