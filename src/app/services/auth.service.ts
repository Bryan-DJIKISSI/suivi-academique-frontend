import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userSubject = new BehaviorSubject<string | null>(localStorage.getItem('user'));
  user$ = this.userSubject.asObservable();

  login(username: string, password: string): boolean {
    console.log('Service - Username:', username);
    console.log('Service - Password:', password);
    if (username && username.trim() !== '' && password && password.trim() !=='') {
      localStorage.setItem('user', username);
      this.userSubject.next(username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  isAuthenticated():boolean {
    return !!localStorage.getItem('user');
  }
}
