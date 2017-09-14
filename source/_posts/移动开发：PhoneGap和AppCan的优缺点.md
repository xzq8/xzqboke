---
title: 移动开发：PhoneGap和AppCan的优缺点
date: 2017-6-26   9:1:41
toc: true
tags: PhoneGap
---

			<h1>简介</h1>
<h2>Phonegap</h2>
<p>PhoneGap是一个用基于HTML，CSS和JavaScript的，创建移动跨平台移动应用程序的<strong>快速开发平台</strong>。它使开发者能够利用iPhone，Android，Palm，Symbian,WP7,Bada和Blackberry智能手机的核心功能——包括地理定位，加速器，联系人，声音和振动等，此外PhoneGap拥有丰富的插件，可以以此扩展无限的功能。PhoneGap是免费的，但是它需要特定平台提供的附加软件，例如iPhone的iPhone SDK，Android的Android SDK等，也可以和DW5.5配套开发。使用PhoneGap只比为每个平台分别建立应用程序好一点点，因为虽然基本代码是一样的，但是你仍然需要为每个平台分别编译应用程序。</p>
<h2>AppCan</h2>
<p>AppCan是国内Hybrid App混合模式开发的倡导者，AppCan应用引擎支持Hybrid App的开发和运行。并且着重解决了基于HTML5的移动应用目前”不流畅”和”体验差”的问题。使用AppCan应用引擎提供的Naitve交互能力，可以让HTML5开发的移动应用基本接近Native App的体验。</p>
<p> </p>
<h1>框架优缺点</h1>
<h2>      Phonegap</h2>
<h3>           优点</h3>
<p>支持大部分系统：Android,IOS ,Symbian, Windows Phone, Palm WebOS,</p>
<p>Bada , Symbian</p>
<p>开源，可以进行框架底层优化</p>
<p>框架提供自定义控件，可以调用android原生功能</p>
<p>第三方插件丰富</p>
<p>安装包体积偏小</p>
<p>文档丰富</p>
<p>可在本地调试、发布</p>
<p>支持本地打包、云端打包</p>
<h3>           缺点</h3>
<p>不同平台需要搭建不同开发环境</p>
<p>框架没有UI，需要使用第三方UI插件</p>
<p>框架仅提供基本API，扩展功能需要使用第三方插件</p>
<p>框架不支持自动加密，需要手动对HTML加密</p>
<p>框架未对UI进行优化，应用加载及UI相应时较慢</p>
<p>由于第三方开发人员水平不同，插件质量参差不齐</p>
<h2>AppCan</h2>
<h3>           优点</h3>
<p>支持四大主流系统：Android,IOS,Symbian,Windows Phone</p>
<p>提供一体化解决方案，方便环境搭建、开发、调试、发布</p>
<p>框架自带UI包，包含常用控件样式</p>
<p>框架API丰富</p>
<p>支持本地打包、云端打包</p>
<p>基于密钥的代码加密</p>
<p>技术支持相应及时</p>
<p>框架对UI、动画渲染进行过优化，反应速度快</p>
<h3>           缺点</h3>
<p>不开源，无法修改、优化底层代码</p>
<p>暂不支持自行开发控件/，无法调取android原生功能</p>
<p>框架自带功能过多，导致应用安装包偏大。</p>
<p>文档偏少</p>
<p>部分系统无法使用IDE进行调试</p>
<p><strong>只能在服务器端发布，无法在本地发布</strong></p>
<p><strong>                     IOS</strong><strong>发布，需要将证书上传至服务器</strong></p>
<p> </p>
<p> </p>
<h1>详细比较</h1>
<h2>基本情况</h2>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217">Phonegap</td>
<td valign="top" width="249">AppCan</td>
</tr>
<tr>
<td valign="top" width="102">框架目标</td>
<td valign="top" width="217">PhoneGap的最终目的是终结现存目标平台间的差异</td>
<td valign="top" width="249">快速开发、多种平台、解决基于HTML5的移动应用目前”不流畅”和”体验差”的问题，提供统一的解决方案</td>
</tr>
<tr>
<td valign="top" width="102">框架功能</td>
<td valign="top" width="217">简单</td>
<td valign="top" width="249">丰富</td>
</tr>
<tr>
<td valign="top" width="102">支持平台</td>
<td valign="top" width="217">大部分平台</td>
<td valign="top" width="249">仅4种平台</td>
</tr>
<tr>
<td valign="top" width="102">开发环境</td>
<td valign="top" width="217">不同平台需要不同开发环境</td>
<td valign="top" width="249">只需一个IDE包</td>
</tr>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217"></td>
<td valign="top" width="249">Windows 7 X64 英文版、Windows 8 X64 英文版 无法进行模拟器调试</td>
</tr>
<tr>
<td valign="top" width="102">编译器不支持的HTML标签</td>
<td valign="top" width="217">可以编译、调试、发布</td>
<td valign="top" width="249">不能调试，只能生成apk包，安装至手机</td>
</tr>
<tr>
<td valign="top" width="102">调试</td>
<td valign="top" width="217">可直接调试</td>
<td valign="top" width="249">本地���布的IOS包，必须部署在越狱的机器上</td>
</tr>
<tr>
<td valign="top" width="102">发布</td>
<td valign="top" width="217">在本地可以直接发布</td>
<td valign="top" width="249">必须将代码上传至服务器，才能发布</td>
</tr>
<tr>
<td valign="top" width="102">IOS 签名管理</td>
<td valign="top" width="217">本地管理</td>
<td valign="top" width="249">需要上传至服务器</td>
</tr>
<tr>
<td valign="top" width="102">代码泄露风险</td>
<td valign="top" width="217">低：仅在本地、svn保存代码</td>
<td valign="top" width="249">高：需将代码上传至appcan服务器</td>
</tr>
<tr>
<td valign="top" width="102">中国化</td>
<td valign="top" width="217">弱</td>
<td valign="top" width="249">强：与新浪合作提供云服务等</td>
</tr>
<tr>
<td valign="top" width="102">多语言</td>
<td valign="top" width="217">插件支持</td>
<td valign="top" width="249">插件支持</td>
</tr>
<tr>
<td valign="top" width="102">安装包大小</td>
<td valign="top" width="217">小</td>
<td valign="top" width="249">大</td>
</tr>
</tbody>
</table>
<h2>开发</h2>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217">Phonegap</td>
<td valign="top" width="249">AppCan</td>
</tr>
<tr>
<td valign="top" width="102">开发语言</td>
<td valign="top" width="217">HTML 5 + js + CSS 3</td>
<td valign="top" width="249">HTML 5 + js + CSS 3</td>
</tr>
<tr>
<td valign="top" width="102">开发环境</td>
<td valign="top" width="217">不同平台需要不同开发环境</td>
<td valign="top" width="249">Eclipse（IDE 内置）</td>
</tr>
<tr>
<td valign="top" width="102">UI</td>
<td valign="top" width="217">JQM等三方控件或自行设计</td>
<td valign="top" width="249">AppCan.UI或第三方UI控件或自行设计</td>
</tr>
<tr>
<td valign="top" width="102">自定义控件</td>
<td valign="top" width="217">支持自定义控件（原生代码），方便前台调用</td>
<td valign="top" width="249">暂不支持调用自定义控件（原生代码），2.0后将支持</td>
</tr>
<tr>
<td valign="top" width="102">官方API</td>
<td valign="top" width="217">较少，功能比较单一</td>
<td valign="top" width="249">比较丰富</td>
</tr>
<tr>
<td valign="top" width="102">第三方控件</td>
<td valign="top" width="217">比较丰富</td>
<td valign="top" width="249">仅支持UI、JS控件</td>
</tr>
<tr>
<td valign="top" width="102">多线程</td>
<td valign="top" width="217">支持</td>
<td valign="top" width="249">支持</td>
</tr>
<tr>
<td valign="top" width="102">多窗口</td>
<td valign="top" width="217">需要使用插件</td>
<td valign="top" width="249">框架支持</td>
</tr>
<tr>
<td valign="top" width="102">Iframe</td>
<td valign="top" width="217">不支持</td>
<td valign="top" width="249">不支持</td>
</tr>
<tr>
<td valign="top" width="102">后退</td>
<td valign="top" width="217">需要插件</td>
<td valign="top" width="249">框架自带API</td>
</tr>
<tr>
<td valign="top" width="102">Socket等</td>
<td valign="top" width="217">需要自行开发控件（已有第三方控件）</td>
<td valign="top" width="249">官方API支持，暂无法保持socket连接</td>
</tr>
</tbody>
</table>
<h2>性能</h2>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217">Phonegap</td>
<td valign="top" width="249">AppCan</td>
</tr>
<tr>
<td valign="top" width="102">页面加载</td>
<td valign="top" width="217">有明显的延时</td>
<td valign="top" width="249">有明显的延时</td>
</tr>
<tr>
<td valign="top" width="102">页面切换</td>
<td valign="top" width="217">部分第三方控件会出现明显的抖动</td>
<td valign="top" width="249">将亮度不为最暗时，加载新页面，有明显的变暗</td>
</tr>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217">会出现白屏，需要使用第三方控件屏蔽</td>
<td valign="top" width="249">不会出现白屏</td>
</tr>
<tr>
<td valign="top" width="102">动画渲染</td>
<td valign="top" width="217">较差</td>
<td valign="top" width="249">较好</td>
</tr>
<tr>
<td valign="top" width="102">细粒度测试</td>
<td valign="top" width="217">较差</td>
<td valign="top" width="249">一般</td>
</tr>
<tr>
<td valign="top" width="102">初始化内存</td>
<td valign="top" width="217">8.5MB</td>
<td valign="top" width="249">11MB</td>
</tr>
<tr>
<td valign="top" width="102">初始化Cpu使用量</td>
<td valign="top" width="217">一般</td>
<td valign="top" width="249">一般</td>
</tr>
<tr>
<td valign="top" width="102">UI刷新</td>
<td valign="top" width="217">每线程20毫秒刷新一次，4个线程开始出现刷新不及时</td>
<td valign="top" width="249">每线程20毫秒刷新一次,120个线程并无出现明显刷新问题</td>
</tr>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217"></td>
<td valign="top" width="249">content页面在离开后不会结束，可能会出现重叠</td>
</tr>
<tr>
<td valign="top" width="102">应用加载速度</td>
<td valign="top" width="217">较快（不强制使用欢迎页面、部分数据初始化可在欢迎页面完成）</td>
<td valign="top" width="249">差（系统强制使用欢迎界面，数据初始化无灾欢迎页面进行）</td>
</tr>
<tr>
<td valign="top" width="102">页面加载速度</td>
<td valign="top" width="217">较慢（不使用插件时直接跳转，但会出现白屏）</td>
<td valign="top" width="249">一般（原页面等待0.5-1.5秒后跳转）</td>
</tr>
</tbody>
</table>
<h2>其他</h2>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="102"></td>
<td valign="top" width="217">Phonegap</td>
<td valign="top" width="249">AppCan</td>
</tr>
<tr>
<td valign="top" width="102">退出确认</td>
<td valign="top" width="217">自行开发</td>
<td valign="top" width="249">框架封装</td>
</tr>
<tr>
<td valign="top" width="102">文档</td>
<td valign="top" width="217">丰富</td>
<td valign="top" width="249">一般（逐渐增加）</td>
</tr>
<tr>
<td valign="top" width="102">技术支持</td>
<td valign="top" width="217">一般</td>
<td valign="top" width="249">方便</td>
</tr>
<tr>
<td valign="top" width="102">提交问题渠道</td>
<td valign="top" width="217">论坛、Q群（民间）、官方邮箱</td>
<td valign="top" width="249">论坛、Q群（官方）、官方邮箱</td>
</tr>
</tbody>
</table>
		