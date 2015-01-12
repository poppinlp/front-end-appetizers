# Front end foundation course 3

## 上次课的作业

发给我的同学做的都不错，表扬一下大家的积极性，感觉大家学习能力都很不错。

## CSS基础

### 什么是CSS

CSS 即层叠样式表，主要作用就是指定 HTML 中各元素的样式，从而使整个页面达到很好的展示效果。

### CSS引入方式

- 外部文件
- 内部样式表
- 内联样式

### CSS语法

#### 基础语法

selector 表示选择器，花括号中即为对其修饰的属性和值的键值对。

```css
selector {
    roperty: value
}
```

#### 分组

通过逗号分隔可以将选择器分组，这一组的选择器将同时被该样式修饰。

```css
selector1,
selector2,
selector3 {
    property: value
}
```

#### 派生

通过空格分隔表示选择器的派生，即在上一级选择器的基础上进行下一级选择器的选择。

```css
selector1 selector2 {
    property: value
}
```

#### 联合

直接连接两个选择器，表示选择同时符合这两个选择器的元素。

```css
selector1selector2 {
    property: value
}
```

### CSS选择器

#### 通用选择器

即选择所有元素，用法为 `*`，如：

```html
<style>
* {
    font-size:4em;
}
</style>
<p>This is a id selector demo.</p>
```

#### id

id 选择符，用来选择该 id 的元素，用法为 `#id`，如：

```html
<style>
#box {
    font-size:4em;
}
</style>
<p id=”box”>This is a id selector demo.</p>
```

#### class

类选择符，来选择包含该 class 的元素，用法为 `.class`，如：

```html
<style>
.box {
    font-size:4em;
}
</style>
<p class=”box”>This is a class selector demo.</p>
```

#### tag

标签选择符，用来选择所有是该标签的元素，用法为 `tag`，如：

```html
<style>
p {
    font-size:4em;
}
</style>
<p class=”box”>This is a tag selector demo.</p>
```

#### property

属性选择符，用来选择包含该属性且属性值符合指定要求的元素，用法如下：

```css
[attribute]         用于选取带有指定属性的元素。
[attribute=value]   用于选取带有指定属性和值的元素。
[attribute~=value]  用于选取属性值中包含指定词汇的元素。
[attribute|=value]  用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
[attribute^=value]  匹配属性值以指定值开头的每个元素。
[attribute$=value]  匹配属性值以指定值结尾的每个元素。
[attribute*=value]  匹配属性值中包含指定值的每个元素。
```

例子：

```html
<style>
[href] {
    font-size:4em;
}
</style>
<a href=”http://www.baidu.com”>This is a property selector demo.</a>
```

#### child

子元素选择符，用来选择某元素的子元素（但不包括子元素的后代），用法为 `selector1 > selector2`，如：

```html
<style>
.wrapper > p {
    font-size:4em;
}
</style>
<div class=”wrapper”>
    <p>
        <a href=”http://www.baidu.com”>This is a child selector demo.</a>
    </p>
</div>
```

#### sibling

相邻兄弟选择符，用来选择紧接在另一元素后的元素，且二者有相同父元素。用法为 `selector1 + selector2`，如：

```html
<style>
p + p {
    font-size:4em;
}
</style>
<div class=”wrapper”>
    <p>This is first paragraph</p>
    <p>This is second paragraph</p>
</div>
```

#### pseudo-class

伪类选择符，用来添加一些特殊的样式，用法为 `:pseudo-class`，如：

```html
<style>
a:hover {
    color:#f00;
}
</style>
<a href=”https://www.baidu.com”>This is a demo for pseudo selector.</a>
```

常见伪类：

```css
:active         向被激活的元素添加样式。
:focus          向拥有键盘输入焦点的元素添加样式。
:hover          当鼠标悬浮在元素上方时，向元素添加样式。
:link           向未被访问的链接添加样式。
:visited        向已被访问的链接添加样式。
:first-child    向元素的第一个子元素添加样式。
:lang           向带有指定 lang 属性的元素添加样式。
```

#### pseudo-element

伪元素选择符，用来添加一些特殊的样式，用法为 `:pseudo-element`，如：

```html
<style>
.cf {
zoom:1;
}
.cf:after {
content: ‘’;
display: block;
clear: both;
height: 0;
overflow: hidden;
visibility: hidden;
}
</style>
<div class=”cf”>
<!--
some float stuff
-->
</div>
```

常见伪元素：

```css
:first-letter   向文本的第一个字母添加特殊样式。
:first-line     向文本的首行添加特殊样式。
:before         在元素之前添加内容。
:after          在元素之后添加内容。
```

### CSS优先级

相同的属性，权重高的选择器会覆盖权重低的。如果权重相同，则使用最后的。

#### 如何计算选择器权重

4个权重等级：

- 内联
- id
- class, pseudo-class, property
- tag, pseudo-element

__通用选择器（\*），子选择器（\>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为0。__

### CSS样式

- 文本
- text-indent
- text-decoration
- text-align
- color
- line-height
- 字体
- font-size
- font-weight
- font-family
- font-style
- 背景
- background-color
- background-image
- background-repeat
- background-position
- 列表
- list-style-type
- list-style-image
- list-style-position
- 展示
- display

## Homework

看了一下同学们在群里的聊天，由于上课时间间隔的问题，我们之后的作业大概周末的会多一点，周四的会少一点。

### Part 1

请写出如下选择符的权重：

```css
#div
div
div.name
div .name
div[title] a
#div h1 .right
.title > .close
#div li + li
.list .toggle:hover
```

### Part 2

请用你知道的尽可能多的方法，依次选择代码片段中的每一个元素（每次只选择一个）：

```html
<div id=”wrapper”>
    <h1 class=”title”>title</h1>
    <p>content</p>
    <ul>
        <li>item1</li>
        <li>item2</li>
    </ul>
</div>
```

### Part 3

__选做__

有兴趣的同学可以把自己上节课做的那个页面，用 CSS 来美化一下，当作练习。

## 预告

下节课我们主要讲的内容如下：

- 未讲完的 CSS 属性
- 盒模型
- 定位
- 一起来做个静态 demo

__Fighting!__

2014.12.07
