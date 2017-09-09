/**
 * Created by Administrator on 2017/9/9.
 * ��ţ��ͼƬ�ϴ� ����source/photo ������json�ļ�
 */

const fs = require("fs");
const path = "./photo";
var qiniu = require("qiniu");
var config = new qiniu.conf.Config();
// �ռ��Ӧ�Ļ���
config.zone = qiniu.zone.Zone_z0;

//��Ҫ��д��� Access Key �� Secret Key
qiniu.conf.ACCESS_KEY = '8yWy9WW-yfaFK3eROA0Y73H5ttwZWePmHtrcgdkN';
qiniu.conf.SECRET_KEY = 'hWv3pmVbs7nukG9diEcaE8rLIGoieCUtCyVZDWxd';

var mac = new qiniu.auth.digest.Mac(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY);

//Ҫ�ϴ��Ŀռ�
bucket = 'xzqbk';

var options = {
    scope: bucket,
    expires: 99999//�޴��ֶγ��ֻ�undefined�쳣
}

//�����ϴ����Ժ���
function uptoken(options) {
    var putPolicy = new qiniu.rs.PutPolicy(options);
    return putPolicy.uploadToken(mac);;
}

//�����ϴ�����
function uploadFile(uptoken, key, localFile) {
    var formUploader = new qiniu.form_up.FormUploader(config);
    var extra = new qiniu.form_up.PutExtra();
    formUploader.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
            // �ϴ��ɹ��� ������ֵ
            console.log('upload success : ',ret.hash, ret.key);
        } else {
            // �ϴ�ʧ�ܣ� �����ش���
            console.log(err);
        }
    });
}

/**
 * ��ȡ�ļ���׺���ƣ���ת����Сд
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
                    //Ҫ�ϴ��ļ��ı���·��
                    filePath = path+'/'+files[index];
                    console.log(' ץȡ���ļ�: '+files[index]);
                    //�ϴ�����ţ�󱣴���ļ���
                    key = files[index];
                    //�����ϴ� Token
                    token = uptoken(options);
                    // �첽ִ��
                    uploadFile(token, key, filePath);
                    arr.push(files[index]);
                }

            }
            iterator(index + 1);
        })
    }(0));
});