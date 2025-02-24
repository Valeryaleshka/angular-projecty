import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { GlobalStateModel } from './global.state.models';
import { GlobalSetTheme } from './global.actions';

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
    return state.theme === 'light';
  }

  @Selector()
  static getThemeItself(state: GlobalStateModel) {
    return state.theme;
  }

  @Action(GlobalSetTheme)
  switchTheme(ctx: StateContext<GlobalStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      theme: state.theme === 'light' ? 'dark' : 'light',
    });
  }
}
