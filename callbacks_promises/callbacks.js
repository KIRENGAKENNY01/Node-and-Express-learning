const names= ["Bosco","Frank","Kobe","Kalisa"];
// names.forEach((names)=>{console.log(names)});
const myForEach=(arr,cb)=>{
 for(let i=0;i<arr.length;i++){
    const element=arr[i];
    cb(element);
 }
}
// callback function are function that are passed as parameters to  other functions 
myForEach(names,(name)=>{
    console.log(name);
})

const loadPokemon= (id,cb)=>{
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then
}

