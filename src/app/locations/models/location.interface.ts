export interface Location {
  id: number;
  name: string;
  descrpition: string;
  imagePaths: string[];
  publicationTime: Date;
  latitude: number;
  longitude: number;
  deletedDate: Date;
  type: any;
  grades: any[];
  author: any;
}
