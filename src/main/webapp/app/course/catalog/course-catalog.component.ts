import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course.model';

@Component({
  selector: 'course-catalog',
  templateUrl: 'course-catalog.component.html'
})

export class CourseCatalogComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().then(courses => this.courses = courses);
  }
}