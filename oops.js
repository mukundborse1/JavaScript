/*
        - Object literal
			- Constructor function
			- Prototypes
			- Classes
			- Instances (new, this)
		- 4 Pillars
			- Abstraction
			- Encapsulation
			- Polymorphism
			- Inheritance
*/

// const user = {
//     username : "Mukunda",
//     age : 25,
//     city : "Pune",
//     designation : "React Developer",

//     getUserDetails : function(){
//         // console.log("Got user details from database");
//         // console.log(`Username : ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.designation);
// console.log(user.getUserDetails());

function User(name,loginCount,isLoggedIn){
    this.name = name,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = new User("Mukunda",10,true);
console.log(userOne.constructor);

