import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { User } from '../models/user.interface';
import { selectUser } from '../store/auth.selectors';
import { RETURN_QUERY } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotLoggedInGuard implements CanActivate {
  currentUser: User | null = null;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    store.select(selectUser).subscribe((user) => {
      this.currentUser = user;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.currentUser) {
      return true;
    }
    const returnTo = this.route.snapshot.queryParamMap.get(RETURN_QUERY);
    this.router.navigateByUrl(returnTo || '/locations');
    return false;
  }
}
