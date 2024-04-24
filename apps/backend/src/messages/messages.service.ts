import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import { MessageCount } from './models/message-count.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async findAll(): Promise<Message[]> {
    return this.messagesRepository.find();
  }

  async findOne(messageHash: string): Promise<Message> {
    return this.messagesRepository.findOneBy({ message_hash: messageHash });
  }

  async getTotalMessageCounts(
    startTime: number,
    endTime: number,
  ): Promise<MessageCount[]> {
    const queryBuilder = this.messagesRepository
      .createQueryBuilder('message')
      .select('message.origin_para_id', 'paraId')
      .addSelect('COUNT(*)', 'totalCount');

    // Add time filtering
    queryBuilder.andWhere(
      'message.origin_block_timestamp BETWEEN :startTime AND :endTime',
      {
        startTime,
        endTime,
      },
    );

    queryBuilder.groupBy('message.origin_para_id');

    const counts = await queryBuilder.getRawMany();

    return counts.map((count) => ({
      paraId: parseInt(count.paraId, 10),
      totalCount: parseInt(count.totalCount, 10),
    }));
  }
}
