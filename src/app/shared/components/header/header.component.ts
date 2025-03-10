import { Component, inject, Input, OnInit } from '@angular/core';
import { HeaderMenu } from '../../common/constants/header-menu';

import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  customBreakpoint,
  tabletSize,
} from '../../common/helper/window-size.helper';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    MatButtonModule,
    RouterLink,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.less',
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);
  protected showMenu = false;

  @Input() menu = HeaderMenu;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([customBreakpoint(tabletSize)]) // Observe the custom breakpoint
      .subscribe(result => {
        this.showMenu = !result.matches; // Update isExceeded based on the breakpoint
      });
  }

  navigate(url: string) {
    this.router.navigateByUrl(url).then();
  }

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
