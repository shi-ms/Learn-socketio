var express = require("express"),
    app     = express(),
    server  = require("http").createServer(app),
    io      = require("socket.io").listen(server);
    
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){
    socket.on("chat message", function(msg){
        io.emit("chat message", msg);
    })
});

server.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server is now starting......");
});

