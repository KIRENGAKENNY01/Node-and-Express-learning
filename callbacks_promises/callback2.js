const userLeft= false;
const watchingReels=false;
//cb is for callback 
function watchingTutorial(cb,errcb){
    if(userLeft){
        errcb({
            name:"User left",
            message:":("
        })
    }
    if(watchingReels){
        errcb({
            name:"User watching Reels",
            message:"Reels>Programming"
        })
    }
    else{
        cb({
            message:"You are serious on your future keep it going man"
        })
    }
}


watchingTutorial((message)=>{
    console.log("Success" + " " + message.message);
},(err)=>{
    console.log(err.name + " "+ err.message);
})

//this is changed into promise in the promise2.js