// let promise1 = new Promise((resolve, reject) => {
//     // let arr = [];
//     resolve("tej")

//     reject("data not found")
// });

// promise1.then((res) => {
//     console.log("res:", res)
//     res + "okay";
// })
//     .then((res) => {
//         console.log("res2:", res)
//     })
//     .catch((err) => {
//         console.log("err:", err)
//     })


let promise = new Promise((resolve, reject) => {
    let successMessage = "success"
    let failureMessage = "fail"

    resolve(successMessage)
    reject(failureMessage)
});

promise
    .then((successMessage) => {
        console.log(`yah!!${successMessage}`)
    })

    .catch((failureMessage) => {
        console.log(`oops!!${failureMessage}`)
    });