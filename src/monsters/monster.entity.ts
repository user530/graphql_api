import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Monster {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    type: string;

    @Field({ nullable: true })
    description?: string;
}