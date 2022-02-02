import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "src/app/interface/course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private courseURL:string = 'http://localhost:3100/api/courses'

    constructor(private httpClient: HttpClient) {}

    retriveAll(): Observable<Course[]> {
      return this.httpClient.get<Course[]>(this.courseURL);
    }

    
    retriveById(id: number): Observable<Course> {
      return this.httpClient.get<Course>(`${this.courseURL}/${id}`);
    }
    
    save(course: Course) {
      if(course.id) { 
        return this.httpClient.put<Course>(`${this.courseURL}/${course.id}`, course);
      } else { 
          return this.httpClient.post<Course>(`${this.courseURL}`, course);
      }
    }

    deleteById(id: number): Observable<Course> {
      return this.httpClient.delete<any>(`${this.courseURL}/${id}`)
    }
}

