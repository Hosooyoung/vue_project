var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'vue_project'
});

function modifySeq() {
    console.log('진입은합니다.');
    sql = 'alter table notice auto_increment=1';
    connection.query(sql, (err, result) => {
        console.log(sql);
        if (err) {
            console.log(err);
            throw err;

        } else {
            console.log('good');
            console.log(result);
        }

    })
    sql = 'set @count=0';
    connection.query(sql, (err, result) => {
        console.log(sql);
        if (err) {

            console.log(err);
            throw err;
        } else {
            console.log('good');
            console.log(result);
        }
    })
    sql = 'update notice set seq = @count:=@count+1';
    connection.query(sql, (err, result) => {
        console.log(sql);
        if (err) {

            console.log(err);
            throw err;
        } else {
            console.log('good');
            console.log(result);
        }
    })

};
router.get('/getList', function(req, res, next) {
    //console.log('getlist');
    let ipp = 10;
    let totalCount = 0;
    let block = 10;
    let total_page = 0;
    let page = 1;
    let start = 0;
    let end = ipp;
    let start_page = 1;
    let end_page = block;
    let where = "";
    body = req.query;
    sql = ` SELECT  count(*) cnt FROM notice `;
    connection.query(sql, (err, data) => {
        // console.log('cnt:' + data[0].cnt);
        if (err) throw err;
        totalCount = data[0].cnt;

        total_page = Math.ceil(totalCount / ipp);

        if (body.page) page = body.page;
        start = (page - 1) * 10;
        start_page = Math.ceil(page / block);
        end_page = start_page * block;

        if (total_page < end_page) end_page = total_page;

        let paging = {
            "totalCount": totalCount,
            "total_page": total_page,
            "page": page,
            "start_page": start_page,
            "end_page": end_page,
            "ipp": ipp
        }
        sql = ` SELECT * FROM notice order by seq desc  LIMIT ?, ? `;
        connection.query(sql, [start, end], (err, list) => {
            if (err) throw err;
            res.send({ success: true, list: list, paging: paging });
        })
    })
});
router.post('/addNotice', function(req, res, next) {
    body = req.body; //전송된 데이터를 받는다.
    sql = " INSERT INTO notice (title, contents,hit) values (?, ?, ?) ";
    connection.query(sql, [body.title, body.contents, 0], (err, result) => {
        if (err) throw err;
        modifySeq();
        res.send({ success: true });
    })
});
router.get('/inforead/:seq', function(req, res, next) {
    console.log('hi');
    body = req.query;
    seq = req.params.seq;
    console.log('seq' + seq);
    sql = " SELECT * FROM notice WHERE seq = ? ";

    connection.query(sql, [seq], (err, data) => {
        if (err) throw err;
        console.log('res : ' + res);
        console.log('res title: ' + data[0].title);
        console.log('res con: ' + data[0].contents);
        res.send({ success: true, data: data });
    })
});
router.post('/reNotice', function(req, res, next) {
    body = req.body; //post
    sql = " UPDATE notice SET title = ?, contents = ?,  rewrite_date= now() WHERE seq = ? ";
    connection.query(sql, [body.title, body.contents, body.seq], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    })
});
router.post('/DelNoti', function(req, res, next) {
    seq = req.body.seq; //post
    sql = " delete from notice WHERE seq = ? ";
    console.log('seq : ' + body.seq);
    connection.query(sql, [body.seq], (err, result) => {
        if (err) throw err;
        modifySeq();

        res.send({ success: true });
    })

});


module.exports = router;