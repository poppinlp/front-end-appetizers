# Front end advanced course 20

本节课的主要内容为:

- sass 3

## 引

我们上节课主要介绍了 nesting, partial, import, operators 和 comments 这几个 feature。这节课我们继续介绍其他 feature。

## mixin

```scss
@mixin clearfix {
  display: inline-block;
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  * html & { height: 1px }
}
```

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box {
	@include border-radius(10px);
}
```

```scss
@mixin font($size: 14px) {
    font-size: $size;
}

body {
    @include font();
}
```

```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

## extend

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}  .success { @extend .message; border-color: green; }  .error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

## HOME WORK

## 内容预告

- sass 3
