import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../sign-up/sign-up-request.payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Injection du client HTTP
  constructor(private http: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    // On consomme l'API REST avec un POST depuis le client HTTP avec la 'signupRequestPayload'
    return this.http.post('http://localhost:8080/api/auth/signup', signupRequestPayload);
  }
}
