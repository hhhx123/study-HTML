addEventListener('message',handleMessage);
// 写一个参数e,传过来的数据存放在e.data里面
function handleMessage(e){
	var imageData = e.data;
	var data = imageData.data;
	for (var i = 0; i < data.length; i++) {
		var red = data[i];
		var green = data[i+1];
		var blue = data[i+2];

		var average = parseInt((red+green+blue)/3);
		data[i] = average;
		data[i+1] = average;
		data[i+2] = average;
	}
	imageData.data = data;
	// 数据处理完毕，发送最终的结果
	postMessage(imageData);

}

// 在worker中不能访问document和Dom