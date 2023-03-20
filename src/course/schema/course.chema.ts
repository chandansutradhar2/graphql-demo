import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';
import { User } from 'src/users/entities/user.entity';
import { InputType, } from '@nestjs/graphql';


@ObjectType()
export class Course {
    @Field(type => Int, { nullable: true })
    id: number;

    @Field(type => String, { nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    rate?: number;

    @Field(type => String)
    createdBy: string;

    @Field(type => User, { nullable: true })
    subscribedBy!: User[]

    @Field(type => [Review], { nullable: true })
    reviews!: Review[]
}

@ObjectType()
export class Review {
    @Field(type => String, { nullable: true })
    createdBy: string;
    @Field(type => Int, { nullable: true })
    createdOn: number;
    @Field(type => String, {
        nullable: true
    })
    comment: string;
    @Field(type => Int, {
        nullable: true
    })
    rating: number;
}


@InputType()
export class CourseInput {
    @Field() rate: number;
    @Field() name: string;
    @Field() createdOn: string;
    @Field() createdBy: string;
    @Field() id: number;
    @Field() description: string;
    // @Field(type => [Review], { nullable: true })
    // reviews!: Review[]
}

