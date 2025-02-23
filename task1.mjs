import test from "./test.mjs";


function getSquareNumber(number) {
    if (typeof number !== "number" || isNaN(number)) {
        return NaN;
    }
    return number * number;
}

function changeInchesToMm(inches) {
    if (typeof inches !== "number" || isNaN(inches)) {
        return NaN;
    }
    return inches * 25.4;
}

function getRootNumber(number) {
    if (typeof number !== "number" || isNaN(number)) {
        return NaN;
    }
    if (number < 0) {
        return NaN;
    }
    if (number === 0) {
        return 0;
    }
    
    let guess = number / 2;
    for (let i = 0; i < 10; i++) {
        guess = (guess + (number / guess)) / 2;
    }
    return guess;
}

function getCubeValue(number) {
    if (typeof number !== "number" || isNaN(number)) {
        return NaN;
    }
    return number * number * number;
}

function getCircleValue(radius) {
    if (typeof radius !== "number" || isNaN(radius)) {
        return NaN;
    }
    if (radius < 0) {
        return NaN;
    }
    return 3.14159 * radius * radius;
}

function greeting(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return "Hello, guest!";
    }
    return "Hello, " + name.trim() + "!";
}

const tests = test("Popping functions!");


tests.isEqual(getSquareNumber(8), 64, "8 squared should return as 64");
tests.isEqual(getSquareNumber(-12), 144, "-12 squared should return as 144");
tests.isEqual(getSquareNumber(0), 0, "0 squared should return as 0");
tests.isNotANumber(getSquareNumber("not a number"), "String input should return NaN");
tests.isNotANumber(getSquareNumber(NaN), "NaN input should return NaN");

tests.isEqual(changeInchesToMm(2), 50.8, "1 inch should return 50.8 mm");
tests.isEqual(changeInchesToMm(0), 0, "0 inches should return 0 mm");
tests.isEqual(changeInchesToMm(-2), -50.8, "-2 inch should return -50.8 mm");
tests.isNotANumber(changeInchesToMm("invalid"), "String input should return NaN");
tests.isNotANumber(changeInchesToMm(NaN), "NaN input should return NaN");

tests.isEqual(getRootNumber(4), 2, "Root of 4 should return 2");
tests.isEqual(getRootNumber(9), 3, "Root of 9 should return 3");
tests.isEqual(getRootNumber(0), 0, "Root of 0 should return 0");
tests.isNotANumber(getRootNumber(-9), "Negative input should return NaN");
tests.isNotANumber(getRootNumber("invalid"), "String input should return NaN");
tests.isNotANumber(getRootNumber(NaN), "NaN input should return NaN");

tests.isEqual(getCubeValue(12), 1728, "12 cubed should be 1728");
tests.isEqual(getCubeValue(-4), -64, "-4 cubed should be -64");
tests.isEqual(getCubeValue(0), 0, "0 cubed should be 0");
tests.isNotANumber(getCubeValue("invalid"), "String input should return NaN");
tests.isNotANumber(getCubeValue(NaN), "NaN input should return NaN");

tests.isEqual(getCircleValue(1), 3.14159, "Area of circle with radius 1 should be 3.14159");
tests.isEqual(getCircleValue(0), 0, "Area of circle with radius 0 should be 0");
tests.isNotANumber(getCircleValue(-1), "Negative radius should return NaN");
tests.isNotANumber(getCircleValue("invalid"), "String input should return NaN");
tests.isNotANumber(getCircleValue(NaN), "NaN input should return NaN");

tests.isEqual(greeting("Mina"), "Hello, Mina!", "Should greet Mina correctly");
tests.isEqual(greeting("  Mina  "), "Hello, Mina!", "Should handle whitespace");
tests.isEqual(greeting(""), "Hello, guest!", "Empty string should return guest greeting");
tests.isEqual(greeting("   "), "Hello, guest!", "Whitespace only should return guest greeting");
tests.isEqual(greeting(111), "Hello, guest!", "Number input should return guest greeting");
