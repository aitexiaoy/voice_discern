var fs = require('fs'); // 载入fs模块
var AipSpeechClient = require("baidu-aip-sdk").speech; //引入识别模块
var muilter = require('../common/multer_storage.js');


// 设置APPID/AK/SK
var APP_ID = "10229156";
var API_KEY = "hSmyKnQxB8PxfvAzxCyoRlAD";
var SECRET_KEY = "84d9d74183334af9b34adcea1c15a0c6";

var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

//multer有single()中的名称必须是表单上传字段的name名称。
var upload = muilter.single('audioData');
exports.dataInput = function (req, res) {
    upload(req, res, function (err) {
        console.log(req.file);
        //添加错误处理
        if (err) {
            return console.log(err);
        }
        // 文件信息在req.file或者req.files中显示
        // 载入音频，pcm格式或者wav格式，格式有要求
        let voice = fs.readFileSync(req.file.path);
        let voiceBuffer = new Buffer(voice);

        // 识别本地文件
        client.recognize(voiceBuffer, 'wav', 8000).then(function (result) {
            console.log('<recognize>: ' + JSON.stringify(result));
            res.send(JSON.stringify(result));
        //    fs.unlink(req.file.path); //删除文件
        }, function (err) {
            console.log(err);
            fs.unlink(req.file.path); //删除文件
        });
    });
}