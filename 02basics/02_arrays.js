const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["batman","superman","flash"]

// marvelHeros.push(dcHeros);  it makes a nested list
let allHeroes=marvelHeros.concat(dcHeros);
// console.log(allHeroes);
// console.log(marvelHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArray = [...anotherArray]
// const realUsableArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray);
// console.log(realUsableArray);

// console.log(Array.isArray("shivank"));
// console.log(Array.from("shivank"));
// console.log(Array.from({name:"shivank",key}));  //intresting




