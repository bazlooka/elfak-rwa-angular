export interface TrendingLocation {
  id: number;
  name: string;
  description: string;
  imagePath: string | null;
  gradecount: number;
  averageGrade: Number;
  publicationTime: Date;
  typeName: string;
}
