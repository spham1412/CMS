import { Routes } from '@angular/router';

import {
  courseCatalogRoute
} from './';


const COURSE_ROUTES = [
  courseCatalogRoute
];

export const courseState: Routes = [{
  path: '',
  children: COURSE_ROUTES
}];