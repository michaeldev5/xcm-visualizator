import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MessageCount {
  @Field(() => Int)
  paraId: number;

  @Field(() => Int)
  totalCount: number;
}
