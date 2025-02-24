import { Component, inject, Input } from '@angular/core';
import { HeaderMenu } from '../../common/constants/header-menu';

import { Router, RouterLink } from '@angular/router';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalStateService } from '../../../store/global/global.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NzSwitchComponent, AsyncPipe, FormsModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  private globalState = inject(GlobalStateService);
  private router = inject(Router);

  @Input() menu = HeaderMenu;

  lightTheme$ = this.globalState.lightTheme;

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  changeTheme() {
    this.globalState.switchTheme();
  }
}
