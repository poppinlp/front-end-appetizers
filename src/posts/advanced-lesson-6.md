# Front end advanced course 6

上节课的作业:

- [第一题](http://poppinlp.github.io/front-end-appetizers/homework/jquery5/1.html)
- [第二题](http://poppinlp.github.io/front-end-appetizers/homework/jquery5/2.html)

本节课的主要内容为:

- ajax 简介
- 原生 ajax
- jQuery ajax

## ajax 简介

AJAX 即 Asynchronous Javascript And XML。它不是什么语言或者框架之类的东西，只是一种技术。
传统的网页如果需要更新内容，那么可能需要重载整个网页，但 AJAX 技术可以使得网页在不重载的情况下，更新从服务器端拿到的新数据。
其典型应用例如 Google 地图等。

![ajax](http://ce.sysu.edu.cn/hope2011/UploadFiles/Education_UploadFiles_5303/201008/2010081001565386.jpg)

## 本地后端服务

之前课上我们简单介绍了 Nodejs，那么接下来我们就做一个基于 Nodejs 的简单后端服务，以完成我们后续 AJAX 的练习做准备:

```js
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
```

将以上代码保存至 server.js 文件，然后执行 `node server.js` 即可开启该服务。

## 原生 ajax

由于 AJAX 技术已经得到了广泛的支持，所以我们只要新建相应的对象，设置好参数和回调函数，于是我们便可以完成一次 AJAX 请求:

```js
var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

if (request != null) {
    request.onreadystatechange = function () {
        if (request.readyState==4 && request.status==200) {
            console.log(request.responseText);
        }
    };
    request.open("GET", 'http://127.0.0.1:1337', true);
    request.send(null);
} else {
    alert("Your browser does not support XMLHTTP.");
}
```

### 创建 AJAX 的发送对象

在上面代码中能看到，我们创建了一个用来产生 AJAX 请求的对象。通常情况下，这个对象会是 `XMLHttpRequest` 的实例，在 IE 6 中需要创建 `ActiveXObject`:

```js
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
```

### 开启请求

创建的对象实例拥有一个 `open` 方法用于开始准备这个请求。该方法接受 3 个参数，分别为：

- 请求方式
- 请求地址
- 是否异步

请求方式指的是这个请求的类型，通常使用为 `GET` 或 `POST`。
其实规范中还包括 `OPTIONS`, `PUT`, `DELETE`, `HEAD`, `CONNECT`, `TRACE`，只是因为现在很多开发人员为了方(tou)便(lan)所以通常只有前两者。
详细内容可以看[官方规范](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)。

请求地址即任意的 URL 地址，关于什么是 URL，可以看这篇[中文wiki](http://baike.baidu.com/view/1496.htm)。

例如我们上面代码中的 `open` 方法，它的意思准备向 http://127.0.0.1 这个地址，使用 `GET` 方式，发送一个异步请求。

### 发送请求

同样，创建的对象实例拥有一个 `send` 方法用于发送之前准备的请求。该方法接受一个参数，即需要发送的数据。

### 监听 readystatechange 事件

当请求发出后，服务器端会进行响应并返回给我们结果，那这些结果就可以通过事件监听的方式获得。这里需要注意的是，最好在请求 `open` 和 `send` 前就设置好监听事件。

`readyState` 这个状态存在以下 5 种情况：

- 0: 请求未初始化
- 1: 服务器连接已建立
- 2: 请求已接收
- 3: 请求处理中
- 4: 请求已完成，且响应已就绪

`state` 状态即 HTML 状态码，它的值很多，其中 200 表示相应结果 OK，也就是我们常用的判断值。
它的值很多，我们这里不做过多的介绍，有兴趣的同学可以看看[这篇wiki](http://baike.baidu.com/link?url=Z9ah_T97cUHrSW4OKiPMMvrVbFGST2u0kjKo0NqJXmxYlvL3rgzckQBIpmz7KombmmB3KGVNdpIeit0nsL-cGK)。

### 获取返回结果

在合适的状态时，我们便能获取到请求的返回结果。这个结果会被放在请求实例的 `responseText` 属性中，直接使用即可。

至此我们便完成了一个 AJAX 请求的发送并通过监听状态拿到了返回结果，之后需要对结果做什么处理就可以自由发挥了。

## jQuery ajax 1

上面我们介绍了原生 js 如果做 AJAX 请求，那么既然我们使用了 jQuery，自然可以使用 jQuery 中更方便的封装。那么接下来我们看看 jQuery 中是如何封装的。

- get
- getJSON
- getScript
- load
- post

### get

```js
jQuery.get( [settings ] )
jQuery.get( url [, data ] [, success ] [, dataType ] )
```

其中 `settings` 包含四个可设置的值:

- `url`: 请求的目标地址
- `data`: 需要发送的数据
- `success`: 请求成功后的回调函数
- `dataType`: 预期服务器返回的数据类型，xml | json | script | html

这里需要注意的一点是，对于 `dataType` 不同，数据的默认处理方式也不一样:

- xml: 数据会被尝试按照 xml 解析，即调用 `parseXML`
- json: 数据会被尝试按照 json 解析，即调用 `parseJSON`
- script: 数据会被当作 javascript 代码来执行
- html: 返回普通的文本，但其中包含的 script 标签里的内容将会在这段文本被插入 DOM 时执行

结合我们上面的 nodejs 服务，我们可以做这样的使用:

```js
$.get({
    url: 'http://127.0.0.1：1337',
    success: function (response) {
        console.log('Response from server is: %s', response);
    }
});
```

### getJSON

```js
jQuery.getJSON( url [, data ] [, success ] )
```

这个方法其实就是将 `get` 方法的 `dataType` 参数指定为 `json`。用法与 `get` 相同，这里不赘述。

### getScript

```js
jQuery.getScript( url [, success ] )
```

这个方法其实就是将 `get` 方法的 `dataType` 参数指定为 `script`。用法与 `get` 相同，这里不赘述。

### load

```js
.load( url [, data ] [, complete ] )
```

这个方法不是全局 `$` 上的，是 jQuery 节点对象上的，作用即把获得的结果作为 html 代码放入到调用的 jQuery 节点对象中。

### post

```js
jQuery.post( [settings ] )
jQuery.post( url [, data ] [, success ] [, dataType ] )
```

该方法参数以及用法和 `get` 相同，区别在于请求的方式为 `POST` 而非 `GET`。

## HOME WORK

1. 做一个输入内容推荐功能，后端服务那边 js 里放一个固定的对象，模拟内容和推荐结果列表的关联，然后根据 AJAX 请求来的内容返回对应的结果。页面上根据返回结果动态的更改提示内容。

## 内容预告

1. jQuery ajax 2
