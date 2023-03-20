import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CourseService } from './course.service';
import { ReviewService } from './review.service';
import { Course, CourseInput, Review } from './schema/course.chema';
import { Comment, CommentInput } from './schema/comment.schema';
import { Invoice } from './schema/invoice.shema';

import { Order } from './schema/order.schema';
const pubSub = new PubSub();

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

    @Subscription((returns) => Comment, {
        name: 'commentAdded'
    })
    commentAdded() {
        return pubSub.asyncIterator('commentAdded');
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

    // @Mutation(returns => Comment)
    // async addComment(
    //     @Args('postId', { type: () => Int }) commentId: number,
    //     @Args('comment', { type: () => Comment }) comment: CommentInput,
    // ) {
    //     const newComment = this.courseSvc.addComment(comment);
    //     pubSub.publish('commentAdded', { commentAdded: newComment });
    //     return newComment;
    // }

}
