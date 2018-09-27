//기본 프로미스
const condition = true; //true면 resolve, false면 reject
const promise = new Promise((resolve,reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message); //성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); //실패(reject)한 경우 실행
        
    });
//----------------------------------------------------------------------------
//프로미스 연결
promise
    .then((message) => {
        return new Promise((resolve,reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2); //성공
        return new Promise((resolve,reject) => {
            resolve(message2);
        });
    }).then((message3) => {
        console.log(message3); //성공
    }).catch((error) => {
        console.error(error);
    });
//------------------------------------------------------------------------------
//프로미스 지원함수 프로미스형식으로 변경
function findandSaverUser(Users) {
    Users.findOne({},(err, user) => { //첫번째 콜백
        if(err){
            return console.log(err);
        }
        user.name = 'Zero';
        user.save((err) => { //두번째 콜백
            return console.error(err);
        
        users.findOne({ gender: 'm'}, (err, user) => { //세번째 콜백
            //생략
        });
     });
  });
}

function findandSaverUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'Zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender : 'm'});
        })
        .then((user) =>{
            //생략
        })
        .catch((err) => {
            console.error(err);
        });
}
//----------------------------------------------------------------------------
//프로미스 여러 개를 한번에 실행
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); //['성공', '성공2']
    })
    .catch((error) => {
        console.error(error);
    });
