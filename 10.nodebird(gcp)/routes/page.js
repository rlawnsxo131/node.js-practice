const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User } = require('../models');//추가

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => { //isLoggedIn
    res.render('profile', { title: '내정보 - NodeBird', user: req.user}); //user: null 수정
});

router.get('/join', isNotLoggedIn, (req, res) => { //isNotLoggedIn 추가
    res.render('join', {
        title: '회원가입 - NodeBird',
        user: req.user, //user: null 수정
        joinError: req.flash('joinError')
    });
});

router.get('/', (req, res, next) => {
    Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      order: [['createdAt', 'DESC']],
    })
      .then((posts) => {
        res.render('main', {
          title: 'NodeBird',
          twits: posts,
          user: req.user,
          loginError: req.flash('loginError'),
        });
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  });

module.exports = router;