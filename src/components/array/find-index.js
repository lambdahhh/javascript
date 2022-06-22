console.log('Array findIndex');

const myAwesomeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

Array.prototype.myFindIndex = function (callback) {
    let index = -1;
    for(let i = 0; i < this.length; i++) {
        const result = callback(this[i]);
        if (result) {
            index = i;
            break;
        }
    }
    return index;
}

const searchValue = 'g';

function reducer(value) {
    return value === searchValue;
}

const res = myAwesomeArray.findIndex(reducer)

const res2 = myAwesomeArray.myFindIndex(reducer)

console.log('findIndex', res);
console.log('myFindIndex', res2);
