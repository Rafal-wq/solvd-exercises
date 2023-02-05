//Curry Function
const sum = function (a) {
    return function (b) {
        return b ? sum(a + b) : a;
    }
}
console.log(sum(10)(2)(30)(40)());

// Inset your numbers in parentheses instead of 10, 2, 30, 40 - that's examples numbers.
// You can put any number of numbers.
// As a result you will get the sum of your numbers in console.

// ======================================

// DEBOUNCE FUNCTION



