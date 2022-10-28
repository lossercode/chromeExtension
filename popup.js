/*
 * @Author: lossercode 2790372069@qq.com
 * @Date: 2022-10-27 12:12:58
 * @LastEditors: lossercode 2790372069@qq.com
 * @LastEditTime: 2022-10-28 09:12:56
 * @FilePath: \chromeExtension\popup.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//判断当前的爬虫过程
(function(){
    chrome.storage.local.get(['statu'], (result)=>{
        if(result.statu){
            console.log(result.statu)
        }else{
            console.log('当前处于初始化阶段没有status')
        }
    })
})()