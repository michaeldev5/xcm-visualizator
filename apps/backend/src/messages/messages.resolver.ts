import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Message } from './message.entity';
import { MessageService } from './messages.service';
import { MessageCount } from './models/message-count.model';
import { MessageCountByStatus } from './models/message-count-by-status.model';

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

  @Query(() => [MessageCountByStatus])
  async messageCounts(
    @Args('paraIds', { type: () => [Int], nullable: true }) paraIds: number[],
    @Args('startTime', { type: () => Date }) startTime: Date,
    @Args('endTime', { type: () => Date }) endTime: Date,
  ): Promise<MessageCountByStatus[]> {
    return this.messageService.countMessagesByStatus(
      paraIds,
      startTime.getTime(),
      endTime.getTime(),
    );
  }
}
