---
title: Emmet使用手册，前端开发必备利器！
date: 2017-6-23   9:23:21
toc: true
tags: 前端技术
---

			<h3>介绍</h3>
<p>Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具:</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/12/emmet-p1.jpg"><img class="alignnone size-full wp-image-492" alt="emmet-p1" src="http://www.webqianduan.cn/wp-content/uploads/2014/12/emmet-p1.jpg" width="267" height="95"></a></p>
<p>基本上，大多数的文本编辑器都会允许你存储和重用一些代码块，我们称之为“片段”。虽然片段能很好地推动你得生产力，但大多数的实现都有这样一个缺点：你必须先定义你得代码片段，并且不能再运行时进行拓展。</p>
<p>Emmet把片段这个概念提高到了一个新的层次：你可以设置CSS形式的能够动态被解析的表达式，然后根据你所输入的缩写来得到相应的内容。Emmet是很成熟的并且非常适用于编写HTML/XML 和 CSS 代码的前端开发人员，但也可以用于编程语言。</p>
<div></div>
<h3>使用示例：</h3>
<p><strong>在编辑器中输入缩写代码：</strong>ul>li*5 ，然后按下拓展键（默认为tab），即可得到代码片段：</p>
<pre><ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul></pre>
<h3>下载和安装</h3>
<ol>
<li><strong>Emmet为大部分流行的编辑器都提供了安装插件，下面是它们的下载链接：</strong>
<ul>
<li> <a href="https://github.com/sergeche/emmet-sublime#readme">Sublime Text</a></li>
<li> <a href="https://github.com/emmetio/emmet-eclipse#readme">Eclipse/Aptana</a></li>
<li> <a href="https://github.com/emmetio/Emmet.tmplugin#readme">TextMate</a></li>
<li> <a href="https://github.com/emmetio/Emmet.codaplugin#readme">Coda</a></li>
<li> <a href="https://github.com/emmetio/Emmet.sugar#readme">Espresso</a></li>
<li> <a href="https://github.com/sergeche/emmet.chocmixin#readme">Chocolat</a></li>
<li> <a href="http://community.activestate.com/xpi/zen-coding">Komodo Edit</a></li>
<li> <a href="https://github.com/emmetio/npp#readme">Notepad++</a></li>
<li> <a href="https://github.com/emmetio/pspad">PSPad</a></li>
<li> <a href="https://github.com/emmetio/textarea">textarea</a></li>
<li> <a href="https://github.com/emmetio/codemirror#readme">CodeMirror</a></li>
<li> <a href="https://github.com/emmetio/brackets-emmet#readme">Brackets</a></li>
<li> <a href="https://github.com/emmetio/netbeans#readme">NetBeans</a></li>
<li> <a href="https://github.com/emmetio/dreamweaver#readme">Adobe Dreamweaver</a></li>
</ul>
</li>
<li><strong>在线编辑器的支持：</strong>
<ul>
<li> <a href="http://jsfiddle.net/">JSFiddle</a></li>
<li> <a href="http://jsbin.com/">JS Bin</a></li>
<li> <a href="http://codepen.io/">CodePen</a></li>
<li> <a href="http://icecoder.net/">ICEcoder</a></li>
<li> <a href="http://www.divshot.com/">Divshot</a></li>
<li> <a href="http://codio.com/">Codio</a></li>
</ul>
</li>
<li><strong>第三方插件的支持</strong>下面这些编辑器的插件都是由第三方开发者所提供的，所以可能并不支持所有Emmet的功能和特性。
<ul>
<li> <a href="http://www.uvviewsoft.com/synwrite/">SynWrite</a></li>
<li> <a href="http://www.jetbrains.com/webstorm/">WebStorm</a></li>
<li> <a href="http://www.jetbrains.com/phpstorm/">PhpStorm</a></li>
<li> <a href="https://github.com/mattn/emmet-vim">Vim</a></li>
<li> <a href="http://www.htmlkit.com/">HTML-Kit</a></li>
<li> <a href="http://wiki.hippoedit.com/plugins/emmet">HippoEDIT</a></li>
<li> <a href="http://www.codelobster.com/">CodeLobster PHP Edition</a></li>
<li> <a href="https://github.com/e-sites/tinymce-emmet-plugin#readme">TinyMCE</a></li>
</ul>
</li>
</ol>
<p><strong>因为我也是Sublime Text的使用者，所以下面为大家介绍一下sublime text中方法：</strong></p>
<h3>使用方法</h3>
<p>emmet的使用方法也非常简单，以sublime text为例，直接在编辑器中输入HTML或CSS的代码的缩写，然后按tab键就可以拓展为完整的代码片段。（如果与已有的快捷键有冲突的话，可以自行在编辑器中将拓展键设为其他快捷键）</p>
<h2>语法:</h2>
<h4>后代：></h4>
<p><strong>缩写</strong>：nav>ul>li</p>
<pre><nav>
    <ul>
        <li></li>
    </ul>
