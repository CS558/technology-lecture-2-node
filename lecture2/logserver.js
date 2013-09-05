var http = require("http")

//First create an http server
var server = http.createServer(function(request, response) {

  //Whenever we get a request, log the URL
  console.log("Got request:", request.url)
  
  //Write a plain text response to tell the client we logged the result
  response.setHeader("Content-Type", "text/plain")
  response.end("Your request has been logged")
})

//Start listening on port 8080
server.listen(8080)
console.log("Created HTTP server, listening on port 8080")