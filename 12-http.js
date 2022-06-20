const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welcome to our home page!');
}
if(req.url === '/about'){
    res.end('This is about our history');
}
res.end(`
<h1>OOPS!</h1>
<p>We can't seem to find the page you're looking for</p>
<a href="/">Back to the homepage</a>`);
})
server.listen(2000);