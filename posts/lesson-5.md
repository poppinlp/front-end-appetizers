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

console.log(x+y);
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

### JS 基础数据类型

JS 中的数据类型可以分为两类，原始类型和引用类型。

#### 原始类型

原始类型包含五种：`Undefined`, `Null`, `String`, `Number`, `Boolean`。

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

非常重要的一点就是值和引用（指针）。

#### typeof

`typeof` 操作用于检测变量的类型，使用方法为 `typeof 变量名`，常见值的列表如下：

```
Undefined	        "undefined"
Null	            "object"
Boolean	            "boolean"
Number	            "number"
String	            "string"
Function object 	"function"
Any other object	"object"
```

### JS 中的运算

#### 常见算数运算

- +
	- +val
	- val + val
- -
	- -val
	- val - val
- *
- /
- %
- ++
	- ++val
	- val++
- \-\-
	- --val
	- val--

#### 逻辑运算

- &&
- ||
- !

#### 常见比较运算

- >
- >=
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
- <<<
- >>
- >>>

#### 赋值运算

- val = val
- val operate= val

### 练习

1. 申明变量 `home`，赋值 'China'，输出到控制台。
2. 试一试各种运算符

## 预告

下节课的主要内容如下：

- JS 流程控制
- Array, String 对象的常用方法

__Fighting!__

2014.12.14