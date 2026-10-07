

// 1. Curried function that accepts 3 numbers and prints their sum
function add(a) {
    return function(b) {
        return function(c) {
            console.log("1. Sum:", a + b + c);
        };
    };
}

add(10)(20)(30);


// 2. Curried function for name, department and salary
function employee(name) {
    return function(department) {
        return function(salary) {
            console.log("2. Name:", name);
            console.log("Department:", department);
            console.log("Salary:", salary);
        };
    };
}

employee("Dinesh")("IT")(30000);


// 3. Curried function for multiplication
function multiply(a) {
    return function(b) {
        return function(c) {
            console.log("3. Multiplication:", a * b * c);
        };
    };
}

multiply(2)(3)(4);


// 4. Curried function converted to uncurried function

// Curried
function curried(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("4. Curried:", curried(10)(20)(30));

// Uncurried
function uncurried(a, b, c) {
    return a + b + c;
}

console.log("Uncurried:", uncurried(10, 20, 30));


// 5. Curried and uncurried function for 4 numbers

// Curried
function addFour(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d;
            };
        };
    };
}

console.log("5. Curried:", addFour(10)(20)(30)(40));

// Uncurried
function addFourUncurried(a, b, c, d) {
    return a + b + c + d;
}

console.log("Uncurried:", addFourUncurried(10, 20, 30, 40));


// 6. Merge two arrays
let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [60, 70, 80, 90, 100];

let mergedNumbers = [...numbers1, ...numbers2];

console.log("6.", mergedNumbers);


// 7. Merge two student name arrays
let students1 = ["Dinesh", "Arun", "Kumar"];
let students2 = ["Ravi", "Suresh", "Vijay"];

let students = [...students1, ...students2];

console.log("7.", students);


// 8. Original values plus 3 new values
let fruits = ["Apple", "Banana", "Mango"];

let newFruits = [...fruits, "Orange", "Grapes", "Pineapple"];

console.log("8.", newFruits);


// 9. Merge two employee objects
let employee1 = {
    name: "Dinesh",
    department: "IT"
};

let employee2 = {
    designation: "Developer",
    experience: 2
};

let employeeDetails = {
    ...employee1,
    ...employee2
};

console.log("9.", employeeDetails);


// 10. Copy employee object and add salary
let employeeData = {
    name: "Dinesh",
    designation: "Developer"
};

let newEmployee = {
    ...employeeData,
    salary: 30000
};

console.log("10.", newEmployee);


// 11. Combine two objects
let object1 = {
    name: "Dinesh",
    age: 25
};

let object2 = {
    city: "Chennai",
    qualification: "BCA"
};

let combinedObject = {
    ...object1,
    ...object2
};

console.log("11.", combinedObject);


// 12. Two arrays in reverse order using spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let reverseArray = [...array2, ...array1];

console.log("12.", reverseArray);




// 13. Two fixed values and remaining values
function values(a, b, ...remaining) {
    console.log("13. A:", a);
    console.log("B:", b);
    console.log("Remaining:", remaining);
}

values(10, 20, 30, 40, 50);


