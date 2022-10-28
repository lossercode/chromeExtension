/*
 * @Author: lossercode 2790372069@qq.com
 * @Date: 2022-10-27 10:02:34
 * @LastEditors: lossercode 2790372069@qq.com
 * @LastEditTime: 2022-10-27 12:11:43
 * @FilePath: \chromeExtension\views\newProject.js
 * @Description: 新建项目页面
 */
const btn = document.getElementById('btn')

//尽量不使用onclick
btn.addEventListener('click', async ()=> {

    // 向当前页面里注入js方法
    // 获取background.js的注入文件方法
    // const bg = chrome.extension.getBackgroundPage()
    // console.log(bg)
    // bg.injectJs()
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    await chrome.scripting.executeScript(
        {
            target: { tabId: tab.id},
            //注意这里要将selectDom.js文件置于根目录下，否则会产生找不到文件错误
            files: ["selectDom.js"],
        }
    );

    //由于是新建项目，因此先将store里面的内容都清空
    chrome.storage.local.clear(()=>{
        console.log('已经清理所有缓存内容')
    })

    //将当前状态设置为newProject
    chrome.storage.local.set(
        {'statu': 'newProject'}, 
        () => {
        console.log('成功设置状态值');
        }
    )

    //关闭popup页面
    // window.close()
})