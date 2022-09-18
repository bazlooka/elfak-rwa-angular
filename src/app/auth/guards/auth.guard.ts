import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AuthService, RETURN_QUERY } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { User } from '../models/user.interface';
import { selectUser } from '../store/auth.selectors';
import { Role } from '../enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  currentUser: User | null = null;

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {
    store.select(selectUser).subscribe((user) => {
      this.currentUser = user;
    });
  }

  userHasRequiredRole(reqiredRole: Role): boolean {
    return (
      this.currentUser?.roles.findIndex((role) => role === reqiredRole) !== -1
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.currentUser) {
      this.router.navigate(['/login'], {
        queryParams: { [RETURN_QUERY]: state.url },
      });
      return false;
    }

    const reqiredRole = route.data['role'] as Role;
    if (reqiredRole && !this.userHasRequiredRole(reqiredRole)) {
      return false;
    }
    return true;
  }
}
