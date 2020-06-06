http = require('http')
console.log('start');
let port = 3000;
http.createServer(function (request, response) {
    console.log('request recieved');
    console.log(request.socket.Socket)
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Welcome Here !!!!!</h1>');
}).listen(port, undefined, undefined, () => {
    console.log("Server started on port:", port)
});