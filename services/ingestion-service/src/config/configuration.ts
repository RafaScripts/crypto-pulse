export default () => ({
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
  },
  useSimulator: process.env.USE_SIMULATOR !== 'false', // Default is true for local testing
});
