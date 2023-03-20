import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { ReviewService } from './review.service';
import { Course, CourseInput, Review } from './schema/course.chema';
import { Invoice } from './schema/invoice.shema';
import { Order } from './schema/order.schema';


@Resolver(of => Course)
export class CourseResolver {
    constructor(private courseSvc: CourseService, private reviewSvc: ReviewService) {

    }

    @Query(returns => [Course])
    courses(): Promise<Course[]> {
        return this.courseSvc.findAll();
    }

    @Query(returns => Course)
    async course(@Args('id', { type: () => Int }) id: number) {
        return this.courseSvc.findCourseById(id);
    }


    @ResolveField()
    async reviews(@Parent() course: Course) {
        const { id } = course;
        return this.reviewSvc.findAll(id)
    }
    // @Query(returns => Invoice)
    // invoice() {
    //     const inv = new Invoice();
    //     inv.amount = 300;
    //     inv.createdOn = Date.now();
    //     inv.invoiceId = "1";
    //     inv.issuedTo = "Sun Pharmay Ltd"
    //     return new Invoice();
    // }


    @Mutation(() => Course, { name: 'addCourse' })
    async createCourse(@Args('input', { type: () => CourseInput }) course: CourseInput) {
        return this.courseSvc.addCourse(course);
    }

}
