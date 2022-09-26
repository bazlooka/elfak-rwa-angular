import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { LocationTypeAdminPageComponent } from './pages/location-type-admin-page/location-type-admin-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LocationTypeDialogComponent } from './components/location-type-dialog/location-type-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SelectRolesDialogComponent } from './components/select-roles-dialog/select-roles-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersPageComponent,
    LocationTypeAdminPageComponent,
    SettingsPageComponent,
    LocationTypeDialogComponent,
    SelectRolesDialogComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
})
export class AdminModule {}
