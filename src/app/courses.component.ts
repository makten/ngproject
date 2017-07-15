import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
                <p>
                {{ longText | summary:20 }}
                </p>

                <p>
                {{ longText | summary:80 }}
                </p>
                <ul>
                    <li *ngFor="let course of courses"> 
                        {{ course }} 
                    </li>
                </ul>  
                
                <button class="btn btn-success btn-sm">Click</button><br/><br/>
                
                
            `
})

export class CoursesComponent {
    title: string = 'List of Courses';
    courses: any[] = [];
    longText: string = "Lerem Ipsum sis simply some dummy text to play with when you having a good time!";
    

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }
}