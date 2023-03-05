const promiseAll = async function (array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        try {
            const value = await Promise.resolve(array[i]);
            results.push(value);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return Promise.resolve(results);
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
});

promiseAll([promise1, promise2, promise3]).then((res) => console.log(res));