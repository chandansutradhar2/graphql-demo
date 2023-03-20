import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { Course, CourseInput, Review } from './schema/course.chema';
import { Invoice } from './schema/invoice.shema';
import { Order } from './schema/order.schema';


@Resolver(of => Course)
export class CourseResolver {
    constructor(private courseSvc: CourseService) {

    }

    @Query(returns => [Course])
    courses(): Promise<Course[]> {
        return this.courseSvc.findAll();
    }

    @Query(returns => Course)
    async course(@Args('id', { type: () => Int }) id: number) {
        return this.courseSvc.findCourseById(id);
    }

    @Query(returns => Order)
    order() {

    }

    @Query(returns => Invoice)
    invoice() {
        const inv = new Invoice();
        inv.amount = 300;
        inv.createdOn = Date.now();
        inv.invoiceId = "1";
        inv.issuedTo = "Sun Pharmay Ltd"
        return new Invoice();
    }

    @Query(reviews => Review)
    review(): Review {
        return new Review();
    }

    @Mutation(returns => String, { name: 'addCourse' })
    async createCourse(@Args('data') course: CourseInput) {
        return this.courseSvc.addCourse(course);
    }

}
