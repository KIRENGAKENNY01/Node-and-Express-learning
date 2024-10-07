
let userLeft=false;
let watchingReels=false;

function watchtutorial(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name:"user Left",
                message:":("
            })
        }
         else if(watchingReels){
            reject({
                name:"User watching reels\n",
                message:"Reels>Tutorial"
            })
        }
        else{
            resolve("You are serouis on your future keep it going man")
        }
    })
}

watchtutorial().then((msg)=>{
    console.log("Success" +" "+msg);
}).catch((err)=>{
console.log(err.name + " " + err.message);
})