const tinderUser = new Object()
// tinderUser.id="123abc"
// tinderUser.name="Shivank"
// tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"singshivak72@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shivank",
            lastname:"singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); // this is nesting 
// console.log(regularUser.fullname?.userfullname); //this check wther there is fullname or not used in api callings
// if question mark is not there code will stop and give error message
// if question mark is there then it will return undefined
// console.log(regularUser.fullname?.userfullname); // Safely access property if the object is not null or undefined

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj1,obj2); //we can also use {} at the start of assign.({},obj1,obj2)
// const obj3={obj1,obj2}
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1))

console.log(obj1.hasOwnProperty(1));


