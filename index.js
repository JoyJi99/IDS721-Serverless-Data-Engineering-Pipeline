//Node.js尽量全使用严格模式

'use strict';

//利用console.log可以将日志自动打到CloudWatch里面

console.log('Loading function');

exports.handler = (event, context, callback) => {

    //定义一个最小值为2

    var min = 2;

    //定义一个最大值为10

    var max = 10;

    //生成一个随机数，乘以最大值，再加上一个最小值

    var generatedNumber = Math.floor(Math.random() * max) + min;

    //利用callback回调，得到结果。

    callback(null, generatedNumber);

};