</nav></pre>
<h4>兄弟：+</h4>
<p><strong>缩写</strong>：div+p+bq</p>
<pre><div></div>
<p></p>
<blockquote></blockquote></pre>
<h4>上级：^</h4>
<p><strong>缩写</strong>：div+div>p>span+em^bq</p>
<pre><div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div></pre>
<p><strong>缩写</strong>：div+div>p>span+em^^bq</p>
<pre><div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote></pre>
<h4>分组：()</h4>
<p><strong>缩写</strong>：div>(header>ul>li*2>a)+footer>p</p>
<pre><div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div></pre>
<p><strong>缩写</strong>：(div>dl>(dt+dd)*3)+footer>p</p>
<pre><div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer></pre>
<h4>乘法：*</h4>
<p><strong>缩写</strong>：ul>li*5</p>
<pre><ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul></pre>
<h4>自增符号：$</h4>
<p><strong>缩写</strong>：ul>li.item$*5</p>
<pre><ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul></pre>
<p><strong>缩写</strong>：h$[title=item$]{Header $}*3</p>
<pre><h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3></pre>
<p><strong>缩写</strong>：ul>li.item$$$*5</p>
<pre><ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul></pre>
<p><strong>缩写</strong>：ul>li.item$@-*5</p>
<pre><ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul></pre>
<p><strong>缩写</strong>：ul>li.item$@3*5</p>
<pre><ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul></pre>
<h4>ID和类属性</h4>
<p><strong>缩写</strong>：#header</p>
<pre><div id="header"></div></pre>
<p><strong>缩写</strong>：.title</p>
<pre><div class="title"></div></pre>
<p><strong>缩写</strong>：form#search.wide</p>
<pre><form id="search" class="wide"></form></pre>
<p><strong>缩写</strong>：p.class1.class2.class3</p>
<pre><p class="class1 class2 class3"></p></pre>
<h4>自定义属性</h4>
<p><strong>缩写</strong>：p[title="Hello world"]</p>
<pre><p title="Hello world"></p></pre>
<p><strong>缩写</strong>：td[rowspan=2 colspan=3 title]</p>
<pre><td rowspan="2" colspan="3" title=""></td></pre>
<p><strong>缩写</strong>：[a='value1' b="value2"]</p>
<pre><div a="value1" b="value2"></div></pre>
<h4>文本：{}</h4>
<p><strong>缩写</strong>：a{Click me}</p>
<pre><a href="">Click me</a></pre>
<p><strong>缩写</strong>：p>{Click }+a{here}+{ to continue}</p>
<pre><p>Click <a href="">here</a> to continue</p></pre>
<h4>隐式标签</h4>
<p><strong>缩写</strong>：.class</p>
<pre><div class="class"></div></pre>
<p><strong>缩写</strong>：em>.class</p>
<pre><em><span class="class"></span></em></pre>
<p><strong>缩写</strong>：ul>.class</p>
<pre><ul>
    <li class="class"></li>
</ul></pre>
<p><strong>缩写</strong>：table>.row>.col</p>
<pre><table>
    <tr class="row">
        <td class="col"></td>
    </tr>
