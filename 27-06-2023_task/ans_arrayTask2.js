// task-2
// [1,2,3,6,7,9,3,56,8]

// 1. give all value which can devided by 2 - not use filter
// 2. give all value above 3 by use of filter
// 3. give index of 56

// 4. give true/false result when check given vale is exists in array or not
// ---------------------------------------------------------------------------------------

// 1. give all value which can devided by 2 - not use filter
let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i] + " - this number is even")                  //output: 2,6,56,8
//     } else {
//         console.log(arr[i] + " - this number is odd")                  //output: 1,3,7,9,3
//     }
// }

// 2. give all value above 3 by use of filter
// let greaterNo = arr.filter((e) => {
//     return e > 3
// });
// console.log(greaterNo)               //output: [6,7,9,56,8]

// 3. give index of 56
console.log(arr.indexOf(56))            //output:inedx 7

// 4. give true/false result when check given vale is exists in array or not
console.log(arr.includes(6))            //output: true
console.log(arr.includes(5))            //output: false