import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LocationComponent } from './locations/pages/location/location.component';
import { LocationsComponent } from './locations/pages/locations/locations.component';
import { NewLocationComponent } from './locations/pages/new-location/new-location.component';
import { Role } from './auth/enums/role.enum';
import { AuthGuard } from './auth/guards/auth.guard';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { NotLoggedInGuard } from './auth/guards/not-logged-in.guard';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { UsersPageComponent } from './admin/pages/users-page/users-page.component';
import { LocationAdminPageComponent } from './admin/pages/location-admin-page/location-admin-page.component';
import { LocationTypeAdminPageComponent } from './admin/pages/location-type-admin-page/location-type-admin-page.component';
import { SettingsPageComponent } from './admin/pages/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: 'location/:locationId',
    title: 'Location',
    component: LocationComponent,
  },
  {
    path: 'locations',
    title: 'Locations',
    component: LocationsComponent,
  },
  {
    path: 'locations/new',
    title: 'New location',
    canActivate: [AuthGuard],
    data: { role: Role.Editor },
    component: NewLocationComponent,
  },
  {
    path: 'login',
    title: 'Login page',
    canActivate: [NotLoggedInGuard],
    component: LoginPageComponent,
  },
  {
    path: 'register',
    title: 'Registration page',
    canActivate: [NotLoggedInGuard],
    component: RegisterPageComponent,
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfilePageComponent,
  },
  {
    path: 'dashboard',
    title: 'Admin dashboard',
    canActivate: [AuthGuard],
    data: {
      role: Role.Admin,
    },
    component: DashboardComponent,
    children: [
      { path: 'users', component: UsersPageComponent },
      { path: 'locations', component: LocationAdminPageComponent },
      { path: 'location-types', component: LocationTypeAdminPageComponent },
      { path: 'settings', component: SettingsPageComponent },
      { path: '', redirectTo: 'users', pathMatch: 'prefix' },
    ],
  },
  { path: '', redirectTo: 'locations', pathMatch: 'prefix' },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
