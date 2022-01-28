import { Injectable } from "@angular/core";
import { Course } from "src/app/model/course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    retriveAll(): Course[] {
        return COURSES;
    }
}

const COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: Animations',
        imageURL: '/assets/images/animations.png',
        price: 98.96,
        code: 'animations',
        duration: 120,
        rating: 4.9,
        releaseDate: 'January, 12'
      },
      {
        id: 2,
        name: 'Angular: CLI',
        imageURL: '/assets/images/cli.png',
        price: 151.22,
        code: 'cli',
        duration: 120,
        rating: 4.7,
        releaseDate: 'January, 16'
      },
      {
        id: 3,
        name: 'Angular: Forms',
        imageURL: '/assets/images/forms.png',
        price: 200.00,
        code: 'forms',
        duration: 120,
        rating: 4.5,
        releaseDate: 'January, 17'
      },
      {
        id: 4,
        name: 'Angular: Http',
        imageURL: '/assets/images/http.png',
        price: 111.32,
        code: 'http',
        duration: 120,
        rating: 4.0,
        releaseDate: 'January, 18'
      },
      {
        id: 5,
        name: 'Angular: Router',
        imageURL: '/assets/images/router.png',
        price: 80.17,
        code: 'router',
        duration: 120,
        rating: 4.2,
        releaseDate: 'January, 19'
      }
]