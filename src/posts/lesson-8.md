# Front end foundation course 8

## 上节课的作业

### 第一题

```javascript
function reverse(arr) {
    var len = arr.length,
        i = 0,
        swap;

    for (; i < len / 2; i++) {
        swap = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = swap;
    }
}
```

### 第二题

```javascript
function copy(obj) {
    if (typeof obj !== 'object') return obj;

    var res = {};
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            res[item] = obj[item];
        }
    }
    return res;
}
```

### 第三题

```javascript
function copy(obj) {
    if (typeof obj !== 'object') return obj;

    var res = {};
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            res[item] = copy(obj[item]);
        }
    }
    return res;
}
```

### 第四题

```javascript
function indexOf(src, target) {
	var srcLen = src.length,
		tgLen = target.length,
		i, j;

	if (tgLen > srcLen) return -1;
	for (i = 0; i <= srcLen - tgLen; i++) {
		if (src[i] === target[0]) {
			for (j = 1; j < tgLen; j++) {
				if (target[j] !== src[i + j]) break;
			}
			if (j === tgLen) return i;
		}
	}
	return -1;
}
```

## JavaScript 基础 Part 4

### 小练习

1. 将一个日期字符串如 '2014-12-12' 转化为中文 '二零一四年一二月一二日'。

```javascript
function date2CN(str) {
    var date = new Date(str);
	if (date.toString() === 'Invalid Date') return 'Not a Date';
	return str2CN(date.getFullYear()) + '年' + (str2CN(date.getMonth() + 1)) + '月' + str2CN(date.getDate()) + '日';

	function str2CN(str) {
		var len, i, res = '';
		str = str.toString();
		len = str.length;
		for (i = 0; i < len; i++) {
			res += char2CN(str.charAt(i));
		}
		return res;
	}

	function char2CN(num) {
		switch (num) {
			case '0': return '零';
			case '1': return '一';
			case '2': return '二';
			case '3': return '三';
			case '4': return '四';
			case '5': return '五';
			case '6': return '六';
			case '7': return '七';
			case '8': return '八';
			case '9': return '九';
		}
	}
}
```

2. 分数分布统计需求，即给予一个数组（数组可能非常大），数据是学生们的分数，从0到10，要求输出各个分数的学生有多少名。

```javascript
var data = [4, 5, 6, 4, 9, 1, 5, 6, 8, 8, 8, 7, 9, 10, 6, 7, 6, 7, 7, 8, 8, 8, 9, 5, 8, 9, 6, 5, 10];

function statistics(arr) {
	var res = [],
		len = arr.length,
		item;
	while (len--) {
		item = arr[len];
		res[item] = res[item] ? ++res[item] : 1;
	}
	len = arr.length;
	while (len--) {
		if (!res[len]) continue;
		console.log('%d分的有%d人', len, res[len]);
	}
}
```

### 数学函数

`Math` 对象包含了很多和数学相关的常量和方法，这里取一部分做简单介绍，其他的函数有兴趣的同学可以自行查阅。

#### 常量

- Math.E
- Math.LN2
- Math.LN10
- Math.LOG2E
- Math.LOG10E
- Math.PI
- Math.SQRT1_2
- Math.SQRT2

#### random

```javascript
Math.random();
```

该函数返回一个 0 - 1 之间的随机数，包括0，不包括1。

```javascipt
console.log(Math.random()); // a float number in [0, 1)
```

#### ceil

```javascript
Math.ceil(number);
```

该函数将一个数字向上取整。

```javascript
console.log(Math.ceil(0.9));  // 1
console.log(Math.ceil(0.1));  // 1
console.log(Math.ceil(1));    // 1
console.log(Math.ceil(-1.9)); // -1
```

#### floor

```javascript
Math.ceil(number);
```

该函数将一个数字向下取整。

```javascript
console.log(Math.floor(0.9));  // 0
console.log(Math.floor(0.1));  // 0
console.log(Math.floor(1));    // 1
console.log(Math.floor(-1.9)); // -2
```

#### round

```javascript
Math.round(number);
```

该函数将一个数字四舍五入取整。

```javascript
console.log(Math.round(0.9));  // 1
console.log(Math.round(0.1));  // 0
console.log(Math.round(1));    // 1
console.log(Math.round(-1.9)); // -2
```

#### max

```javascript
Math.max([value1[,value2, ...]])
```

返回参数中的最大者。

```javascript
console.log(Math.max(1, 2, 3, -1)); // 3
```

之前我们有写过求数组中最大值的函数，那么我们也可以这样：

```javascript
function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}
```

#### min

```javascript
Math.min([value1[,value2, ...]])
```

返回参数中的最小者。

```javascript
console.log(Math.min(1, 2, 3, -1)); // -1
```

#### pow

```js
Math.pow(base, exponent)
```

返回一个数字的 N 次方。

```js
console.log(Math.pow(2, 10)); // 1024
```

#### abs

```js
Math.abs(x)
```

`abs` 方法尝试将传入的参数转换为数字，并返回其绝对值。例如：

