const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    const stream=fs.createReadStream('./folderless/folder/big_result.txt','utf8');
    stream.on('open',()=>{
    stream.pipe(res);
    })
    stream.on('error',(err)=>{
        res.end(err);
    })
})
.listen(5000,()=>{
    console.log('Connected');
})