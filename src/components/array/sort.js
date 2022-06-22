console.log('Array sort');

const myAwesomeArray = [4, 5, 2, 1, 9, 6];

Array.prototype.mySort = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let isNext = false;
        for (let j = 0; j < this.length; j++) {
            if (this[j + 1] !== undefined && this[j] >= this[j + 1]) {
                const tmp = this[j];
                this[j] = this[j+1];
                this[j+1] = tmp;
                isNext = true;
            }
        }
        if (isNext === false) {
            break;
        }
    }
    return this;
}

function reducer(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

const res = myAwesomeArray.sort(reducer)

const res2 = myAwesomeArray.mySort(reducer)

console.log('sort', res);
console.log('mySort', res2);
