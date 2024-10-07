const app= async ()=>{
    try{
    const api=await fetch('https://pokeapi.co/api/v2/pokemon/20/');
    const data= api.json();
    return data;
    }
    catch(error){
    console.log("We got an error while fetching data",error);
    throw error;
    }
}

app().then((result)=>{
    console.log("The result we got is ",result);
})
.catch((err)=>{
    console.log("Here is the error we got",err);
})
// what to know about async function is that 
// Async function return a promise without returning it or not 
//it uses the await keyword which is used to wait a promise is resolved or rejected then it can perform certain action 
//it uses the try and catch block where the try block return data that was intended to be received
//while catch is used to return error in the way
//Async function uses the then nd catch methods due it return a promise 
