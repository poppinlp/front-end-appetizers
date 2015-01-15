# Front end foundation course 7

## 上节课的作业

### 第一题

```javascript
function min(arr) {
	var len = arr.length;

	if (!len) return;

	var res = arr[0],
		i;

	for (i = 1; i < len; i++) {
		res = arr[0] > arr[i] ? arr[i] : res;
	}

	return res;
}
```

### 第二题

```javascript
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

## JavaScript 基础 Part 3

### Date 对象

#### 如何创建

```javascript
var date = new Date();
```

简单的说可以通过类似上面的方式调用 `Date` 对象的构造函数来 `new` 出一个日期对象。
不过它的构造函数还有多种情况：

```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, month, day, hour, minute, second, millisecond);
```

#### 常用方法

`Date` 对象常用的方法便是获取和设置日期。如：

```javascript
//设置日期，创建日期对象
var d1 = new Date('5/12/2014');
var date = d1.getDate(), //从日期对象中获取一月中得天数， 1~31,
    month = d1.getMonth(), //获取月份，注意从0开始，一月份的值是0， 0~11,
    year = d1.getFullYear(), //获取年份，2014,
    hour = d1.getHours(), //获取小时， 0~23,
    min = d1.getMinutes(), //获取分，0~59,
    sec = d1.getSeconds(), //获取秒，0~59,
    milSec = d1.getMillseconds(), //获取毫秒，0~999
    day = d1.getDay(), //获取星期几，周日是0，周一是1， 0~6
    time = d1.getTime(); //获取 1970.1.1 到当前日期的毫秒数
```

另外 `Date` 对象有个静态方法 `now`，可以直接用于获取 1970.1.1 到当前时间的毫秒数。

```javascript
var d = Date.now();
```

__该方法 IE 9+ 支持__

### 小练习

1. 封装函数，传入两个日期的字符串，返回中间相差的天数

### 字符串常用方法

#### 内容获取

##### `[]`操作符

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