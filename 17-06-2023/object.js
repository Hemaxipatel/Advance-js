let student = {
    studId1: {
        firstName: "Mahir",
        lastName: "Patel",
        mobileNo: 1234567890,
        dateofBirth: "30-01-2000",
    },
    add: {
        city: "Surat"
    },
    subject: ["Maths", "Science", { Chemistry: 50 }],

    studId2: {
        firstName: "Vamika",
        lastName: "Patel",
        mobileNo: 1234567890,
        dateofBirth: "16-04-1992",
    },
    add: {
        city: "Vadodara"
    },
    subject: ["Maths", "Science", { Chemistry: 60 }],

}
// console.log(student)
console.log("Student FirstName is:", student.studId1.firstName)