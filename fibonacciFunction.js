function recursiveFibonacci(n) {
    if ( n < 2 ) {
        return n;
    }
    return recursiveFibonacci( n - 1 ) + recursiveFibonacci( n - 2 )
}


console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(40));

//===========================
// Fibonacci number tryout

// function fnc() {
//     const weakMap = new WeakMap();
//     function recursiveFibonacci(n) {
//         if ( n < 2 ) {
//             return n;
//         }
//         return recursiveFibonacci( n - 1 ) + recursiveFibonacci( n - 2 )
//     }
//
//     weakMap.set(recursiveFibonacci, "Computed");
//
//     console.log(weakMap.get(recursiveFibonacci));
// }
// fnc();
//--------------------------------------------------------
// const cache = new WeakMap();
// function countOwnKeys(obj) {
//     if (cache.has(obj)) {
//         return [cache.get(obj), 'cached'];
//     } else {
//         let count = 5;
//         // const count = Object.keys(obj).length;
//         cache.set(obj, count);
//         return [count, 'computed'];
//     }
// }
//--------------------------------------------------------
// const cache = new WeakMap();
// function handleObjectValues(obj) {
//     if (cache.has(obj)) {
//         return cache.get(obj);
//     }
//     const result = function recursiveFibonacci(n) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return recursiveFibonacci( n - 1 ) + recursiveFibonacci( n - 2 )
// };
//     cache.set(obj, result);
//     return result;
// }
//
// console.log(cache)
//==========================================================


