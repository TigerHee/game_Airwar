// 编写游戏所需的工具函数
// 用于加载游戏所需的图片
function createImgs(data){
	var arr = [];
	for(var i=0;i<data.length;i++){
		arr[i] = new Image();
		arr[i].src = imgsUrl.bg[i];
	}
	return arr;
}
// 用于初始化相关数据
function createData(data){
	return {
		imgs : data[0] || 0,
		width : data[1] || 0,
		height : data[2] || 0,
		sum : data[3] || 0,
		type : data[4] || 0,
		life : data[5] || 0,
		score : data[6] || 0
	};
}