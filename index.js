http = require('http')
console.log('start');
http.createServer(function(request,response){
    console.log('request recieved');
    console.log(request.socket.Socket)
    response.writeHeader(200,{'Content-Type':'text/html'});
    response.end('<h1>Welcome Here !!!!!</h1>');
}).listen(8080);
