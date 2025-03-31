const myArr =[0,1,2,3,4,5]
// console.log(myArr[0]);
let myArr1=["ashi","shivank","idk","hello"]
// console.log(myArr1);

const numbers =[1,2,3,4]
// console.log(numbers);

// Array Methods 

numbers.push(5)
// console.log(numbers);
numbers.pop()
// console.log(numbers);

numbers.unshift(9)
numbers.shift()
// console.log(numbers);

// console.log(numbers.includes(9));
// console.log(numbers.indexOf(3));

const newNumber  = numbers.join()
// console.log(newNumber);
// console.log(numbers);
// console.log("type of newNumber :"+typeof(newNumber));

const myn1 = numbers.slice(1,3)  //it doesnot change the array
// console.log(myn1);

const myn2 = numbers.splice(1,3)  // it manipulates and changes the array
console.log(myn2);
console.log(numbers);

