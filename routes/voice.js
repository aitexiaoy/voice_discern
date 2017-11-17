var express = require('express');
var router = express.Router();
var muilter = require('../public/javascripts/common/multer_storage.js');

//multer有single()中的名称必须是表单上传字段的name名称。
var upload = muilter.single('file');
/* GET home page. */
router.post('/', function (req, res) {
    console.log(req);
    console.log('------------------');
    upload(req, res, function (err) {
        console.log(req.file);
        res.send('OK');
        //添加错误处理
        if (err) {
            return console.log(err);
        }
    });
});

module.exports = router;