<!--
 * @Author: lossercode 2790372069@qq.com
 * @Date: 2022-10-25 15:57:30
 * @LastEditors: lossercode 2790372069@qq.com
 * @LastEditTime: 2022-10-26 11:42:45
 * @FilePath: \chromeExtension\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# LightingCrawl 基于浏览器的爬虫插件

# 学习要点
针对开发中存在的问题做一个总结

## 字体模糊抖动bug

**描述**：在popup.html文件中，给`<div class='options'>` 设置hover动画时，使用`transition` 和 `transform` 时，
字体发生了模糊以及抖动现象

**原因**：浏览器在处理带有小数的位置属性时会定位不精确

**解决方法**：
- 将文字的大小以及缩放时的大小都设置成整数
- 将文字的`position`定位为`absolute`
- 使用`transform: translate3d(0,0,0)`(貌似没有效果)

**参考文献**：[疑难杂症：运用 transform 导致文本模糊的现象探究](https://developer.aliyun.com/article/940295)

## background-image无法显示问题

**描述**：在自定义组件`backToprev`中设置css `background-image`时发现图片无法显示，路径也没有问题

**解决方法**: 将`background-size`设置成`cover`

## XXX.foreach is not a function

**描述**：使用`document.getElementsByClassName`获取所有的options元素时，想给他们分别添加一个点击事件，出现报错

**原因**：获取到的元素是`HTMLCollections`类数组对象，没有foreach方法

**解决办法**：使用`Array.from(xxx)`进行转换

**参考文献**：[***.forEach is not a function](https://blog.csdn.net/weixin_44154094/article/details/112757983)