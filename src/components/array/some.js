console.log('Array some');

const myAwesomeArray = [1, 2, 3, 4, 5];

Array.prototype.mySome = function (callback) {
    let result = false;
    for(let i = 0; i < this.length; i++) {
        result = callback(this[i], i, this);
        if (result === true) {
            break;
        }
    }
    return result;
}

const checkValue = 1;

const res = myAwesomeArray.some((item, index, arr) => {
    return item === checkValue;
})

const res2 = myAwesomeArray.mySome((item, index, arr) => {
    return item === checkValue;
})

console.log('some', res);
console.log('mySome', res2);
