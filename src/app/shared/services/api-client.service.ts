import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

type Params = Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;

const BASE_URL = import.meta.env.NG_APP_API_URL;

@Injectable({ providedIn: 'root' })
export class ApiClient {
  private readonly http = inject(HttpClient);

  get<T>(url: string, params?: Params): Observable<T> {
    return this.http.get<T>(`${BASE_URL}${url}`, { params: toHttpParams(params) });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${BASE_URL}${url}`, body);
  }

  patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(`${BASE_URL}${url}`, body);
  }

  delete<T = void>(url: string): Observable<T> {
    return this.http.delete<T>(`${BASE_URL}${url}`);
  }
}

function toHttpParams(params?: Params): HttpParams {
  if (!params) return new HttpParams();
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      return value.reduce((p, v) => p.append(key, String(v)), acc);
    }
    return acc.set(key, String(value));
  }, new HttpParams());
}