// 14. student(name, department, ...marks)
function student(name, department, ...marks) {
    console.log("14. Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
}

student("Dinesh", "Computer Science", 80, 90, 85);


// 15. Two numbers and additional numbers
function addition(a, b, ...numbers) {
    console.log("15. First number:", a);
    console.log("Second number:", b);
    console.log("Additional numbers:", numbers);
}

addition(10, 20, 30, 40, 50);


// 16. Print the 5th value from rest parameter
function printFifth(a, b, ...values) {
    console.log("16. 5th rest value:", values[4]);
}

printFifth(1, 2, 3, 4, 5, 6, 7);


// 17. Product, price and remaining values
function productDetails(product, price, ...details) {
    console.log("17. Product:", product);
    console.log("Price:", price);
    console.log("Remaining:", details);
}

productDetails("Laptop", 50000, "HP", "16GB RAM", "512GB SSD");


// 18. Receive 10 numbers and store values after first two
function tenNumbers(a, b, ...remainingNumbers) {
    console.log("18. First:", a);
    console.log("Second:", b);
    console.log("After first two:", remainingNumbers);
}

tenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// 19. Extract all four values
let valuesArray = ["Apple", "Banana", "Mango", "Orange"];

let [fruit1, fruit2, fruit3, fruit4] = valuesArray;

console.log("19.", fruit1, fruit2, fruit3, fruit4);


// 20. Extract first, second and third values
let studentDetails = ["Dinesh", "IT", 85];

let [studentName, department, mark] = studentDetails;

console.log("20. Name:", studentName);
console.log("Department:", department);
console.log("Mark:", mark);


// 21. Extract first and fourth values
let nums = [10, 20, 30, 40, 50];

let [first, , , fourth] = nums;

console.log("21. First:", first);
console.log("Fourth:", fourth);


// 22. Nested array destructuring
let nestedArray = ["Dinesh", ["IT", 50000]];

let [name1, [dept1, salary1]] = nestedArray;

console.log("22. Name:", name1);
console.log("Department:", dept1);
console.log("Salary:", salary1);


// 23. Three-level nested destructuring
let threeLevel = [
    "Dinesh",
    [
        "IT",
        [
            30000,
            "Developer"
        ]
    ]
];

let [
    name2,
    [
        dept2,
        [
            salary2,
            role2
        ]
    ]
] = threeLevel;

console.log("23. Name:", name2);
console.log("Department:", dept2);
console.log("Salary:", salary2);
console.log("Role:", role2);



// 24. Employee object
let employeeObj = {
    name: "Dinesh",
    designation: "Developer",
    salary: 30000
};

let {
    name: empName,
    designation,
    salary
} = employeeObj;

console.log("24. Name:", empName);
console.log("Designation:", designation);
console.log("Salary:", salary);


// 25. Student object
let studentObj = {
    name: "Arun",
    department: "Computer Science",
    cgpa: 8.5
};

let {
    name: studentName2,
    department: studentDept,
    cgpa
} = studentObj;

console.log("25. Name:", studentName2);
console.log("Department:", studentDept);
console.log("CGPA:", cgpa);


// 26. Extract only 3 properties
let person = {
    name: "Dinesh",
    age: 25,
    city: "Chennai",
    qualification: "BCA",
    salary: 30000
};

let {
    name: personName,
    city,
    qualification
} = person;

console.log("26. Name:", personName);
console.log("City:", city);
console.log("Qualification:", qualification);


// 27. Nested object destructuring
let companyData = {
    employee: {
        name: "Dinesh"
    },
    team: {
        members: ["Arun", "Kumar", "Ravi"]
    }
};

let {
    employee: { name: employeeName },
    team: { members }
} = companyData;

console.log("27. Employee:", employeeName);
console.log("Team Members:", members);


// 28. company → department → employee
let company = {
    department: {
        employee: {
            name: "Dinesh"
        }
    }
};

let {
    department: {
        employee: { name: companyEmployee }
    }
} = company;

console.log("28. Employee Name:", companyEmployee);




// 29. Add 3 fruits using push()
let fruitArray = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruitArray.push("Pineapple", "Papaya", "Watermelon");

console.log("29.", fruitArray);


// 30. Remove last value using pop()
let numberArray = [10, 20, 30, 40, 50];

numberArray.pop();

console.log("30.", numberArray);


// 31. Remove first student using shift()
let studentList = ["Dinesh", "Arun", "Kumar", "Ravi", "Vijay"];

studentList.shift();

console.log("31.", studentList);


// 32. Add 2 numbers at beginning using unshift()
let numbers = [30, 40, 50, 60];

numbers.unshift(10, 20);

console.log("32.", numbers);


// 33. Replace 30 with 100 using splice()
let spliceNumbers = [10, 20, 30, 40, 50];

spliceNumbers.splice(2, 1, 100);

console.log("33.", spliceNumbers);


// 34. Remove 2 values from middle
let sixValues = [10, 20, 30, 40, 50, 60];

sixValues.splice(2, 2);

console.log("34.", sixValues);


// 35. Add 3 values in middle
let middleArray = [10, 20, 60, 70];

middleArray.splice(2, 0, 30, 40, 50);

console.log("35.", middleArray);


// 36. Remove 2 and add 3 at same position
let replaceArray = [10, 20, 30, 40, 50];

replaceArray.splice(2, 2, 100, 200, 300);

console.log("36.", replaceArray);


// 37. Remove one student from middle
let studentsList = ["Dinesh", "Arun", "Kumar", "Ravi", "Vijay"];

studentsList.splice(2, 1);

console.log("37.", studentsList);


// 38. Shopping cart push, pop, shift and unshift
let cart = ["Laptop", "Mouse", "Keyboard"];

cart.push("Headphone");
console.log("After push:", cart);

cart.pop();
console.log("After pop:", cart);

cart.shift();
console.log("After shift:", cart);

cart.unshift("Mobile");
console.log("After unshift:", cart);




// 39. Merge two arrays using concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let concatArray = arr1.concat(arr2);

console.log("39.", concatArray);


// 40. Merge three arrays
let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [5, 6];

let threeArrays = a1.concat(a2, a3);

console.log("40.", threeArrays);


// 41. Extract index 2 to index 5
let eightValues = [10, 20, 30, 40, 50, 60, 70, 80];

let extracted = eightValues.slice(2, 6);

console.log("41.", extracted);


// 42. Extract first 3 students
let studentNames = ["Dinesh", "Arun", "Kumar", "Ravi", "Vijay"];

let firstThree = studentNames.slice(0, 3);

console.log("42.", firstThree);


// 43. Three-level nested array using flat()
let nestedThree = [1, [2, [3, [4]]]];

let flatThree = nestedThree.flat(3);

console.log("43.", flatThree);


// 44. Four-level nested array using flat()
let nestedFour = [1, [2, [3, [4, [5]]]]];

let flatFour = nestedFour.flat(Infinity);

console.log("44.", flatFour);


// 45. Difference between slice() and splice()

let sliceArray = [10, 20, 30, 40, 50];

let sliced = sliceArray.slice(1, 3);

console.log("45. Slice result:", sliced);
console.log("Original after slice:", sliceArray);


let spliceArray = [10, 20, 30, 40, 50];

let spliced = spliceArray.splice(1, 2);

console.log("Splice result:", spliced);
console.log("Original after splice:", spliceArray);




// 46. Check whether 50 exists
let searchNumbers = [10, 20, 30, 40, 50, 60];

console.log("46.", searchNumbers.includes(50));


// 47. Find first occurrence using indexOf()
let duplicateArray = [10, 20, 30, 20, 40, 20];

console.log("47. First occurrence:", duplicateArray.indexOf(20));


// 48. Find last occurrence using lastIndexOf()
let duplicateNumbers = [10, 20, 30, 20, 40, 20];

console.log("48. Last occurrence:", duplicateNumbers.lastIndexOf(20));


// 49. Sort an array of numbers
let sortNumbers = [50, 10, 40, 20, 30];

sortNumbers.sort(function(a, b) {
    return a - b;
});

console.log("49.", sortNumbers);


// 50. Reverse an array
let reverseNumbers = [10, 20, 30, 40, 50];

reverseNumbers.reverse();

console.log("50.", reverseNumbers);