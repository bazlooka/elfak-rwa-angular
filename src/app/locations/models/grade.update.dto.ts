import { Grade } from './grade.interface';

export interface UpdateGradeDto {
  gradeCount: number;
  averageGrade: number;
  locationId: number;
  savedGrade: Grade;
}
