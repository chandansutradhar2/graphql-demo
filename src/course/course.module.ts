import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseResolver } from './course.resolver';
import { ReviewService } from './review.service';

@Module({
  providers: [CourseService, ReviewService, CourseResolver]
})
export class CourseModule { }
