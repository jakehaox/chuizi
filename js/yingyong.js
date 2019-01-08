window.onload = function(){
	// 顶部导航弹窗js
	var oLink = document.getElementById('link');
	var oTankuang = document.getElementById('tankuang');
	console.log(oLink);
	console.log(oTankuang);
	oLink.onmouseover = function(){
		oTankuang.style.display = 'block';
	}
	oLink.onmouseout = function(){
		oTankuang.style.display = 'none';
	}
}