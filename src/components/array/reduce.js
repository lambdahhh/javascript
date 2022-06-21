console.log('Array reduce');

const myAwesomeArray = ['1', '2', '3', '4'];

Array.prototype.myReduce = function (callback, initValue) {
    let result = initValue !== undefined ? initValue : null;
    for(let i = 0; i < this.length; i++) {
         result = callback(result, this[i]);
    }
    return result;
}

function reducer(prev, item) {
    return prev + item;
}
const initialValue = '';

const res = myAwesomeArray.reduce(reducer, initialValue)

const res2 = myAwesomeArray.myReduce(reducer, initialValue)

console.log('reduce', res);
console.log('myReduce', res2);
