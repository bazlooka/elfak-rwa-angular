import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationTypeDialogComponent } from '../location-type-dialog/location-type-dialog.component';
import { AdminUser } from '../../models/admin-user.interface';
import { Role } from 'src/app/auth/enums/role.enum';

interface RoleSelection {
  role: Role;
  disabled: boolean;
  checked: boolean;
}

@Component({
  selector: 'app-select-roles-dialog',
  templateUrl: './select-roles-dialog.component.html',
  styleUrls: ['./select-roles-dialog.component.scss'],
})
export class SelectRolesDialogComponent implements OnInit {
  disabledRoles = [Role.Viewer];

  roleSelection: RoleSelection[] | null = null;

  constructor(
    private readonly dialogRef: MatDialogRef<LocationTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: { user: AdminUser }
  ) {}

  ngOnInit(): void {
    this.roleSelection = Object.keys(Role).map((key) => {
      const roleKey = key as keyof typeof Role;

      return {
        role: Role[roleKey],
        disabled: this.containsRole(this.disabledRoles, roleKey),
        checked: this.containsRole(this.data.user.roles, roleKey),
      };
    });
  }

  containsRole(roles: Role[], targetRole: keyof typeof Role) {
    return roles.findIndex((r) => r === Role[targetRole]) !== -1;
  }

  onCancelClicked(): void {
    this.dialogRef.close();
  }

  onOkClicked() {
    let resultData = null;

    if (this.roleSelection) {
      resultData = {
        userId: this.data.user.id,
        roles: this.roleSelection
          .filter((roleSelection) => roleSelection.checked)
          .map((roleSelection) => roleSelection.role),
      };
    }

    this.dialogRef.close(resultData);
  }
}
