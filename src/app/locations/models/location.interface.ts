import { Grade } from './grade.interface';
import { LocationType } from './location-type.interface';

export interface Location {
  id: number;
  name: string;
  description: string;
  imagePaths: string[];
  publicationTime: Date;
  address: string;
  website: string;
  latitude: number;
  longitude: number;
  deletedDate: Date;
  type: LocationType;
  grades: Grade[];
  author: any;
}
