// *************************

// Stack(primitive) Heap(Non-Primitive)

let myYoutubeName = "shivanksinghchandelcom"
let anotherName = myYoutubeName;
anotherName = "chai aur code"

console.log(myYoutubeName===anotherName);
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "singhshiavnka72@gmail.com",
    upi:"user@ybl"
}

let userTwo  = userOne;
userTwo.email = "howthischanged@gmail.com"    //by refrence

console.log(userOne.email);
console.log(userTwo.email);