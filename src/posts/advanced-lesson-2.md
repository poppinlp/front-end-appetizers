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

ele.onClick = function () {
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
- live / die
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

### delegate / undelegate

这组方法负责执行事件代理:

```js
.delegate( selector, eventType, handler )
.delegate( selector, eventType, eventData, handler )
.delegate( selector, events )
```

### live / die

### on / off

### one

### trigger

## jQuery 动画

- hide / show / toggle
- fadeIn / fadeOut / fadeTo / fadeToggle
- slideDown / slideToggle / slideUp
- animate
- delay
- stop
- clearQueue

## HOME WORK

1. Make a simple TODO list

## 内容预告

1. jQuery util
2. part of jQuery core
3. ajax part 1
