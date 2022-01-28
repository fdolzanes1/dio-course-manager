import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course';

import { CourseService } from 'src/app/services/course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: any;

    constructor(private route: ActivatedRoute, private courseService: CourseService) { 
      
    }
    
    ngOnInit(): void { 
      this.course = this.courseService.retriveById(Number(this.route.snapshot.paramMap.get('id')));
    }

    save() {
      this.courseService.save(this.course)
    }

}
