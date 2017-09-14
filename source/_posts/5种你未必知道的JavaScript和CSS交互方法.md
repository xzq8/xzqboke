---
title: 5种你未必知道的JavaScript和CSS交互方法
date: 2017-7-28   10:18:29
toc: true
tags: Javascript
---

			<p>随着浏览器不断的升级改进，CSS和JavaScript之间的界限越来越模糊。本来它们是负责着完全不同的功能，但最终，它们都属于网页前端技术，它们需要相互密切的合作。我们的网页中都有.js文件和.css文件，但这并不意味着CSS和js是独立不能交互的。下面要讲的这五种JavaScript和CSS共同合作的方法你也许未必知道！</p>
<p style="text-align: center;"> <a href="http://www.webqianduan.cn/wp-content/uploads/2014/07/20140401152942458440.jpg"><img class="alignnone size-full wp-image-330" alt="20140401152942458440" src="http://www.webqianduan.cn/wp-content/uploads/2014/07/20140401152942458440.jpg" width="400" height="248"></a></p>
<h2>　用JavaScript获取伪元素(pseudo-element)属性</h2>
<p>大家都知道如何通过一个元素的style属性获取它的CSS样式值，但能获取伪���素(pseudo-element)的属性值吗？可以的，使用JavaScript也可以访问页面中的伪元素。</p>
<div>
<div id="highlighter_551625">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
</td>
<td>
<div>
<div><code>// Get the color value of .element:before</code></div>
<div><code>var</code> <code>color = window.getComputedStyle(</code></div>
<div><code>    </code><code>document.querySelector(</code><code>'.element'</code><code>), </code><code>':before'</code></div>
<div><code>).getPropertyValue(</code><code>'color'</code><code>);</code></div>
<div></div>
<div><code>// Get the content value of .element:before</code></div>
<div><code>var</code> <code>content = window.getComputedStyle(</code></div>
<div><code>    </code><code>document.querySelector(</code><code>'.element'</code><code>), </code><code>':before'</code></div>
<div><code>).getPropertyValue(</code><code>'content'</code><code>);</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>看见了吗，我能访问伪元素里的content属性值。如果你想创建一个动态的，风格别致的网站，这是一种非常有用的技术！</p>
<h2>　classList API</h2>
<p>很多的JavaScript工具库里都有addClass，removeClass和toggleClass等方法。为了对老式浏览器的兼容，这些类库采用的方法都是先搜索元素的className，追加和删除这个类，然后更新className。其实有一个新型的API提供了添加，删除和反转CSS类属性的方法，叫做classList：</p>
<div>
<div id="highlighter_793351">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</td>
<td>
<div>
<div><code>myDiv.classList.add(</code><code>'myCssClass'</code><code>); </code><code>// Adds a class</code></div>
<div></div>
<div><code>myDiv.classList.remove(</code><code>'myCssClass'</code><code>); </code><code>// Removes a class</code></div>
<div></div>
<div><code>myDiv.classList.toggle(</code><code>'myCssClass'</code><code>); </code><code>// Toggles a class</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>大多数的浏览器里很早就实现了classListAPI，而且最终IE10里也实现了它。</p>
<h2>　直接对样式表进行添加和删除样式规则</h2>
<p>我们都非常熟悉使用element.style.propertyName来修改样式，使用JavaScript能帮助我们做到这些，但你知道如何新增或修一个现有的CSS样式规则吗？其实非常的简单。</p>
<div>
<div id="highlighter_42372">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
</td>
<td>
<div>
<div><code>function</code> <code>addCSSRule(sheet, selector, rules, index) {</code></div>
<div><code>    </code><code>if</code><code>(sheet.insertRule) {</code></div>
<div><code>        </code><code>sheet.insertRule(selector + </code><code>"{"</code> <code>+ rules + </code><code>"}"</code><code>, index);</code></div>
<div><code>    </code><code>}</code></div>
<div><code>    </code><code>else</code> <code>{</code></div>
<div><code>        </code><code>sheet.addRule(selector, rules, index);</code></div>
<div><code>    </code><code>}</code></div>
<div><code>}</code></div>
<div></div>
<div><code>// Use it!</code></div>
<div><code>addCSSRule(document.styleSheets[0], </code><code>"header"</code><code>, </code><code>"float: left"</code><code>);</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>这种方法通常是用来创建一个新的样式规则，但如果你想修改一个现有的规则，也可以这样做。</p>
<h2>　加载CSS文件</h2>
<p>延迟加载图片、JSON、脚本等是用来加快页面显示速度的好方法。我们可以使用curl.js等这样JavaScript加载器来延迟加载这些外部资源，可你知道CSS样式表也可以延迟加载吗，而且在加载成功后回调函数会给予通知。</p>
<div>
<div id="highlighter_236225">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
</td>
<td>
<div>
<div><code>curl(</code></div>
<div><code>    </code><code>[</code></div>
<div><code>        </code><code>"namespace/MyWidget"</code><code>,</code></div>
<div><code>        </code><code>"css!namespace/resources/MyWidget.css"</code></div>
<div><code>    </code><code>], </code></div>
<div><code>    </code><code>function</code><code>(MyWidget) {</code></div>
<div><code>        </code><code>// 你可以对MyWidget进行操作</code></div>
<div><code>        </code><code>// 这里没有对这个CSS文件引用，因为不需要;</code></div>
<div><code>        </code><code>// 我们只需要它已经加载到页面上了</code></div>
<div><code>    </code><code>}</code></div>
<div><code>});</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>本网站使用的PrismJS语法高亮脚本就是延迟加载的。当所有的资源都加载后，回调函数就会触发，我可在回调函数里加载它。非常有用！</p>
<h2>　CSS鼠标指针事件</h2>
<p>CSS鼠标指针事件pointer-events属性非常的有趣，它的功效非常像JavaScript，当你把这个属性设置为none时，它能有效的阻止禁止这个元素，你也许会说“这又如何？”，但事实上，它是禁止了这个元素上的任何JavaScript事件或回调函数！</p>
<div>
<div id="highlighter_483873">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
</td>
<td>
<div>
<div><code>.disabled { pointer-events: none; }</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>点击这个元素，你会发现任何你放置在这个元素上的监听器都不会触发任何事件。一个神奇的功能，真的——你不在需要为了防止某个事件会被触发而去检查某个css类是否存在。</p>
<p>就是这5给你也许还没有发现的CSS和JavaScript交互的方法。你还有新的发现吗？分享出来！</p>
		