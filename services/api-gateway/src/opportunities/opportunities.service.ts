import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OpportunitiesService {
  constructor(private prisma: PrismaService) {}

  async getRecentOpportunities(limit = 50): Promise<any> {
    return this.prisma.arbitrageOpportunity.findMany({
      take: limit,
      orderBy: { detected_at: 'desc' },
      include: {
        trading_pair: true,
        buy_exchange: true,
        sell_exchange: true,
      }
    });
  }
}
