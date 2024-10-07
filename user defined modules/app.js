const name=require("./name")
const sayHi=require("./function")
const others=require("./otherway");
console.log(others);
sayHi(name.John);
sayHi('susan');
sayHi(name.Peter);
sayHi(name.secret);
