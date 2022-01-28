import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        imageURL: '',
        price: 98.96,
        code: 'ANG',
        duration: 120,
        rating: 4.7,
        releaseDate: 'January, 12'
      },
      {
        id: 2,
        name: 'Ruby',
        imageURL: '',
        price: 151.22,
        code: 'RUB',
        duration: 120,
        rating: 4.8,
        releaseDate: 'January, 16'
      }
    ]
  }

}
