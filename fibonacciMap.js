function fnm() {

    const map = new Map();

    const key1 = function recursiveFibonacci(n) {
        if ( n < 2 ) {
            return n;
        }
        return recursiveFibonacci( n - 1 ) + recursiveFibonacci( n - 2 )
    };
    const fibonacciCallback = key1(20);

    map.set(key1, fibonacciCallback);

    console.log((map.get(key1)));
}
fnm();

// Put your number of fibonacci sequence into the brackets of key1,
// that is in variable fibonacciCallback.
// Number 20 is just example