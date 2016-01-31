# Front end foundation course 6

## 上节课内容的复习

关于上节课的内容大家还有什么问题么？

## JavaScript 基础 Part 2

### 数字字面量(literal)

JS 中的数字默认是 10 进制，我们也可以创建 16 进制、8 进制和 2 进制的数字：

- 数字前面加 0 或者 0o 表示 8 进制，例如 011, 0o11
- 数字前面加 0x 表示 16 进制，例如 0x1a, 0xff
- 数字前面加 0b 表示 2 进制，例如 0b11, 0b110

### 字符串字面量

JS 中通常的字符串是单行的，想创建一个多行的字符串可以通过插入特殊字符 `\n` 来实现，例如：

```js
var mulLine = 'foo \n bar';
```

JS 中的特殊字符包括：

Character | Meaning
---|---
\0 | Null Byte
\b | Backspace
\f | Form feed
\n | New line
\r | Carriage return
\t | Tab
\v | Vertical tab
\' | Apostrophe or single quote
\" | Double quote
\\ | Backslash character
\XXX | The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.
\xXX | The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
\uXXXX | The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
\u{XXXXX} | Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.

里面的 `\` 是转义字符，作用是将后面的内容进行转移，不过也可以用在结尾，作为另一种创建多行字符串的方式：

```js
var mulLine = 'foo\
bar';
```

### 常用对象

之前有提到引用对象，并大致的讲了一下。这里再选取其中 3 种稍微详细的讲一下。

#### Object

对象，其内容形式为键值对，主要用来存储和封装。

##### 创建对象

创建一个对象有两种常见方式，通过对象字面量 `{}` 或者 `new` 操作符。如下：

```javascript
var obj = {};
var obj2 = new Object();
```

对象内容的键值对中，值可以是各种类型的数据，如：

```javascript
var obj = {
    key1: 'string value',
    key2: 123,
    key3: {},
    key4: [],
    key5: function () {}
};
```

##### 获取和设置属性值

获取对象的某个属性可以通过 `.` 操作符或者 `[]` 操作符来实现，如对于上面那个对象：

```javascript
console.log(obj.key1); // "string value"
console.log(obj['key2']); // 123
```

这两种方式的区别在于后者会把其内部的表达式进行计算后的值作为索引，而前者会直接将后面的内容作为索引：

```javascript
var str = 'key1',
    str2 = 'key';

console.log(obj.str); // undefined
console.log(obj[str]); // "string value"
console.log(obj[str2]); // undefined
console.log(obj[str2 + '1']); // "string value"
```

对于设置属性值，即直接对某个属性进行赋值操作即可，如：

```javascript
obj.key6 = 'test';
obj['key7'] = 'test2';

var str3 = 'key8';
obj[str3] = 'test3';
```

对象是一个容器类型，主要作用即存放数据，特点是方便查找。使用场景例如：

```js
var statusList = {
        200: 'OK',
        403: 'Forbidden'
    },
    status = 200;

console.log(statusList[status]);
```

#### Array

数组，类似于对象的一种存放数据的结构，不过其内容是有顺序的通过下标来访问，而不是无序的键值对。

##### 创建数组

创建一个数组有两种常见方式，通过数组字面量 `[]` 或 `new` 操作符。如下：

```js
var arr = [];
var arr2 = new Array();
```

数组内数据可以是各种类型的数据，如：

```js
var arr = [
    'string',
    123,
    [],
    {},
    function () {}
];
```

需要注意的一点是，数组字面量中，可以有空的数据，例如：

```js
var arr = [,,1,,];
console.log(arr); // [undefined × 2, 1, undefined × 1] in modern browser
```

##### 获取和设置内容

类似于对象的索引，数组通过 `[]` 操作符来获取和设置内容，只是索引换成了下标。
数组的下标从 `0` 开始依次增加，如对于上面的数组：

```js
console.log(arr[0]); // "string"
console.log(arr[1]); // 123
console.log(arr[100]); // undefined
```

设置内容即用类似的方式对数组内容进行赋值。
不过当下标大于数组长度的时候，会自动扩展数组的长度到可以容纳的大小。如：

```javascript
arr[0] = 'test';
console.log(arr.length); // 5
arr[9] = 'test2';
console.log(arr.length); // 10
```

#### Function

函数即一个用来封装内容的容器。

##### 创建函数

有两种方式创建函数，命名函数和匿名函数：

```javascript
function f() {
    // code
}
var f2 = function () {
    // code
}
```

函数最终的作用取决于其中的代码，如下面这个函数的作用即输出一行字符串：

```javascript
function fun() {
    console.log('hello world');
}
```

##### 调用函数

通过 `函数名()` 的方式调用某个函数。如上面的函数：

```javascript
fun(); // "hello world"
```

##### 函数的返回值

返回值即调用函数后会得到的一个结果值。
通过 `return` 关键字可以设置函数的返回值。默认返回值为 `undefined`。

```javascript
console.log(fun()); // undefined

