import { Args, Query, Resolver } from '@nestjs/graphql';
import { Message } from './message.entity';
import { MessageService } from './messages.service';
import { MessageCount } from './models/message-count.model';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => [Message], { name: 'messages' })
  findAll() {
    return this.messageService.findAll();
  }

  @Query(() => Message, { name: 'message' })
  findOne(@Args('message_hash', { type: () => String }) message_hash: string) {
    return this.messageService.findOne(message_hash);
  }

  @Query(() => [MessageCount])
  async totalMessageCounts(
    @Args('startTime', { type: () => Date }) startTime: Date,
    @Args('endTime', { type: () => Date }) endTime: Date,
  ) {
    return this.messageService.getTotalMessageCounts(
      startTime.getTime(),
      endTime.getTime(),
    );
  }
}
