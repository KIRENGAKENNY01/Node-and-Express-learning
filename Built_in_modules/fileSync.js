const {readFileSync,writeFileSync}= require('fs');
console.log("Start");
const first=readFileSync('../folderless/first.txt','utf8');
const second=readFileSync('../folderless/folder/second.txt','utf8');

 writeFileSync('../folderless/result.txt',`Here is the  text ${first},${second}`,{flag:'a'});
 console.log("done with the task");
 console.log("Starting the next one");
// Both readFileSyc and writeFileSync create a new file if it doesn't exist
// flag options in writeFileSync are a: append the text at the last line w(default):overwrites the text that may be in the file and write new ones