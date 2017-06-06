import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { courseState } from './course.route';
import { CourseService } from './course.service';
import { CommonModule } from '@angular/common';

import {
  CourseCatalogComponent
} from './';

@NgModule({
  imports: [
    RouterModule.forRoot(courseState, { useHash: true }),
    CommonModule
  ],
  declarations: [
    CourseCatalogComponent
  ],
  providers: [
    CourseService
  ]
})

export class CmsCourseModule {}
