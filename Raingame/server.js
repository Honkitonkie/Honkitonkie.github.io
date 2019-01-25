var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
console.log("my server is running");
var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection' + socket.id);
    console.log(socket.id);
    socket.on('ship', mouseMsg); //FUNCTIE VOOR ONTVANGEN VAN DATA --> mouseMsg 
    function mouseMsg(data) {
        //io.sockets.on('ship', data);
        console.log(data.x);
        var moreData = data.x;
        socket.broadcast.emit('ship', moreData); //DATA TERUG NAAR CLIENT
        //        if (socket.id == socket.id){
        //            socket.broadcast.emit('ship', data);
        //        }
        //io.sockets.emit('ship', data); //DEZE STUURT NAAR IEDEREEN INCL. ZELF
        console.log(data.x);
    }
}