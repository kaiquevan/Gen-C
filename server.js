var http = require('http')

http.createServer(function(req,res){
    res.end("Minha API");
    console.log("To vivo");
}).listen(3000);