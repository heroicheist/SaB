const express = require('express');
const currentValue = require('./LiveTicker/LiveFeed')
const port = process.env.PORT || 5000;

// setInterval(()=>{
//     console.log(currentValue);
// }, 5000)

console.log(currentValue);


const app = express();

app.listen(port,()=>{
    console.log("server started");
})

// fetch("wss://streamer.finance.yahoo.com/", {
//   "headers": {
//     "accept-language": "en-US,en;q=0.9",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-websocket-extensions": "permessage-deflate; client_max_window_bits",
//     "sec-websocket-key": "5k/m45+8XYMeC0k4B2JbAA==",
//     "sec-websocket-version": "13"
//   },
//   "body": null,
//   "method": "GET"
// });

app.get("/api", (req,res)=>{
    console.log("hit /api");
    //res.sendFile(__dirname + '/index.html')
})