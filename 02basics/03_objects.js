//  singleton

// object literal

// Object.create  this is how singleton is made

const mySym = Symbol("Key1")

const jsUser={
    name:"Shivank",
    "full name":"SHivank singh chandel",
    age:22,
    [mySym]:"mykey1",
    email:"singshivank72@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(typeof(jsUser.name)); // we use square notatins 

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.isLoggedIn);

// console.log(jsUser[mySym]);     //this is how key is used as symbol

jsUser.email = "abc@gmail.com"
// console.log(jsUser.email);

// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello js User ${this.name}`);
}
jsUser.greeting()
jsUser.greetingTwo()

