import { LocationType } from './location-type.interface';

export interface Location {
  id: number;
  name: string;
  description: string;
  imagePaths: string[];
  publicationTime: Date;
  latitude: number;
  longitude: number;
  deletedDate: Date;
  type: LocationType;
  grades: any[];
  author: any;
}
