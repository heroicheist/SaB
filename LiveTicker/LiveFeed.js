const WebSocket = require('isomorphic-ws');
const protobuf = require("protobufjs");

let currentValue = {}; 

protobuf.load('./YPricingData.proto', (error, root)=>{

    if(error){
        return console.log(error);
    }

    const Yaticker = root.lookupType("yaticker");
    const ws = new WebSocket('wss://streamer.finance.yahoo.com/');
    //const ws = new WebSocket('wss://stream.coinmarketcap.com/price/latest');

    ws.onopen = function open() {
      console.log('connected');
      ws.send(JSON.stringify({
        subscribe: ['RELIANCE.NS']
      }));
      
    };
    
    ws.onclose = function close() {
      console.log('disconnected');
    };
    
    ws.onmessage = function incoming(message) {
      console.log('comming message')
      currentValue = Yaticker.decode(new Buffer.from(message.data, 'base64'));
      console.log(currentValue);
    };
});


