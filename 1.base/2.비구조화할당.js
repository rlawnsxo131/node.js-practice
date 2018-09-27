//객체의 비구조화 할당
var candyMachine1 = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function(){
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine2 = {
    status: {
        name:'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
}
const { getCandy, status : {count} } = candyMachine2;
console.log(candyMachine2);

// ---------------------------------------------------------------------------
//배열의 비구조화 할당
var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[array.length-1];

const array = ['node.js', {}, 10, true];
const [node, obj, , bool] = array;


