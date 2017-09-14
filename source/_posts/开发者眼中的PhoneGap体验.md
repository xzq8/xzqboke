---
title: 开发者眼中的PhoneGap体验
date: 2017-7-13   20:21:0
toc: true
tags: PhoneGap
---

			<p><strong>首先来看看，PhoneGap是什么？</strong></p>
<p>官方的介绍是，PhoneGap是一个开源的开发框架，使用HTML、CSS和JavaScript来构建跨平台的的移动应用程序，它使开发者能够利用iPhone、Android、Palm、Symbian、WP7、Bada和Blackberry智能手机的核心功能——包括地理定位、加速器、联系人、声音和振动等，此外PhoneGap拥有丰富的插件，可以以此扩展无限的功能。</p>
<p> </p>
<p><strong>PhoneGap的性能：</strong></p>
<p>1.兼容性——完全做到了written once，run everywhere（一次编译到处运行）</p>
<p>2.标准化——PhoneGap采用W3C标准</p>
<p><strong>热门跨平台开发框架的比较</strong></p>
<p> </p>
<p>随着人们对跨平台应用开发研究的不断深入，当前市场上已出现了若干致力于跨平台开发的产品级框架。从Web App到PhoneGap、MonoTouch、Titanium、jQueryMobile、Sencha再到Native App。其中PhoneGap、Titanium和Rhodes便是当下发展较为成熟的三款开发框架。</p>
<p>一起来看下他们的对比情况：</p>
<p><strong>支持平台</strong></p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/94_120315142631_1.jpg"><img class="alignnone size-full wp-image-292" alt="94_120315142631_1" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/94_120315142631_1.jpg" width="554" height="82"></a></p>
<p>Titanium框架目前只支持Android和iPhone平台，而PhoneGap和Rhodes则均声称支持当前大多数的主流平台，图中描述的是PhoneGap开发框架当前的兼容平台。</p>
<p><strong>编程语言</strong></p>
<p>PhoneGap和Titanium框架均采用了HTML + CSS + JavaScript作为其编程语言，同时对HTML5和CSS3提供了相应的支持；而Rhodes则使用Ruby + Rails作为其编程基础，使用Ruby来实现移动应用的逻辑。不难发现，上述三者都选择了成熟的脚本和Web技术作为实现平台兼容的入手点，这也是目前实现跨平台开发的唯一可行之路。</p>
<p>如图所示：PhoneGap框架对当前主流移动平台的支持细节</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/94_120315142718_1.jpg"><img class="alignnone size-full wp-image-293" alt="94_120315142718_1" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/94_120315142718_1.jpg" width="554" height="327"></a></p>
<p>当前，PhoneGap已经对几乎所有的主流移动平台提供了支持，不过从图中看以看出，受到来自技术和商业竞争的影响，PhoneGap在每个平台上都有若干的功能点无法覆盖，有待于进一步完善。</p>
<p><strong>实现原理</strong></p>
<p>在三者之中，PhoneGap和Titanium框架的实现原理较为相似，编程人员通过使用CSS和HTML来设计程序UI并控制程序的逻辑；同时，使用JavaScript来调用API与对应平台的SDK进行交互，以启动手机的GPS、震动、重力感应等功能。使用PhoneGap和Titanium编写的程序会被打包并安装到手机上，在应用运行时载入到手机的浏览器控件中解析执行。而Rhodes则依赖于Ruby + Rails的Web框架，在手机内部构建了一个完整的Web App server环境，使用Rhodes开发的应用可以像传统Web服务器一样，接收并处理用户的操作事件，并访问对应平台的SDK API。</p>
<p><strong>得出的结论：</strong></p>
<ul>
<li>如果想快速开发一个iOS/Android原生UI的程序，选择Titanium或许更适合</li>
<li>如果想实现一个跨平台的基于HTML的移动应用，PhoneGap或许更适合</li>
</ul>
<p><strong>有技术人员在知乎网抛出了“</strong><span style="color: #0000ff;"><strong>Titanium、PhoneGap、jQueryMobile、Sencha谁能谈谈实际使用经验？</strong></span><strong>”的话题，网友们各抒己见。编辑们整理了部分，与大家一起探讨下，当然，也欢迎您在评论里发表自己的看法。</strong></p>
<p><strong>Titanium、PhoneGap、jQueryMobile、Sencha应用体验的比较</strong></p>
<p> </p>
<table width="95%" border="0" cellspacing="0" cellpadding="6" align="center">
<tbody>
<tr>
<td bgcolor="#fdfddf"><span style="color: #000000;">1.PhoneGap是比较底层的库，对表现层没有支持，所以用phoneGap开发需要再加上jQuery或XUI，YUI这类UI层的东西；</span><p></p>
<p><span style="color: #000000;">2.phoneGap主要的好处是学习成本不算高，缺点是速度慢，内存容易溢出。</span></p>
<p>3.jQuery主要优势是微软支持，学习资料多，热度高。缺点是学习成本高，默认模板很难看，想做个性化修改特别麻烦，而且���度也因为兼容太多浏览器（连IE也兼容，这对移动应用多累赘啊）比较慢。基本上如果你的技术方案是phoneGap+jQuery，最好不要做超过5页的产品设计，而且尽量不要做拍照，文字输入等互动功能。</p>
<p>4.sencha主要的优势其实是云端服务支持，但对国内的人来说就享受不到了。</p>
<p>5.Titanium是我们遇到的国外的HTML5工具效率最好的一个，因为他们把不少HTML和CSS代码预编译成了JavaScript，这点在开发Julia时我们也借鉴了。缺点是学习曲线比较高，当然如果你是JS熟手就容易很多。</p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<table width="95%" border="0" cellspacing="0" cellpadding="6" align="center">
<tbody>
<tr>
<td bgcolor="#fdfddf">1.PhoneGap(with jQTouch)：可用API比较少，但可选UI样式比较多。<p></p>
<p>2.Titanium Mobile：更多依靠JavaScript，因此开发意味比设计意味更重。相比来说，可用API更多一些。值得一提的是，需要使用它自己的桌面应用来编译和打包app。</p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<table width="95%" border="0" cellspacing="0" cellpadding="6" align="center">
<tbody>
<tr>
<td bgcolor="#fdfddf">jQueryMobile、Sencha是实现移动应用的前端呈现，Sencha官方的说法是“提供移动平台的解决方案”，实现的效果很接近Native App了，但是这个库很大，如果是要做Web App的话还是可以用一用的，但是做Mobile Web App，性能也是一个都很大的问题。</td>
</tr>
</tbody>
</table>
<p> </p>
<p><strong>如果单独看Phonegap运行效率与用户体验又是如何？</strong></p>
<p> </p>
<table width="95%" border="0" cellspacing="0" cellpadding="6" align="center">
<tbody>
<tr>
<td bgcolor="#fdfddf">PhoneGap是比较出名的一个跨平台解决方案。但是PhoneGap并不支持UI设计，它仅仅是浏览器调用本机代码（比如获取地理位置）的一层接口。UI设计还需要别的JS类库支持。<p></p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<table width="95%" border="0" cellspacing="0" cellpadding="6" align="center">
<tbody>
<tr>
<td bgcolor="#fdfddf">在iOS平台勉强过的去，在Android平台上比较惨，特别是一些比较老的低配置机型上。<p></p>
<p>介绍一些我开发PhoneGap web app优化经验:</p>
<p>1.少用图片，特别是大面积的png图片；</p>
<p>2.巧用-webkit-transform 属性，在iOS平台上，如果你的dom带有-webkit-transform的3d属性，系统将开启硬件加速，你会发现你的动画帧率瞬间上了一个阶；</p>
<p>3.尽量避免使���<video>标签，容易造成未知的内存泄露；</p>
<p>4.尽量简化dom树的层级；</p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<p><strong>总结：</strong></p>
<p>PhoneGap针对不同平台的WebView做了扩展和封装，使WebView这个组件变成可访问设备本地API的强大浏览器，所以开发人员在PhoneGap框架下可通过JavaScript访问设备本地API，实现WebView与SDK API双向通信。但PhoneGap所体现的混合类型的应用还不能完全取代原生应用，在一些复杂的API调用或者涉及高性能计算的应用开发上，原生应用还是唯一的选择。除此以外的大多数场合，混合类型的应用以很小的性能牺牲为代价，带来了极大的灵活性和开发效率。用PhoneGap官方的一句话概况其特点是：“written once，run everywhere”——一次编译到处运行。</p>
<p>当然，目前PhoneGap缺陷还是蛮多的，比如运行速度慢，UI反应延时，这是个致命伤。不过，这种问题是会随着技术的进步而消失的。</p>
		