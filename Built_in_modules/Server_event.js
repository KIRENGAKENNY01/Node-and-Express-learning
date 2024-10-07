const http=require('http');
const server=http.createServer();
const PORT=5000;
server.on('request',(req,res)=>{
    res.end('Welcome');
})
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})