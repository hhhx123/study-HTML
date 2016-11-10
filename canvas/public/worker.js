// 注册message消息 ，这样，其他线程发送的消息就可以接收了
addEventListener('message',handleMessage)

function  handleMessage(){
	for (var i = 0; i < 100000; i++) {
		console.log(i);
	}
	// 计算完成，如果想发送结果使用postMessage
}