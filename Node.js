// console.log('Hello World');

// const fs = require('fs');
// fs.writeFileSync('hello.txt','Hello from Node.js')

const http = require('http');
const server = http.createServer((request,response)=>{
    // console.log(request);
    // console.log('ayush')
    // process.exit();
    // console.log(request.url,request.header,request.method);
    const url= request.url;
    if(url ==='/home'){
        response.write('<html>');
        response.write('<head><title>Home Page</title></head>');
        response.write('<body>Welcome Home</body>');
        response.write('</html>'); 
        return response.end();
    }
    if(url ==='/about'){
        response.write('<html>');
        response.write('<head><title>About Page</title></head>');
        response.write('<body>Welcome to About us page</body>');
        response.write('</html>'); 
        return response.end();
    }  
    if(url ==='/node'){
        response.write('<html>');
        response.write('<head><title>Node Page</title></head>');
        response.write('<body>Welcome to my NodeJs Project</body>');
        response.write('</html>'); 
        return response.end();
    }
    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body>Hello its nodejs server</body>');
    response.write('</html>');  
    response.end();  //should not write after end node js will send to client after it reaches end
    

});

server.listen(4000);

