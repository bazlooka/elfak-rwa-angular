import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NewLocationComponent } from './pages/new-location/new-location.component';

@NgModule({
  declarations: [LocationsComponent, LocationComponent, NewLocationComponent],
  imports: [CommonModule, LeafletModule],
})
export class LocationsModule {}
