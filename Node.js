// console.log('Hello World');

// const fs = require('fs');
// fs.writeFileSync('hello.txt','Hello from Node.js')

const http = require('http');
const server = http.createServer((request,response)=>{
    console.log(request);
    console.log('ayush')

});

server.listen(4000);
