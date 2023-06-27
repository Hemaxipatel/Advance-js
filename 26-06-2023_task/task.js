//delete particular index & print after that assign new value at that position 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)

delete arr[2]                  //delete array of index2
console.log(arr)               //output:1,2,<1empty item>,4,5,6,7,8,9,10

arr[2] = 3                      //assign a new value at delete index2
console.log(arr)