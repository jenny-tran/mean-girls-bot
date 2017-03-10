// Dependancies
const dotenv = require('dotenv').config();
import slackBot from 'slackbots';
import request from 'request';
import http from 'http';

// Modules
import responses from './responses.js';


// Start Server
http.createServer(() => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');
}).listen(3000, '127.0.0.1');

console.log('Server listening on localhost:3000');


// Config for bot
var bot = new slackBot({
    token: process.env.SLACK_TOKEN,
    name: 'theplasticsbot'
});

// Start bot
bot.on('start', function() {
    // bot.postMessageToGroup('test-bot', 'bot init');
    console.log('Bot starting');
});

// Activity in channel

bot.on('message', function(data) {
    responses(data);
});
