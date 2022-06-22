console.log('Array flat');

const myAwesomeArray = [[1,2], [3,4], [5, 6], [7, 8], 9];

Array.prototype.myFlat = function () {
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            for (let j = 0; j < this[i].length; j++) {
                newArr.push(this[i][j]);
            }
        } else {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const res = myAwesomeArray.flat()

const res2 = myAwesomeArray.myFlat()

console.log('flat', res);
console.log('myFlat', res2);
