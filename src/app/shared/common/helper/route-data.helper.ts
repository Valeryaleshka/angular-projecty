import { ActivatedRouteSnapshot } from '@angular/router';

export function getLastDataFromChildRoute(
  route: ActivatedRouteSnapshot | null,
  name: string
): string {
  let lastValue = '';

  while (route) {
    if (route.data && route.data[name]) {
      lastValue = route.data[name];
    }

    route = route.firstChild;
  }

  return lastValue;
}
