function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("K");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// function addTwoNumbers(number1,number2){
//     return (number1+number2)
// }

// let result =addTwoNumbers(3,5);
// console.log(result);


function loginUserMeassage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
let result = loginUserMeassage("shivank")
// console.log(result);

function calculateCartPrice(...num1){ // ...this is called both rest and spread
    return num1
}

// console.log(calculateCartPrice(200,400,500,600,400,800))

const user = {
    username:"shivank",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);


function a(params) {
    let a=10
    const b=20
    var c=30

}
a();
// console.log(a);
// console.log(b);
// console.log(c);
console.log(addone(5))   //this can be accessed because function is initialised

function addone(num){
    return num+1
}
// console.log(addtwo(5))     // this will give error refrence error not initialises
const addtwo = function(num){
    return num+2
}  //this is hoisting

