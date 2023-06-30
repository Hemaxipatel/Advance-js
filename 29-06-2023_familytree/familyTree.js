let familyDetails = {
    g_name: "babubhai",
    g_age: 80,
    son: [{
        s_id: 1,
        s_name: "jitendrabhai",
        s_dob: "27-jun-1965",
        s_age: 58,
        s_occupation: "employee",
        vehicles: [
            { v_name: "activa", v_number: "GJ-05-RJ-0005" },
            { v_name: "splendor", v_number: "GJ-05-HJ-0888" }
        ],
        child: [{
            c_id: 10,
            c_name: "hemaxi",
            c_age: 30
        },
        {
            c_id: 11,
            c_name: "jay",
            c_age: 28
        },
        {
            c_id: 12,
            c_name: "neha",
            c_age: 26
        }]
    },
    {
        s_id: 2,
        s_name: "bhavnaben",
        s_dob: "22-july-1968",
        s_age: 55,
        s_occupation: "house_wife",
        vehicles: [
            { v_name: "activa", v_number: "GJ-05-KH-5500" },
            { v_name: "splendor", v_number: "GJ-05-AJ-2244" }
        ],
        child: [{
            c_id: 13,
            c_name: "amisha",
            c_age: 33
        },
        {
            c_id: 14,
            c_name: "kaushal",
            c_age: 31
        },
        {
            c_id: 15,
            c_name: "hitesh",
            c_age: 28
        }]
    },
    {
        s_id: 3,
        s_name: "niharbhai",
        s_dob: "27-feb-1970",
        s_age: 52,
        s_occupation: "businessman",
        vehicles: [
            { v_name: "fascino", v_number: "GJ-05-RQ-0002" },
            { v_name: "scooty_pep", v_number: "GJ-05-AC-4244" }
        ],
        child: [{
            c_id: 16,
            c_name: "vinee",
            c_age: 27
        },
        {
            c_id: 17,
            c_name: "mahir",
            c_age: 25
        },
        {
            c_id: 18,
            c_name: "vamika",
            c_age: 23
        }],
    }
    ]
}

// -----------------------------------------------------------------------------------------------
//-> all son of your dada
let sonDetails = familyDetails.son.map((e) => {
    console.log("GrandFathe's child name is: ", e.s_name)
})

//-> all son of father/uncle's details which id is inputed
function sonResult(id) {
    let result = familyDetails.son.find((e) => {
        return e.s_id = id
    })
    console.log("result:", result.s_name)
}
// function childResult(s, c) {
//     console.log(familyDetails.son[s].child[c])
// }
// childResult(1, 2)

//->print all family's vehicle details which family id i inputed
function vehicleDetails(f) {
    let result1 = familyDetails.son.find((x) => {
        return x.s_id = f
    })
    return result1.vehicles

}
let details = vehicleDetails(1)
console.log("details:", details)
