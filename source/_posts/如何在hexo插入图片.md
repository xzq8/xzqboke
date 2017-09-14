---
title: 如何在hexo插入图片
toc: false
date: 2017-09-12 15:53:11
tags:
---

比如说：当你打开文章资源文件夹功能后，你把一个 example.jpg 图片放在了你的资源文件夹中，如果通过使用相对路径的常规 markdown 语法,
```
![](/example.jpg)
```
它将 不会 出现在首页上。（但是它会在文章中按你期待的方式工作）

正确的引用图片方式是使用下列的标签插件而不是 markdown ：
```bash
{% asset_img example.jpg This is an example image %}

```
引用文章
引用其他文章的链接。
```bash
{% post_path slug %}
{% post_link slug [title] %}
```