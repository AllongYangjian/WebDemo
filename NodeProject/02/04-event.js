var events = require('events')
//创建时间发射器
var eventEmitter = new events.EventEmitter();
//定义连接函数
var connectHandler = function connected(){
    console.log('连接成功');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',()=>{
    console.log('data received');
});

eventEmitter.emit('connection');

console.log('执行完毕');


