import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Comment {
    @Field()
    value: string;
    @Field()
    createdOn: string;

}

@InputType()
export class CommentInput{
    value: string;
    createdOn: string;
}