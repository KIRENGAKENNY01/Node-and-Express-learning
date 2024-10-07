const path =require('path');
console.log(path.sep);

const filepath=path.normalize('../folderless/folder/folder.txt');
console.log(filepath);

const filepath1=path.join('folderless','folder','folder.txt');
console.log(filepath1);

const base= path.basename(filepath);
console.log(base);

const absolute=path.resolve(__dirname,'folderless','folder','folder.txt');
console.log(absolute);

