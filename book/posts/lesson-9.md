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

## 写在前面

之前有看到同学们的评价反馈，其中好几个提到之前的内容比较复杂和理论，那我决定从这节课开始我们换一种教学方式，不再以理论知识为核心，改为围绕如何具体使用来进行内容安排。

## DOM 基础 Part 2

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