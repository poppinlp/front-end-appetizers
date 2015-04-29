# Front end advanced course 18

本节课的主要内容为:

- sass

## 引

我们先看看这么一种场景。你和亲爱的设计师小伙伴、产品经理小伙伴维护一个产品一段时间，其中某种颜色大概在 CSS 中不同地方被用到了 172 次，可是由于特殊原因，这种颜色需要发生变化。
设计师小伙伴看着你，产品经理小伙伴看着你，你看着屏幕上的这 172 次颜色代码，心里是不是有一万只羊驼在奔腾。

如果说这种情况很少发生，那我们再看看另外一个场景。为了做兼容性我们可能写出这样的 CSS：

```css
display:inline-block;
*display:inline;
*zoom:1;
```

觉得还不够的话再看看这类：

```css
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
```

羊驼是不是又出现了？OK，那其实这些都是 CSS 开发中的一些常见通点，当然其他痛点还有很多，我们这里就不一一举例了。

那面对这些痛点，我们怎么办，难道就任由它们折磨我们可爱的前端攻城狮么？当然不是，我们这节课就来教你如何推倒它们。

## 痛点的原因

归根到底，痛点产生的一个重要原因就在于我们日日与之陪伴的 CSS 只是个简单的标记性语言，它没有常见的编程语言的很多功能，例如变量、函数、流程控制等等。试想一下，如果有了这些特性，上面的痛点是不是会爽很多？

可能有同学会想到，那么我们用一种新语言来代替 CSS 不就好了么？这是一个比较麻烦的问题，因为现在 CSS 标准已经被广泛接受和应用了，想换起来成本太大。那么这个问题就没有解决方案了么？

回头看一下问题的本质，无非是开发的时候很不爽，但又受限于应用的地方只能这么开发。这时聪明的人类想到了，我们也许可以在开发和应用的之间加一个处理的过程，从而让我们开发的时候很爽，处理后的代码又是能正常应用的代码。这就是预编译的过程。

有这种驱动力，就必然会有人去做。于是乎我们见到了 SASS 和 LESS 这样大快人心的项目。独乐乐不如众乐乐，那我们这节课就从 SASS 入手让大家一起爽起来。

## Sass 简介

> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

这是 Sass 官网的介绍。它是出自 ruby 社区的一个工具，目的就是为了让开发 CSS 的过程变的比较爽。
不过最初它只支持 ruby 的语法，所以前端工程师是拒绝的。后来增加了对于原生 CSS 语法的兼容和支持，于是就像加了特技一样，DUANG，一下子就风靡起来了。

## ruby 安装

由于刚才提到，Sass 是基于 ruby 的工具，所以我们需要先安装 ruby。
Linux 和 Mac 用户就自行搞定吧（不少发行版都自带了），这里说说 windows 用户：

1. 打开任意浏览器
2. 输入这个URL：http://rubyinstaller.org/downloads/，或者点击这个[链接](http://rubyinstaller.org/downloads/)
3. 选择合适你的版本（32位或者64位）
4. 下载并安装（安装时记得勾选将 ruby 加入系统 PATH 的那个选项）
5. 安装好后打开任意命令行工具（系统自带为 cmd 和 powerShell，比较推荐 git bash），键入 `ruby --version` 后按回车，应该能看到输出 ruby 的版本号（如 'ruby 2.2.2p95 (2015-04-13 version 50295)'）

完成上面的步骤后即表示系统中的 ruby 环境已可正常运行。

## Sass 安装

安装完成 ruby 后，正常情况下只需要执行：

```shell
gem install sass
```

即可完成 Sass 的安装。当然如果提示权限问题，需要加上 `sudo` 执行或者 windows 下选择用管理员身份运行那个命令行工具。

如果多次执行以上命令总是发现提示 'connection closed by remote host' 这类的错误，很可能是网络访问问题。这时候可以试试用 taobao 的 rubygems 镜像来安装。依次执行以下命令：

```shell
gem sources --remove https://rubygems.org/

gem sources -a https://ruby.taobao.org/
```

然后再试试上面的安装，应该就能正常安装了。

安装完成后执行以下命令应该能正确输出 Sass 的版本号：

```shell
sass -v
```

## HOME WORK

## 内容预告
