---
title: 我的相册
date: 2017-09-09 15:37:06
noDate: 'true'
---

<link type="text/css" href="/ins.css" rel="stylesheet">
<div class="myalbums">
    <div class="albums">
	   <figure class="thumb"><div class="myalbums-box"><a href="./tibet/"><img src="http://7xodcg.com1.z0.glb.clouddn.com/P1240804.jpg"></a></div><figcaption>西藏</figcaption><br></figure>
    </div>
</div>
<link type="text/css" href="/jquery.fancybox.min.css" rel="stylesheet">

<div class="instagram">
    <section class="archives album">
	    <ul class="img-box-ul">
	    </ul>
    </section>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="/jquery.lazyload.min.js"></script>
<script src="/jquery.fancybox.min.js"></script>
<script src="/photo.js"></script>

<script>
	var that = this;
	$.getJSON("/photo/data.json", function (data) {
		that.render(that.page, data);
	});
</script>