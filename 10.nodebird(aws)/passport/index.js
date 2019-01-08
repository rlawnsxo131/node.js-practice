const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
       try {
            const user = await User.find({
                where: { id },
                include: [{
                    model: User,
                    attributes: ['id', 'nick'],
                    as: 'Followers',
                }, {
                    model: User,
                    attributes: ['id', 'nick'],
                    as: 'Followings',
                }],
            });
            done(null, user);
       } catch (error) {
           done(error);
       }      
    });

    local(passport);
    kakao(passport);
};



// passport.deserializeUser((id, done) => {
//     User.find({
//         where: { id },
//         include: [{
//             model: User,
//             attributes: ['id', 'nick'],
//             as: 'Followers',
//         }, {
//             model: User,
//             attributes: ['id', 'nick'],
//             as: 'Followings',
//         }],
//     })
//     .then(user => done(null, user))
//     .catch(err => done(err));
// });