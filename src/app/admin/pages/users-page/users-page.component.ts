import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Role } from 'src/app/auth/enums/role.enum';
import { SelectRolesDialogComponent } from '../../components/select-roles-dialog/select-roles-dialog.component';
import { AdminUser } from '../../models/admin-user.interface';
import * as AdminUsersActions from '../../store/admin-users.actions';
import { selectAdminUsers } from '../../store/admin-users.selectors';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  displayedColumns = [
    'firstName',
    'lastName',
    'username',
    'roles',
    'changeRoles',
    'locationCount',
    'gradeCount',
    'isBanned',
    'ban',
  ];

  users$: Observable<AdminUser[]> | null = null;

  searchField: FormControl = new FormControl();

  constructor(
    private readonly store: Store<AppState>,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.select(selectAdminUsers);
    this.store.dispatch(AdminUsersActions.loadAdminUsers({}));

    this.searchField.valueChanges
      .pipe(
        filter((query: string) => query.length === 0 || query.length > 2),
        debounceTime(400)
      )
      .subscribe((query) => {
        this.store.dispatch(AdminUsersActions.loadAdminUsers({ query }));
      });
  }

  setUserBanned(userId: number, banned: boolean) {
    this.store.dispatch(AdminUsersActions.setUserBanned({ userId, banned }));
  }

  openEditRolesDialog(user: AdminUser) {
    const dialogClosed$ = this.dialog
      .open(SelectRolesDialogComponent, {
        width: 'auto',
        height: 'auto',
        data: { user },
      })
      .afterClosed();

    dialogClosed$.subscribe((resultData: { userId: number; roles: Role[] }) => {
      if (resultData) {
        this.store.dispatch(AdminUsersActions.setUserRoles(resultData));
      }
    });
  }
}
