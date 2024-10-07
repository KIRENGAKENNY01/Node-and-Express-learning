const http=require('http');
const PORT=5000;
const server= http.createServer((req,res)=>{
   if(req.url=='/'){
    res.end('Home page');
   }
   else if(req.url=="/about"){
    //Blocking code
    for( let i=0;i<100;i++){
        for( let j=0;j<100;j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('About page');
   }
   else{
    res.end("Page Not Found");
   }
})

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})