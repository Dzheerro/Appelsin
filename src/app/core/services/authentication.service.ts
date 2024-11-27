import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginPayload, SignUpPayload } from '../../shared/models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  signUp(data: SignUpPayload): Observable<SignUpPayload> {
    return this.http.post<SignUpPayload>(`${environment.apiEndpoint}/api/v1/auth/create_user/`, data);
  }

  logIn(data: LoginPayload): Observable<LoginPayload> {
    return this.http.post<LoginPayload>(`${environment.apiEndpoint}/api/v1/auth/token/`, data);
  }
}
