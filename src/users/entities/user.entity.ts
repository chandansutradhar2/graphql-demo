import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class User {

    @Field(type => String)
    firstName: string
}
