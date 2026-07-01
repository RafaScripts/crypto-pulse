import { MarketTickNormalized, MarketCandleNormalized } from '@crypto-pulse/events';
import { Observable } from 'rxjs';

export interface ExchangeAdapter {
  connect(): void;
  disconnect(): void;
  getTicksStream(): Observable<MarketTickNormalized>;
  getCandlesStream?(): Observable<MarketCandleNormalized>;
}
