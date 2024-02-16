const arr = [1,2,3,4,5,6]

console.log(arr[3]);

// Methods in array

arr.push(55); // add element at last in array
arr.pop() // remove last element from array
arr.shift() // remove first element from array
arr.unshift(585) // add element at first in array
console.log(arr.includes(99)); // it check and give output in boolean format.

console.log("A", arr)

const ar = arr.slice(1,3);
console.log(ar);
console.log("B", arr);

const br = arr.splice(1,3);
console.log(br);
console.log("C",arr)

const hero = ['Mithun','Ranveer','Akshay','Ajay']
const hero2= ['Amir','Salman','Rutik','Rushi']

const hero3 = hero.concat(hero2) // add multiple array 

hero.push(hero2)
console.log(hero3);

const hero4 = [...hero,...hero2] // sprade operator copy array data from one array into another array
console.log(hero4);

const data1 = hero.map((i)=> {
    return i;
});

console.log(data1);