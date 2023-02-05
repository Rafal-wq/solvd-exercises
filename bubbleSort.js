const arr = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                swapped = true
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

console.time('Execution Time');

console.log(bubbleSort(arr));

console.timeEnd('Execution Time');

module.exports = {
    arr,
}