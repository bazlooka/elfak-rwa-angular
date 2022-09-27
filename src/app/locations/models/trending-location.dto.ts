import { Grade } from './grade.interface';

export interface TrendingLocationDto {
  id: number;
  name: string;
  description: string;
  imagePath: string | null;
  gradecount: number;
  averageGrade: Number;
  publicationTime: Date;
  typeName: string;
  myGrade?: Grade;
}
