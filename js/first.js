//郝鑫宁   js部分

/*
   处理导航栏部分
*/

/* 坚果R1-设计 图片选项卡*/
headleElecProduct();
function headleElecProduct(){
   var aDescribeList = document.querySelector('.describe .describe-list');
   var 
}

window.onload = function(){
	// 顶部导航购物车js
	var oLink = document.getElementById('link');
	var oTankuang = document.getElementById('tankuang');
	oLink.onmouseover = function(){
		oTankuang.style.display = 'block';
	}
	oLink.onmouseout = function(){
		oTankuang.style.display = 'none';
	}
}