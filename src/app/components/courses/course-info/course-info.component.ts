import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interface/course';

import { CourseService } from 'src/app/services/course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: any;

    constructor(private route: ActivatedRoute, private courseService: CourseService) { 
      
    }
    
    ngOnInit(): void { 
      const _id = this.route.snapshot.paramMap.get('id');
      this.courseService.retriveById(Number(_id)).subscribe({
        next: course => this.course = course,
        error: err => console.log('Error', err)
      });
    }

    save() {
      this.courseService.save(this.course).subscribe({
        next: course => console.log('Saved with success', course),
        error: err => console.log('Error', err)
    });
    }

}
