/**
 * Created by Administrator on 2017/9/9.
 * 把photo文件加中的图片 生成 json文件
 */
"use strict";
var fs = require("fs");
var path = "./photo/";
fs.readdir(path, function (err, files) {
    if (err) {
        return;
    }
    var arr = [];
    (function iterator(index) {
        if (index == files.length) {
            fs.writeFile("./source/photo/data.json", JSON.stringify(arr, null, "\t"));
            console.log('get img success!');
            return;
        }
        fs.stat(path + files[index], function (err, stats) {
            if (err) {
                return;
            }
            if (stats.isFile()) {
                arr.push(files[index]);
            }
            iterator(index + 1);
        })
    }(0));
});