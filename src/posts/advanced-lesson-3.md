# Front end advanced course 3

上节课的作业:

- [第一题](http://poppinlp.github.io/front-end-appetizers/homework/jquery2/1.html)

本节课的主要内容为:

- jQuery 事件 2
- jQuery util
- jQuery core

## jQuery 事件 2

上节课我们讲了很多 jQuery 里的事件，这里再补充几个和加载流程相关的事件。

- load
- unload
- ready
- holdReady

### load

该事件在绑定的节点以及它的子节点加载完成后触发。可以绑定在各种节点上，例如但不仅限于这些:

- images
- scripts
- frames
- iframes
- window

使用方法和其他事件并无区别:

```js
$ele.on('load', function () {});
$ele.load(function () {});
```

### beforeunload

该事件在用户页面关闭前产生，只可绑定在 `window` 上，于此相关的事件还有:

- unload
- pagehide

它们发生的先后顺序为: beforeunload -\> unload -\> pagehide 。

该事件主要用于确认页面退出以及一些页面关闭时的善后工作:

```js
$(window).on('beforeunload', function () {
    return "你怎么舍得关闭这么可爱的我~";
});
```

### ready

在页面 DOM 已经解析完成的时候会发生 `DOMContentLoaded` 或 `readystatechange` 事件，这时我们便可以安全的执行 JS 代码来进行 DOM 操作。
并且从性能角度考虑，将最初非必要的内容放到 DOM ready 之后也能提升用户的感知体验。于是 jQuery 封装了 `ready` 方法用来在 DOM ready 的时候执行相应的回调。

```js
$(document).ready(function () {
    // do some stuff
});
```

由于 jQuery 的 `$` 函数对于传入参数如果是函数时的特殊处理，我们也可以这样使用:

```js
$(function () {
    // do some stuff
});
```

### holdReady

该方法可以认为的控制 `ready` 事件的发生时机:

```js
$.holdReady( hold )
```

其中参数 `hold` 为一个布尔值，`true` 时 `ready` 事件会被延迟直到其为 `false`时。如:

```js
$.holdReady(true);
$.getScript("some.js", function() {
  $.holdReady(false);
});
```

## jQuery util

jQuery 提供了一些通用的工具方法，我们这里选择几个介绍:

- $.contains
- $.each
- $.extend
- $.isWindow / $.isArray / $.isFunction / $.isEmptyObject / $.isNumeric
- $.parseJSON
- $.trim

## jQuery core

jQuery 里有一些稍微复杂点的封装的对象，如 `deferred` 和 `Callbacks`，前者主要用来实现 promise 相关的特性，后者是回调函数队列。
由于和标准不完全一样，所以不太推荐使用 jQuery 的 `deferred` 来做 promise，如需实现，可用其他的库。我们这里来讲一下后者。

### callbacks

`Callbacks` 是 jQuery 中的一个构造函数，它返回一个 callbacks 的实例:

```js
jQuery.Callbacks( flags );
```

其中参数 `flags` 用来表示创建的 callbacks 实例的类型，其取值有4种:

- once
- memory
- unique
- stopOnFalse

下面针对这四种取值单独介绍它的意思，不过这里先声明两个函数以备下文使用:

```js
function f1(val) {
    console.log(val);
}
function f2(val) {
    console.log('fn2 says:%s', val);
}
```

#### once

当创建 `once` 类型的 callback 时，该 callback 只会被执行一次。如:

```js
var callbacks = $.Callbacks( "once" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );

/*
output:
foo
*/
```

#### memory

当创建 `memory` 类型的 callback 时，`fire` 队列后会自动记忆上一次 `fire` 时的值并在之后 `add` 的时候立刻用该值`fire`:

```js
var callbacks = $.Callbacks( "memory" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );

/*
output:
foo
fn2 says:foo
bar
fn2 says:bar
foobar
*/
```

#### unique

当创建 `unique` 类型的 callback 时，重复添加的函数将不会产生效果:

```js
var callbacks = $.Callbacks( "unique" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn1 ); // Repeat addition
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );

/*
output:
foo
bar
fn2 says:bar
foobar
*/
```

#### stopOnFalse

创建 `stopOnFalse` 类型的 callback 时，如果某个回掉函数返回值为 `false`，则会停止回掉队列:

```js
function fn1( value ) {
  console.log( value );
  return false;
}

function fn2( value ) {
  fn1( "fn2 says: " + value );
  return false;
}

var callbacks = $.Callbacks( "stopOnFalse" );
callbacks.add( fn1 );
callbacks.fire( "foo" );
callbacks.add( fn2 );
callbacks.fire( "bar" );
callbacks.remove( fn2 );
callbacks.fire( "foobar" );

/*
output:
foo
bar
foobar
*/
```

#### callback 实例的方法

下面是一些 callback 实例的常用方法，有的在上文中已经出现过，大家可以自行进行练习:

- callbacks.add()
- callbacks.empty()
- callbacks.fire()
- callbacks.fired()
- callbacks.fireWith()
- callbacks.has()
- callbacks.remove()

## HOME WORK

## 内容预告

1. nodejs 简介
2. ajax
