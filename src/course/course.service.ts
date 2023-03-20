import { Injectable } from '@nestjs/common';
import { Course, CourseInput, } from './schema/course.chema';
import { Course as ICourse, Review } from '../graphql';
import { Args, Int } from '@nestjs/graphql';
@Injectable()
export class CourseService {
    courses: Course[];
    constructor() {
        this.courses = new Array();
        this.courses.push({
            createdBy: 'robert landgon',
            id: 1,
            description: 'graphql implementation in nestjs',
            name: 'GraphQL',
            rate: 200,
            subscribedBy: [],
            reviews: [{
                comment: 'very detailed',
                createdBy: 'abc user',
                createdOn: Date.now(),
                rating: 4
            }]
        })

        this.courses.push({
            createdBy: 'angella dom',
            id: 2,
            description: 'angular 15 framework',
            name: 'angular fundamental',
            rate: 200,
            subscribedBy: [],
            reviews: [{
                comment: 'nice!!!!!',
                createdBy: 'pqr user',
                createdOn: Date.now(),
                rating: 5
            }]
        })
    }

    async findAll(): Promise<Course[]> {
        return this.courses
        //todo: connect to db repo and fetch and return data

    }

    
    async findCourseById(id: number): Promise<Course> {
        let c = this.courses.find((course) => {
            return course.id == id
        })
        console.log(c);
        return c;

    }

    async addCourse(course: CourseInput): Promise<string> {
        this.courses.push({
            createdBy: course.createdBy,
            id: course.id,
            reviews: [],
            name: course.name,
            rate: course.rate,
            description: course.description,
            subscribedBy: []
        });
        return "Course added successfully";

    }

    async updateCourse(course: Course): Promise<string> {
        this.courses.map((c, idx) => {
            c.id == course.id ? this.courses[idx] = course : null;
        });
        return "course updated successfully"

    }


}
