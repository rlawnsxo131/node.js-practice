//async await 기본
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender : 'm'});
        //생략
    } catch (error) {
        console.error(error);        
    }
};
//--------------------------------------------------------
//async await + arrow function
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender : 'm'});
    } catch (error) {
        console.error(error);
    }
};
//--------------------------------------------------------
//async await로 Promise.all 구현
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);        
    }
})();
