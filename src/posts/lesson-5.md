# Front end foundation course 5

## JavaScript 基础 Part 1

### 什么是 JavaScript

JavaScript（以下简称JS）是一种动态脚本语言，弱类型，继承基于原型。遵循的规范是 ECMAScript。

### 如何引入 JS

- 外部文件
- 内部脚本

```html
<script src=''></script>
<script>
	// do some stuff
</script>
```

### Hello world

```js
// 输出 Helloworld 字符串
var x = 'Hello',
	y = 'world';

console.log(x + y);
```

上面是一个例子，它会在控制台输出 Helloworld 字符串，那么我们能从例子中得到什么：

- 一句话结尾的分号可有可无（个人推荐写上）,不写时解析环境会猜测执行
- 用 `/* some stuff */` 或 `// some stuff` 表示注释

### JS 如何申明变量

JS 中通过 `var 标识符` 来申明变量，其中标识符即最终的变量名，如上例中的 `x` 和 `y`。标识符的使用需要注意几个地方：

- 只能包含数字、大小写英文字母、下划线(\_)和美元符号($)
- 不能以数字开头
- 不能为保留字或关键字
- 大小写敏感
- 实际开发中标识符尽量语义化

_关于 JS 的保留字和关键字，可以看[这个列表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_words)_

```js
var foo, foo2, Foo, _foo, $foo;
```

