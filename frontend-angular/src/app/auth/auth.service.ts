import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('TOKEN');
  }
}
