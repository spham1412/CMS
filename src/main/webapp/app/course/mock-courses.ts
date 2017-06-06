import { Course } from './course.model';

export const COURSES: Course[] = [
  {
    id: 'MPP',
    title: 'Professional Programming',
    description: "This is Professional Programming",
    files: ['www.file1.pdf', 'www.file2.pdf'],
    references: ['www.reference1.com', 'www.reference2.com'],
  },
  {
    id: 'CS410',
    title: 'Algorithm',
    description: "This is Algorithm",
    files: ['www.file1.pdf', 'www.file2.pdf'],
    references: ['www.reference1.com', 'www.reference2.com'],
  },
  {
    id: 'WAA',
    title: 'Web Application Architecture',
    description: "This is Web Application Architecture",
    files: ['www.file1.pdf', 'www.file2.pdf'],
    references: ['www.reference1.com', 'www.reference2.com'],
  }
];