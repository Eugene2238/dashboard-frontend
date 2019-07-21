import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface LoginData {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private name: string;
  private token: string;

  private saveToken(token) {
    localStorage.setItem('dashboard_auth', JSON.stringify(token));
    return token;
  }

  private parseJwt(token) {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');

      return JSON.parse(window.atob(base64));
    }

    return {};
  }

  private getToken(): string {
    if (this.token) {return this.token;}

    if (this.isAuthenticated()) {
      return (this.token = JSON.parse(localStorage.getItem('dashboard_auth')).token);
    }

    return '';
  }

  public register(user: User): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/auth/register', user);
  }

  public login(loginData: LoginData): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/auth/login', loginData).pipe(map(token => this.saveToken(token)));
  }

  public isAuthenticated(): boolean {
    // Check if token is not expired
    return !!localStorage.getItem('dashboard_auth');
  }

  public logout(): Observable<any> {
    localStorage.removeItem('dashboard_auth');
    this.token = '';
    this.name = '';

    return new Observable(observer => {
      if (!!localStorage.getItem('dashboard_auth')) {
        observer.error(new Error('Token not removed'));
      } else {
        observer.next();
      }
    });
  }

  public getName(): string {
    if (this.name) {
      return this.name;
    }

    return (this.name = this.parseJwt(this.getToken()).name);
  }

  public getAuthToken(): any {
    const auth = localStorage.getItem('dashboard_auth');

    return auth ? `Bearer ${JSON.parse(auth).token}` : '';
  }
}
