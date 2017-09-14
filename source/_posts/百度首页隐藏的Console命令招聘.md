---
title: 百度首页隐藏的Console命令招聘
date: 2017-7-28   11:53:5
toc: true
tags: 技巧资源
---

			<p>曾经，老师告诉我们百度首页隐藏在调试工具的招聘信息，效果如下图：<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/1dad.png"><img class="alignnone size-full wp-image-175" alt="1dad" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/1dad.png" width="764" height="577"></a></p>
<h2>一、显示信息的命令</h2>
<p>JavaScript的Console对象中提供5种方法，用来显示信息，最简单的方法是console.log()，可以用来取代alert()或document.write()。比如，在网页脚本中使用console.log(“Hello World”)，加载时控制台就会自动显示如下内容。<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/console_log.png"><img class="alignnone size-full wp-image-176" alt="console_log" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/console_log.png" width="634" height="393"></a></p>
<p>另外，根据信息的不同性质，Console对象还有4种显示信息的方法，分别是一般信息console.info()、除错信息console.debug()、警告提示console.warn()、错误提示console.error()。<br>
比如，在网页脚本中插入下面四行：</p>
<div id="highlighter_814388">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.info(</code><code>"这是info"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>console.debug(</code><code>"这是debug"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>console.warn(</code><code>"这是warn"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>4</code></td>
<td><code>console.error(</code><code>"这是error"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>加载时，控制台会显示如下内容:<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/infodebugwarnerror.png"><img class="alignnone size-full wp-image-177" alt="infodebugwarnerror" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/infodebugwarnerror.png" width="634" height="393"></a><br>
可以看到不同的输出有不同的图标和不同的颜色，并且每条输出后面都有超级链接，点击后跳转到网页源码的相应行。</p>
<h2>二、占位符</h2>
<p>console对象的上面5种方法，都可以使用printf风格的占位符。不过，占位符的种类比较少，只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。<br>
比如：</p>
<div id="highlighter_273200">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.log(</code><code>"%d年%d月%d日"</code><code>,2014,3,24);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>console.log(</code><code>"圆周率是%f"</code><code>,3.141592654);</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/printf.png"><img class="alignnone size-full wp-image-178" alt="printf" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/printf.png" width="614" height="215"></a></p>
<p>%o占位符，可以用来查看一个对象内部情况。比如，有这样一个对象：</p>
<div id="highlighter_289335">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>var</code> <code>cat = {} ;</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>cat.name = </code><code>"大咪"</code><code>;</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>cat.color = </code><code>"黑色"</code><code>;</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>然后，对它使用o%占位符：<code>console.log("%o",dog);</code><br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/printfObject.png"><img class="alignnone size-full wp-image-179" alt="printfObject" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/printfObject.png" width="614" height="223"></a></p>
<h2>三、分组显示</h2>
<p>如果信息太多，可以分组显示，用到的方法是console.group()和console.groupEnd()</p>
<div id="highlighter_855246">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.group(</code><code>"Group A"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>    </code><code>console.log(</code><code>"Group A Item A"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>    </code><code>console.log(</code><code>"Group A Item B"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>4</code></td>
<td><code>console.groupEnd();</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>5</code></td>
<td><code>console.group(</code><code>"Group B"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>6</code></td>
<td><code>    </code><code>console.log(</code><code>"Group B Item A"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>7</code></td>
<td><code>    </code><code>console.log(</code><code>"Group B Item B"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>8</code></td>
<td><code>console.groupEnd();</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/Group.png"><img class="alignnone size-full wp-image-180" alt="Group" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/Group.png" width="614" height="277"></a><br>
点击组标题，该组信息会折叠或展开。</p>
<h2>四、Console.dir()</h2>
<p>console.dir()可以显示一个对象所有的属性和方法。比如，现在为第二节的cat对象，添加一个fun()方法。<code>cat.fun= function(){alert("喵~~");};</code><br>
然后，使用<code>console.dir(cat)</code>显示该对象的内容:<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoledir.png"><img class="alignnone size-full wp-image-181" alt="consoledir" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoledir.png" width="614" height="277"></a></p>
<h2>五、console.dirxml()</h2>
<p>console.dirxml()用来显示网页的某个节点（node）所包含的html/xml代码。<br>
比如，先获取一个表格节点:</p>
<div id="highlighter_878782">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>var</code> <code>table = document.getElementById(</code><code>"table1"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>然后，显示该节点包含的代码:</p>
<div id="highlighter_982942">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.dirxml(table);</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoledirxmltable.png"><img class="alignnone size-full wp-image-182" alt="consoledirxmltable" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoledirxmltable.png" width="614" height="411"></a></p>
<h2>六、Console.assert()</h2>
<p>console.assert()用来判断一个表达式或变量是否为真。如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常。比如，下面两个判断的结果都为否：</p>
<div id="highlighter_519944">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>var</code> <code>result = 0;</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>console.assert( result );</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>var</code> <code>year = 2000;</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>4</code></td>
<td><code>console.assert(year == 2014 );</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoleassert.png"><img class="alignnone size-full wp-image-183" alt="consoleassert" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoleassert.png" width="614" height="213"></a></p>
<h2>七、console.trace()</h2>
<p>console.trace()用来追踪函数的调用轨迹。比如，有一个加法器函数：</p>
<div id="highlighter_196846">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>function</code> <code>add(a,b){</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>    </code><code>return</code> <code>a+b;</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>}</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>我想知道这个函数是如何被调用的，在其中加入console.trace()方法就可以了：</p>
<div id="highlighter_972680">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>function</code> <code>add(a,b){</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>    </code><code>console.trace();</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>    </code><code>return</code> <code>a+b;</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>4</code></td>
<td><code>}</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>假定这个函数的调用代码如下：</p>
<div id="highlighter_681357">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>var</code> <code>x = add3(1,1);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>function</code> <code>add3(a,b){</code><code>return</code> <code>add2(a,b);}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>function</code> <code>add2(a,b){</code><code>return</code> <code>add1(a,b);}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>4</code></td>
<td><code>function</code> <code>add1(a,b){</code><code>return</code> <code>add(a,b);}</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>运行后，会显示add()的调用轨迹，从上到下依次为add()、add1()、add2()、add3()：<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoletrace.png"><img class="alignnone size-full wp-image-184" alt="consoletrace" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoletrace.png" width="614" height="287"></a></p>
<h2>八、计时功能</h2>
<p>console.time()和console.timeEnd()，用来显示代码的运行时间：</p>
<div id="highlighter_592685">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.time(</code><code>"Time A"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>　　</code><code>for</code><code>(</code><code>var</code> <code>i=0;i<1000;i++){</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>4</code></td>
<td><code>　　　　</code><code>for</code><code>(</code><code>var</code> <code>j=0;j<1000;j++){}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>5</code></td>
<td></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>6</code></td>
<td><code>　　}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>7</code></td>
<td><code>console.timeEnd(</code><code>"Time A"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoletime.png"><img class="alignnone size-full wp-image-185" alt="consoletime" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoletime.png" width="614" height="192"></a></p>
<h2>九、性能分析</h2>
<p>性能分析（Profiler）就是分析程序各个部分的运行时间，找出瓶颈所在，使用的方法是console.profile()。假定有一个函数Foo()，里面调用了另外两个函数funcA()和funcB()，其中funcA()调用10次，funcB()调用1次。</p>
<div id="highlighter_266064">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>01</code></td>
<td><code>function</code> <code>Foo(){</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>02</code></td>
<td><code>    </code><code>for</code><code>(</code><code>var</code> <code>i=0;i<10;i++){funcA(1000);}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>03</code></td>
<td><code>    </code><code>funcB(10000);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>04</code></td>
<td><code>}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>05</code></td>
<td><code>function</code> <code>funcA(count){</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>06</code></td>
<td><code>    </code><code>for</code><code>(</code><code>var</code> <code>i=0;i<count;i++){}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>07</code></td>
<td><code>}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>08</code></td>
<td><code>function</code> <code>funcB(count){</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>09</code></td>
<td><code>    </code><code>for</code><code>(</code><code>var</code> <code>i=0;i<count;i++){}</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>10</code></td>
<td><code>}</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>然后，就可以分析Foo()的运行性能了：</p>
<div id="highlighter_737954">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.profile(</code><code>"profile A"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>2</code></td>
<td><code>Foo();</code></td>
</tr>
</tbody>
</table>
</div>
<div>
<table>
<tbody>
<tr>
<td><code>3</code></td>
<td><code>console.profileEnd();</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<p>控制台会显示一张性能分析表，如下图：<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoleprofile.png"><img class="alignnone size-full wp-image-186" alt="consoleprofile" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoleprofile.png" width="614" height="200"></a><br>
通过性能分析名称点击进性能分析界面可以看到执行方法的使用时间等参数：<br>
<a href="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoleprofiles.png"><img class="alignnone size-full wp-image-187" alt="consoleprofiles" src="http://www.webqianduan.cn/wp-content/uploads/2014/06/consoleprofiles.png" width="614" height="304"></a></p>
<h2>写在最后</h2>
<p>总体来说Console命令如果使用到项目中了还是能很好的进行调试的，这样不用一个一个代码的debugger了。不过以上介绍的内容里面有一招没有介绍的：</p>
<div id="highlighter_553339">
<div>
<div>
<table>
<tbody>
<tr>
<td><code>1</code></td>
<td><code>console.log(</code><code>"我会告诉你我的内容是蓝色的吗？"</code><code>,</code><code>"color:blue"</code><code>);</code></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
		