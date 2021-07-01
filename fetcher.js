const args = process.argv.slice(2)
const fs = require("fs")
const request = require("request")
console.log(args)
const url = args[0]
const path = args[1]


request(url, (error, response, body) => {
    
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body);
  
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    
  })
  
});