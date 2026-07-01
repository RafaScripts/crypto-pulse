import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DeployGateway } from './deploy.gateway';
import { spawn } from 'child_process';
import * as path from 'path';

@Injectable()
export class DeployService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly deployGateway: DeployGateway,
  ) {}

  async findAll() {
    return this.prisma.deployment.findMany({
      orderBy: { started_at: 'desc' },
      take: 20,
    });
  }

  async updateStatus(id: string, status: string, logLine?: string) {
    if (logLine) {
      this.deployGateway.broadcastLog(id, logLine);
    }
    
    const data: any = { status };
    if (status === 'SUCCESS' || status === 'FAILED') {
      data.finished_at = new Date();
    }
    
    return this.prisma.deployment.update({
      where: { id },
      data,
    });
  }

  async triggerDeployment() {
    const deployment = await this.prisma.deployment.create({
      data: {
        status: 'RUNNING',
      },
    });

    const deployScript = path.resolve(process.cwd(), '../../deploy.sh');
    
    this.deployGateway.broadcastLog(deployment.id, `Starting deployment ${deployment.id}...\n`);
    
    setTimeout(() => {
      // Spawn deploy.sh inside bash
      const child = spawn('bash', [deployScript], { cwd: path.resolve(process.cwd(), '../..') });
      
      let fullLogs = '';
      
      child.stdout.on('data', (data) => {
        const str = data.toString();
        fullLogs += str;
        this.deployGateway.broadcastLog(deployment.id, str);
      });
      
      child.stderr.on('data', (data) => {
        const str = data.toString();
        fullLogs += str;
        this.deployGateway.broadcastLog(deployment.id, str);
      });
      
      child.on('close', async (code) => {
        const finalStatus = code === 0 ? 'SUCCESS' : 'FAILED';
        this.deployGateway.broadcastLog(deployment.id, `\nDeployment finished with code ${code}. Status: ${finalStatus}`);
        
        await this.prisma.deployment.update({
          where: { id: deployment.id },
          data: {
            status: finalStatus,
            finished_at: new Date(),
            logs: fullLogs,
          },
        });
      });
      
      child.on('error', async (err) => {
        const str = err.toString();
        fullLogs += str;
        this.deployGateway.broadcastLog(deployment.id, str);
        
        await this.prisma.deployment.update({
          where: { id: deployment.id },
          data: {
            status: 'FAILED',
            finished_at: new Date(),
            logs: fullLogs,
          },
        });
      });
    }, 500);

    return deployment;
  }
}
