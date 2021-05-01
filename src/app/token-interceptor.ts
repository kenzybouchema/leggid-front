import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable, BehaviorSubject, throwError} from 'rxjs';
import {AuthService} from './auth/shared/auth.service';
import {catchError, switchMap} from 'rxjs/operators';
import {LoginResponse} from './auth/login/login-response.payload';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  isTokenRefreshing = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    * Si il y a un token dans le local storage on le récupère et on
    * l'ajoute dans la requête HTTP.
    * */
    const jwtToken = this.authService.getJwtToken();
    if (jwtToken) {
      this.addToken(req, jwtToken);
    }
    /* La requête est ensuite envoyé au back-end */
    return next.handle(req).pipe(
      /* Si c'est bien une erreur d'authentification on la gère ci-dessous
        *  Sinon on laisse le framework la gérer !
        * */
      catchError(
        error => {
          if (error instanceof HttpErrorResponse && error.status === 403) {
             return this.handleAuthErrors(req, next);
          } else {
             return throwError(error);
          }
        }
      )
    );
    return undefined;
  }

  /**
   * Gestion de la relance de la requête lorsque celle-ci est une erreur 403 (Forbidden)
   * @param req
   * @param next
   * @private
   */
  private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    {
      /* Si le token n'est pas en rafraichissement */
      if (!this.isTokenRefreshing) {
        this.isTokenRefreshing = true;
        this.refreshTokenSubject.next(null);
        return this.authService.refreshToken().pipe(
          switchMap(
            (refreshTokenResponse: any) => {
              return this.handleWithRefreshToken(refreshTokenResponse, req, next);
            }
          )
        )
      }
    }
  }

  /**
   * Relance la requete avec le token mis à jour
   * @param refreshTokenResponse
   * @param req
   * @param next
   * @private
   */
  private handleWithRefreshToken(refreshTokenResponse: LoginResponse, req: HttpRequest<any>, next: HttpHandler) {
    this.isTokenRefreshing = false;
    /* Le Token est maintenant le token rafraichi! */
    this.refreshTokenSubject.next(refreshTokenResponse.authenticationToken);
    /* On rejoue la requête avec le token rafraichi. */
    return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
  }

  /**
   *  Remplace le token de la requête par le token en paramètre
   * @param req
   * @param jwtToken
   * @private
   */
  private addToken(req: HttpRequest<any>, jwtToken: string) {
    /* On remplace dans la requête abec le token passé en  */
    return req.clone({headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)});
  }
}
