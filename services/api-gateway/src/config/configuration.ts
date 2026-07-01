export default () => ({
  port: parseInt(process.env.PORT || '3001', 10),
  kafka: {
    brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
  }
});
