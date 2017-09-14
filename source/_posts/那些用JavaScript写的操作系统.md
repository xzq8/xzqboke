---
title: 那些用JavaScript写的操作系统
date: 2017-8-18   4:17:3
toc: true
tags: Javascript
---

			<p>之前有人说过Chrome是新的C语言运行环境(<a href="https://www.mobilespan.com/content/chrome-is-the-new-c-runtime" target="_blank" rel="nofollow">Chrome Is The New C Runtime</a>) ，不过笔者更倾向于Web是新的C语言运行环境，而且这种技术绝对没有版权问题，也绝不会被一家公司垄断。下面是几个在Web上模拟几个操作系统的例子。</p>
<p><strong>Linux模拟器</strong></p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/09/20140128162946489304.jpg"><img class="alignnone size-full wp-image-476" alt="20140128162946489304" src="http://www.webqianduan.cn/wp-content/uploads/2014/09/20140128162946489304.jpg" width="800" height="600"></a></p>
<p>演示地址：<a href="http://bellard.org/jslinux/" target="_blank" rel="nofollow">http://bellard.org/jslinux/</a></p>
<p>技术文档:  <a href="http://bellard.org/jslinux/tech.html" target="_blank" rel="nofollow">http://bellard.org/jslinux/tech.html</a></p>
<p>支持绝大部分linux命令，还可以使用vi且可以保存。</p>
<p>作者其人：Fabrice Bellard提出最快圆周率算法公式，并曾用桌面电脑打破了由超级计算机保持的圆周率运算记录。</p>
<p><strong>Win3.1模拟器</strong></p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/09/20140128162946439824.jpg"><img class="alignnone size-full wp-image-475" alt="20140128162946439824" src="http://www.webqianduan.cn/wp-content/uploads/2014/09/20140128162946439824.jpg" width="1242" height="610"></a></p>
<p>演示地址：<a href="http://www.michaelv.org/" target="_blank" rel="nofollow">http://www.michaelv.org/</a></p>
<p>与Win3.1几乎一模一样，有计算器，计事本，扫雷等。</p>
<p><strong>x86虚拟机</strong></p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/09/20140128162946038866.jpg"><img class="alignnone size-full wp-image-474" alt="20140128162946038866" src="http://www.webqianduan.cn/wp-content/uploads/2014/09/20140128162946038866.jpg" width="856" height="643"></a></p>
<p>演示地址： <a href="http://copy.sh/v24/" target="_blank" rel="nofollow">http://copy.sh/v24/</a></p>
<p>一个WebOS模拟器集合，其中里面的，Graphical OS, 60秒启动，基于HTML5的Canvas绘制，并可模拟多种硬件，不过略卡，可以很好测测你机器的性能。</p>
<p><strong>其他细节</strong></p>
<p>如果你想自己写一个基于Web的OS的话，而又不知道C/C++/Linux内核的模拟器怎么写，可参考这篇问答：<a href="http://codegolf.stackexchange.com/questions/4732/emulate-an-intel-8086-cpu" target="_blank" rel="nofollow">http://codegolf.stackexchange.com/questions/4732/emulate-an-intel-8086-cpu</a></p>
		