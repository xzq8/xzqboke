/**
 * Created by Administrator on 2017/9/9.
 * 七牛云图片上传 并在source/photo 下生成json文件
 */

const fs = require("fs");
const path = "./photo";
var qiniu = require("qiniu");
var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = '8yWy9WW-yfaFK3eROA0Y73H5ttwZWePmHtrcgdkN';
qiniu.conf.SECRET_KEY = 'hWv3pmVbs7nukG9diEcaE8rLIGoieCUtCyVZDWxd';

var mac = new qiniu.auth.digest.Mac(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY);

//要上传的空间
bucket = 'xzqbk';

var options = {
    scope: bucket,
    expires: 99999//无此字段出现会undefined异常
}

//构建上传策略函数
function uptoken(options) {
    var putPolicy = new qiniu.rs.PutPolicy(options);
    return putPolicy.uploadToken(mac);;
}

//构造上传函数
function uploadFile(uptoken, key, localFile) {
    var formUploader = new qiniu.form_up.FormUploader(config);
    var extra = new qiniu.form_up.PutExtra();
    formUploader.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
            // 上传成功， 处理返回值
            console.log('upload success : ',ret.hash, ret.key);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
        }
    });
}

/**
 * 读取文件后缀名称，并转化成小写
 * @param file_name
 * @returns
 */
function getFilenameSuffix(file_name) {
    if(file_name=='.DS_Store'){
        return '.DS_Store';
    }
    if (file_name == null || file_name.length == 0)
        return null;
    var result = /\.[^\.]+/.exec(file_name);
    return result == null ? null : (result + "").toLowerCase();
}


fs.readdir(path, function (err, files) {
    if (err) {
        return;
    }
    var arr = [];
    (function iterator(index) {
        if (index == files.length) {
            fs.writeFile("./source/photo/data.json", JSON.stringify(arr, null, "\t"));
            return;
        }

        fs.stat(path + "/" + files[index], function (err, stats) {
            if (err) {
                return;
            }
            if (stats.isFile()) {
                var suffix = getFilenameSuffix(files[index]);
                if(!(suffix=='.js'|| suffix == '.DS_Store'|| suffix == '.json')){
                    //要上传文件的本地路径
                    filePath = path+'/'+files[index];
                    console.log(' 抓取到文件: '+files[index]);
                    //上传到七牛后保存的文件名
                    key = files[index];
                    //生成上传 Token
                    token = uptoken(options);
                    // 异步执行
                    uploadFile(token, key, filePath);
                    arr.push(files[index]);
                }

            }
            iterator(index + 1);
        })
    }(0));
});