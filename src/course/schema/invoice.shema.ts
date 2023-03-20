import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Invoice{

    @Field({nullable:false}) invoiceId: string;
    @Field(
    ) amount: number;
    @Field() createdOn: number;
    @Field() issuedTo: string;
}

/**Type Invoice{
/invoiceId:String!

}**/