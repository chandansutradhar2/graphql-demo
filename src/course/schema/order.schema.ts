import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Order {
    @Field()
    orderId: string

}