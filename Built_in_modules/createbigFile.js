const {writeFileSync} =require('fs');
for(let i=0;i<100;i++){
    writeFileSync('../folderless/folder/big_result.txt',`Hello world ${i}\n`,{flag:'a'});
}