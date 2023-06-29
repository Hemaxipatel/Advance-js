// -> make one array who have value from 1 to 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [10, 30, 15, 82, 25]
// 1. print 9th and 10th index of array
// console.log(arr[9])                             //output:10
// console.log(arr[10])                           //output:undefined

//2. print every element of array by map, reduce and for loop
// let arr1 = arr.map((i) => {
//     console.log(i)                                //output:1,2,3,4,5,6,7,8,9,10
// });

//using reduce
// let arr2 = arr.reduce((lastEle, element) => {
//     console.log(element)
// },0);

// //using for loop
// for (i = 0; i < arr.length; i++) {
//     let totalCount = arr[i]
//     console.log(totalCount)
// }

// 3. change a value of 6th index with 100
// arr[6] = 100                                   //output:[1, 2, 3, 4, 5, 6, 100, 8, 9, 10]
// console.log(arr)

// 4. print a array till element value not gratter then 100
// let arr3 = [15, 10, 5, 25, 31, 100, 2, 12]
// for (i = 0; i < arr3.length; i++) {
//     let totalCount = arr3[i]

//     if (arr3[i] == 100) {
//         break;
//     }
//     console.log(totalCount)                      //output: 15,10,5,25,31
// }

// 5. pluse 1 in every element of an array
// let newArr = arr.map((entry) => {
//     return entry + 1                               //output:2,3,4,5,6,7,8,9,10,11
// });
// console.log(newArr)

// 6. add 0 in start of array
// arr.unshift(0)
// console.log(arr)                                   //output:0,1,2,3,4,5,6,7,8,9,10

// 7. add  99 in end of array
// arr.push(99)
// console.log(arr)                                  //output:1,2,3,4,5,6,7,8,9,10,99

// 8. remove 1 element from start of  array
// arr.shift(1)
// console.log(arr)                                  //output: 2,3,4,5,6,7,8,9,10

// 9. remove 1 element from end of array
// console.log(arr.pop())                               //output: 10

// 10. do sum of all value of an array with use of map, reduce and for-loop
// let total = 0
// let newArr = arr.map((i) => {
//     total = total + i
// });
// console.log("Total is:", total)                     //output: 55 

//using reduce

// let arr2 = arr.reduce((lastEle, element) => {
//     return lastEle + element
// }, 0);
// console.log(arr2)                                      //output: 55 

// 11. sort a array in acending decending
// arr.sort(function (a, b) {
//     return a - b
// });
// console.log("arr:", arr)                                //output: [10,15,25,30,82]

// 12. reverse an array with use of method
// arr.reverse()
// console.log(arr)                                        //output: [25,82,15,30,10]

// 13. reverse an array with use of for-loop
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])                                    //output: [25,82,15,30,10]
}