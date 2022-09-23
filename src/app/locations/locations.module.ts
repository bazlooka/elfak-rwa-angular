import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NewLocationComponent } from './pages/new-location/new-location.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { HttpClientModule } from '@angular/common/http';
import { TrendingLocationsComponent } from './components/trending-locations/trending-locations.component';
import { TrendingLocationCardComponent } from './components/trending-location-card/trending-location-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NewLocationButtonComponent } from './components/new-location-button/new-location-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    LocationsComponent,
    LocationComponent,
    NewLocationComponent,
    LocationMapComponent,
    TrendingLocationsComponent,
    TrendingLocationCardComponent,
    NewLocationButtonComponent,
  ],
  imports: [
    CommonModule,
    LeafletModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
})
export class LocationsModule {}
