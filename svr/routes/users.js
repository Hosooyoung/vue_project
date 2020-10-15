var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bcrypt = require('bcrypt');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'vue_project'
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('userA');
    console.log('userA');
    console.log('userA');
    res.send('respond with a resource');
});
/////////create account in DB//////
router.post('/createAcc', function(req, res) {
    console.log('userB');
    const user = {
        'userid': req.body.user.userid,
        'name': req.body.user.name,
        'password': req.body.user.password,
        'phone': req.body.user.phone,
        'email': req.body.user.email

    };
    connection.query('SELECT id FROM users WHERE id = "' + user.userid + '"', function(err, row) {
        if (row[0] == undefined) { //  동일한 아이디 없ㅇㅁ
            connection.query('INSERT INTO users (id,user_name,user_password,phone,email) VALUES ("' + user.userid + '","' + user.name + '","' + user.password + '","' + user.phone + '","' + user.email + '")', user, function(err, row2) {
                if (err) throw err;
            });
            res.json({
                success: false,
                message: '가입성공'
            })
        } else {
            res.json({
                success: false,
                message: '아이디중복'
            })
        }
    });

});
///////////login account check//////////////////////
router.post('/logincheck', function(req, res) {
    // console.log('userC');
    const user = {
        'userid': req.body.user.userid,
        'password': req.body.user.password
    };
    console.log(user.userid);
    console.log(user.password);
    console.log(typeof user.userid);
    connection.query('SELECT id, user_password FROM users WHERE id = "' + user.userid + '"', function(err, row) {
        //  console.log('queryOK');
        if (row[0] == undefined) {
            res.json({ // 아이디 없음
                success: false,
                message: '아이디를확인하세요'
            })
        }
        if (row[0] !== undefined && row[0].id === user.userid) {
            if (row[0].user_password == user.password) {
                res.json({ // 로그인 성공 
                    success: true,
                    message: '로그인성공'
                })
            } else {
                res.json({ //비번틀림
                    success: false,
                    message: '비밀번호를 확인하세요'
                })
            }
        }
    })
});
module.exports = router;