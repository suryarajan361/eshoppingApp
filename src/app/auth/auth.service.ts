import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if (user.emailId == 'suryarajan361@gmail.com' && user.password == 'surya' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
    else{
      alert("Invalid Login")
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}