</table></pre>
<h3>HTML</h3>
<p><em>所有未知的缩写都会转换成标签，例如，foo → <foo></foo></em></p>
<p><strong>缩写</strong>：!</p>
<pre><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html></pre>
<p><strong>缩写</strong>：a</p>
<pre><a href=""></a></pre>
<p><strong>缩写</strong>：a:link</p>
<pre><a href="http://"></a></pre>
<p><strong>缩写</strong>：a:mail</p>
<pre><a href="mailto:"></a></pre>
<p><strong>缩写</strong>：abbr</p>
<pre><abbr title=""></abbr></pre>
<p><strong>缩写</strong>：acronym</p>
<pre><acronym title=""></acronym></pre>
<p><strong>缩写</strong>：base</p>
<pre><base href="" /></pre>
<p><strong>缩写</strong>：basefont</p>
<pre><basefont /></pre>
<p><strong>缩写</strong>：br</p>
<pre><br /></pre>
<p><strong>缩写</strong>：frame</p>
<pre><frame /></pre>
<p><strong>缩写</strong>：hr</p>
<pre><hr /></pre>
<p><strong>缩写</strong>：bdo</p>
<pre><bdo dir=""></bdo></pre>
<p><strong>缩写</strong>：bdo:r</p>
<pre><bdo dir="rtl"></bdo></pre>
<p><strong>缩写</strong>：bdo:l</p>
<pre><bdo dir="ltr"></bdo></pre>
<p><strong>缩写</strong>：col</p>
<pre><col /></pre>
<p><strong>缩写</strong>：link</p>
<pre><link rel="stylesheet" href="" /></pre>
<p><strong>缩写</strong>：link:css</p>
<pre><link rel="stylesheet" href="style.css" /></pre>
<p><strong>缩写</strong>：link:print</p>
<pre><link rel="stylesheet" href="print.css" media="print" /></pre>
<p><strong>缩写</strong>：link:favicon</p>
<pre><link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /></pre>
<p><strong>缩写</strong>：link:touch</p>
<pre><link rel="apple-touch-icon" href="favicon.png" /></pre>
<p><strong>缩写</strong>：link:rss</p>
<pre><link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml" /></pre>
<p><strong>缩写</strong>：link:atom</p>
<pre><link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml" /></pre>
<p><strong>缩写</strong>：meta</p>
<pre><meta /></pre>
<p><strong>缩写</strong>：meta:utf</p>
<pre><meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /></pre>
<p><strong>缩写</strong>：meta:win</p>
<pre><meta http-equiv="Content-Type" content="text/html;charset=windows-1251" /></pre>
<p><strong>缩写</strong>：meta:vp</p>
<pre><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" /></pre>
<p><strong>缩写</strong>：meta:compat</p>
<pre><meta http-equiv="X-UA-Compatible" content="IE=7" /></pre>
<p><strong>缩写</strong>：style</p>
<pre><style></style></pre>
<p><strong>缩写</strong>：script</p>
<pre><script></script></pre>
<p><strong>缩写</strong>：script:src</p>
<pre><script src=""></script></pre>
<p><strong>缩写</strong>：img</p>
<pre><img src="" alt="" /></pre>
<p><strong>缩写</strong>：iframe</p>
<pre><iframe src="" frameborder="0"></iframe></pre>
<p><strong>缩写</strong>：embed</p>
<pre><embed src="" type="" /></pre>
<p><strong>缩写</strong>：object</p>
<pre><object data="" type=""></object></pre>
<p><strong>缩写</strong>：param</p>
<pre><param name="" value="" /></pre>
<p><strong>缩写</strong>：map</p>
<pre><map name=""></map></pre>
<p><strong>缩写</strong>：area</p>
<pre><area shape="" coords="" href="" alt="" /></pre>
<p><strong>缩写</strong>：area:d</p>
<pre><area shape="default" href="" alt="" /></pre>
<p><strong>缩写</strong>：area:c</p>
<pre><area shape="circle" coords="" href="" alt="" /></pre>
<p><strong>缩写</strong>：area:r</p>
<pre><area shape="rect" coords="" href="" alt="" /></pre>
<p><strong>缩写</strong>：area:p</p>
<pre><area shape="poly" coords="" href="" alt="" /></pre>
<p><strong>缩写</strong>：form</p>
<pre><form action=""></form></pre>
<p><strong>缩写</strong>：form:get</p>
<pre><form action="" method="get"></form></pre>
<p><strong>缩写</strong>：form:post</p>
<pre><form action="" method="post"></form></pre>
<p><strong>缩写</strong>：label</p>
<pre><label for=""></label></pre>
<p><strong>缩写</strong>：input</p>
<pre><input type="text" /></pre>
<p><strong>缩写</strong>：inp</p>
<pre><input type="text" name="" id="" /></pre>
<p><strong>缩写</strong>：input:hidden</p>
<p><em>别名：input[type=hidden name]</em></p>
<pre><input type="hidden" name="" /></pre>
<p><strong>缩写</strong>：input:h</p>
<p><em>别名：input:hidden</em></p>
<pre><input type="hidden" name="" /></pre>
<p><strong>缩写</strong>：input:text, input:t</p>
<p><em>别名：inp</em></p>
<pre><input type="text" name="" id="" /></pre>
<p><strong>缩写</strong>：input:search</p>
<p><em>别名：inp[type=search]</em></p>
<pre><input type="search" name="" id="" /></pre>
<p><strong>缩写</strong>：input:email</p>
<p><em>别名：inp[type=email]</em></p>
<pre><input type="email" name="" id="" /></pre>
<p><strong>缩写</strong>：input:url</p>
<p><em>别名：inp[type=url]</em></p>
<pre><input type="url" name="" id="" /></pre>
<p><strong>缩写</strong>：input:password</p>
<p><em>别名：inp[type=password]</em></p>
<pre><input type="password" name="" id="" /></pre>
<p><strong>缩写</strong>：input:p</p>
<p><em>别名：input:password</em></p>
<pre><input type="password" name="" id="" /></pre>
<p><strong>缩写</strong>：input:datetime</p>
<p><em>别名：inp[type=datetime]</em></p>
<pre><input type="datetime" name="" id="" /></pre>
<p><strong>缩写</strong>：input:date</p>
<p><em>别名：inp[type=date]</em></p>
<pre><input type="date" name="" id="" /></pre>
<p><strong>缩写</strong>：input:datetime-local</p>
<p><em>别名：inp[type=datetime-local]</em></p>
<pre><input type="datetime-local" name="" id="" /></pre>
<p><strong>缩写</strong>：input:month</p>
<p><em>别名：inp[type=month]</em></p>
<pre><input type="month" name="" id="" /></pre>
<p><strong>缩写</strong>：input:week</p>
<p><em>别名：inp[type=week]</em></p>
<pre><input type="week" name="" id="" /></pre>
<p><strong>缩写</strong>：input:time</p>
<p><em>别名：inp[type=time]</em></p>
<pre><input type="time" name="" id="" /></pre>
<p><strong>缩写</strong>：input:number</p>
<p><em>别名：inp[type=number]</em></p>
<pre><input type="number" name="" id="" /></pre>
<p><strong>缩写</strong>：input:color</p>
<p><em>别名：inp[type=color]</em></p>
<pre><input type="color" name="" id="" /></pre>
<p><strong>缩写</strong>：input:checkbox</p>
<p><em>别名：inp[type=checkbox]</em></p>
<pre><input type="checkbox" name="" id="" /></pre>
<p><strong>缩写</strong>：input:c</p>
<p><em>别名：input:checkbox</em></p>
<pre><input type="checkbox" name="" id="" /></pre>
<p><strong>缩写</strong>：input:radio</p>
<p><em>别名：inp[type=radio]</em></p>
<pre><input type="radio" name="" id="" /></pre>
<p><strong>缩写</strong>：input:r</p>
<p><em>别名：input:radio</em></p>
<pre><input type="radio" name="" id="" /></pre>
<p><strong>缩写</strong>：input:range</p>
<p><em>别名：inp[type=range]</em></p>
<pre><input type="range" name="" id="" /></pre>
<p><strong>缩写</strong>：input:file</p>
<p><em>别名：inp[type=file]</em></p>
<pre><input type="file" name="" id="" /></pre>
<p><strong>缩写</strong>：input:f</p>
<p><em>别名：input:file</em></p>
<pre><input type="file" name="" id="" /></pre>
<p><strong>缩写</strong>：input:submit</p>
<pre><input type="submit" value="" /></pre>
<p><strong>缩写</strong>：input:s</p>
<p><em>别名：input:submit</em></p>
<pre><input type="submit" value="" /></pre>
<p><strong>缩写</strong>：input:image</p>
<pre><input type="image" src="" alt="" /></pre>
<p><strong>缩写</strong>：input:i</p>
<p><em>别名：input:image</em></p>
<pre><input type="image" src="" alt="" /></pre>
<p><strong>缩写</strong>：input:button</p>
<pre><input type="button" value="" /></pre>
<p><strong>缩写</strong>：input:b</p>
<p><em>别名：input:button</em></p>
<pre><input type="button" value="" /></pre>
<p><strong>缩写</strong>：isindex</p>
<pre><isindex /></pre>
<p><strong>缩写</strong>：input:reset</p>
<p><em>别名：input:button[type=reset]</em></p>
<pre><input type="reset" value="" /></pre>
<p><strong>缩写</strong>：select</p>
<pre><select name="" id=""></select></pre>
<p><strong>缩写</strong>：option</p>
<pre><option value=""></option></pre>
<p><strong>缩写</strong>：textarea</p>
<pre><textarea name="" id="" cols="30" rows="10"></textarea></pre>
<p><strong>缩写</strong>：menu:context</p>
<p><em>别名：menu[type=context]></em></p>
<pre><menu type="context"></menu></pre>
<p><strong>缩写</strong>：menu:c</p>
<p><em>别名：menu:context</em></p>
<pre><menu type="context"></menu></pre>
<p><strong>缩写</strong>���menu:toolbar</p>
<p><em>别名：menu[type=toolbar]></em></p>
<pre><menu type="toolbar"></menu></pre>
<p><strong>缩写</strong>：menu:t</p>
<p><em>别名：menu:toolbar</em></p>
<pre><menu type="toolbar"></menu></pre>
<p><strong>缩写</strong>：video</p>
<pre><video src=""></video></pre>
<p><strong>缩写</strong>：audio</p>
<pre><audio src=""></audio></pre>
<p><strong>缩写</strong>：html:xml</p>
<pre><html xmlns="http://www.w3.org/1999/xhtml"></html></pre>
<p><strong>缩写</strong>：keygen</p>
<pre><keygen /></pre>
<p><strong>缩写</strong>：command</p>
<pre><command /></pre>
<p><strong>缩写</strong>：bq</p>
<p><em>别名：blockquote</em></p>
<pre><blockquote></blockquote></pre>
<p><strong>缩写</strong>：acr</p>
<p><em>别名：acronym</em></p>
<pre><acronym title=""></acronym></pre>
<p><strong>缩写</strong>：fig</p>
<p><em>别名：figure</em></p>
<pre><figure></figure></pre>
<p><strong>缩写</strong>：figc</p>
<p><em>别名：figcaption</em></p>
<pre><figcaption></figcaption></pre>
<p><strong>缩写</strong>：ifr</p>
<p><em>别名：iframe</em></p>
<pre><iframe src="" frameborder="0"></iframe></pre>
<p><strong>缩写</strong>：emb</p>
<p><em>别名：embed</em></p>
<pre><embed src="" type="" /></pre>
<p><strong>缩写</strong>：obj</p>
<p><em>别名：object</em></p>
<pre><object data="" type=""></object></pre>
<p><strong>缩写</strong>：src</p>
<p><em>别名：source</em></p>
<pre><source></source></pre>
<p><strong>缩写</strong>：cap</p>
<p><em>别名：caption</em></p>
<pre><caption></caption></pre>
<p><strong>缩写</strong>：colg</p>
<p><em>别名：colgroup</em></p>
<pre><colgroup></colgroup></pre>
<p><strong>缩写</strong>：fst, fset</p>
<p><em>别名：fieldset</em></p>
<pre><fieldset></fieldset></pre>
<p><strong>缩写</strong>：btn</p>
<p><em>别名：button</em></p>
<pre><button></button></pre>
<p><strong>缩写</strong>：btn:b</p>
<p><em>别名：button[type=button]</em></p>
<pre><button type="button"></button></pre>
<p><strong>缩写</strong>：btn:r</p>
<p><em>别名：button[type=reset]</em></p>
<pre><button type="reset"></button></pre>
<p><strong>缩写</strong>：btn:s</p>
<p><em>别名：button[type=submit]</em></p>
<pre><button type="submit"></button></pre>
<h4>关于更多的HTML以及CSS的缩写请查看：</h4>
<p><strong>官网文档：</strong><a href="http://docs.emmet.io/cheat-sheet/">http://docs.emmet.io/cheat-sheet/</a></p>
		