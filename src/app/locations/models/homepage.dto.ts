import { LatLng } from 'leaflet';
import { LocationPin } from './location-pin.interface';
import { TrendingLocation } from './trending-location.interface';

export interface HomepageDto {
  map: {
    center: LatLng;
    zoom: number;
  };
  locationPins: LocationPin[];
  trendingLocations: TrendingLocation[];
}
