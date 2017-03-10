
// Dependancies
var dotenv = require('dotenv').config();
var slackBot = require('slackbots');
var request = require('request');
var http = require('http');

// Modules
var responses = require('./app/responses.js');


var PORT = process.env.PORT || 8080;  // set our PORT

// Handle request and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

// create a bot
var bot = new slackBot({
    token: process.env.SLACK_TOKEN,
    name: 'theplasticsbot'
});

var slackApiKey = process.env.SLACK_API_TOKEN;

bot.on('start', function() {
    var url = 'http://api.giphy.com/v1/gifs/search?q=stop+trying+to+make+fetch+happen&api_key=' + slackApiKey;

    request(url, function (error, response, body){

        var data = JSON.parse(body);

        var max = data.data.length;
        var min = 0;

        var randomNumber = Math.floor(Math.random() * (max - min)) + min;

        gifUrl = data.data[1].images.downsized.url;

        replyMessage = gifUrl + ' Powered by Giphy';

        console.log(responses.init());

        bot.postMessageToGroup('test-bot', replyMessage);
    });
});

bot.on('message', function(data) {
     console.log(data.length);
});

// Start server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
