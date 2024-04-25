import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Message } from './message.entity';
import { MessageCount } from './models/message-count.model';
import { MessageCountByStatus } from './models/message-count-by-status.model';

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

  async countMessagesByStatus(
    paraIds: number[] = [],
    startTime: number,
    endTime: number,
  ): Promise<MessageCountByStatus[]> {
    if (paraIds.length > 0) {
      const results = await Promise.all(
        paraIds.map(async (paraId) => {
          const successCount = await this.messagesRepository.count({
            where: {
              origin_para_id: paraId,
              status: 'success',
              origin_block_timestamp: Between(startTime, endTime),
            },
          });

          const failedCount = await this.messagesRepository.count({
            where: {
              origin_para_id: paraId,
              status: 'failed',
              origin_block_timestamp: Between(startTime, endTime),
            },
          });

          return { paraId, success: successCount, failed: failedCount };
        }),
      );

      return results;
    } else {
      const successCount = await this.messagesRepository.count({
        where: {
          status: 'success',
          origin_block_timestamp: Between(startTime, endTime),
        },
      });

      const failedCount = await this.messagesRepository.count({
        where: {
          status: 'failed',
          origin_block_timestamp: Between(startTime, endTime),
        },
      });

      return [{ success: successCount, failed: failedCount }];
    }
  }
}
