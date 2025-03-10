import { ISelect } from '../interfaces/select.interface';
import { GlobalThemeType } from '../../../store/global/global.state.models';

export const localstorageThemeName = 'angularAppTheme';

export const themes: ISelect<GlobalThemeType>[] = [
  { value: 'dark', title: 'Dark' },
  { value: 'light', title: 'Light' },
];
