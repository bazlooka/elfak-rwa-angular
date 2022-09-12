import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { EventComponent } from './events/pages/event/event.component';
import { EventsComponent } from './events/pages/events/events.component';
import { NewEventComponent } from './events/pages/new-event/new-event.component';
import { LocationComponent } from './locations/pages/location/location.component';
import { LocationsComponent } from './locations/pages/locations/locations.component';
import { NewLocationComponent } from './locations/pages/new-location/new-location.component';
import { Role } from './shared/enums/role.enum';
import { AuthGuard } from './shared/guards/auth.guard';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Admin dashboard',
    canActivate: [AuthGuard],
    data: {
      role: Role.Admin,
    },
    component: DashboardComponent,
  },
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
  { path: 'event/:eventId', title: 'Event', component: EventComponent },
  {
    path: 'events',
    title: 'Events',
    component: EventsComponent,
  },
  {
    path: 'events/new',
    title: 'New event',
    canActivate: [AuthGuard],
    data: { role: Role.Editor },
    component: NewEventComponent,
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', title: 'Page not found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
