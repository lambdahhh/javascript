console.log('Array filter');

const myAwesomeArray = [
    {id: 1, name: 'John', salary: 100000},
    {id: 2, name: 'Max', salary: 200000},
    {id: 3, name: 'Ali', salary: 300000},
    {id: 4, name: 'Mark', salary: 400000},
    {id: 5, name: 'Tom', salary: 500000},
    {id: 6, name: 'Mike', salary: 600000},
];

Array.prototype.myFilter = function (callback) {
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr.push(this[i]);
        }

    }
    return newArr;
}

function reducer(value) {
    return value.salary > 350000;
}

const res = myAwesomeArray.filter(reducer)

const res2 = myAwesomeArray.myFilter(reducer)

console.log('filter', res);
console.log('myFilter', res2);
