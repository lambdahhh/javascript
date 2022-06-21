console.log('Array every');

const myAwesomeArray = ["a", "b", "c", "d", "e"];

Array.prototype.mySome = function (callback) {
    let result = true;
    for(let i = 0; i < this.length; i++) {
        result = callback(this[i], i, this);
        if (result === false) {
            break;
        }
    }
    return result;
}

const res = myAwesomeArray.every((item, index, arr) => {
    return item.length === 1
})

const res2 = myAwesomeArray.mySome((item, index, arr) => {
    return item.length === 1
})

console.log('every', res);
console.log('mySome', res2);
