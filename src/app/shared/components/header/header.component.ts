import { Component, inject, Input } from '@angular/core';
import { HeaderMenu } from '../../common/types/header-menu-types';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  router = inject(Router);
  @Input() menu = HeaderMenu;

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
