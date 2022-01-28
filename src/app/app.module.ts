import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ReplacePipe } from './pipe/replace.pipe';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/courses/course-list.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { StarComponent } from './components/stars/star.component';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
