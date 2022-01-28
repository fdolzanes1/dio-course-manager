import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from './components/courses/course-info/course-info.component';
import { CourseListComponent } from './components/courses/course-list.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'courses', pathMatch: 'full'
  },
  {
    path: 'courses', component: CourseListComponent
  },
  {
    path: 'courses/info/:id', component: CourseInfoComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
