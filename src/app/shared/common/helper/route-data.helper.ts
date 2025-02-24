import { ActivatedRouteSnapshot } from '@angular/router';

export function getTitleFromRoute(
  route: ActivatedRouteSnapshot,
  name: string
): string {
  while (route.firstChild) {
    route = route.firstChild;
  }
  return route.data[name] ?? '';
}
