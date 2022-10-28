/*
 * @Author: lossercode 2790372069@qq.com
 * @Date: 2022-10-27 10:22:40
 * @LastEditors: lossercode 2790372069@qq.com
 * @LastEditTime: 2022-10-27 16:03:06
 * @FilePath: \chromeExtension\views\content-script.js
 * @Description: 页面注入脚本
 */

// document.onmouseover = (e)=> {


// }

// document.onmouseout = (e) => {
//     // let maskList = document.getElementsByClassName('lightingCrawl')
//     
//     // let mask = [...maskList]
//     
//     //下面是错误写法，因为maskList不会一直更新



// }

// document.body.onmouseover = (e) => {





//     //新建一个蒙版元素
//     // 先判断是否有一个mask
//     if(!document.getElementById('lightingCrawl')){
//         const mask = document.createElement('div')
//         
//         let className = 'lightingCrawl'
//         mask.setAttribute('style', style)
//         mask.setAttribute('id', className)
//         document.body.appendChild(mask)
//     }

// }

// document.body.onmouseout = (e) => {
//     let mask = document.getElementById('lightingCrawl')
//     document.body.removeChild(mask)
// }

// let firstNodes = document.body.childNodes
// firstNodes.forEach(Element => {
//     if(Element.nodeName.toLowerCase() == 'div'){
//         console.log(Element)
//     }
// })



document.body.onmouseover = (e) => {
    // e.stopPropagation()
    //获取当前鼠标所在的元素及其位置
    let target = e.target
    // if (target.children.length !== 0) {
    //     console.log(target.children)
    // } else {
    
    let prevMask = document.querySelector('#lighting-crawl')
    if(prevMask){
        document.body.removeChild(prevMask)
    }
    
    const mask = document.createElement('div')
    let { width, height, left, right, bottom, top } = target.getBoundingClientRect()
    let style = `z-index:99;position:absolute;background:#DBEAFE;width:${width}px;height:${height}px;left:${left}px;right:${right}px;bottom:${bottom}px;top:${top}px;`
    mask.setAttribute('style', style)
    mask.setAttribute('id', 'lighting-crawl')
    document.body.appendChild(mask)
      
}

