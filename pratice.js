const data = ['a','b','c','d','e','b','c']
const data1 = data.filter((value,index,self)=> {return self.indexOf(value) === index})
console.log(data1);

// const names = ['nitin','malylam','sangam']

// function isPalindrome(str){
//     // const newStr = str.replace(['/a-zA-Z0-9/,g']).toLowerCase()
//     return str === str.split('').reverse().join('')
// }

// const a = names.filter(isPalindrome)
// console.log(a);

// const num = [1,2,3,4,5,6];
// const val = 6;

// function data(num,val){
//     let left = 0;
//     let index = -1;
//     let right = num.length -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (num[mid] >= val) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     index = left;

//     num.splice(index, 0, val);

//     return num;
// }

// const a = data(num,val);
// console.log(a);

// const naam = "Hey Good Mroning";
// const d = naam.split('').reverse().join('');
// console.log(d);
// const b= naam.split(' ').map((word)=> word.split('').reverse().join('')).join(' ')
// console.log(b);

// const fruits =["Apple","Banana","Mango","Peru","Apple","Banana","Apple","Chiku","Chiku"]
// let obj ={};
// for(const word of fruits){
//     obj[word] = (obj[word] || 0) + 1
// }
// console.log(obj);

// const numbers = [87,9,8,56,88,999,548,215,365,879];

// function largestNum () {
//     let largest = numbers[0];
//     for(let i=1; i< numbers.length -1; i++){
//         if(numbers[i] > largest){
//             largest = numbers[i]
//         }
//     }
//     return largest;
// }

// let LargestNumber = largestNum(numbers)
// console.log(LargestNumber);