import { Injectable } from '@angular/core';
import { COURSES } from './mock-courses';
import { Course } from './course.model';

@Injectable()
export class CourseService {
  courses: Course[] = COURSES;

  constructor() {}

  getCourses(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }
}