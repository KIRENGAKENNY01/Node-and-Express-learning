const Video1= new Promise((resolve,reject)=>{
    resolve("Video 1 is recorded");
})

const Video2=new Promise((resolve,reject)=>{
    resolve("Video 2 is recorded");
})

const Video3=new Promise((resolve,reject)=>{
    resolve("Video 3 is recorded");
})
// used for parallel programming
Promise.all([
Video1,
Video2,
Video3
]).then((msg)=>{
    console.log(msg);
    })
// used to return the first value that is given 
Promise.race([
    Video1,
    Video2,
    Video3
]).then((msg)=>{
    console.log(msg);
})