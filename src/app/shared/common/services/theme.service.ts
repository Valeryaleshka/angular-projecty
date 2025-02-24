import { inject, Injectable } from '@angular/core';
import { GlobalStateService } from '../../../store/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private state = inject(GlobalStateService);
}
