//module_index.js
const { odd, even } = require('./2.module_var');
const checkNumber = require('./2.module_func');

function checkStringOddOrEven(str) {
    if(str.length % 2) { //홀수면
        return odd;
    }
    return even; //짝수인 경우
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
