# Front end advanced course 2

上节课的作业:

- [第一题](http://poppinlp.github.io/front-end-appetizers/homework/jquery1/1.html)
- [第二题](http://poppinlp.github.io/front-end-appetizers/homework/jquery1/2.html)

本节课的主要内容为:

- jQuery 事件
- jQuery 动画

## jQuery 事件

在原生 JS 中，我们绑定事件大体可以通过两种方式:

- 修改 `on事件名` 这个 DOM 属性
- 通过类似 `addEventListener` 的 DOM 方法

```js
var ele = document.getElementById('eleId');

ele.onclick = function () {
    // do some stuff
};

ele.addEventListener('click', function () {
    // do some stuff
}, false);
```

于此同时，我们如果需要兼容 IE 低版本或者使用事件对象，还得再做一点处理:

```js
ele.onclick = function () {
    var e = arguments[0] || window.event;
    // do some stuff
}

if (ele.addEventListener) {
    ele.addEventListener('click', function (e) {
        // do some stuff
    }, false);
} else {
    ele.attachEvent('click', function (e) {
        // do some stuff
    }
}
```

那么如果我们想做事件代理呢？那么我们还得判断事件的触发对象是否符合我们设置的代理选择器:

```js
function delegate(father, target, eventType, cb) {
    var eleTarget = father.querySelectorAll(target);

    if (!targetLen) return false;

    father.addEventListener(eventType, function (e) {
        var targetLen = eleTarget.length;
        while (targetLen--) {
            if (eleTarget.item(targetLen) === e.target) {
                cb();
            }
        }
    }, false);
}

delegate(document, 'li', 'click', function () {
    // do some stuff
});
```

由此大家会发现，这些我们常用的功能似乎使用起来都不是那么的方便。
为了解决这些问题，jQuery 对事件相关的功能进行了进一步封装，主要包含以下几个方法:

- bind / unbind
- delegate / undelegate
- on / off
- one
- trigger

### bind / unbind

这一组方法即是 jQuery 中绑定事件的基础方法:

```js
.bind( eventType [, eventData ], handler )
.bind( eventType [, eventData ] [, preventBubble ] )
.bind( events )
```

经常的使用方式如下:

```js
$ele.bind('click', function () {
    // do some stuff
);
```

当需要给事件的回调函数传入更多参数时，可用如下方法:

```js
$ele.bind('click', {
    data: 123
}, function (e) {
    console.log(e.data); // Object {data: 123}
});
```

并且对于这种基础的事件绑定，还可以直接调用事件同名函数，并传递回调函数给它，作为 `bind` 的简写。如:

```js
$ele.bind('click', function () {
    // do some stuff
});
// 可简写成如下形式
$ele.click(function () {
    // do some stuff
});
```

### delegate / undelegate

这组方法负责执行事件代理:

```js
.delegate( selector, eventType, handler )
.delegate( selector, eventType, eventData, handler )
.delegate( selector, events )
```

经常的使用方式如下:

```js
$ele.delegate('a', 'click', function () {
    // do some stuff
};
```

当需要给事件的回调函数传入更多参数时，可用如下方法:

```js
$ele.delegate('a', 'click', {
    data: 123
}, function (e) {
    console.log(e.data); // Object {data: 123}
});
```

### on / off

这组方法是 `bind` 和 `delegate` 的结合，既可以执行基础事件绑定，也可以实现事件代理:

```js
.on( eventType [, selector ] [, data ], handler )
.on( events [, selector ] [, data ] )
```

执行事件绑定如下:

```js
// 执行 bind
$ele.on('click', function () {
    // do some stuff
});
// 执行 delegate
$ele.on('click', 'a', function () {
    // do some stuff
});
```

给回调函数传入更多参数的方法同上，这里就不赘述了。

### one

用方法绑定的事件只会被触发一次，之后即解除该事件:

```js
.one( eventType [, data ], handler )
.one( eventType [, selector ] [, data ], handler )
.one( events [, selector ] [, data ] )
```

该方法的使用方式可以参照 `on` 方法，这里就不赘述了。

### trigger

该方法用于主动触发某个元素的某个事件:

```js
.trigger( eventType [, extraParameters ] )
.trigger( events [, extraParameters ] )
```

例如想触发表格的提交事件，可以:

```js
$somFormElement.trigger('submit');
```

## jQuery 动画

jQuery 中对于常见的动画效果进行了非常方便调用的封装，于此同时也支持自定义动画和动画队列等。

- hide / show / toggle
- fadeIn / fadeOut / fadeTo / fadeToggle
- slideDown / slideToggle / slideUp
- animate
- delay
- stop
## HOME WORK

1. Make a simple TODO list

## 内容预告

1. jQuery util
2. part of jQuery core
3. ajax part 1
