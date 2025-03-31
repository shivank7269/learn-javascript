// *******************ArrayControl*************************
const coding =["js","java","ruby","python","cpp"]

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})  //for each does not return values

const values = coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
    return item
})

// console.log(values);
// *******************filter***********************
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const numStore=myNums.filter((num) => num>4) //not opening scope

const numStore = myNums.filter((num)=>{
    return num>5
})
// console.log(numStore);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk)=>bk.publish>1995 && bk.genre==="History")
// console.log(userBooks);
let myNums1 = [1,2,3,4,5,6,7,8,9,10]
// console.log(myNums1);

// const newNum=myNums1.map((num)=>num+10)
// console.log(newNum);

const myTotal=myNums1.reduce((acc,curr)=> acc+curr)
console.log(myTotal);
