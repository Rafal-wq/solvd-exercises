function plus(string1, string2) {
    if (typeof string1 === "bigint" || typeof string2 === "bigint") {
        const bigIntResult = string1 + string2;
        return console.log(bigIntResult);
    } else if (string1){
        const result = BigInt(string1) + BigInt(string2);
        return console.log(result.toString());
    }
}

function minus(string1, string2) {
    if (typeof string1 === "bigint" || typeof string2 === "bigint") {
        const bigIntResult = string1 - string2
        if (bigIntResult < 0) {
            return console.log('First argument must be greater than second one.');
        }
        return console.log(bigIntResult);
    } else {
        const result = BigInt(string1) - BigInt(string2);
        if (result < 0) {
            return console.log('First argument must be greater than second one.');
        }
        return console.log(result.toString());
    }
}

function divide(string1, string2) {
    if (typeof string1 === "bigint" || typeof string2 === "bigint") {
        const bigIntResult = string1 / string2
        if (string2 == 0) {
            return console.log('Second argument must be other than 0.');
        }
        return console.log(bigIntResult);
    } else {
        const result = BigInt(string1) / BigInt(string2);
        return console.log(result.toString());
    }
}

function multiply(string1, string2) {
    if (typeof string1 === "bigint" || typeof string2 === "bigint") {
        const bigIntResult = string1 * string2;
        return console.log(bigIntResult);
        } else {

        const result = BigInt(string1) * BigInt(string2);
        return console.log(result.toString());
    }
}

function calc(string1, string2, callback) {
    return callback(string1, string2);
}

const calcResult = calc('15', '20', multiply);

// In variable above (calcResult) you need to provide three parameters :
// Number in a string format (x2) instead of '15' and '20' (calc), that's only examples.
// Then choose one of arithmetic expressions : plus, minus, divide or multiply.
// Multiply is there as an example.
// Name of expression you put, must be without round brackets at the end and starts with the lower case.
// Run your code in a console (in browser or IDE you use).