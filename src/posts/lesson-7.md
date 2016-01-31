# Front end foundation course 7

## 上节课的作业

### 第一题

```js
function secMax(arr) {
	var len = arr.length;

	if (len < 2) return;

	var max = arr[0],
		secMax = arr[1];

	if (max < secMax) {
		max = arr[1];
		secMax = arr[0];
	}

	for (i = 2; i < len; i++) {
		if (arr[i] > max) {
			secMax = max;
			max = arr[i];
		} else if (arr[i] > secMax) {
			secMax = arr[i];
		}
	}

	return secMax;
}
```

### 第二题

```js
function sum() {
	var len = arguments.length;

	if (!len) return;

	var sum = 0;

	while (len--) {
		sum += arguments[len];
	}

	return sum;
}
```

## JavaScript 基础 Part 3

### 错误处理

在开发过程中，我们会尽量避免产生错误。但是，这件事情不能 100% 被保证。所以，我们还是需要做一些容错机制。特别是我们知道 JS 是单线程执行的，线程一旦产生了异常，后续的 JS 都不会被执行。所以，在 JS 中，容错似乎显得很有必要。例如：

```js
// 无异常捕获，后一个 console 不会被执行
console.log(1); // 1
var x = y * 2; // Uncaught ReferenceError: y is not defined
console.log(2);
```

```js
// 有异常捕获，后一个 console 会被执行
console.log(1); // 1
try {
	var x = y * 2;
} catch (err) {
	console.log('err: ', err); // err:  ReferenceError: y is not defined
}
console.log(2); // 2
```

#### 错误类型

虽然 JS 中可以抛出任何对象作为异常的内容，不过更建议使用特定的错误类型的对象：

- Error
- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError
- DOMException

#### throw

`throw` 用来抛出异常，可以抛出各种数据。例如：

```js
throw "Error2";   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

#### try...catch

`try` 和 `catch` 用来创建一个捕获异常的代码块，如果这个代码块抛出了一场，则捕获到异常并进行后续处理，并不会造成后续代码不被执行。例如：

```js
function add(x, y) {
	if (!+x || !+y) throw 'Not a number';
	return x + y;
}

try {
	add('x', 1);
} catch (e) {
	console.log(e);
}
```

#### finally

在异常捕获的代码块后，可以接一个 `finally` 代码块，作用是无论是否发生异常，都会在执行之后执行 `finally` 中的代码。

需要注意的一点是，如果 `finally` 中有返回值，那么这个返回值将作为 try-catch-finally 这部分代码的返回值，而不管 `try` 或者 `catch` 中究竟返回了什么。例如：

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now  
  console.log(5); // not reachable
}
f(); // alerts 0, 1, 3; returns false
```

另外需要注意的一点是，如果内部的 try-catch-finally 中 finally 有返回值，那么这个返回值会覆盖掉 catch 中抛出的异常。例如：

```js
function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
```

### Date 对象

JS 中并不存在日期这种数据类型，不过有个 Date 对象用来处理和日期相关的内容。

#### 如何创建

```javascript
var date = new Date([parameters]);
```

简单的说可以通过类似上面的方式调用 `Date` 对象的构造函数来 `new` 出一个日期对象。
它的构造函数还有多种情况：

```javascript
new Date(); // for now
new Date(value);
new Date(dateString);
new Date(year, month, day, hour, minute, second, millisecond);
```

具体使用的例子：

```js
var now = new Date(),
	a = new Date("December 25, 1995 13:30:00"),
	b = new Date('2015-01-01'),
	c = new Date('2015/01/01'),
	d = new Date('01-02-2015'),
	e = new Date('01-02-2015'),
	f = new Date(1420128000000),
	... e.t.c
```

#### 常用方法

创建好一个 `Date` 对象后，便可调用其中的方法。
总体而言，`Date` 对象的方法分为 3 类：

