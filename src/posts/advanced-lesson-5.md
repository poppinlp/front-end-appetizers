# Front end advanced course 5

上节课的作业:

- [第一题](http://poppinlp.github.io/front-end-appetizers/homework/jquery4/1.html)

本节课的主要内容为:

- jQuery 实战2

## jQuery 实战2

这是几节理论课后的第二次实战课，我们会尝试着把之前学的理论实践成更有意思的东西，也希望在这个过程中教会大家一些思考方法。

### 更通用的 slider

我们上次的作业已经实现了最基础的 slider，基础到十分简陋。但这并无所谓，因为我们现在是在学习核心逻辑部分，所以样式的部分可以先不用那么在意。

我们之前讲 tab 的部分时，说到了如何让它变得更通用，那么这里的 slider 其实也是一个常见的组件，那么我们该怎么做呢？

```js
function initSlider(selContainer, config) {
    var $slider = $(selContainer),
        _config = {
            selTrigger: '.js-slider-trigger',
            selSheet: '.js-slider-sheet',
            activeClass: 'active',
            autoTrigger: true,
            delay: 2000
        };

    if (!$slider.length) return;

    $.extend(_config, config);

    var $sheets = $slider.find(_config.selSheet),
            slideSize = $sheets.length,
            nowIndex = 0,
            autoTimer = null;

    if (!slideSize) return;

    if (_config.autoTrigger) {
        autoTrigger();
    }

    $slider.delegate(_config.trigger, 'click', function (e) {
        var $target = $(e.target);

        if ($target.data('action') === 'left') {
            handleTriggerLeft();
        } else {
            handleTriggerRight();
        }
    });

    function handleTriggerLeft() {
        $sheets.eq(nowIndex).removeClass(_config.activeClass);
        nowIndex = (--nowIndex + slideSize) % slideSize;
        $sheets.eq(nowIndex).addClass(_config.activeClass);
    }

    function handleTriggerRight() {
        $sheets.eq(nowIndex).removeClass(_config.activeClass);
        nowIndex = ++nowIndex % slideSize;
        $sheets.eq(nowIndex).addClass(_config.activeClass);
    }

    function autoTrigger() {
       if (autoTimer)  return;
        autoTimer = setInterval(handleTriggerRight, _config.delay);
    }
}
```

### dropdown

dropdown 即类似于[这样](http://getbootstrap.com/javascript/#dropdowns)的组件，大家来讨论一下如何实现它。

## HOME WORK

1. dropdown 的具体实现
2. 尝试让它更通用些

## 内容预告

1. ajax

