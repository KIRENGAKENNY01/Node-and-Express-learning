const {readFile,writeFile} = require('fs').promises;

const get3=async()=>{
try{
    const first= await readFile('./folderless/first.txt','utf8')
    const second=await readFile('./folderless/folder/second.txt','utf8')
    console.log(first,'\n',second);
}
catch(err){
    console.log('Here are the result',err)
}
}
get3();







// 2nd way using util by using async function 
// const util=require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);

// const get2= async()=>{
//  try{
// const first=await  readFilePromise('./folderless/first.txt','utf8')
// const second=await readFilePromise('./folderless/folder/second.txt','utf8')
// await writeFilePromise('./folderless/folder/folder.txt',`Here are the results from both files \n ${first} \n ${second}`)
// console.log(first,'\n',second)
//  }
//  catch(err){
//   console.log(err);
//   throw err
//  }
// }
// get2();

                               
// 1st way  by manually writing promises
// const get1= (path)=>{
//    return new Promise((resolve,reject)=>{
//     readFile(path,'utf8',(err,result)=>{
//         if(err){
//        reject(err);
//        console.error(error);
//         }
//         else{
//             resolve(result);
//         }
//     })
//    })
// }
// get1();