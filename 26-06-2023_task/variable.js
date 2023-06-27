// > Want to re - use variable name so which variable mathod should i use
// Ans: var
// ------------------------------------------------------------------------------------------

// -> give the list which variavble name not works in js
// 1. let a = 0
// 2. let "a" = 0
// 3. let 'a' = 0
// 4. let 10 = 0
// 5. let 1 = 0
// Ans: 4, 5

//------------------------------------------------------------------------------------------

// let x = 100
// var y = 100
// const z = 100
// // const m
// {
//     x = 90
//     y = 90
//     z = 90
//     // console.log(x)        //expected output: 90
//     // console.log(y)        //expected output: 90
//     // console.log(z)        //throw error
// }

// console.log(x)              //expected output: 90
// console.log(y)              //expected output: 90
// console.log(z)              //throw error

//------------------------------------------------------------------------------------------

// -> task - 2

// console.log(x) //___________________ point - x2
// console.log(y) //___________________ point - y2
// console.log(z) //___________________ point - z2

{
    let x = 100
    var y = 100
    const z = 100
}

// console.log(x) //___________________ point - x1
// console.log(y) //___________________ point - y1
// console.log(z) //___________________ point - z1


// what will print at x1 - x is not defined
// what will print at y1 - 100
// what will print at z1 - x is not defined
// what will print at x2 - throw error bcz variable must initialization 1st after that we print console
// what will print at y2 - throw error bcz variable must initialization 1st after that we print console
// what will print at z2 - throw error bcz variable must initialization 1st after that we print console