# Front end advanced course 7

本节课的主要内容为:

- jQuery ajax 2

## jQuery ajax 2

上节课我们讲了 jQuery 中 ajax 的几个基础方法使用，这节课我们继续讲其他方法。

### ajax

上节课我们有讲到 `get` 方法和 `post` 方法，其实他们都调用了一个更底层的方法，也是 jQuery 中各种 AJAX 方法的基础，就是 `ajax` 方法:

```js
jQuery.ajax( [settings ] )
```

这个方法的设置项非常多，我们这里挑几个重要的讲:

- url
- async
- cache
- crossDomain
- data
- dataType
- headers
- method
- success
- error
- complete

### param

```js
jQuery.param( obj )
```

该方法用来将一个对象转化为常见的 URL 中参数的样子，如:

```js
var params = { width:1680, height:1050 };
console.log(jQuery.param( params )); // width=1680&height=1050
```

### serialize 

```js
.serialize()
```

该方法没有参数，用来将一个表单的内容转化成格式化的字符串，如:

```html
<form>
  <select name="single">
    <option>Single</option>
    <option>Single2</option>
  </select>
 
  <br>
  <select name="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select>
 
  <br>
  <input type="checkbox" name="check" value="check1" id="ch1">
  <label for="ch1">check1</label>
  <input type="checkbox" name="check" value="check2" checked="checked" id="ch2">
  <label for="ch2">check2</label>
 
  <br>
  <input type="radio" name="radio" value="radio1" checked="checked" id="r1">
  <label for="r1">radio1</label>
  <input type="radio" name="radio" value="radio2" id="r2">
  <label for="r2">radio2</label>
</form>
<script>
    console.log($('form').serialize());
    // single=Single&multiple=Multiple&multiple=Multiple3&check=check2&radio=radio1
</script>
```

### serializeArray

```js
.serializeArray()
```

使用方法同 `serialize`，只是返回的结果是格式化的数组，如:

```js
[
  {
    name: "a",
    value: "1"
  },
  {
    name: "b",
    value: "2"
  },
  {
    name: "c",
    value: "3"
  },
  {
    name: "d",
    value: "4"
  },
  {
    name: "e",
    value: "5"
  }
]
```

### 全局 ajax 事件

在 AJAX 的过程中有一些时间点，这些时间点都有对应的事件触发，我们可以通过监听事件的方式来给予处理。
通常情况下，每个 AJAX 请求我们可以设置各自的事件监听，如上面 `ajax` 方法的参数，但有时候需要进行全局的监听，这里讲几个全局的 AJAX 事件监听。

#### ajaxComplete

```js
$( document ).ajaxComplete(function() {
  $( ".log" ).text( "Triggered ajaxComplete handler." );
});
```

#### ajaxError

```js
$( document ).ajaxError(function() {
  $( ".log" ).text( "Triggered ajaxError handler." );
});
```

#### ajaxStart

```js
$( document ).ajaxStart(function() {
  $( ".log" ).text( "Triggered ajaxStart handler." );
});
```

#### ajaxSend

```js
$( document ).ajaxSend(function() {
  $( ".log" ).text( "Triggered ajaxSend handler." );
});
```

#### ajaxStop

```js
$( document ).ajaxStop(function() {
  $( ".log" ).text( "Triggered ajaxStop handler." );
});
```

#### ajaxSuccess

```js
$(document).ajaxSuccess(function() {
  $( ".log" ).text( "Triggered ajaxSuccess handler." );
});
```

## HOME WORK

1. 做一个输入内容推荐功能，后端服务那边 js 里放一个固定的对象，模拟内容和推荐结果列表的关联，然后根据 AJAX 请求来的内容返回对应的结果。页面上根据返回结果动态的更改提示内容。

## 内容预告

1. 练习
