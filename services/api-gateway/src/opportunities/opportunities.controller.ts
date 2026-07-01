import { Controller, Get, Query } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';

@Controller('api/opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Get()
  async getOpportunities(@Query('limit') limitStr: string): Promise<any> {
    const limit = limitStr ? parseInt(limitStr, 10) : 50;
    return this.opportunitiesService.getRecentOpportunities(limit);
  }
}
