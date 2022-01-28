import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courseId?: number;

    constructor(private route: ActivatedRoute) { 
      
    }
    
    ngOnInit(): void { 
        this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    }


}
