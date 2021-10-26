import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let exp;
    let token;
    if (null !== this.localStorage.getUserObject()) {
      exp = this.localStorage.getUserObject().exp;
      token = this.localStorage.getUserObject().token;
      if (null !== token && !this.tokenExpired(exp)) {
        return true;
      }
    }
    // this.router.navigate(['/auth']);
    //return false;
    return true;
  }

  private tokenExpired(exp): boolean {
    return Math.floor(new Date().getTime() / 1000) >= exp;
  }
}
