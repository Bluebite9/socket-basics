var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    console.log('User connected via socket.io');
    
    socket.on('message', function (message) {
        console.log('Message received: ' + message.text);
        
        message.timestamp = moment().valueOf();
        //io.emit catre toata lumea incluzandu-l pe cel care trimite
        //socket.broadcast.emit catre toata lumea excluzandu-l pe cal care trimite
        io.emit('message', message);
    });
    
    var timpestamp = 
    
    socket.emit('message', {
        text: 'Welcome to the chat application of the Pack!',
        timestamp: moment().valueOf()
    });
});

http.listen(PORT, function () {
    console.log('Server started!');
});