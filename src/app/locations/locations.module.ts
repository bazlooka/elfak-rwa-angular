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
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StarRatingModule } from 'angular-star-rating';

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
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    StarRatingModule,
  ],
})
export class LocationsModule {}
