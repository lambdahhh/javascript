console.log('Array reduceRight');

const myAwesomeArray = ['1', '2', '3', '4'];

Array.prototype.myReduceRight = function (callback, initValue) {
    let result = initValue !== undefined ? initValue : null;
    const reverseArr = this.reverse();
    for(let i = 0; i < reverseArr.length; i++) {
        result = callback(result, reverseArr[i]);
    }
    return result;
}

function reducer(prev, item) {
    return prev + '+' + item;
}
const initialValue = '';

const res = myAwesomeArray.reduceRight(reducer, initialValue)

const res2 = myAwesomeArray.myReduceRight(reducer, initialValue)

console.log('reduceRight', res);
console.log('myReduceRight', res2);
