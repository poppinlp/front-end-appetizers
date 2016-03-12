# Front end foundation course 9

## 上节课的作业

```javascript
function parseTemplate(template, data) {
    for (var key in data) {
        template = template.replace('{{' + key + '}}', data[key], 'gi');
    }
    return template;
}
```

## cookie

![](http://momssecretrecipes.com/uploads/2015105930.jpg)

这里简单说一下 cookie，当然我们要说的不是这个好吃的曲奇饼，而是一种储存数据的方式。

### 什么是 cookie

Cookie 是一种本地浏览器储存技术，即开发者可以通过一些技术手段将一些信息存放在用户浏览器端。
它的官方规范定义在 [RFC6265](http://www.rfc-editor.org/rfc/rfc6265.txt)，主要用于在用户本地浏览器记录一些用户个人信息，如身份辨识、一些状态选择等。

### 如何设置 cookie

常见的设置 cookie 的方式有两种：

- 通过在请求的 response 的 header 中加入一些相关字段来设置
- 通过 JS 代码来设置

对于第一种方式，这里只是举个[例子](https://www.baidu.com/)，不做过多的介绍，感兴趣的同学可以自行搜索相关资料。

对于第二种方式，我们在下面讲 `document` 的时候会提到，这里先暂时跳过。

## DOM 基础 Part 1

### 什么是 DOM

DOM 即 Document Object Model，文档对象模型。大体上可以分为核心 DOM、XML DOM 和 HTML DOM。
它由 W3C 组织制定相关规范，规范中定义了针对 HTML、XML 的文档中的各种不同对象，以及这些对象的属性、方法、事件等内容。

### DOM、JS 和 浏览器

浏览器作为一个环境按照 DOM 规范实现了相关的功能，从而把 HTML 文档解析成相应的 DOM 结构。
并且通过实现 DOM 规范中定义的各种接口，将它们暴露给 JS，从而让 JS 能够方便的进行各种 DOM 操作。
详情可见[官方文档](http://www.w3.org/DOM/)。

### JS 通过 DOM 能做什么

- 能够改变页面中的所有 HTML 元素
- 能够改变页面中的所有 HTML 属性
- 能够改变页面中的所有 CSS 样式
- 能够对页面中的所有事件做出反应
- e.t.c

### DOM 树

HTML 文档在浏览器中会被解析为 DOM 树，其中每个节点即 DOM 节点，我们用 JS 可以对这些 DOM 节点做出各种规范中定义的操作。

对于如下的 HTML 结构：

```html
<html>
    <head>
        <title>My title</title>
    </head>
    <body>
        <a href="">My link</a>
        <h1>My header</h1>
    </body>
</html>
```

它解析后的 DOM 树为：

![DOM树](https://poppinlp.github.io/static/gist/fe-foundation-course-8-dom-1.png)

其中节点的关系为：

![DOM节点](https://poppinlp.github.io/static/gist/fe-foundation-course-8-dom-2.png)

### document

`document` 即文档，在浏览器中 `document` 对象是一个 HTML 文档解析成 DOM 后的根节点。
`document` 节点继承了 `Node` 和 `EventTarget`，它包含了网页的内容和 DOM 树，并且提供了很多特有的方法。

#### document.head

`document.head` 是个只读属性，返回当前文档的第一个 `<head>` 元素。

#### document.body

`document.body` 是个只读属性，返回当前文档的 `<body>` 元素。

#### document.title

`document.title` 属性用于获取或者设置当前文档的标题。

```js
var curTitle = document.title;
document.title = 'new title';
```

#### document.cookie

`document.cookie` 属性用于获取或者设置当前文档的 `cookie`。

```js
var curCookie = document.cookie;
document.cookie = 'new cookie';
```

`cookie` 在设置的时候内容格式为键值对的形式，中间用 `=` 号建立联系，不同的项之间用 `; ` 分隔。
除了主要的内容键值对以外，常见的设置项有 `domain`, `path`, `expires`，具体的意思有兴趣的同学可以去自行搜索。

```js
function set(key, value, config) {
    var DAY = 24 * 60 * 60 * 1000,
        now = new Date();

    config = $.extend({
        expire: 30,
        path: '/',
        domain: window.location.hostname
    });

    now.setTime(now.getTime() + config.expire * DAY);
    document.cookie = key + "=" + encodeURIComponent(value) + "; domain=" + config.domain + "; path=" + config.path + "; expires=" + now.toGMTString();
}

function get(key) {
    var keys = document.cookie.split("; "),
        len = keys.length, tmp;

    while (len--) {
        tmp = keys[len].split('=');
        if (tmp[0] === key) {
            return decodeURIComponent(tmp[1]);
        }
    }
}

function unset(key) {
    set(key, false, -1);
}
```

### 节点访问

#### getElementById

```javascript
element = document.getElementById(id);
```

该方法通过 `id` 属性来获取对应的节点。由于 `id` 属性的唯一性，所以返回的结果通常为空或一个唯一的节点。

#### getElementsByTagName

```javascript
elements = element.getElementsByTagName(tagName);
```

该方法通过标签名称来获取属于该类标签的节点的动态集合。
其中动态即指通过其他方式更改了节点相应的内容时，节点集合的内容也会产生变化。
具体的我们看个例子。

#### getElementsByClassName

```javascript
elements = element.getElementsByClassName(names);
```

该方法通过类名来获取包含该类的节点的动态集合。
其中类名只要包含即可，具体我们看个例子。

#### querySelector

`querySelector` 和 `querySelectorAll` 可以使用 css 选择器的方式来选择对应的节点。相对于上述方法而言，使用起来方便很多，不过IE 8+ 才支持。
如：

```javascript
document.querySelector(".myclass");
document.querySelector("style[type='text/css'], style:not([type])");
```

### 节点操作

#### 获取节点

除了 `getElementsByTagName` 和 `getElementsByClassName` 以外，我们还有一些特定亲属节点的获取方法。

- firstChild
- firstElementChild
- lastChild
- lastElementChild
- nextSibling
- nextElementSibling
- parentNode
- parentElement

#### 修改内部 html 内容

通过 `innerHTML` 属性可以非常方便的获取和设置节点内部的 html 内容。
如：

```html
<body>
    <h1>Title</h1>
    <script>
        console.log(document.body.innerHTML);
        document.body.innerHTML = '<p>Hello world</p>';
    </script>
<body>
```

#### 修改节点属性

通过 `getAttribute`、`setAttribute` 或者直接对属性进行操作可以非常方便的获取和设置节点的属性。
如：

```html
<img id="image" src="http://www.baidu.com/img/bdlogo.png">

<script>
document.getElementById("image").src="https://www.google.com/images/srpr/logo11w.png";
document.getElementById("image").setAttribute('class','pic');
</script>
```

#### 修改节点样式

通过修改 `style` 对象上的各种属性，可以非常方便的修改与之对应的 dom 属性。
具体的属性列表可以看[这篇文档](http://www.w3school.com.cn/jsref/dom_obj_style.asp)。
如：

```html
<p id="p1">我是段落，要变色</p>
<script>
    document.getElementById('p1').style.color="red";
</script>
```

#### 创建新节点

通过 `createElement` 方法可以非常方便的创建新的 dom 节点，其参数为创建的节点的标签名。
需要注意的是，创建的节点并不是在页面上，而是在内存中。如需显示，则需要添加到页面上。
如：

```javascript
var para=document.createElement("p");
para.innerHtml="我是新添加的段落";
console.log(para);
```

#### 添加节点

通过 `appendChild` 和 `insertBefore` 方法可以非常方便的向页面中添加节点。
如：

```html
<div id="list">Content</div>
<script>
    var list = document.getElementById('list'),
        p = document.createElement('p'),
        p2 = document.createElement('p');
    p.innerHTML = 'appendChild';
    p2.innnerHTML = 'insertBefore';
    list.appendChild(p);
    list.insertBefore(p2, p);
</script>
```

#### 删除节点

通过 `removeChild` 方法可以非常方便的删除页面中的节点。
如紧接着上例：

```javascript
list.removeChild(p);
list.removeChild(p2);
```

#### 替换节点

通过 `replaceChild` 方法可以非常方便的替换页面中的节点。第一个参数为新节点，第二个参数为替换的目标节点。
如：

```javascript
var btn1 = document.getElementById("btn1");
var btn3 = document.createElement("button");
btn3.id = "btn3";
btn3.innerText = "新按钮";
c1.replaceChild(btn3, btn1);
```

### 小练习

1. 首先做出这么一个静态页面。
2. 通过 JS 修改其中的标题为红色背景，蓝色文字。
3. 通过 JS 添加二级标题，内容为 "This is a sub title"。
4. 通过 JS 添加新的列表项，内容为 "游泳"。

### DEMO

> 现在教学方式更偏向实战化，所以打算在课程中加入一些 demo 的部分，希望巩固已有的理论知识。

本次的 demo 是为了复习和巩固 HTML 和 CSS 的基础知识，所以我们来一起仿造一个静态页面。

## Homework

1. 练习课上学到的 DOM 节点的获取和相关操作。
2. 静态页面个人自由训练。
3. 做一个时钟页面，现实动态当前时间。
4. 数据为对象结构的省份和城市信息，请用 JS 和 HTML 构造相应的选择项。

## 预告

下节课主要内容为 DOM 事件。

__Fighting!__

2015.01.04
