import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/"

interface SignupResponse {
  id: number;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register(signupRequest: any): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(BASIC_URL + "api/auth/signup", signupRequest);
  }
}