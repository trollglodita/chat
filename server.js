var connect = require('connect'),
    io = require('socket.io');

var app = connect().use(connect.static('public')).listen(3000);
var socket = io.listen(app);