```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

#### sqrt

```js
Math.sqrt(x)
```

`sqrt` 方法用于获取一个数的平方根。例如：

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
```

### 小练习

1. 封装函数，参数为两个数组，返回一个处于这两个数字之间的随机数，[num1, num2)。

```javascript
function random(num1, num2) {
    return num1 + Math.floor(Math.random() * (num2 - num1));
}
```

### JSON

JSON 即 JavaScript 对象表示法（JavaScript Object Notation），是一种简洁的储存数据的格式。
由于它的结构很像 JS 的对象，所以很适合 JS 来使用。类似的还有 yaml 和 xml 等等。
关于 JSON 的历史等详细介绍可看[这篇wiki](http://en.wikipedia.org/wiki/JSON)。

从 ECMAScript 5 开始，支持原生的 JSON 对象了，下面是两个主要的操作方法。IE 8+ 支持。

#### JSON.parse

```javascript
JSON.parse(text[, reviver]);
```

该方法将一个 JSON 格式字符串转换为 JS 对象。第二个参数可以在对象返回前进行一些操作，详情见[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)。

```javascript
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
JSON.parse('{"1": 1, "2": 2}') //Object {1: 1, 2: 2}
JSON.parse('{"p": 5}', function (k, v) {
    if(k === "") return v;
    return v * 2;
});                            // { p : 10 }
```

#### JSON.stringify

```javascript
JSON.stringify(value[, replacer [, space]]);
```

该方法将一个 JS 对象转换为 JSON 字符串。参数的详细解释见[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)。

```javascript
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'
```

### 初识 setTimeout 和 setInterval

下面介绍常用的计时器的设置和清除方法。

#### setTimeout

```javascript
var timeoutID = window.setTimeout(func, delay, [param1, param2, ...]);
var timeoutID = window.setTimeout(code, delay);
```

`setTimeout` 方法用于设置一个计时器，在计时器生效时执行某段代码或者函数。
方法返回值是计时器的唯一标识，用于清除该计时器。
`setTimeout` 方法属于全局对象 `window`，所以也可以直接使用。

```javascript
setTimeout(function () {
    console.log('Bazinga');
}, 1000);
```

#### clearTimeout

```javascript
window.clearTimeout(timeoutID);
```

`clearTimeout` 用于清除 `setTimeout` 设置的计时器。

```javascript
var timer = setTimeout(function () {
    console.log('Bazinga');
}, 1000);
clearTimeout(timer);
```

#### setInterval

```javascript
var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
var intervalID = window.setInterval(code, delay);
```

该方法与 `setTimeout` 的区别在于该方法设置的计时器会循环执行，即每隔固定时间执行一次，而不是在执行一次之后就消亡。

```javascript
setInterval(function () {
    console.log('Bazinga');
}, 1000);
```

#### clearInterval

```javascript
window.clearInterval(intervalID);
```

该方法用于清除 `setInterval` 设置的计时器。

```javascript
var timer = setInterval(function () {
    console.log('Bazinga');
}, 1000);
clearInterval(timer);
```

#### 进阶

关于计时器还有些进阶的特性，比如函数中 `this` 的值、计时器的异步性等，这里我们不做过多的讨论，之后的进阶班上我们再详细讨论。这里只是给大家看两个例子：

```javascript
console.log(1);
setTimeout(function () {
    console.log(2);
}, 0);
console.log(3);
```

```javascript
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}
```

### 小练习

1. 做一个计时器，每秒输出当前时间

### 再谈 function

### DOM 基础 Part 1

#### 什么是 DOM

DOM 即 Document Object Model，大体上可以分为核心 DOM、XML DOM 和 HTML DOM。
它定义了文档中的各种不同对象，以及这些对象的属性、方法、事件等内容。
浏览器通过实现 DOM 规范，从而暴露给 JS 一个操作 DOM 节点的接口。
详情可见[官方文档](http://www.w3.org/DOM/)。

#### JS 通过 DOM 能做什么

- 能够改变页面中的所有 HTML 元素
- 能够改变页面中的所有 HTML 属性
- 能够改变页面中的所有 CSS 样式
- 能够对页面中的所有事件做出反应

#### DOM 树

HTML 文档在浏览器中会被解析为 DOM 树，其中每个节点即 DOM 节点，就是我们用 JS 直接操作的对象。

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

## Homework

1. 复习 HTML 和 CSS 的部分。讲 JS 基础的时候一直没涉及这些，希望大家不要忘了，马上开始需要使用了。
2. 实现[这个页面](http://poppinlp.github.io/demos/smoothscroll.html)。实现静态页面，请保留，后续讲 DOM 操作会继续丰富这个例子以实现 DEMO 的效果。
3. 实现一个简单的 JS 模板函数，如对于 `This is a {{name}} page`，当传递来的数据对象为 `{ name: 'home'}` 时，返回为 `This is a home page`。

## 预告

- DOM 属性、方法、事件

__Fighting!__

2014.12.28
