// You should implement your task here.

module.exports = towelSort;
const Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
function towelSort(matrix = []) {
    let result = [];
    if (Array.isArray(matrix)) {
        matrix.forEach((elem, i) => {
            if (i % 2 == 0) {
                result = result.concat(towelSort(elem));
            } else {
                result = result.concat(towelSort(elem).reverse());
            }
        });
    } else {
        result.push(matrix);
    }
    return result;
}

// console.log(towelSort());
