import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, NEVER, Observable, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { getLastDataFromChildRoute } from '../../shared/common/helper/route-data.helper';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, AsyncPipe],
  templateUrl: './root.component.html',
  styleUrl: './root.component.less',
})
export class RootComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  destroyRef = inject(DestroyRef);

  title$: Observable<string> = NEVER;

  ngOnInit() {
    this.title$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => getLastDataFromChildRoute(this.route.snapshot, 'title')),
      startWith(getLastDataFromChildRoute(this.route.snapshot, 'title')),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
