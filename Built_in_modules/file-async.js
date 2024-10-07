const {readFile,writeFile}= require('fs');

console.log("Start");
readFile('../folderless/first.txt',
    'utf8',
    (err,result)=>{
if(err){
    console.log(err);
}
const first= result;
readFile('../folderless/folder/second.txt',
    'utf8',
    (err,result)=>{
    if(err){
        console.log(err);
    }
    const second=result;
writeFile('../folderless/folder/folder.txt',
        `Here are the text \n ${first} \n ${second}`,
        (err,res)=>{
    if(err){
        console.log(err);
    }
    console.log("done with the task");
})
})
})
console.log("Going with the next task");
