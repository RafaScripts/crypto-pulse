import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('api/market')
export class MarketController {
  
  @Get('historical')
  async getHistoricalCandles(
    @Query('exchange') exchange: string,
    @Query('symbol') symbol: string,
  ) {
    if (!exchange || !symbol) {
      throw new HttpException('Exchange and symbol are required', HttpStatus.BAD_REQUEST);
    }

    try {
      let data: any[] = [];
      if (exchange.toLowerCase() === 'binance') {
        const binanceSymbol = symbol.replace('/', '');
        const res = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${binanceSymbol}&interval=1m&limit=200`);
        data = res.data.map((k: any) => ({
          timestamp: k[0],
          open: Number(k[1]),
          high: Number(k[2]),
          low: Number(k[3]),
          close: Number(k[4]),
          volume: Number(k[5]),
        }));
      } else if (exchange.toLowerCase() === 'okx') {
        const okxSymbol = symbol.replace('/', '-');
        const res = await axios.get(`https://www.okx.com/api/v5/market/candles?instId=${okxSymbol}&bar=1m&limit=200`);
        if (res.data && res.data.data) {
          data = res.data.data.map((k: any) => ({
            timestamp: Number(k[0]),
            open: Number(k[1]),
            high: Number(k[2]),
            low: Number(k[3]),
            close: Number(k[4]),
            volume: Number(k[5]),
          })).reverse();
        }
      } else {
        throw new HttpException(`Exchange ${exchange} not supported for historical data`, HttpStatus.BAD_REQUEST);
      }

      return data;
    } catch (err: any) {
      throw new HttpException(`Failed to fetch historical data: ${err.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
