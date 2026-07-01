import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { DeployService } from './deploy.service';

@Controller('api/deploy')
export class DeployController {
  constructor(private readonly deployService: DeployService) {}

  @Get()
  async getDeployments() {
    return this.deployService.findAll();
  }

  @Post('trigger')
  async triggerDeployment() {
    return this.deployService.triggerDeployment();
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() body: { status: string, logLine?: string }) {
    return this.deployService.updateStatus(id, body.status, body.logLine);
  }
}
