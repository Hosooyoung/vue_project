var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('userA');
    console.log('userA');
    console.log('userA');
    // res.send('respond with a resource');
});
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
            const salt = bcrypt.genSaltSync();
            const encryptedPassword = bcrypt.hashSync(user.password, salt);
            connection.query('INSERT INTO users (id,user_name,user_password,phone,email) VALUES ("' + user.userid + '","' + user.name + '","' + encryptedPassword + '","' + user.phone + '","' + user.email + '")', user, function(err, row2) {
                if (err) throw err;
            });
            res.json({
                success: true,
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
router.post('/logincheck', function(req, res) {
    console.log('userC');
    const user = {
        'userid': req.body.user.userid,
        'password': req.body.user.password
    };
    connection.query('SELECT userid, password FROM users WHERE userid = "' + user.userid + '"', function(err, row) {
        if (err) {
            res.json({ // 아이디 없음
                success: false,
                message: '아이디를확인하세요'
            })
        }
        if (row[0] !== undefined && row[0].userid === user.userid) {
            bcrypt.compare(user.password, row[0].password, function(err, res2) {
                if (res2) {
                    res.json({ // 로그인 성공 
                        success: true,
                        message: 'Login successful!'
                    })
                } else {
                    res.json({ //비번틀림
                        message: '비밀번호를 확인하세요'
                    })
                }
            })
        }
    })
});
module.exports = router;