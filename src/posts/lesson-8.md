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

```js
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

```js
function date2CN(str) {
    var arr = str.split('-');

    arr = arr.map(function (val) {
        return (val.split('').map(function (char) {
            return char2CN(char);
        })).join('');
    });

    return arr[0] + '年' + arr[1] + '月' + arr[2] + '日';

    function char2CN(char) {
        return ({
            0: '零',
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六',
            7: '七',
            8: '八',
            9: '九'
        })[char];
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

### 再谈 function

我们之前的课程讲过函数的申明、调用、参数等内容，现在再聊聊关于函数的使用。

#### 一个例子

我们来解决一下这个问题：函数的参数为一个数字，函数要做的是当这个数字大于 10 的时候，把这个数除 2，直到它小于等于 10 后返回最终结果。

一种常见的解决方案可能是这样：

```js
function f(n) {
    while (n > 10) {
        n /= 2;
    }
    return n;
}
```

现在我们换一种思路来看这个问题，把这个问题进行一个拆解：

1. 如果数字小于等于 10，直接返回结果
2. 如果大于 10，除 2 后回到上一步，即返回用除 2 后的结果重复执行这个函数的值

按照这个思路，我们来写一下代码：

```js
function f(n) {
    if (n < 10) return n;
    return f(n / 2);
}
```

#### 函数的递归调用

从上面的例子中我们可以发现，在某些情况下，函数内部再调用自己，可以使问题的求解变得简单、清晰，同时代码也更加简洁。

这种在函数自身内部通过不断的调用自己，并修改条件已达到初始已知条件，再逐层反馈，得到问题最终解的方法，称为函数的递归调用。

适用于递归的问题往往有这个特征，可以将问题重复的分解为同类型的子问题，并且这类子问题有已知的结束条件。
例如我们上面的例子中，第一步即为问题的结束条件，第二步即为拆解子问题。

![](http://edu.cnzz.cn/images/201302/20130221140110439.jpg)

当然，我们上面的例子很简单，完全可以用循环来代替。不过有些场景，递归会显得非常方便。

#### 斐波那契数列

Fibonacci 数列是一个特殊数列，它的数学定义是：

- F_0=0
- F_1=1
- F_n = F_{n-1} + F_{n-2}（n≧2）

即前两个值为 0、1，之后的第 N 个值为第 N - 1 和第 N - 2 的值的和。
那么，求斐波那契数列的第 N 个数的值，这个问题大家试着用递归来解决一下吧。

```js
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}
```

#### fib 函数优化

按照上面的思路，我们实现了 fib 方法，但大家可以试一下，如果我们把 N 变的比较大的时候，会产生什么效果。
当然，结果就是，程序会卡死，例如 fib(1000)。那这是为什么呢？

我们来仔细分析一下，这中间递归的过程中究竟发生了什么：

- 当 n 为 2 时，我们会调用 2 次 fib
- 当 n 为 3 时，我们会调用 2 + 1 次 fib
- 当 n 为 4 时，我们会调用 (2 + 1) + 2 次 fib
- 当 n 为 5 时，我们会调用 ((2 + 1) + 2) + (2 + 1) + 2 次 fib
- e.t.c

我们会发现，随着 N 增大，递归的调用次数会增大很多，因为我们会不断的递归计算下去，直到达到结束条件即递归到 0 或 1。
看一下图即可发现，这中间其实存在着大量的重复计算，那么显而易见的优化点就是免去不必要的重复计算，即把已经计算过的结果缓存起来供后续计算使用，即不断的扩大结束条件使得递归更早的结束。

```js
var cache = [0, 1];

function fib(n) {
    if (cache[n] !== undefined) {
        return cache[n];
    } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    /*
    return (cache[n] = cache[n] !== undefined ? cache[n] : fib(n - 1) + fib(n - 2), cache[n]);
    */
}
```

现在再试试 fib(1000) 应该轻轻松松了吧 >.<

这个例子主要是想说明，在我们执行一些程序的时候，有效的利用缓存可以很大的提高性能。具体缓存的应用场景，大家在以后的工作中可能经常会遇到。

#### 汉诺塔问题

![](http://pic002.cnblogs.com/images/2011/348708/2011111320150185.gif)

汉诺塔游戏即在 3 个柱子上移动圆盘的游戏，要求有两个，大的原盘不能放在小的圆盘上面，一次只能移动一个圆盘，最终把 A 柱子上的圆盘移动到 C 柱子上。

给大家几分钟时间思考，如何解决这个问题。

- 把 N 个原盘从 A 借助 B 移动到 C
- 把 N - 1 个圆盘从 A 借助 C 移动到 B
- 把第 N 个圆盘从 A 移动到 C
- 把 N - 1 个圆盘从 B 借助 A 移动到 C
- e.t.c

```js
var a = 'A', b = 'B', c = 'C';

function hanoi(n) {
    if (n === 1) {
        console.log(n + ': ' + a + '->' + c);
    } else {
        hanoi(n - 1, a, c, b);
        console.log(n + ': ' + a + '->' + c);
        hanoi(n - 1, b, a, c);
    }
}
```

#### 小练习

尝试优化上面的汉诺塔问题解法的性能。

### 简单算法介绍

算法即问题的解决方案，通过一系列的操作最终得到问题的正确解。我们已经了解了 JS 的主要基础内容，下面简单的介绍几个算法，作为大家对于基础内容的练习。

#### 插入排序

![](http://img.my.csdn.net/uploads/201207/17/1342520948_8667.jpg)

插入排序通过遍历数组，将当前的数字插入到一个适合它的新位置，从而得到有顺序的结果。
对于遍历过程中的每一个数，通过和前面的数字的比较结果，不断的交换直到达到合适的位置结束，看起来就是每个值被插入到了合适的位置，所以称为插入排序。

```js
function insertionSort(arr) {
    var i, j, target;

    for (i = 1; i < arr.length; i++) {
        target = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (target >= arr[j]) break;

            arr[j + 1] = arr[j];
        }
        arr[j + 1] = target;
    }

    return arr;
}
```

#### 冒泡排序

![](http://img.blog.csdn.net/20150311232353449)

冒泡排序通过遍历数组，将其中的值依次与其后续的值进行比较，根据结果决定是否交换，从而得到有顺序的结果。
对于遍历过程中的每一个数，由于是依次和后续的值进行比较，从而涌出一个极值，过程就像冒泡一样一个一个向上浮，所以称为冒泡排序。

```js
function bubbleSort(arr) {
    var len = arr.length,
        j, tmp;

    while (len--) {
        for (j = len - 1; j >= 0; j--) {
            if (arr[j + 1] > arr[j]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
}
```

#### 选择排序

![](http://www.weixueyuan.net/uploads/allimg/121229/1-121229141516104.gif)

选择排序通过遍历数组，每次选出当前的最大/最小值，然后并与最前面的未排序的值进行交换，从而得到一个有序的结果。
数组整体分为两部分，前面是有序的，后面是无序的，每次遍历的结果即选择当前无序部分中最大/最小值，然后放入有序部分，所以称为选择排序。

```js
function selectionSort(arr) {
    var i, j, tmp;

    for (i = 0; i < arr.length - 1; i++) {
        tmp = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[tmp]) {
                tmp = j;
            }
        }

        j = arr[tmp];
        arr[tmp] = arr[i];
        arr[i] = j;
    }

    return arr;
}
```

#### 二分查找

![](http://pic002.cnblogs.com/img/yc_sunniwell/201006/2010062716463366.png)

二分查找通过将数组对半拆分，从而更快的定位到目标位置，减少查找次数。
不过缺点在于，要求目前数组必须是有序的。

```js
function binarySearch(arr, target) {
    var low = arguments[2] || 0,
        high = arguments[3] || arr.length - 1,
        mid = Math.floor((high + low) / 2);

    if (high < low) return 'No such element';

    switch (true) {
        case arr[mid] === target:
            return mid;
        case arr[mid] < target:
            return binarySearch(arr, target, mid + 1, high);
        case arr[mid] > target:
            return binarySearch(arr, target, low, mid - 1);
    }
}
```

#### 希尔排序

![](http://images.devshed.com/ds/stories/2004-02-24/sort4.gif)

希尔排序是直接插入排序的改进版，即通过增量将数组的内容进行分组，然后每组内部通过插入排序进行排序。
这样逐渐将增量减小，最后一次增量为 1 时即完成排序。
通常增量的初始值可以取数组长度的一般，每次缩小一半。

```js
function shellSort(arr) {
    var gap = Math.floor((arguments[1] || arr.length) / 2),
        i, j, k, target;

    if (!gap) return arr;

    for (i = 0; i < gap; i++) {
        for (j = i + gap; j < arr.length; j += gap) {
            target = arr[j];
            for (k = j - gap; k >= 0; k -= gap) {
                if (target >= arr[k]) break;

                arr[k + gap] = arr[k];
            }
            arr[k + gap] = target;
        }
    }

    return shellSort(arr, gap);
}
```

希尔排序是不稳定排序，优点在于效率还不错，并且实现方式比较简单。

#### 归并排序

![](http://img.my.csdn.net/uploads/201105/29/8394323_1306643374dYdO.jpg)

归并排序是利用分治法的思想，将原始数组分解成很多小数组，在小数组中完成排序，并逐渐合并回大数组，最终得到排序的结果。
在完成分解后，对每一个小数组进行排序，然后逐渐合并各个小数组，在合并的过程中也进行排序从而保证顺序，这样最终回归得到原始数组的排序结果，所以称为归并排序。

```js
function mergeSort(arr) {
    var len = arr.length,
        mid = Math.floor(len / 2);

    if (len === 1) return arr;

    return (function () {
        var left = mergeSort(arr.slice(0, mid)),
            right = mergeSort(arr.slice(mid)),
            res = [];

        while (left.length && right.length) {
            res.push(left[0] < right[0] ? left.shift() : right.shift());
        }

        return res.concat(left).concat(right);
    })();
}
```

归并排序是稳定排序，并且性能也非常好，非常适合要求同样的数据有固定顺序的使用场景。

#### 快速排序

![](http://images.cnblogs.com/cnblogs_com/ruinet/quickSort.jpg)

快速排序是对冒泡排序的一种改进，思路是通过用一个阈值，将要排序的数组拆分成两部分，即大于阈值的部分和小于阈值的部分，来完成一次大概的值的排序。
然后再对于每个拆分后的数组，继续进行上述过程，直到最终拆分结果只有 1 个数，即完成排序。

```js
function quickSort(arr) {
    var low = arguments[1] || 0,
        high = arguments[2] || (arr.length - 1);
        left = low,
        right = high;

    if (left >= right) return;

    var threshold = arr[left];

    while (left < right) {
        while (left < right && arr[right] >= threshold) right--;
        arr[left] = arr[right];

        while (left < right && arr[left] <= threshold) left++;
        arr[right] = arr[left];
    }

    arr[left] = threshold;
    quickSort(arr, low, left - 1);
    quickSort(arr, left + 1, high);

    return arr;
}
```

快速排序是一种不稳定排序。针对快速排序存在着不少优化和变种，如阈值的选择、分区的调整等，这里不做讨论，有兴趣的同学可以自行了解。
在 V8 引擎中，数组内置的 `sort` 方法就是一个快速排序的优化版本。

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

## Homework

1. 复习 HTML 和 CSS 的部分。讲 JS 基础的时候一直没涉及这些，希望大家不要忘了，马上开始需要使用了。
2. 实现[这个页面](http://poppinlp.github.io/demos/smoothscroll.html)。实现静态页面，请保留，后续讲 DOM 操作会继续丰富这个例子以实现 DEMO 的效果。
3. 实现一个简单的 JS 模板函数，如对于 `This is a {{name}} page`，当传递来的数据对象为 `{ name: 'home'}` 时，返回为 `This is a home page`。

## 预告

- DOM 属性、方法、事件

__Fighting!__

2014.12.28
