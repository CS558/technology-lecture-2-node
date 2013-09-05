//Import file system library
var fs = require("fs")

//First read in the file as UTF8 string
fs.readFile("data.txt", function(err, data) {

  //If there was an error, throw an exception
  if(err) {
    throw err
  }
  
  //Convert data to upper case
  var loud = data.toString().toUpperCase()
  
  //Write result to a file
  fs.writeFile("loud.txt", loud, function(err, data) {
    console.log("done")
  })
})
