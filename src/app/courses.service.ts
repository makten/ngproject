

export class CoursesService {

    private _courses;   

    getCourses() {
        this._courses= ['course1', 'course2', 'course3', 'course4', 20];
        return this._courses;
    }

    
}