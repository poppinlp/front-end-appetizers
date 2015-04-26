# Front end advanced course 16

本节课的主要内容为:

- switch demo
- CSS3: transition

## 引

之前的课上同学反映说实战不知如何下手，那么我们这节课以一个例子入手来讲讲思路和优化过程。

## switch demo

我们先看看这个 [switch demo](http://poppinlp.github.io/demos/switch.html)，这节课就从这个例子入手，我们的需求就是要实现类似的效果。

## 整理思路

这个 DEMO 的功能大致就是模拟开关效果，用于增强原生的 `checkbox`。视觉效果大致是一个白色的方块左右移动，这里我们最直接的可以想到这种实现：

- 左边一个蓝色方块，中间一个白色方块，右边一个灰色方块，三者宽度调整宽度和位置来完成动画

这么来看，我们需要控制的元素有3个，并且我们仔细观察后能发现边框的颜色也会发生变化，那这种控制可能成本太高了，我们想想能不能减少需要控制的元素：

- 把灰色部分作为背景，边框属于这个背景，激活按钮在背景上滑动

这么一想，似乎需要控制内容从 3 个变成了 2 个。那么激活按钮这块又如何实现呢？还是最直接的方式：

- 修改蓝色部分的宽度和白色部分的位置

刚才的经验告诉我们，也许最直接能想到的并不是最好的，由于我们知道 CSS 父级元素可以让超出其范围的子级元素隐藏，于是我们又想到这种思路：

- 把蓝色和白色作为一个整体，让它在背景上滑动，未激活的状态时左侧超出的部分被隐藏掉，激活状态时正常显示

似乎到此为止，我们已经得到一个比较清晰并且简单的实现思路，那么接下来开始具体实现。

## 通过 javascript

先讲最常见的，通过 JS 监听事件来控制样式修改。

### 构建 DOM 结构

按照我们上面的思路，DOM 结构大致可以如下构建：

```html
<div class="switch">
	<div class="switch-btn"></div>
</div>
```

### 写 CSS 样式

基于以上的 DOM 结构，我们来处理 CSS 样式，可以分为已激活和未激活两种状态来处理。

未激活：

```css
.switch {
	display:inline-block;
	overflow:hidden;
	position:relative;
	border:solid 1px #ccc;
	background-color:#ccc;
	height:25px;
	width:60px;
}
.switch-btn {
	position:absolute;
	top:0;
	left:-35px;
	height:25px;
	width:25px;
	background-color:#fff;
	border-left:solid 35px #69f;
}
```

已激活：

```css
.switch {
	display:inline-block;
	overflow:hidden;
	position:relative;
	border:solid 1px #69f;
	background-color:#ccc;
	height:25px;
	width:60px;
}
.switch-btn {
	position:absolute;
	top:0;
	left:0;
	height:25px;
	width:25px;
	background-color:#fff;
	border-left:solid 35px #69f;
}
```

### 写 JS 控制

完成了 CSS 样式后进入 JS 的控制部分。从样式中我们可以看出，两种状态的差别只有很小的部分，于是我们可以通过 JS 来实现这种样式的修改：

```js
var flag = false,
	$switch = $('.switch'),
	$switchBtn = $switch.children('.switch-btn');
	
$switch.bind('click', function () {
	if (flag) {
		$switch.css('border-color', '#ccc');
		$switchBtn.css('left', '-35px');
	} else {
		$switch.css('border-color', '#69f');
		$switchBtn.css('left', 0);
	}
	flag = !flag;
});
```

### 优化

之前的课上讲过最好不要直接通过 JS 来修改样式属性，而是通过控制 `class` 来完成对于样式的修改。那么对于上面的代码，我们可以简化成如下的形式：

CSS：

```css
.switch {
	display:inline-block;
	overflow:hidden;
	position:relative;
	border:solid 1px #ccc;
	background-color:#ccc;
	height:25px;
	width:60px;
}
.switch-btn {
	position:absolute;
	top:0;
	left:-35px;
	height:25px;
	width:25px;
	background-color:#fff;
	border-left:solid 35px #69f;
}
.active.switch {
	border-color:#69f;
}
.active > .switch-btn {
	left:0;
}
```

JS：

```js
$('.switch').bind('click', function () {
	$(this).toggleClass('active');
});
```

## 通过 css

优化后的代码 JS 部分已经非常简单，那么有没有方法可以不用 JS 来实现这个需求呢？并且，我们这里本来是准备增强 `checkbox` 的，结果却没有出现 `checkbox`，那么如果是在 `form` 中，岂不是会对数据的提交产生影响？

OK，那面对这些问题，我们尝试着从另一种思路来处理这件事情，即通过纯 CSS 的方式来处理。

### 构建 DOM 结构

```html
<input id="switch-btn" type="checkbox" name="switch">
<label for="switch-btn" class="switch">
	<div class="switch-btn"></div>
</label>
```

### 写 CSS

由于 CSS 中没有监听事件之类的处理，那么我们这里如何来实现这个需求呢？

静心细想，发现其实我们只是在两个状态间切换罢了，所以远不用事件那么麻烦，无非是两个状态的记录。而我们正好要增强的就是 `checkbox`，于是结合相邻兄弟选择器，有了如下代码：

```css
input {
	height:0;
	width:0;
	margin:0;
}
input:checked ~ label {
	border-color:#69f;
}
input:checked ~ label .switch-btn{
	left:0;
}
.switch {
	display:inline-block;
	overflow:hidden;
	position:relative;
	border:solid 1px #ccc;
	background-color:#ccc;
	height:25px;
	width:60px;
}
.switch-btn {
	transition:all 0.4s;
	top:0;
	left:-35px;
	height:25px;
	width:25px;
	background-color:#fff;
	border-left:solid 35px #69f;
}
```

### CSS3 transition

我们已经实现了基本需求，接下来还差最后一步的动画效果。CSS3 中有一个属性叫做 `transition`，我们利用它便可以非常方便的实现需求。

`transition` 的详细介绍可以看[这个页面](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)。

最终实现效果即为 DEMO 所展示。

## HOME WORK

- 上课的内容如果还有未实现的，请完成
- CSS3 transition 属性练习

## 内容预告

- progress bar demo
- CSS3: transform
