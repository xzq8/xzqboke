---
title: WampServer本地搭建多个不同端口的站点
date: 2017-8-24   16:48:59
toc: true
tags: 服务器
---

			<p>由于工作需要，最近需要开发一个php项目，手动搭建环境太麻烦了，而且项目比较紧没有那么多时间去做这个工作。所以选择了WampServer来搭建环境。安装WampServer之后打开localhost会显示如下页面：</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/1366122211_3353.png"><img class="alignnone size-full wp-image-172" alt="1366122211_3353" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/1366122211_3353.png" width="1024" height="586"></a></p>
<h2>安装多个apache服务</h2>
<p>一、找到Apache的htppd.conf文件.例如:我的WampServer是安装在D盘的,我的就是D:\Php Devp\bin\apache\Apache2.4.4\conf目录下<br>
二、复制httpd.conf，粘贴后在conf目录下后更名httpd81.conf(这里httpd81.conf是自定义的,我写的使用端口)<br>
三、用用编辑器打开httpd81.conf 找到如下几行代码 （不在一起的）</p>
<pre>Listen 80 
ServerName localhost:80
DocumentRoot "D:/Php Devp/www/"
<Directory "D:/Php Devp/www/"></pre>
<p>修改成：</p>
<pre>Listen 81 //apache服务新监听的端口，可根据自己需要进行修改  
ServerName localhost:81
DocumentRoot "D:/Php Devp/www81/" //www81是我们新网站的目录   
<Directory "D:/Php Devp/www81/"></pre>
<p>然后在D:/Php Devp/下建一新文件夹为 www81<br>
四、接下来就是安装服务了<br>
在桌面或其他地方新建个文本，贴入下面内容（注意目录）</p>
<pre>cd /d D:\Php Devp\bin\apache\Apache2.4.4\bin
httpd.exe -k install -n "www81" -f "D:\Php Devp\bin\apache\Apache2.4.4\conf\httpd81.conf"</pre>
<p>保存，然后将扩展后改成.bat，双击运行即可。<br>
然后我们在www81下放一个html文件来做测试，在浏览器中输入 http://localhost:81 OK。服务正常。如果此时无法访问，可能是因为服务还没启动，在windows服务中会有个我们刚刚新增的名为www81服务，如下图，启动他即可正常访问81地址了</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/1366123155_9603.png"><img class="alignnone size-full wp-image-171" alt="1366123155_9603" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/1366123155_9603.png" width="579" height="30"></a></p>
<h2>用Wamp控制台控制新安装的服务</h2>
<p>一、打开wamp目录，找到wampmanager.ini用编辑器打开<br>
二、相关的修改<br>
其实主要就是全部停止服务、全部启动服务、地址、目录几个配置，只要看到 Service: wampapache 之类的配置然后在下面再加行 Service: www81配置就可以了<br>
<strong>在这里有个需要注意的就是在配置之前先前 wampmanager.tpl 改名，不然如果配置文件里的配置与 wampmanager.tpl 不相符的话会自动给覆盖掉。</strong><br>
下面的修改供参考：</p>
<pre>[Services]
Name: wampapache
Name: wampmysqld
Name: www2

[StartupAction]
;WAMPSTARTUPACTIONSTART
Action: run; FileName: "D:/Php Devp/bin/php/php5.4.12/php-win.exe";Parameters: "refresh.php";WorkingDir: "D:/Php Devp/scripts"; Flags: waituntilterminated
Action: resetservices
Action: readconfig;
Action: service; Service: wampapache; ServiceAction: startresume; Flags: ignoreerrors
Action: service; Service: wampmysqld; ServiceAction: startresume; Flags: ignoreerrors
Action: service; Service: www2; ServiceAction: startresume; Flags: ignoreerrors
;WAMPSTARTUPACTIONEND

[Menu.Left]
;WAMPMENULEFTSTART
Type: separator; Caption: "Powered by Alter Way"
Type: item; Caption: "Localhost"; Action: run; FileName: "C:\Program Files\Google\Chrome\Application\chrome.exe"; Parameters: "http://localhost/"; Glyph: 5
Type: item; Caption: "Localhost 81"; Action: run; FileName: "C:\Program Files\Google\Chrome\Application\chrome.exe"; Parameters: "http://localhost:81/"; Glyph: 5
Type: item; Caption: "phpMyAdmin"; Action: run; FileName: "C:\Program Files\Google\Chrome\Application\chrome.exe"; Parameters: "http://localhost/phpmyadmin/"; Glyph: 5
Type: item; Caption: "www directory"; Action: shellexecute; FileName: "D:/Php Devp/www"; Glyph: 2
Type: item; Caption: "www81 directory"; Action: shellexecute; FileName: "D:/Php Devp/www81"; Glyph: 2

[StartAll]
;WAMPSTARTALLSTART
Action: service; Service: wampapache; ServiceAction: startresume; Flags: ignoreerrors
Action: service; Service: wampmysqld; ServiceAction: startresume; Flags: ignoreerrors
Action: service; Service: www81; ServiceAction: startresume; Flags: ignoreerrors

[StopAll]
;WAMPSTOPALLSTART
Action: service; Service: wampapache; ServiceAction: stop; Flags: ignoreerrors
Action: service; Service: wampmysqld; ServiceAction: stop; Flags: ignoreerrors
Action: service; Service: www81; ServiceAction: stop; Flags: ignoreerrors

[RestartAll]
;WAMPRESTARTALLSTART
Action: service; Service: wampapache; ServiceAction: stop; Flags: ignoreerrors waituntilterminated
Action: service; Service: wampmysqld; ServiceAction: stop; Flags: ignoreerrors waituntilterminated
Action: service; Service: www81; ServiceAction: stop; Flags: ignoreerrors waituntilterminated
Action: service; Service: wampapache; ServiceAction: startresume; Flags: ignoreerrors waituntilterminated
Action: service; Service: wampmysqld; ServiceAction: startresume; Flags: ignoreerrors waituntilterminated
Action: service; Service: www81; ServiceAction: startresume; Flags: ignoreerrors waituntilterminated

[myexit]
;WAMPMYEXITSTART
Action: service; Service: wampapache; ServiceAction: stop; Flags: ignoreerrors
Action: service; Service: wampmysqld; ServiceAction: stop; Flags: ignoreerrors
Action: service; Service: www81; ServiceAction: stop; Flags: ignoreerrors
Action:  exit</pre>
<p>更改完成后保存并重启wamp就可以了。下面是我改后的效果：</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/1366124083_2678.png"><img class="alignnone size-full wp-image-170" alt="1366124083_2678" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/1366124083_2678.png" width="212" height="323"></a></p>
<p>可以按此方法继续添加多个站点。</p>
		