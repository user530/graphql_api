import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateMonsterDTO {
    @Field()
    name: string;

    @Field()
    @IsAlpha()
    type: string;

    @Field({ nullable: true })
    description?: string;
}