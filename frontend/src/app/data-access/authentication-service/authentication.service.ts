import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { apiURL } from '../../environment/environment-variables';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  #http = inject(HttpClient);

  register(
    username: string,
    password: string
  ): Observable<{ displayMessage: string }> {
    return this.#http.post<{ displayMessage: string }>(`${apiURL}/register`, {
      username,
      password,
    });
  }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.#http
      .post<{ token: string }>(`${apiURL}/login`, {
        username,
        password,
      })
      .pipe(tap((response) => localStorage.setItem('JWT', response.token)));
  }

  logoff(token: string): Observable<{ displayMessage: string }> {
    return this.#http.post<{ displayMessage: string }>(`${apiURL}/logoff`, {
      token,
    });
  }
}
