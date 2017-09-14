---
title: css position的正确用法
date: 2017-7-26   5:49:45
toc: true
tags: HTML/CSS
---

			<p>本文向大家描述一下DIV CSS布局中的position属性的用法，position属性主要有四种属性值，任何元素的默认position的属性值均是static,静态。这节课主要讲讲relative（相对）以及absolute（绝对）。</p>
<p> </p>
<h2>如何学习DIV+CSS布局之position属性</h2>
<p>如果用position属性来布局页面，父级元素的position属性必须为relative，而定位于父级内部某个位置的元素，最好用absolute。定位(position)布局页面说容易非常容易，只需要记住这节课最后一句话就可以了，说困难，那是相当的难理解，需要一定的耐心，不过还好，KwooJan给大家总结的已经很通俗易懂了。</p>
<p>如果下面的文字实在是无法理解透，那就记住这节课最后总结的一句话“如果用position来布局页面，父级元素的position属性必须为relative，而定位于父级内部某个位置的元素，最好用absolute，因为它不受父级元素的padding的属性影响，当然你也可以用position，不过到时候计算的时候不要忘记padding的值。”</p>
<p>任何元素的默认position的属性值均是static,静态。这节课主要讲讲relative（相对）以及absolute（绝对）。</p>
<h2>【DIV+CSS布局之position属性:absolute】</h2>
<p>意思是：他的意思是绝对定位，他默认参照浏览器的左上角，配合TOP、RIGHT、BOTTOM、LEFT(下面简称TRBL)进行定位，有以下属性： 1)如果没有TRBL，以父级的左上角，在没有父级的时候，他是参照浏览器左上角,如果在没有父级元素的情况下，存在文本，则以它前面的最后一个文字的右上角为原点进行定位但是不断开文字，覆盖于上方。</p>
<p>2)如果设定TRBL，并且父级没有设定position属性，那么当前的absolute则以浏览器左上角为原始点进行定位，位置将由TRBL决定。</p>
<p>3)如果设定TRBL，并且父级设定position属性(无论是absolute还是relative)，则以父级的左上角为原点进行定位，位置由TRBL决定。即使父级有Padding属性，对其也不起作用，说简单点就是：它只坚持一点，就以父级左上角为原点进行定位，父级的padding对其根本没有影响。</p>
<p>以上三点可以总结出，若想把一个定位属性为absolute的元素定位于其父级元素内，只有满足两个条件：</p>
<p>第一：设定TRBL</p>
<p>第二：父级设定Position属性</p>
<p>上面的这个总结非常重要，可以保证你在用absolue布局页面的时候，不会错位，并且随着浏览器的大小或者显示器分辨率的大小，而不发生改变。</p>
<p>只要有一点不满足，元素就会以浏览器左上角为原点，这就是初学者容易犯错的一点，已经定位好的板块，当浏览器的大小改变，父级元素会随之改变，但是设定Position属性为absolute的板块和父级元素的位置发生改变，错位了，这就是因为此时元素以浏览器的右上角为原点的原因。 初学者很容易犯错的是，不清楚Position属性为absolute的板块，若想定位到父级板块中，并且当浏览器的大小改变或显示器的分辨率改变，布局不发生改变，是需要满足两个条件的，只要有一点不满足，元素就会以浏览器左上角为原点，从而导致页面布局错位。</p>
<h3><strong>【DIV+CSS布局之position属性:relative】</strong></h3>
<p>意思是相对定位，他是默认参照父级的原始点为原始点，无父级则以文本流的顺序在上一个元素的底部为原始点，配合TRBL进行定位，当父级内有padding等CSS属性时，当前级的原始点则参照父级内容区的原始点进行定位，有以下属性：</p>
<p>1)如果没有TRBL，以父级的左上角，在没有父级的时候，他是参照浏览器左上角(到这里和absolute第一条一样)，如果在没有父级元素的情况下，存在文本，则以文本的底部为原始点进行定位并将文字断开(和absolut不同)。</p>
<p>2)如果设定TRBL，并且父级没有设定position属性，仍旧以父级的左上角为原点进行定位(和absolut不同)</p>
<p>3)如果设定TRBL，并且父级设定position属性(无论是absolute还是relative)，则以父级的左上角为原点进行定位，位置由TRBL决定(前半段和absolut一样)。如果父级有Padding属性，那么就以内容区域的左上角为原点，进行定位(后半段和absolut不同)。</p>
<p>以上三点可以总结出，无论父级存在不存在，无论有没有TRBL，均是以父级的左上角进行定位，但是父级的Padding属性会对其影响。</p>
<p>综合上面对relative的叙述，我们就可以将position属性为relative的DIV视成可以用TRBL进行定位的的普通DIV，或者说只要将我们平时布局页面的div的CSS属性中加上position:relative后，就不只是用float布局页面了，还可以用TRBL进行布局页面了，或者说加上position:relative的DIV也可以像普通的DIV进行布局页面了，只不过还可以用TRBL进行布局页面。但是position属性为absolute不可以用来布局页面，因为如果用来布局的话，所有的DIV都相对于浏览器的左上角定位了，所以只能用于将某个元素定位于属性为absolute的元素的内部某个位置。</p>
<h3><strong>这样我们就可以总结比较重要的结论：</strong></h3>
<p>属性为relative的元素可以用来布局页面，属性为absolute的元素用来定位某元素在父级中的位置，既然属性为absolute的元素用来定位某元素在父级中位置，就少不了TRBL，这时候根据一开始讲的absolute的第三条，如果父级元素没有position属性那么absolute元素就会脱离父级元素，但是如果是布局页面，父级元素position的属性又不能为absolute，不然就会以浏览器左上角为原点了，所以父级元素的position属性只能为relative！</p>
<h3><strong>总结：</strong></h3>
<p>如果用position来布局页面，父级元素的position属性必须为relative，而定位于父级内部某个位置的元素，最好用absolute，因为它不受父级元素的padding的属性影响，当然你也可以用position，不过到时候计算的时候不要忘记padding的值。</p>
		