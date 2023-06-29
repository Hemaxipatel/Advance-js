// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']
// by use of map, loop and reducer
// 2. want "i am urvish" without use join method

let arr = ['i', 'am', 'hemaxi']
console.log(arr)

// let reversed = arr.reverse()
// console.log(reversed)                                     //output: ['urvish','am','i']

//using map
// let newArr = arr.map((e,index, array) => {
//     return array[array.length - index - 1]                  //access element in reverse order
// })
// console.log("newArr:", newArr)

//using loop
// let revArr = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     revArr.push(arr[i])
// }
// console.log("revArr:", revArr)                            //output: ['urvish','am','i']

//using reduce
// let revArr = []
// let reduce1 = arr.reduce((lastEle, element) => {
//     // lastEle? revArr.unshift(e,lastEle):revArr.unshift(e)
//     revArr.unshift(element)
// }, 0);
// console.log("revArr:", revArr)                        //output: ['urvish','am','i']

// 2. want "i am urvish" without use join method

let origstr = " ";
for (i = 0; i < arr.length; i++) {
    origstr = origstr+arr[i]+" "
}
console.log(origstr)