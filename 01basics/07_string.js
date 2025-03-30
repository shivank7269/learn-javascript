const name = "shivank"
const repoCount = 50

// console.log(name+repoCount+" Value");  this is outdated way

console.log(`Hello my name is ${name} and my repo count is ${repoCount} Value`);

const gameName = new String("Shivank")
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,5)
console.log(anotherString);

const myName = "shivank-singh-chandel"
console.log(myName.trim());

console.log(myName.replaceAll('s','a'));

console.log(myName.includes('singh'));
console.log(myName.split('-'));
