import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ArbitrageOpportunityDetected, MarketCandleNormalized } from '@crypto-pulse/events';

@WebSocketGateway({ cors: { origin: '*' } })
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(RealtimeGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected to WebSocket: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected from WebSocket: ${client.id}`);
  }

  broadcastOpportunity(opportunity: ArbitrageOpportunityDetected) {
    this.server.emit('new_opportunity', opportunity);
    this.logger.debug(`Broadcasted new opportunity to WS clients: ${opportunity.symbol}`);
  }

  broadcastCandle(candle: MarketCandleNormalized) {
    this.server.emit('new_candle', candle);
    // Para depurar localmente e garantir que a vela sai (descomente se precisar)
    // this.logger.debug(`Broadcasted new candle: ${candle.exchange} ${candle.symbol}`);
  }
}

