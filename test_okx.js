const WebSocket = require('ws');
const ws = new WebSocket('wss://ws.okx.com:8443/ws/v5/public');

ws.on('open', () => {
  console.log('connected');
  ws.send(JSON.stringify({
    op: 'subscribe',
    args: [
      { channel: 'candle1m', instId: 'BTC-USDT' }
    ]
  }));
});

ws.on('message', (data) => {
  console.log('message:', data.toString());
});

ws.on('error', (err) => {
  console.log('error:', err);
});
