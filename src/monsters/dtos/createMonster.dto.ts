import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMonsterDTO {
    @Field()
    name: string;

    @Field()
    type: string;

    @Field({ nullable: true })
    description?: string;
}