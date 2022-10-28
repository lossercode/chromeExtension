/*
 * @Author: lossercode 2790372069@qq.com
 * @Date: 2022-10-26 09:56:20
 * @LastEditors: lossercode 2790372069@qq.com
 * @LastEditTime: 2022-10-26 11:02:05
 * @FilePath: \chromeExtension\components\backToPrev.js
 * @Description: 封装返回上一页组件
 */
(function(){
    // 获取外面的盒子
    const box = document.getElementsByClassName('box')[0]
    const firstChild = box.firstChild

    // 生成元素
    const prev = document.createElement('div')
    //设置prev的大小及位置
    prev.setAttribute('style', 'width:2.4rem; height:2.4rem;')
    //添加链接
    const a = document.createElement('a')
    //设置a链接的背景图片
    a.setAttribute('style', "background:url('../images/arrow-left.png') no-repeat; background-size: cover")
    
    //给a链接添加事件
    a.onclick = function(){
        //先后回退
        window.history.back()
    }
    //插入元素
    prev.appendChild(a)
    box.insertBefore(prev, firstChild)
})()

