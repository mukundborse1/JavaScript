// print pattern
for(let i=0; i<=4; i++){
    let n = '';
    for(let j=1; j<=i; j++){
        n += '*'
    }
    console.log(n);
}

// find pair number in array
let arr1 = [1,2,3,4,5,6,7,8,9];
function findPairs(arr1){
    let pairs = []
    for(let i=0;i<= arr1.length; i++){
        for(let j= 1+i; j<= arr1.length; j++){
            if(arr1[i] + arr1[j] === 9){
                pairs.push([arr1[i], arr1[j]]);
            }
        }
    }
    return pairs;
}
let result = findPairs(arr1);
console.log(result); 


// find largest number in array
let arr = [4,7,6,8,99,25,6,8,999,256,254,586,156,355];
function findLargestNUmber(arr) {
    let largest = arr[0];
    for(let i=0; i<= arr.length - 1; i++){
    if(largest < arr[i]) {
        largest = arr[i]
    }
    }
    return largest;
}

console.log(findLargestNUmber(arr))

let str = "Hey Good Morning";

// reverse a string
let newStr = str.split('').reverse().join('');
console.log(newStr); 

// reverse a string with reverse words not all string
let newStr1 = str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
console.log(newStr1);

// find palindrom in array
let names = ['nitin', 'mukunda', 'malyaylam']

function findPalindrome (str1) {
    // if(str1 === str1.split('').reverse().join('')){
    //     console.log("String Palindrome", str1);
    // }else{
    //     console.log("Non-palindrome string" , str1);
    // }
    return str1 === str1.split('').reverse().join('')
     
}
let data = names.filter(findPalindrome)
console.log(data);

// remove duplicate from array
let nums = [5,6,5,6,5,2,5,45,8,5,89,88,47]
let filterNum = nums.filter((value,index,self) =>  {  return self.indexOf(value) === index})
console.log(filterNum);

// convert array to object
let fruits = ['Apple', 'Mango','Banana','Orange','Apple','Chiku','Orange','Banana','Mango','Apple']
let obj = {}
for(let fruit of fruits) {
    obj[fruit] = (obj[fruit] || 0 ) + 1
}
console.log(obj);