- set 系列用来获取信息
- get 系列用来设置信息
- to 系列用来转换数据

`Date` 对象 get 系列方法便是获取日期相关的信息。如：

```js
var d1 = new Date('5/12/2014'),
	date = d1.getDate(), // 从日期对象中获取一月中得天数， 1~31,
    month = d1.getMonth(), // 获取月份，注意从0开始，一月份的值是0， 0~11,
    year = d1.getFullYear(), // 获取年份，2014,
    hour = d1.getHours(), // 获取小时， 0~23,
    min = d1.getMinutes(), // 获取分，0~59,
    sec = d1.getSeconds(), // 获取秒，0~59,
    milSec = d1.getMillseconds(), // 获取毫秒，0~999
    day = d1.getDay(), // 获取星期几，周日是0，周一是1， 0~6
    time = d1.getTime(); // 获取 1970.1.1 到当前日期的毫秒数
```

set 和 to 系列方法这里就不举例啦，有兴趣可以自行尝试一下。

另外 `Date` 对象还有两个常用的静态方法：

- `now` 方法可以直接用于获取当前时间戳
- `parse` 方法用于将字符串转换成时间戳

```javascript
var ts = Date.now(),
	ts2 = Date.parse('2015 01 01');
```

__这两个方法 IE 9+ 支持__

### 小练习

1. 封装函数，传入两个日期的字符串，返回中间相差的天数

### 再谈数据类型

我们之前的课程讲过，JS 中的数据类型分为两种，原始类型和引用类型，并简单的讲了一下它们的区别。接下来我们稍微展开一点。

#### 栈和队列

栈和堆是两种非常常用的数据结构。在 JS 中有经常能见到，我们这里简单介绍一下。

##### 栈 (stack)

栈是一种线性的数据结构，只允许从表的一端插入和弹出数据，这一端称为栈顶，相应的另一端成为栈底。

