# Front end advanced course 1

> 之前的内容为基础课程，从这里开始我们进入进阶课程。

本节课的主要内容为:

- jQuery 初识
- jQuery 选择器
- 关于 $ 函数
- 关于 jQuery 对象
- 常用 DOM 方法

## jQuery 初识

jQuery 是由美国人 John Resig 于 2006 年创建的一个开源项目，基本功能包含访问和操作 DOM、控制页面样式、处理页面事件、便捷的动画、便捷的 AJAX 等。

大家可以通过[这个链接](http://code.jquery.com/jquery-2.1.3.min.js)下载到 jQuery 2.1.3 的压缩版本，请大家下载好后创建一个新的 HTML 页面并引入 jQuery。

## jQuery 选择器

我们在基础班的课程中有讲过 CSS 选择器，jQuery 选择器即通过 `$` 这个构造函数，按照 CSS 选择器的规则（以及一些 jQuery 中的增强规则）来选择页面中的元素。

比如对于这段 HTML:

```html
<div class=wrapper”>
    <ul>
        <li><a></a></li>
        <li><a></a></li>
        <li class=”last”><a></a></li>
    </ul>
</div>
```

使用 `$(".wrapper")` 即可选中包含 wrapper 类的 div 元素，使用 `$("li")` 即可选中所有 li 标签。

## 关于 $ 函数

通过 `console.log($)` 输出其内容，我们可以看到如下代码:

```js
function (a,b){return new _.fn.init(a,b)}
```

从这里我们可以看出，`$` 其实是对一个构建函数的封装。而通过 jQeury 源代码可以看出，`$.fn.init` 函数的功能即是通过判断传入的第一个参数的类型，来进行不同的处理。
如字符串则尝试作为选择器或者 HTML 代码等、jQuery 对象则返回、函数则根据时机来立即执行或者插入 ready 事件队列中等等。

这可以算是 jQuery 使用中最常用到的函数，也因为是 jQuery 的工厂函数而十分重要。有兴趣的同学可以自行阅读其相关源代码。

## 关于 jQuery 对象

jQuery 的 $ 构造函数返回结果即是一个对象组成的数组，为了与原生 DOM 节点对象区分开，故这些对象可称之为 jQuery 节点对象。

每个 jQuery 对象上有 jQuery 的各种方法，就像原生 DOM 节点对象上会有各种方法和属性一样。
但由于他们不是同一个东西，所以不能混用。例如原生 DOM 对象上有 `innerHTML` 属性，而 jQuery 对象上并没有，所以如果在 jQuery 对象上获取这个属性，便会得到 `undefined`。

另外，当返回的数组中包含多个 jQuery 对象时，即匹配到了多个元素，那么对其执行操作会对每个对象都生效，如:

```html
<ul>
    <li>text</li>
    <li>text</li>
    <li>text</li>
</ul>
```

对于上面的 HTML 代码，执行如下 JS 代码:

```js
$('li').html("yo, what's up man?");
```

那么每个 li 标签中的文字都会发生更改。

由于 jQuery 的很多方法的返回结果都是该 jQuery 对象本身，所以 jQuery 可以很方便的执行链式操作，如:

```js
$('.selector').addClass('className').html('htmlCode');
```

## 常用 DOM 方法

### 节点获取

- find
- children
- parent
- next
- prev
- siblings

### CSS 和属性操作

- css
- attr
- prop
- val
- hasClass / removeClass / addClass / toggleClass
- height / innerHeight / outerHeight
- width / innerWidth / outerWidth
- offset
- scrollLeft / scrollTop
- data / hasData / removeData

### DOM 操作

- html
- text
- append / appendTo
- prepend / prependTo
- wrap / unwrap
- before / after
- remove
- empty

### 集合筛选

- eq
- first
- last
- slice
- filter
- map

## HOME WORK

1. 用 jQuery 实现，做一个时钟，动态显示当前时间。要求定位部分也用 jQuery 实现，而非直接写 CSS。
2. 用 jQuery 实现，页面中一个红色的方块从左上角开始，向右移动，到右边贴着屏幕边缘后停止。要求页面文档 `body` 节点中不直接写任何 HTML 代码，都用 jQuery 来做，移动部分不使用动画相关函数，自行修改位置来实现。

## 内容预告

- jQuery 事件
- jQuery 动画

## 补充阅读

__[在线 jQuery API 列表](http://overapi.com/jquery/)__
