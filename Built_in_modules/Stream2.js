const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    const stream=fs.readFileSync('../folderless/folder/big_result.txt','utf8');
    res.end(stream);
})
.listen(4000);