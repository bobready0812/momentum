const a = 5;
let isNicFat = true;
isNicFat = false;

const toBuy = ["potato", "tomato", "pizza"];
toBuy[2] = "water";
console.log(toBuy[2]);
toBuy.push("meat")
console.log(toBuy)


const player = {
    name: "Nico",
    age: 98,
};
console.log(player.name);
player.name = "Daehyeon";
console.log(player.name);
player.fat = false;
console.log(player)


function plus() {
    console.log(2+2)
};
plus();

function plus(a, b) {
    console.log(a*b)
};
plus(2,5);
plus(3,7);

const calculator = {

    add: function(a, b){
        console.log(a+b);
    },
};
calculator.add(5,1);


const calculator2 = {
    add: function(a,b){
    console.log(a+b);
    },
 

    
    
    