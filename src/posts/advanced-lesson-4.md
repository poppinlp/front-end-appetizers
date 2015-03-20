# Front end advanced course 4

上节课的作业:

- [第一题](http://poppinlp.github.io/front-end-appetizers/homework/jquery3/1.html)

本节课的主要内容为:

- jQuery 实战
- nodejs 简介

## jQuery 实战

这是几节理论课后的第一次实战课，我们会尝试着把之前学的理论实践成更有意思的东西，也希望在这个过程中教会大家一些思考方法。

### tab 封装

我们上节课作业留过一个简单的 tab，不过实现方法是很针对性的。现在设想这么一个需求，另一个页面也需要添加一个 tab，那么我们该怎么做呢？

OK，我们理所当然，可以继续在新页面上实现 tab。那么好，这时候 PM 又来需求了，说又要加页面，又有 tab 功能，那么我们该怎么办？

如果还不够，那我们继续。这时有木有现我们已经进入了一个非常糟糕又费力不讨好的循环。那么我们可不可以一劳永逸呢？答案当然是可以，就是把它封装的更通用。

例如，我们可以封装一个函数用来驱动 tab 相关的逻辑，然后通过一些配置参数的方式来方便用户进行定制化的使用:

```js
function initTab (selContainer, config) {
    var $container = $(selContainer);
    if (!$container.length || $container.data('init')) return;

    var _config = {
        selTrigger: '.tab_nav a',
        selSheet: '.tab_sheet',
        activeClass: 'active',
        effect: 'show',
        eventType: 'click'
    };

    $.extend(_config, config);

    var $triggerList = $container.find(_config.selTrigger),
        $sheetList = $container.find(_config.selSheet);

    $container.delegate(_config.selTrigger, _config.trigger, function () {
        var instance = $(this),
            $target = $sheetList.eq($triggerList.index(instance));

        $triggerList.removeClass(_config.activeClass);
        instance.addClass(_config.activeClass);
        $sheetList.hide().removeClass(_config.activeClass);
        $target.addClass(_config.activeClass);

        switch (_config.effect) {
            case 'fade':
                $target.fadeIn();
                break;
            case 'slide':
                $target.slideDown();
                break;
            case 'show':
                $target.show();
                break;
        }
    });

    $container.data('init', true);
};
```

### 函数封装练习

可能对于初学的同学而言，上面的内容有点难。那么这里我们再进行一个简单的函数封装练习。

大家在写原生 js 的时候可能经常会遇到这么一个问题，当需要监听事件的时候，我们需要进行判断以完成浏览器兼容性问题的处理，如:

```js
var ele = document.getElementById('ele');

if (ele.addEventListener) {
    ele.addEventListener('click', function () {
        // do some stuff
    });
} else {
    ele.attachEvent('onclick', function () {
        // do some stuff
    });
}
```

如果每次监听事件都写这样的代码，有没有快疯掉的感觉。那么我们可以封装一个函数 bindEvent 用以处理 `addEventListener` 和 `attachEvent` 的兼容性问题:

```js
function bindEvent(ele, eventType, cb) {
    if (ele.addEventListener) {
        ele.addEventListener(eventType, cb);
    } else {
        ele.attachEvent('on' + eventType, cb);
    }
}
```

这样当我们每次需要监听事件的时候，只需要调用 `bindEvent` 即可，其内部确保了兼容性问题。

开发的时候，关于功能的封装，这是很重要的一件事情。好的封装能让后续开发和代码维护容易很多，相反同理。所以这是一项很重要的技能，我们之后的课程中也会进行相关的练习。

## nodejs 简介

nodejs 官网上有这么一段简介:

> Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

那其中几个核心词就是 platform, event-driven, non-blocking I/O.

那大家现在可以去下载适合自己系统的版本，安装，后续的课程中会用到。

## HOME WORK

1. simple slider

## 内容预告

1. jquery 实战 2

