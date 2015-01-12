# Front end foundation course 6

## 上节课内容的复习

关于上节课的内容大家还有什么问题么？

## JavaScript 基础 Part 2

### 常用对象

上节课有提到引用对象，并大致的讲了一下。这里再选取其中3种稍微详细的讲一下。

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

#### Array

数组，类似于对象的一种存放数据的结构，不过其内容是有顺序的通过下标来访问，而不是无序的键值对。

##### 创建数组

创建一个数组有两种常见方式，通过数组字面量 `[]` 或 `new` 操作符。如下：

```javascript
var arr = [];
var arr2 = new Array();
```

数组内数据可以是各种类型的数据，如：

```javascript
var arr = [
    'string',
    123,
    [],
    {},
    function () {}
];
```

##### 获取和设置内容

类似于对象的索引，数组通过 `[]` 操作符来获取和设置内容，只是索引换成了下标。
数组的下标从 `0` 开始依次增加，如对于上面的数组：

```javascript
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

在一些传入参数不确定的情况下，这个数组非常有用。

### 小练习

1. 创建一个函数 `add`，作用是对于传入的数字自动加一并返回。
2. 创建一个函数 `concat`，作用是链接传入的两个字符串。

### 流程控制

编程语言里流程控制是一件很重要的事情，其中包括判断、循环等。特别是我们在设计程序的时候，一个清晰的流程图能让后续开发轻松很多。

#### if

即对某个条件进行判断，当其为真时做某件事情，当其为假时做另一件事情：

```javascript
/*
if (Condition) {
    do some stuff
} else {
    do some stuff
}
*/
var score = 100;
if(score > 90) {
  console.log('优秀');
} else if (score > 60) {
  console.log('良好');
} else {
  console.log('不及格');
}
```

#### switch

对某个表达式进行判断，并分支处理。相对于多个并列的 `if` 写起来更简单：

```javascript
/*
switch (Expression) {
    case Condition or value:
        do some stuff;
        break;
    default:
        do some default stuff
}
*/
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

#### for

用条件判断来控制循环处理某些事情。

```javascript
/*
for (A;B;C) {
    do some stuff
}
其中 A 为初始化的内容，B 为循环的判断条件，C 为每次循环执行后会执行的代码
*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}
```

#### while

用条件判断来控制循环处理某些事情。

```javascript
/*
while (Condition)
    do some stuff
}
Condition 即为循环的判断条件
*/
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
/*
do {
    do some stuff
} while (Condition);
Condition 即为循环的判断条件
*/
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

### 小练习

1. 创建一个数组 `arr`，内容为任意的一些数字，将其中的每个内容输出。
2. 创建一个数组 `arr`，内容为任意的一些数字，求得其中最大的数字。
3. 创建一个函数 `sum`，作用是求所有传入参数的相加和并返回。

## Homework

1. 写一个函数，参数为一个数组，函数最终返回数组中的最小值。
2. 写一个函数，参数为一个数组，函数最终返回数组中第二大的值。

__Fighting!__

2014.12.18