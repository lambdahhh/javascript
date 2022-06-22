console.log('Array map');

const myAwesomeArray = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callback) {
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

function reducer(value, index, arr) {
    return value % 2;
}

const res = myAwesomeArray.map(reducer)

const res2 = myAwesomeArray.myMap(reducer)

console.log('map', res);
console.log('myMap', res2);
