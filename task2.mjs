import test from "./test.mjs";


function flattenArray(arr) {
    let result = [];
    
    for (let item of arr) {
        if (Array.isArray(item)) {
            let flattened = flattenArray(item);
            for (let num of flattened) {
                result.push(num);
            }
        } else {
            result.push(item);
        }
    }
    
    return result;
}

function arraysAreTheSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}


const tests = test("Flatten those numbers!");

tests.isEqual(arraysAreTheSame(flattenArray([1, 2, 3]), [1, 2, 3]),true, "Should keep flat array the same");
tests.isEqual(arraysAreTheSame(flattenArray([1, [2, 3], 4]), [1, 2, 3, 4]), true, "Should flatten one level of nesting in the array");
tests.isEqual(arraysAreTheSame(flattenArray([1, [2, [3, 4]], 5]), [1, 2, 3, 4, 5]), true, "Should flatten multiple levels of nesting in the array");

// Test from array.json

const sampleArray = [
    6410,
    2831,
    [
        8707,
        [9960, 4966],
        3441
    ],
    5655
];

tests.isEqual(arraysAreTheSame(flattenArray(sampleArray),[6410, 2831, 8707, 9960, 4966, 3441, 5655]),true, "Should flatten the sample taken from array.json");
