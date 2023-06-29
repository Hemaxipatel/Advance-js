// task-4

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'  ]
// by use of map, loop and reducer 

let arr = ['i', 'am', 'john']
let revStr = []
// for (i = 0; i < arr.length; i++) {            //output: ['i']
//     let result = arr[i].split("")             //['a','m']
//     console.log(result)                       //['j','o','h','n']

//     let result1 = result.reverse()            //output: ['i']
//     console.log("result1:", result1)          //['m','a']       //['n','h','o','j']

//     let str = result1.join("")                //output:i
//     console.log("str:", str)                  //       ma    nhoj

//     revStr.push(str)                          //push in the blank array
// }
// let strAns = revStr.reverse()
// console.log("strAns:", strAns)                //output:['nhoj','ma','i']


//using map
// let arr1 = arr.map((e, index, array) => {
//     return array(array.length - index - 1)
// });
// console.log("arr1:", arr1)

