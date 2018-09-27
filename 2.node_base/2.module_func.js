//module_func.js
const { odd, even } = require('./2.module_var');

function checkOddOrEven(num) {
    if (num % 2) { //홀수일 경우
        return odd;
    }
    return even; //짝수일 경우
}

module.exports = checkOddOrEven;

//ES6 자바스크립트의 모듈 문법
// import {odd, even} from '/.2.module_var';

// function checkOddOrEven(num) {
//     if(num%2) { //홀수인 경우
//         return odd;
//     }
//     return even; //짝수인 경우
// }

// export default checkOddOrEven;