JS 中常见的变量命名方式是[驼峰命名法](http://baike.baidu.com/view/1165629.htm)，有兴趣的同学可以自行了解一下。这里举几个例子：

```js
var getUserInfo, isFirstTime;
```

### JS 变量作用域

在 ES6 之前，JS 中只存在全局作用域和函数级作用域，即只要不是在函数中声明的变量，即为全局变量。而且，无论在哪里，声明变量时不使用 `var` 也是全局变量。例如：

```js
var foo = 1;

!function() {
	var bar = 2;
	test = 3;

	console.log(foo); // 1
	console.log(bar); // 2
	console.log(test); // 3
}();

console.log(foo); // 1
console.log(bar); // Uncaught ReferenceError: bar is not defined
console.log(test); // 3
```

### JS 全局对象

JS 执行环境大都会存在一个全局对象，在浏览器环境中这个全局对象是 `window` 对象。
我们通过 `var` 关键字声明的变量会

```js
console.log(window.foo); // undefined
var foo = 'bar';
console.log(window.foo); // bar
window.foo2 = 'bar2';
console.log(foo2); // bar2
```

### JS 变量提升

JS 中声明变量有一个特性，叫变量提升，意思是可以先使用后面声明的变量。
不过需要注意，变量提升后，未赋值之前值仍然是 undefined。
看下面这三种情况：

```js
console.log(foo); // Uncaught ReferenceError: foo is not defined
```

```js
console.log(foo); // undefined
var foo;
```

```js
console.log(foo); // undefined
var foo = 'bar';
```

```js
var foo = "bar";

!function() {
  console.log(foo); // undefined
  var foo = "bar2";
}();
```

### var 和 function 的提升

### JS 基础数据类型

JS 中的数据类型可以分为两类，原始类型和引用类型。

#### 原始类型

原始类型包含五种：`Undefined`, `Null`, `String`, `Number`, `Boolean`。（ES6 中加入了新的类型叫 `Symbol`）

- Undefined
- Null
- String
- Number
- Boolean

#### 引用类型

- Object
- Array
- Date
- RegExp
- Function

#### 区别

非常重要的一点就是变量存的是值还是引用（指针）。看下面这个例子：

```js
// primitives
var foo = 1,
	bar = foo;

console.log(foo, bar); // 1 1

foo = 2;

console.log(foo, bar); // 2 1

// object
var x = {
		foobar: 123
	},
	y = x;

console.log(x, y); // Object {foobar: 123} Object {foobar: 123}

x.test = 444;

console.log(x, y); // Object {foobar: 123, test: 444} Object {foobar: 123, test: 444}
```

### N 进制

数字从第一位开始逐渐增加，N 进制的意思就是逢 N 进 1。
我们常用的数字是十进制，从 0 到 9，逢 10 进 1。

而某个数字的值是多少，算法为：从第一位开始，每一位的值 * 进制的 N 次方，N 为当前位数，从 0 开始。
举个例子：

十进制的 16，值为 10^0 * 6 + 10^1 * 1 = 16。

#### 2 进制

二进制就是逢 2 进 1。比如：0, 1, 10, 11, 100, 101, 110, 111...

那么 2 进制的 1001 值是？

#### 16 进制

十六进制就是逢 16 进 1。因为相比于 10 进制多几位，所以最后由几个英文字母补充，0123456789ABCDEF。
例如：1a，ff...

### 计算机中的数字

计算机中的数字表示为机器数，机器数有两个重要的特点：

- 数字存在正负，用最高位表示数字的符号
- 长度不尽相同，不过通常是 1 byte（8 bit）的整数倍

机器数存在三种表示方式：原码、反码、补码。

#### 原码

其实和二进制一样，只是最高位作为符号位来使用。当数字是正数时，和其二进制一样；当数字为负数时，最高位变为 1。

例如 9 的有符号整数原码表示为：00001001
例如 -9 的有符号整数原码表示为：10001001

但是原码有个很大的问题，对于数字运算处理起来比较麻烦。需要先判断符号，再做处理。所以出现了下面两种形式。

#### 反码

当数字是正数时，和原码一样；当数字为负数时，反码为各位取反。

例如 -9 的有符号整数反码表示为：01110110

反码的出现解决了原码在计算中的一个大问题，就是符号。但是对于实际计算而言，仍旧比较复杂。

#### 补码

当数字是正数时，和原码一样；当数字为负数时，补码为反码加 1。

例如 -9 的补码为：01110111

补码的出现解决了上面说到的原码的计算复杂问题，为什么？

首先，在算数中，如果我们想算出 3 - 9 这个算式的结果，其实可以换种方式通过计算 3 + -9 也能得到。这就是可以把一切减法都转换成加法。

然后，我们看下面两个例子：

- 假设我们现在在 400 米操场上跑步，如果想去前面 300 米的地方，我们有两种方式，一种是继续前进 300 米，一种是后退 100 米。大家可以想象一下，其实我们到的是同一个位置。因为操场是个圆，首尾相连。两个不同位置间总是有 2 个距离值，加在一起和是 400 米。这个 400 也就是模，那两个数值互为补数。
- 假设现在时钟上时针指着 6，如果想把它改成指着 9，我们有两种方式，一种是顺时针转动 3 格，一种是逆时针转动 9 格。大家可以想象一下，其实结果都指向同一个位置。因为始终是个圆，首位相连。两个不同位置间总是有 2 个距离值，加在一起和是 12 格。这个 12 也就是模，那两个数值互为补数。

我们之前讲过计算机中的数字储存长度不尽相同，但都是有明确的储存长度的（比如 C++ 中的 int 类型整数的长度可能为 32 位），也就是说计算机中的某种类型的数字，是存在表示的最大值和最小值的（C++ 中的 int 储存范围为 -2^31 到 2^31 - 1，也就是 -2147483648 ~ 2147483647）。不过 JS 中的数字并未区分类型，全都是双精度浮点数，储存长度为 64 位，最大值和最小值可以通过 `Number.MAX_VALUE` 和 `Number.MIN_VALUE` 看到。

OK，说到这里，大家再回想我们上面两个例子，有没有发现什么共同点。如果没有的话，那么我们可以做这么一个测试：

假设储存长度是 8 位的有符号整数，原码本身表示的最大值是 11111111，最小值是 00000000。当最大值再加 1 会变成什么？100000000，产生了溢出，去掉溢出的一位，也就是 00000000，也就是最小值。

看到这个测试，有没有觉得和之前的例子很像？也就是计算机中的数字，其实也可以想象成是一个首尾相连的圆，在这上面我们想从一个值到另一个值，总是有两种方式，正向的得到和反向的得到。所以做减法也就是加上被减数的补数即可。

那么某个数的补数怎么求？结合上面的两个例子，可以看到，在我们的测试中，模就是 100000000，也就是 2^8。 获取模数也就是用模来减去原始的数，也就是加上原始的数的负数，比如 -9 的模数为 100000000 - 10001001 = 01110111，也就是我们上面给出的 -9 的补码。

讲到这里，大家明白我们为什么要去算补码了吧。

### JS 中的运算

#### 常见算数运算

- +
	- +val
		- +9 // 9
		- + \-9 // \-9
		- +'123' // 123
		- +'asd' // NaN
	- val + val
		- 1 + 1 // 2
		- 'asd' + 'asd' // 'asdasd'
		- 123 + '456' // 123456
- -
	- -val
		- \-9 // \-9
		- \- \-9 // 9
		- \-'123' // \-123
	- val \- val
- *
- /
- %
- ++
	- ++val
	- val++
- \-\-
	- \-\-val
	- val\-\-

#### 逻辑运算

- &&
- ||
- !

#### 常见比较运算

- \>
- \>=
- <
- <=
- ==
- ===
- !=
- !==

#### 位运算

- ~
- &
- |
- ^
- <<
- \>\>
- \>\>\>

#### 赋值运算

- val = val
- val operate= val

### typeof 运算

`typeof` 运算用于检测变量的类型，使用方法为 `typeof 变量名`，常见值的列表如下：

```
Undefined	        "undefined"
Null	            "object"
Boolean	            "boolean"
Number	            "number"
String	            "string"
Function object 	"function"
Any other object	"object"
```

#### 条件运算

条件运算符是 JS 中唯一一个三元运算符，由问号(?)和冒号(:)组成。如果问号前的表达式逻辑真，则值为冒号前的表达式结果；反之为冒号后的表达式结果。例如：

```js
var x = 'chn';
var y = x === 'eng' ? 'Hello' : '你好';
console.log(y); // 你好
```

#### 逗号运算

都好运算符就是一个逗号(,)。作用是被逗号分割的表达式都会被运算，不过最后返回的是最后一个表达式的运算结果。例如：

```js
var x = (1, 2, 3, 4);
console.log(x); // 4
```

#### delete 运算

`delete` 运算的作用是删除一个对象、对象的属性或者数组中的一个元素。
当该操作可执行时，会返回 `true`；反之返回 `false`。
不过有两种情况需要注意，通过 `var` 声明的变量不能被删除，JS 引擎预定义的属性不能删除。
例如：

```js
var x = 1;
delete x; // false
delete window.x; // false

y = 2;
delete y; // true

delete window.y; // true
var o = {
	foo: 'bar'
};
delete x.foo; // true

var arr = [1, 2, 3];
delete arr[0]; // true
```

#### in 运算

`in` 运算的作用是判断某个属性是否存在于某个对象中。例如：

```js
var obj = {
	foo: 1
};
'foo' in obj; // true
'bar' in obj; // false

var arr = [1, 2, 3];
0 in arr; // true
delete arr[0];
0 in arr; // false

"PI" in Math; // true
```

#### instanceof 运算

`instanceof` 运算的作用是判断某个对象是否是某个特定的类型，即是否是某个类派生的后代。这个详情我们讲到原型链的时候再说，这里只是举个例子：

```js
Array instanceof Object; // true
```

#### void 运算

`void` 运算的作用是执行一个 JS 表达式，但不返回任何值。例如：

```js
void (1 + 1);
```

```html
<a href="javascript:void(0)">link</a>
```

### 练习

1. 申明变量 `home`，赋值 'China'，输出到控制台。
2. 试一试各种运算符

## 预告

下节课的主要内容如下：

- JS 流程控制
- Array, String 对象的常用方法

__Fighting!__
