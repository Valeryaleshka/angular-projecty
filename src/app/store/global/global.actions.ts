import { GlobalThemeType } from './global.state.models';

export class GlobalSwitchTheme {
  static readonly type = '[Global] Switch Theme';
}

export class GlobalSetTheme {
  static readonly type = '[Global] Set Theme';

  constructor(public name: GlobalThemeType) {}
}
