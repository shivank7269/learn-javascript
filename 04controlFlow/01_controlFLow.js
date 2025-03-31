if(true){

}
if(false){

}

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("Hey it is logged in");
}

// <,>,<=,>=,==,!=,===

if(2 == "2"){
    console.log("executed");
}

//&&,||  Logical Operator

let loggedInUsingGoogle = true 
let loggedInUsingEmail = false

if(loggedInUsingEmail||loggedInUsingGoogle){
    console.log("Logged in ");
}
if (loggedInUsingEmail && loggedInUsingGoogle) {
    console.log("Logged in");
}
const month = "jan"
switch(month){
    case "jan":
        console.log(1);
        break
    case "feb":
        console.log(2);
        break
    default:
        console.log(3);
}
//Nullish Coalescing Operator(??):null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? undefined ?? 20
console.log(val1);


// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values : are other than falsy values
//"0",'false'," ",[],{},function(){}


//Terninary operator
// condition ? true : faslse

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("yes avaiable"):console.log("not avaiavble");


