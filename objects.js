// // singleton object
// // Object.create() constructor method

// // literal way to create object

const user = {
    name: "Mukunda",
    city: "Pune",
    age: 25,
    email: "mukund@gmail.com",
    isLog: false,
}

// const newUser = {
//     id:21,
//     password:'1245'
// }

// newUser.prototype.data = function(){
//     this.marks++
// }



// console.log(user['name']);
// console.log(user.age);
Object.freeze(user);
console.log(Object.isFrozen(user));
// user.greeting = function() {
//     console.log("Hello guys");
// }
// console.log(user.greeting())

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(user.hasOwnProperty('isLog'));

// const data = Object.assign({},user,newUser);
// console.log(data);

// // Object destructuring

// const {city} = user;
// console.log(city);
