import { LatLng } from 'leaflet';
import { LocationPin } from './location-pin.interface';

export interface HomepageDto {
  map: {
    center: LatLng;
    zoom: number;
  };
  locationPins: LocationPin[];
  trendingLocations: Location[];
}
