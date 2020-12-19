import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {AlertService} from "../services/alert.service";
import {ToastService} from "../services/toast.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
      private auth: AuthService,
      private router: Router,
      private alert: AlertService,
      private toast: ToastService
  ) {
  }

  /**
   *
   * @param next
   * @param state
   */
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(next);
  }

  /**
   *
   * @param next
   * @param state
   */
  canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(next);
  }

  /**
   *
   * @param next
   */
  check(next: any) {

    if (next.data.logged) {
      if (!(this.auth.userIsLogged() === next.data.logged)) {
        this.notify('No ha ingresado al sistema!');
        return false;
      }
    }

    if (next.data.roles !== undefined) {
      if (!this.auth.userIs(next.data.roles)) {
        this.notify('No tiene el rol necesario!');
        return false;
      }
    }

    if (next.data.permissions !== undefined) {
      if (!this.auth.userCan(next.data.permissions)) {
        this.notify('No tiene el permiso necesario!');
        return false;
      }
    }

    return true;
  }

  /**
   *
   * @param message
   */
  notify(message: any) {
    this.toast.present(message, 'toast-warning');
    this.router.navigateByUrl('/');
  }

}
