import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../sign-up/sign-up-request.payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';
import {urls} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Injection du client HTTP
  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    // On consomme l'API REST avec un POST depuis le client HTTP avec la 'signupRequestPayload'
    return this.http.post(urls.signup, signupRequestPayload);
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.http.post<LoginResponse>(urls.login, loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        return true;
      }));
  }

  /*
  *  Lire les informations depuis le local Storage:
  *  Lors du login ces informations sont stockées dans le local storage.
  *  Les méthodes ci-dessous permettent de les lires.
  * */

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  getExpirationTime() {
    return this.localStorage.retrieve('expiresAt');
  }

}
