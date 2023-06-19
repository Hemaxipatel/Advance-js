// let person = [
//     { name: "kush", age: 5, add: "surat" },
//     { name: "tej", age: 10, add: "vadodara" },
//     { name: "smit", age: 5, add: "ahmedabad" },
//     { name: "ram", age: 20, add: "surat" },
// ];
function f1() {
    let fname = "kush",
        age = 5,
        add = "surat"

    return [fname]
}
let [fname] = f1();
console.log("name:", fname)

function f2(f1) {
    return [fname, age]
}

console.log("name:", fname)
console.log("age:", age)
