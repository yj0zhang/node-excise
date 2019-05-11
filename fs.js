"use strict"

//导入fs模块
const fs = require("fs");

function readFile(url) {
    //异步读取文件
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

module.exports = {
    readFile
}