function fun2() {
    return 123;
}
console.log(fun2()); // 123
```

##### 参数

参数即外部传递给函数的一些可以使用的变量。
在申明函数时，括号中可以添加参数。如：

```javascript
function sum(var1, var2) {
    return var1 + var2;
}
console.log(sum(1, 2)); // 3
```

在函数内部有个自动创建的数组，叫 `arguments`，其中包含了所有调用函数时传入的参数，如：

```javascript
function arg() {
    console.log(arguments);
}
arg(1, 23, 'test'); // [1, 23, 'test']
```

其实函数在执行时，如果有参数，那么做的事情就是对于每个参数，用 `arguments` 的对应下标内容来赋值，例如假设形参数是 arg1 和 arg2：

```js
arg1 = arguments[0];
arg2 = arguments[1];
```

在一些传入参数不确定的情况下，这个数组非常有用。

### 小练习

1. 创建一个函数 `add`，作用是对于传入的数字自动加一并返回。
2. 创建一个函数 `concat`，作用是链接传入的两个字符串。

### 流程控制

编程语言里流程控制是一件很重要的事情，其中包括判断、循环等。特别是我们在设计程序的时候，一个清晰的流程图能让后续开发轻松很多。

#### 语句块

语句块即包在一对 `{}` 符号中的语句。
在 ES 2015 之前，由于不存在块级作用域，所以语句块的作用比较单一，就是用来对语句进行一个分组。
通常比较少单独使用语句块，而是结合其他内容一起使用。语句块的使用例如：

```js
{
    var x = 1;
    var y = 2;
}
console.log(x); // 1
```

#### if

即对某个条件进行判断，当其为真时做某件事情，当其为假时做另一件事情：

```js
if (Condition) {
    // do some stuff
} else {
    // do some stuff
}
```

在 `else` 之后还可以接着使用 `if` 继续做判断，如：

```js
var score = 100;
if (score > 90) {
  console.log('优秀');
} else if (score > 60) {
  console.log('良好');
} else {
  console.log('不及格');
}
```

不过有些时候，为了使语句简单，我们也可以利用 JS 中的逻辑运算符做这样的判断：

```js
var b = 123;
function f() {};
b && f();

var a = false;
var c = a || 'default value';
```

#### switch

对某个表达式进行判断，并分支处理。相对于多个并列的 `if` 写起来更简单：

```js
switch (Expression) {
    case Condition or value:
        // do some stuff;
        break;
    default:
        // do some default stuff
}
```

例如判断对一个值进行多条件分支处理：

```js
var x = 123;
switch (x) {
    case 111:
        console.log(111);
        break;
    case 222:
        console.log(222);
        break;
    default:
        console.log('No such value')
}
```

当然除此之外，`case` 里的条件也可以是表达式，例如：

```js
var score = 77;
switch (true) {
    case score >= 90:
        console.log('优');
        break;
    case score >= 70:
        console.log('良');
        break;
    default:
        console.log('差');
}
```

并不是每个分支中必须有 `break`，当我们多个条件想进行相同的处理，也可以通过不用 `break` 的方式来达到，例如：

```js
var x = 123;
switch (x) {
    case 111:
        console.log(111);
        break;
    case 222:
    case 333:
        console.log('222 or 333');
        break;
    default:
        console.log('No such value')
}
```

看到这里，再回想之前讲 object 时候说的到用法，是不是觉得那样会更简单 >.<

#### for

用条件判断来控制循环处理某些事情。

```js
for (A;B;C) {
    // do some stuff
}
```

其中 A 为初始化的内容，B 为循环的判断条件，C 为每次循环执行后会执行的代码

```js
for (var i = 0; i < 10; i++) {
    console.log(i);
}
```

#### while

用条件判断来控制循环处理某些事情。

```js
while (Condition)
    // do some stuff
}
```

Condition 即为循环的判断条件。

```js
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

#### do while

用条件判断来控制循环处理某些事情。
和 `while` 的区别在于，先执行 `do` 里的代码，再判断条件。即最少会执行一次 `do` 的内容。

```javascript
do {
    do some stuff
} while (Condition);
```

Condition 即为循环的判断条件。

```js
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

#### for in

用于遍历对象中的所有索引。如：

```javascript
var obj = {
    key1: 'value1'
};
for (var item in obj) {
    console.log('Key=' + item + ' Value=' + obj[item]);
}
```

有一点需要注意，虽然 for in 也可以用来遍历数组，但是还是建议通过 for 循环来遍历。因为 for in 会返回自己添加的属性或者方法，而并不只是数组里的数据。

#### break

用于跳出最近的结构体。如结束循环、跳出 `switch`：

```javascript
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
```

#### continue

用于结束本次循环，直接进入下一次循环，如：

```javascript
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
```

#### label

这题只是提一句，JS 中存在 label，即 C++ 中的 goto。但是由于会让程序的结构比较乱，所以不推荐使用，我们这里也不打算讲它。

### 小练习

1. 创建一个数组 `arr`，内容为任意的一些数字，将其中的每个内容输出。
2. 创建一个数组 `arr`，内容为任意的一些数字，求得其中最大的数字。
3. 写一个函数，参数为一个数组，函数最终返回数组中的最小值。

## Homework

1. 写一个函数，参数为一个数组，函数最终返回数组中第二大的值。
2. 创建一个函数 `sum`，作用是求所有传入参数的相加和并返回。

__Fighting!__

2014.12.18
