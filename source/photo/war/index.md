---
title: 反对战争
date: 2017-09-09 15:37:06
encrypt: true
enc_pwd: 123456
enc_img_type: qiniu

---
<p><a href="../" target="_self"><span class="album-font">返回-我的相册</span></a></p>

<link type="text/css" href="/ins.css" rel="stylesheet">
<link type="text/css" href="/jquery.fancybox.min.css" rel="stylesheet">

<div class="instagram">
    <section class="archives album">
	    <ul class="img-box-ul">
	    </ul>
    </section>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="/jquery.fancybox.min.js"></script>
<script type="text/javascript" src='/jquery.lazyload.min.js'></script>
<script src="/photo.js"></script>

<script>
	var that = this;
	$.getJSON("/photo/data.json", function (data) {
		that.render(that.page, data);
	});
</script>