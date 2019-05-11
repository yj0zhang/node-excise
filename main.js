"use strict"

//导入模块
const hello = require("./hello");
const myFs = require("./fs");
const path = require("path");
const config = require("./config");

(function() {
    //调用模块方法
    console.log(hello.one())
    
    console.log(hello.two())
})();

(async function() {
    // try catch捕获错误
    // await 必须在async函数中使用
    try {
        let sampleFile = await myFs.readFile(path.join(config.dataBase, "sample.txt"));
        console.log(sampleFile)
    } catch (error) {
        console.log(error)
    }
})();

async function asyncTest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    });
}
// await支持并行，写法有变化，参考：https://segmentfault.com/a/1190000015479412
(async function() {
    const list = Promise.all([
        asyncTest(),
        asyncTest()
    ])
    try {
        console.time('异步，2s：');
        await list;
        console.timeEnd('异步，2s：');
        console.time('同步，4s：');
        await asyncTest();
        await asyncTest();
        console.timeEnd('同步，4s：');
    } catch (error) {
        console.log(error)
    }
})();