![](http://f.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6d4c4094073b5bb5aada28ac57babe5c/a686c9177f3e67098c4504c03fc79f3df8dc5543.jpg)

栈的常用操作为栈顶插入和弹出数据，即在栈顶插入数据和在栈顶删除数据。由于只能在一端进行操作，所以栈结构有个典型的特点，即数据后入先出 (LIFO)。

##### 队列 (queue)

队列也是一种线性的数据结构，不过和栈不同的是，它只允许在表的前端弹出数据，以及在表的后端插入数据。插入操作的一端成为队尾，弹出操作的一端称为队首。

![](http://f.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=35768ebb0ff3d7ca18fb37249376d56c/cdbf6c81800a19d8116a4d8030fa828ba71e46ce.jpg)

队列的常用操作为队首的弹出数据和队尾的插入数据。所以队列结构的特点为数据先入先出 (FIFO)。

#### 原始类型和引用类型

我们之前讲过，原始类型是储存空间固定的简单数据段，而引用类型的值会变，大小不固定。接下来我们再看一个例子：

```js
var str = 'foobar';
str.foo = 'bar';
console.log(str.foo); // undefined
console.log(str.length); // 6
console.log(str.slice()); // foobar

var obj = {};
obj.foo = 'bar';
console.log(obj.foo); // bar
```

这个例子说明一件事情，JS 中的原始类型由于储存空间固定，所以不能为其添加属性。
但是，从例子中可以看到，原始类型却可以被调用到一些属性和方法，这是为什么呢？这些方法是从哪里来的？

#### 基本包装类型

在 JS 中我们能看到这么一些对象，名字和原始类型很像，但是是典型的类名（大写字母开头），例如 `String`、`Number`。这类对象被称为基本包装类，他们的作用就是对于原始类型进行一个基本的包装，使得它们可以获得相应的属性和方法。
也就是说，对于原始类型，如果尝试获取上面的属性和方法，那么 JS 引擎会创建一个临时的基本包装类来完成需求，完成会便销毁掉。例如：

```js
var str1 = 'foobar',
	str2 = new String('foobar');

typeof str1; // string
typeof str2; // object
```

### 字符串常用方法

#### 内容获取

##### `[]` 操作

这是种类似数组的内容获取方式。

```javascript
var str = 'hello';
console.log(str[0]); // 'h'
```

__只读，不可用于设置内容，并且属于 ECMAScript 5 标准，IE 低版本不支持__

##### charAt

```javascript
str.charAt([index]);
```

该方法用于获取某一下标的内容，默认为0下标。

```javascript
var str = 'hello';
console.log(str.charAt(0)); // 'h'
```

##### charCodeAt

```javascript
str.charCodeAt([index]);
```

该方法用于获取某一下标的 Unicode 编码值，默认为0下标。

```javascript
var str = 'hello';
console.log(str.charCodeAt(0)); // 104
```

__可以使用 `String.fromCharCode` 来获取编码值对应的内容__

#### length

`length` 属性可以获取字符串的长度。

```javascript
var str = 'hello';
console.log(str.length); // 5
```

__只读，不可用于设置长度__

#### 截取

字符串常用的内容截取方法有几个，`substr`, `substring`, `slice` 和 `split`。
几个方法都不会修改原变量，而是返回新的字符串。

##### substr

```javascript
str.substr([startIndex][, length]);
```

第一个参数是开始的位置，默认为0，如果是负数则表示从结尾倒数的第几位。
第二个参数是截取的长度，默认为截取到字符串的末尾，如果超过字符串的长度则截取到结尾，如果是负数则修正为0。

```javascript
var str = 'hello';
console.log(str.subStr()); // 'hello'
console.log(str.subStr(1)); // 'ello'
console.log(str.subStr(1, 2)); // 'el'
console.log(str.subStr(1, -2)); // ''
console.log(str.subStr(-3)); // 'llo'
console.log(str.subStr(-3, 2)); // 'll'
console.log(str.subStr(-3, 100)); // 'llo'
```

##### substring

```javascript
str.substring([startIndex][, endIndex]);
```

第一个参数是开始的位置，默认为0，如果小于0则修正为0，如果大于字符串长度则修正为字符串结尾。
第二个参数是结束的位置，默认为字符串结尾，如果小于0则修正为0，如果大于字符串长度则修正为字符串结尾。
如果第二个参数小于第一个参数，则修正为将其对调。

```javascript
var str = 'hello';
console.log(str.substring()); // 'hello'
console.log(str.substring(1)); // 'ello'
console.log(str.substring(-1)); // 'hello'
console.log(str.substring(100)); // ''
console.log(str.substring(1, 3)); // 'el'
console.log(str.substring(1, 100)); // 'ello'
console.log(str.substring(3, 1)); // 'el'
```

##### slice

```javascript
str.slice([startIndex][, endIndex]);
```

第一个参数是开始的位置，默认为0，如果是负数则表示从结尾倒数的第几位。
第二个参数是结束的位置，默认为字符串结尾，如果是负数则表示从结尾倒数的第几位。

```javascript
var str = 'hello';
console.log(str.slice()); // 'hello'
console.log(str.slice(1)); // 'ello'
console.log(str.slice(1, 3)); // 'el'
console.log(str.slice(-3)); // 'llo'
console.log(str.slice(-3, 4)); // 'll'
console.log(str.slice(-3, -1)); // 'll'
console.log(str.slice(3, 1)); // ''
```

##### split

```javascript
str.split([separator][, limit]);
```

`split` 方法通过把字符串分割成子字符串来把一个 String 对象分割成一个字符串数组。
第一个参数是分隔符，可以为字符串或者正则表达式。如果不设置，则返回的数组只包含整个字符串。如果为空字符串，则返回的数组由各个字符拆分组成。
第二个参数是返数组的长度限制，如果设置了，则返回的数组最长为 limit。

```javascript
var str = 'hello world';
console.log(str.split(' ')); // ['hello', 'world']
```

#### 大小写

```javascript
str.toUpperCase();
str.toLowerCase();
```

2个方法都不会修改原变量，而是返回新的字符串。

```javascript
var str = 'hello WORLD';
console.log(str.toUpperCase()); // 'HELLO WORLD'
console.log(str.toLowerCase()); // 'hello world'
```

#### 查找

##### indexOf

```javascript
str.indexOf(searchValue[, fromIndex]);
```

`indexOf` 方法用于查找目标字符串在当前字符串中的首次出现的位置，区分大小写，从 `fromIndex` 开始顺序进行查找，`fromIndex` 默认为0，查找不存在返回 `-1`。

```javascript
var str = 'hello';
console.log(str.indexOf('l')); // 2
console.log(str.indexOf('test')); // -1
```

##### lastIndexOf

```javascript
str.lastIndexOf(searchValue[, fromIndex]);
```

`lastIndexOf` 方法用于查找目标字符串在当前字符串中的最后出现的位置，区分大小写，从 `fromIndex` 开始顺序进行查找，`fromIndex` 默认为0，查找不存在返回 `-1`。

```javascript
var str = 'hello';
console.log(str.indexOf('l')); // 3
console.log(str.indexOf('test')); // -1
```

##### search

```javascript
str.search(string | regexp);
```

`search` 方法用于执行查找，参数可以为字符串或者正则对象。返回首次匹配成功的下标，否则返回 `-1`。

```javascript
var str = 'hello';
console.log(str.search('llo')); // 2
```

##### replace

```javascript
str.replace(regexp | substr, newSubStr | function[, flags]);
```

`replace` 方法用于替换字符串中的内容。其匹配的内容可以是字符串或者正则对象，替换的内容为字符串或者函数，可选的标签用于功能增强。
该方法不会修改原变量，而是返回新的字符串。

```javascript
var str = 'hello';
console.log(str.replace('ll', 'tt')); // 'hetto'
```

__参数详解可看[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)__

##### match

```javascript
str.match(string | regexp);
```

`match` 方法用于匹配特定的内容并返回匹配的结果。

```javascript
var str = 'hello';
console.log(str.match('ll')); // ['ll']
```

__参数详解可看[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)__

##### 关于正则表达式

正则表达式即通过一些特殊的符号来表示特定的匹配规则，从而在字符串中匹配到相应的文本。
结合最近的作业情况和同学们的一些反馈来看，正则的部分我们放到最后如果有多余的时间或者进阶班的时候再讲。我们现在还是着重在一些打基础的东西上。

#### 其他

##### concat

```javascript
str.concat([string2, string3, ..., stringN]);
```

用于拼接字符串。
该方法不会修改原变量，而是返回新的字符串。

```javascript
var str = 'hello';
console.log(str.concat('world')); // 'helloworld'
```

__`concat`,`join`和`+=`这三种拼接方式中，`+=`的性能最好__

##### trim

```javascript
str.trim();
```

用于去掉两头的空格。
该方法不会修改原变量，而是返回新的字符串。

```javascript
var str = '   test   ';
console.log(str.trim()); // 'test'
```

__IE 9+ 支持__

### 小练习

1. 简单的词频统计
2. 实现 `replace` 方法

### 数组常用方法

#### length

`length` 属性可以获取数组的长度。

```javascript
var arr = ['test', 1, 2];
console.log(arr.length); // 3
```

__可写，可用于增加或缩短数组长度__

```javascript
var arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
arr.length = 10;
console.log(arr); // [1, 2, 3, undefined * 7]
arr.length = 2;
console.log(arr); // [1, 2]
```

#### join

```javascript
arr.join([separator]);
```

`join` 方法用于将数组的所有内容连接成字符串。可传入一个字符串参数作为连接时的分隔符。

```javascript
var arr = ['test', 1, 2];
console.log(arr.join('+SEP+')); // test+SEP+1+SEP+2
```

__`concat`,`join`和`+=`这三种拼接方式中，`+=`的性能最好__

#### 队列和栈操作

##### push

```javascript
arr.push(element1, ..., elementN);
```

`push` 方法用于向数组的末尾添加一个或多个元素，返回值为数组的新长度。

```javascript
var arr = [1, 2];
console.log(arr.push(3, 4, 'test')); // 5
console.log(arr); // [1, 2, 3, 4, 'test']
```

##### pop

```javascript
arr.pop();
```

`pop` 方法用于删除数组末尾的元素，并将其返回。

```javascript
var arr = [1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr); // [1, 2]
```

##### shift

```javascript
arr.shift();
```

`shift` 方法用于删除数组的第一个元素，并将其返回。

```javascript
var arr = [1, 2, 3];
console.log(arr.shift()); // 1
console.log(arr); // [2, 3]
```

##### unshift

```javascript
arr.unshift(element1, ..., elementN);
```

`unshift` 方法用于在数组开头添加元素，返回值为新的长度。

```javascript
var arr = [1, 2, 3];
console.log(arr.unshift('test', -1)); // 5
console.log(arr); // ['test', -1, 1, 2, 3]
```

#### 排序

##### reverse

```javascript
arr.reverse();
```

`reverse` 方法用于将数组中的内容进行反序排列。
该方法会修改原变量。

```javascript
var arr = ['test', 1, 2];
arr.reverse();
console.log(arr); // [2, 1, 'test']
```

##### sort

```javascript
arr.sort([compareFunction]);
```

`sort` 方法用于将数组进行排序。默认为由小到大的顺序，可传入排序函数进行自定义。

```javacript
var arr = [2, 1, 4, -1];
arr.sort();
console.log(arr); // [-1, 1, 2, 4]
arr.sort(function (a, b) {
	return a < b;
});
console.log(arr); // [4, 2, 1, -1]
```

#### 截取

##### slice

```javascript
arr.slice([startIndex][, endIndex]);
```

类似字符串的 `slice` 方法，可参考[其描述](#slice)。

##### splice

```javascript
arr.splice(start, deleteCount[, item1[, item2[, ...]]])
```

`splice` 方法大体上讲就是从某个下标开始，删除一定量的元素，然后添加一定量的新元素。返回值为删除的元素。
不过由于后两者的数量都可以为0，所以大体上延伸出3种用法：

- 删除元素
- 插入元素
- 替换元素

```javascript
var arr = [1, 2, 3];
// delete element demo
console.log(arr.splice(1, 1)); // [2]
console.log(arr); // [1, 3]
// add element demo
console.log(arr.splice(1, 0, 2)); // []
console.log(arr); // [1, 2, 3]
// replace element demo
console.log(arr.splice(1, 1, 'test')); // [2]
console.log(arr); // [1, 'test', 3]
```

__参数详解可参看[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)__

#### 查找

- indexOf
- lastIndexOf

这两个方法类似于字符串对应的方法，可参考[其描述](#indexof)。

__IE 9+ 支持__

#### 遍历

- filter
- some
- every
- map
- forEach

上面罗列了一些数组中和遍历相关的方法，各有各的条件和应用场景。
不过对于0基础的同学还是推荐大家自己来遍历作为一种练习，熟练了之后再考虑看看这些方法。
所以我们目前就不做过多的讲解，之后的进阶班上我们再来讲解。

### 小练习

1. 将数组中的对象按一定规则排序

## Homework

1. 自己实现 reverse 方法
2. 实现对象的浅拷贝
3. 实现对象的深拷贝
4. 自己实现 indexOf 方法
5. 对于上面的方法，扩展参数控制，忽略大小写【选做】

## 预告

- 常用数学函数
- DOM 基础

__Fighting!__

2014.12.21
