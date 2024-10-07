const {createReadStream} =require('fs');

const data=createReadStream('./folderless/folder/big_result.txt',{highWaterMark:90000 ,encoding:'utf8'});

data.on('data',(result)=>{
    console.log(result); 
})
data.on('data',(err)=>{
    console.log(err);
})