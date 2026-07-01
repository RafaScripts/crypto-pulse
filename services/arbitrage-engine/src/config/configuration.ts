export default () => ({
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  fees: {
    taker: parseFloat(process.env.FEE_TAKER_PCT || '0.0001'), // Default 0.001% fee per trade
  }
});
