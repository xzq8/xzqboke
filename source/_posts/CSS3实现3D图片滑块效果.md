---
title: CSS3实现3D图片滑块效果
date: 2017-7-3   2:5:16
toc: true
tags: HTML/CSS
---

			<p>使用 CSS3 的3D变换特性，我们可以通过让元素在三维空间中变换来实现一些新奇的效果。 这篇文章分享的这款 jQuery 立体图片滑块插件，利用了 3D transforms（变换）属性来实现多种不同的效果。</p>
<p>温馨提示：为保证最佳的效果，请在 IE10+、Chrome、Firefox 和 Safari 等现代浏览器中浏览。</p>
<p><a href="http://www.webqianduan.cn/wp-content/uploads/2014/07/20140611120734674383.jpg"><img class="alignnone size-full wp-image-343 aligncenter" alt="20140611120734674383" src="http://www.webqianduan.cn/wp-content/uploads/2014/07/20140611120734674383.jpg" width="600" height="368"></a></p>
<p>实现的基本思路是创建三维图像切片，作为三维物体的另一侧，旋转并显示下一个图像。若浏览器不支持3D变换，一个简单的滑块将作为后备方案。要调用这个插件，首先把图片放在无序列表中，然后添��� CSS 类——”sb-slider” 即可，下面是 HTML 代码示例：</p>
<div>
<div id="highlighter_877929">
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
<div>12</div>
<div>13</div>
<div>14</div>
<div>15</div>
<div>16</div>
<div>17</div>
<div>18</div>
<div>19</div>
<div>20</div>
<div>21</div>
<div>22</div>
<div>23</div>
<div>24</div>
<div>25</div>
<div>26</div>
<div>27</div>
<div>28</div>
<div>29</div>
<div>30</div>
<div>31</div>
<div>32</div>
<div>33</div>
<div>34</div>
<div>35</div>
<div>36</div>
</td>
<td>
<div>
<div><code><ul id=</code><code>"sb-slider"</code> <code>class=</code><code>"sb-slider"</code><code>></code></div>
<div></div>
<div><code>    </code><code><li></code></div>
<div></div>
<div><code>        </code><code><a href=</code><code>"#"</code> <code>target=</code><code>"_blank"</code><code>></code></div>
<div></div>
<div><code>            </code><code><img src=</code><code>"images/1.jpg"</code> <code>alt=</code><code>"image1"</code><code>/></code></div>
<div></div>
<div><code>        </code><code></a></code></div>
<div></div>
<div><code>        </code><code><div class=</code><code>"sb-description"</code><code>></code></div>
<div></div>
<div><code>            </code><code><h3>Creative Lifesaver</h3></code></div>
<div></div>
<div><code>        </code><code></div></code></div>
<div></div>
<div><code>    </code><code></li></code></div>
<div><code>  </code></div>
<div></div>
<div><code>    </code><code><li></code></div>
<div></div>
<div><code>        </code><code><img src=</code><code>"images/2.jpg"</code> <code>alt=</code><code>"image2"</code><code>/></code></div>
<div></div>
<div><code>        </code><code><div class=</code><code>"sb-description"</code><code>></code></div>
<div></div>
<div><code>            </code><code><h3>...</h3></code></div>
<div></div>
<div><code>        </code><code></div></code></div>
<div></div>
<div><code>    </code><code></li></code></div>
<div></div>
<div><code>    </code><code><li><!-- ... --></li></code></div>
<div></div>
<div><code>    </code><code><!-- ... --></code></div>
<div></div>
<div><code></ul></code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>另外也还可以使用带有 class 为 “sb-description” 的DIV来为图片添加描述。如本例所示，您还可以在图像周围添加锚点。然后调用插件就可以了：</p>
<div>
<div id="highlighter_219155">
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<div>1</div>
</td>
<td>
<div>
<div><code>$(</code><code>'#sb-slider'</code><code>).slicebox();</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>Slicebox 配备了一组选项，你可以调整以实现不同类型的效果，各个选项和作用如下：</p>
<div>
<div id="highlighter_712965">
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
<div>12</div>
<div>13</div>
<div>14</div>
<div>15</div>
<div>16</div>
<div>17</div>
<div>18</div>
<div>19</div>
<div>20</div>
<div>21</div>
<div>22</div>
<div>23</div>
<div>24</div>
<div>25</div>
<div>26</div>
<div>27</div>
<div>28</div>
<div>29</div>
<div>30</div>
<div>31</div>
<div>32</div>
<div>33</div>
<div>34</div>
<div>35</div>
<div>36</div>
<div>37</div>
<div>38</div>
<div>39</div>
<div>40</div>
<div>41</div>
<div>42</div>
<div>43</div>
<div>44</div>
<div>45</div>
<div>46</div>
<div>47</div>
<div>48</div>
<div>49</div>
<div>50</div>
<div>51</div>
<div>52</div>
<div>53</div>
<div>54</div>
<div>55</div>
<div>56</div>
<div>57</div>
</td>
<td>
<div>
<div><code>$.Slicebox.defaults = {</code></div>
<div></div>
<div><code>    </code><code>// 方向(v)ertical, (h)orizontal or (r)andom</code></div>
<div></div>
<div><code>    </code><code>orientation : </code><code>'v'</code><code>,</code></div>
<div></div>
<div><code>    </code><code>// 元素距离视图的距离，以像素计</code></div>
<div></div>
<div><code>    </code><code>perspective : 1200,</code></div>
<div></div>
<div><code>    </code><code>// 切片，长方体的数量</code></div>
<div></div>
<div><code>    </code><code>cuboidsCount : 5,</code></div>
<div></div>
<div><code>    </code><code>// 是否随机</code></div>
<div></div>
<div><code>    </code><code>cuboidsRandom : </code><code>false</code><code>,</code></div>
<div></div>
<div><code>    </code><code>// 长方体最大数量</code></div>
<div></div>
<div><code>    </code><code>maxCuboidsCount : 5,</code></div>
<div></div>
<div><code>    </code><code>disperseFactor : 0,</code></div>
<div></div>
<div><code>    </code><code>// 隐藏滑块的颜色</code></div>
<div></div>
<div><code>    </code><code>colorHiddenSides : </code><code>'#222'</code><code>,</code></div>
<div></div>
<div><code>    </code><code>sequentialFactor : 150,</code></div>
<div></div>
<div><code>    </code><code>// 动画速度</code></div>
<div></div>
<div><code>    </code><code>speed : 600,</code></div>
<div></div>
<div><code>    </code><code>// 过渡效果</code></div>
<div></div>
<div><code>    </code><code>easing : </code><code>'ease'</code><code>,</code></div>
<div></div>
<div><code>    </code><code>// 自动播放</code></div>
<div></div>
<div><code>    </code><code>autoplay : </code><code>false</code><code>,</code></div>
<div></div>
<div><code>    </code><code>// 旋转间隔</code></div>
<div></div>
<div><code>    </code><code>interval: 3000,</code></div>
<div></div>
<div><code>    </code><code>// 淡入淡出速度</code></div>
<div></div>
<div><code>    </code><code>fallbackFadeSpeed : 300,</code></div>
<div></div>
<div><code>    </code><code>// 回调函数</code></div>
<div></div>
<div><code>    </code><code>onBeforeChange : </code><code>function</code><code>( position ) { </code><code>return</code> <code>false</code><code>; },</code></div>
<div></div>
<div><code>    </code><code>onAfterChange : </code><code>function</code><code>( position ) { </code><code>return</code> <code>false</code><code>; }</code></div>
<div></div>
<div><code>};</code></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p style="text-align: center;"><a title="Download" href="http://dreamsky.github.io/main/blog/slice-box/slice-box.rar" target="_blank">源码下载</a>      <a title="Download" href="http://dreamsky.github.io/main/blog/slice-box/" target="_blank">在线演示</a></p>
		