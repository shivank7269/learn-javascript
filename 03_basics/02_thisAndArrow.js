const user = {
    username:"shivank",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}

//  user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username="shivank"
//     console.log(this.username)
// }

// chai()        //it will result in undefined

// const chai = function(){
//     let username = "shivank"
//     console.log(this.username);
// }
// chai()     //same as above

const chai= ()=>{
    let username="shivank"
    console.log(this); // output will be {}
    console.log(this.username);
}
// chai()// this wil be same as above undefined

// const add=(num1,num2)=>{
//     return num1+num2
// }
const add = (n1,n2) => n1+n2 // or (n1,n2)
console.log(add(2,3));
