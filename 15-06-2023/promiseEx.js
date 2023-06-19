let promise = new Promise((resolve, reject) => {
    let arr = [1, 2, 3, 4, 5, 6]
    let isExist = arr.includes(10)
    if (isExist === true) {
        resolve("number is Exist")
    } else {
        reject("number is not Exist")
    }
});

promise
    .then((res) => {
        console.log("res:", res)
        return res + "done"
    })
    .then((res) => {
        console.log("res:", res)
    })
    .catch((err) => {
        console.log("err:", err)
    })


