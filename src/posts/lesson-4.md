# Front end foundation course 4

## 上次课的作业

不是太理想，交作业的同学很少。是作业难度比较大还是过程中遇到了什么问题么？作业也是检验和展示大家学习成果的重要部分，所以还是希望大家能够完成相应的练习。

## CSS 基础 Part 2

### 盒模型

#### 什么是盒模型

CSS的盒模型就是用来描述CSS中元素平面空间构成状态的一个模型。如下图：

![盒模型](http://poppinlp.github.io/static/gist/fe-foundation-course-4-box-model.png)

- padding
	- padding-left
	- padding-right
	- padding-top
	- padding-bottom
- border
	- border-width
	- border-color
	- border-style
	- e.t.c
- margin
	- margin-left
	- margin-right
	- margin-top
	- margin-bottom

__注意：margin会有合并情况发生。__

#### 过去的战争

怪异模式和标准模式对于 CSS 盒模型的解析不同。

#### 现在的审视

双方说的都有道理，各有各的应用场景，于是我们应该可以自定义解析方式。

```css
box-sizing: content-box
box-sizing: padding-box
box-sizing: border-box
```

![box-sizing](http://poppinlp.github.io/static/gist/fe-foundation-course-4-box-sizing.png)

### 行内和块状

- 块状可以包含块状或者行内，行内只能包含行内
- 块状总是新起一行并会尝试占据最宽的宽度
- 块状可以设置宽和高，行内不能
- 纵向的 margin 和 padding 对行内无效

### CSS 定位

整个文档流的定位方式分为普通流、浮动和相对定位。

#### 普通流

就是我们最常见的定位方式，将文档内容按照从左至右、从上至下的方式排布。

#### 浮动

浮动即是让元素脱离普通文档流，向左或向右浮动。

使用 `float` 属性可以产生浮动，它的取值为 `left` | `right` | `none`，例如：

```css
.float-div {
	float:left;
}
```

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

![float-1](http://www.w3school.com.cn/i/ct_css_positioning_floating_left_example_2.gif)

由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。

![float-2](http://www.w3school.com.cn/i/ct_css_positioning_floating_left_example.gif)

与此同时，浮动元素会让行框缩短，从而制造出一种文字围绕的感觉。

![float-3](http://www.w3school.com.cn/i/ct_css_positioning_floating_linebox.gif)

由于浮动起来的内容可能会扰乱后面元素的布局，所以可以通过 `clear` 属性来清除浮动，它的取值为 `left` | `right` | `both`，例如：

```css
.clear-float-div {
	clear:both;
}
```

#### 相对定位

相对定位即是让元素相对于某个东西来定位。

使用 `position` 属性可以产生相对定位，它的取值为 `static` | `relative` | `absolute` | `fixed`，例如：

```css
.absolute-div {
	position:absolute;
}
```

##### static

默认的值，即处于元素的原始位置，未产生相对定位。

##### relative

相对于元素自身的原始位置进行定位。

```html
<div>
	<p>This is a paragraph</p>
</div>
```

```css
p {
	position:relative;
	top:10px;
	left:10px;
}
```

##### absolute

相对于祖先元素中最近的一个已定位的元素进行定位。

```html
<div>
	<p>This is a paragraph</p>
</div>
```

```css
div {
	position:relative;
}
p {
	position:absolute;
	top:10px;
	left:10px;
}
```

##### fixed

相对于浏览器可是窗口进行定位。

```html
<div>
	<p>This is a paragraph</p>
</div>
```

```css
p {
	position:fixed;
	top:10px;
	left:10px;
}
```

![position-fixed](http://poppinlp.github.io/static/gist/fe-foundation-course-4-position-fixed.jpg)

### Demo

之前课程的内容都比较偏理论，下面我们来实战一个[Demo](https://poppinlp.github.io/)。

## Homework

找一个喜欢的网站，模仿其首页的静态页面。如果大家觉得不好拿主意，那我这里提供几个复杂度没那么高的：

- [Baidu](http://www.baidu.com/)
- [Pingwest](http://www.pingwest.com/)
- [知乎](http://www.zhihu.com/)
- [豆瓣](http://www.douban.com/)

## 预告

至此，我们 HTML 和 CSS 部分的课程就讲完了。从下节课开始，我们将进入 JavaScript 的部分。

- 如何引入 JS
- JS 基础数据类型
- JS 如何申明变量
- JS 如何写注释
- JS 中的运算，包括算数运算、逻辑运算等

__Fighting!__

2014.12.11