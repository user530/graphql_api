import { CreateTypeInput } from './create-type.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTypeInput extends PartialType(CreateTypeInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  element: string;
}
