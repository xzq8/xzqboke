---
title: Sublime Text 3中文优化版相关配置教程
date: 2017-6-5   6:14:9
toc: true
tags: 技巧资源
---

			<h2>【rem相对单位配置】</h2>
<p>1、在菜单栏找到Preferences选项中的Package Settings–下面rem-unit的Settings-User设置，并打开。</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2016/07/1.png"><img class="alignnone size-full wp-image-562" alt="1" src="http://www.webqianduan.cn/wp-content/uploads/2016/07/1.png" width="698" height="360"></a></p>
<p> </p>
<p>2、然后在打开的文本中进行相关的配置，修改后保存即可。</p>
<pre>{
 "exts": [".html",".css", ".scss", ".less", ".sass", ".styl"], //启用此插件的文件类型。
 "fontsize": 16,//html元素font-size值，默认为16。
 "precision": 8,//px转rem的小数部分的最大长度，默认为8.
 "leadingzero": false,//是否保留前导0，默认不保留。
}</pre>
<h2>【主题设置】</h2>
<p>1、在菜单栏找到Preferences选项–设置-用户，并打开。</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2016/07/2.png"><img class="alignnone size-full wp-image-563" alt="2" src="http://www.webqianduan.cn/wp-content/uploads/2016/07/2.png" width="285" height="309"></a></p>
<p> </p>
<p>2、打开以下界面后，讲框选中的主题名称替换成你想要的（已列出3种）。</p>
<p>示例：将默认的Numix修改为Spacegra主题。</p>
<pre>"theme": "<span style="color: #ff0000;">Numix</span>.sublime-theme",修改为"theme": "<span style="color: #ff0000;">Spacegra</span>.sublime-theme",</pre>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2016/07/3.png"><img class="alignnone size-full wp-image-564" alt="3" src="http://www.webqianduan.cn/wp-content/uploads/2016/07/3.png" width="419" height="189"></a></p>
		