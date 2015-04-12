# Front end advanced course 13

本节课的主要内容为:

- 拷贝式的继承
- this

## 引

上节课我们讲了原型和原型链的相关内容，也讲到了基于原型的继承实现方式。这节课我们先来看看另一种继承方式。

## 拷贝式的继承

这种继承方式简单的说就是通过复制的方式将父类中的内容拷贝到子类中，从而实现了继承。

## 关于 `this`

之前课中我们讲构造函数时提到了 `this` ，当时并没有讲的太清楚究竟它是什么，因为其实它的取值是根据情况的不同而会发生变化的。所以这节课我们花点时间来聊聊浏览器环境中的它。

## 全局 `this`

在浏览器中全局环境下的 `this` 即为 `window` 对象。大家可以执行以下代码来进行验证：

```js
console.log(this === window); // true
```

所以全局环境下 `var` 申明的变量或者任何情况下非 `var` 申明的变量都可以被此操作到。

## 函数里的 `this`

除了各种回调、指明了执行时的上下文之外，通常情况下函数被调用时内部的 `this` 指向的是全局对象。如：

```js
var test = 123;
function f() {
    this.test = 234;
}

console.log(test); // 123
f(); qq
console.log(test); // 234
```

当使用了 `"use strict"` 时，`this` 值为 `undefined`：

```js
function f() {
    "use strict";
    console.log(this); // undefined
}
```

当使用了 `new` 操作符时，`this` 值为可能被返回的新的实例：

```js
var test = 123;

function f() {
    this.test = 234;
}

console.log(test); // 123
console.log(new f().test); // 234
console.log(test); // 123
```

## 对象中的 `this`

对象中的 `this` 即代指这个对象本身，例如可以在对象的方法中通过 `this` 访问到这个对象的其他属性。如：

```js
var obj = {
    test: 123,
    f: function () {
        console.log(this.test); // 123
    }
}
```

## DOM 事件回调中的 `this`

在 DOM 事件回调中的 `this` 指的是绑定该事件的 DOM 元素。如：

```js
document.addEventListener('click', function () {
    console.log(this); // document 节点
});
```

## HOME WORK

## 内容预告
