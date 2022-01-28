import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
