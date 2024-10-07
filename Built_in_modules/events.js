const eventEmitter= require('events');
const customEmitter= new eventEmitter();

customEmitter.on('response',(name ,id)=>{
console.log(`data received  user ${name} , ${id}`)
})
customEmitter.on('response',()=>{
console.log('Some other logic here');
})

customEmitter.emit('response','john',34);
