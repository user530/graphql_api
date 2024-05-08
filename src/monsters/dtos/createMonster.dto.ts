import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateMonsterDTO {
    @Field()
    name: string;

    @Field(() => Int)
    typeId: number;

    @Field({ nullable: true })
    description?: string;
}