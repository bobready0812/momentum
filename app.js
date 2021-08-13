function  sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("nico", 10);
sayHello("dal", 24);
sayHello("lynn", 17);


function plus(a,b) {
console.log(a+b);
}
plus(11123123123, 123123123);

function divide(c,d){
    console.log(c/d);
}
divide(6, 3);


const player ={
name: "nico",
sayHello: function(otherPersonsName) {
    console.log("hello! " + otherPersonsName + " Nice to meet you!");
},
};
console.log(player.name)
player.sayHello("lynn");
player.sayHello("Fynn");