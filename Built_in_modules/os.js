const OS=require("os");


// User info 
const user=OS.userInfo()
 console.log(user);


// method that return the system uptime in seconds 
console.log(`The system uptime is ${OS.uptime()} seconds`);

//object that contain other properties of Os
const custom={
name:OS.type(),
release:OS.release(),
totalmem:OS.totalmem(),
freemem:OS.freemem(),
}
console.log(custom);