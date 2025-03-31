// Destructuring of Objects

const course={
    courseName:"JS in hindi",
    price:"999",
    courseInstructor:"Shivank"
}
const {courseInstructor:instructor} = course
const {price} = course
console.log(price);

//API`s

// {
//     "name":"shivank",
//     "courseName":"js in hindi",             //this is json format 
//     "price":"999"
// }


