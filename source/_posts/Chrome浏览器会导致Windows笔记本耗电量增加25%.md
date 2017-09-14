---
title: Chrome浏览器会导致Windows笔记本耗电量增加25%
date: 2017-8-9   20:20:22
toc: true
tags: 交流互动
---

			<p><span style="color: #000000;">       早在</span><span style="color: #000000;">2010年，据媒体报道称已经有用户发现Windows版Chrome浏览器能够迅速耗尽笔记本电脑的电池，导致笔记本电脑大幅缩减续航时间，只不过一直到《福布斯》杂志最近报道，才引起谷歌重视。Chrome浏览器这枚“电老虎”Bug，主要影响Windows系统，不包括Mac、Linux系统。</span></p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/08/QQ截图20140820215834.jpg"> <img class="alignnone size-full wp-image-421 aligncenter" alt="QQ截图20140820215834" src="http://www.webqianduan.cn/wp-content/uploads/2014/08/QQ截图20140820215834.jpg" width="466" height="222"></a></p>
<p><span style="color: #000000;">该bug原因在于其使用了更短的唤醒计时器。当Windows使用计时器安排任务，在空闲情况下，计时器设为15ms，如果没有任务要做，它会继续休眠，每隔15ms检查一次。</span></p>
<p><span style="color: #000000;">　　应用程序也可以修改这个计时器，Chrome将其设为1ms，也就是在空���时它每秒会唤醒系统1000次，相比之下Firefox在空闲时每秒唤醒系统64次，因此，微软IE浏览器、Mozilla Firefox浏览器均不存在类似电池消耗过快的问题。。</span></p>
<p><span style="color: #000000;">　　而更高频率的检查则会增加耗电量，但Goolge开发者早就知道这个问题，认为这么做是值得的，因为它可以让Chrome运行更快。但直到今天，电池续航力成为用户关注的问题，Google将该bug分配为高优先级，准备解决这个曾视为特性的计时器bug。</span></p>
<h1 id="artibodyTitle" style="text-align: center;">谷歌至今仍未解决Chrome浏览器耗电问题</h1>
<h3 style="text-align: center;"><span style="color: #000000;">目前的办法只有暂时换浏览器，例如火狐和</span>opera<span style="color: #000000;">，希望谷歌能重视这一问题。</span></h3>
<p> </p>
<p style="text-align: center;">
</p>		