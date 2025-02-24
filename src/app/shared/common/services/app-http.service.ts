import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  http = inject(HttpClient);

  get<T>(
    url: string,
    params?: Record<string, string | number | boolean>
  ): Observable<T> {
    let httpParams = new HttpParams();

    if (params) {
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      }
    }

    // Make the GET request with parameters
    return this.http.get<T>(url, { params: httpParams });
  }
}
