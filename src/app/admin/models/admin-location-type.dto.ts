import { LocationType } from 'src/app/locations/models/location-type.interface';

export interface AdminLocationType extends LocationType {
  locationCount: number;
}
