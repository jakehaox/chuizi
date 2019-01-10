//郝鑫宁   js部分

/*
   处理导航栏部分
*/

headleElecProduct();
function headleElecProduct(){
	//获取元素
	var aTopNav1  = document.querySelectorAll('.top-nav1 .top-nav-item');
	var aUserInfoList = document.querySelectorAll('.user-info-list .user-info-item');
	//添加事件
	for(var i = 0; i<aTopNav1.length;i++){
        aTopNav1[i].index = i;
        aTopNav1[i].onclick = function(){
	       	for(var j = 0;j<aTopNav1.length;j++){
	       		aTopNav1[i].style.color = 'white';
       	        aTopNav1[i].style.fontWeight = 'bold';
	            aTopNav1[j].className = 'top-nav-item';
	       	}
	       	this.className = 'top-nav-item checked';
        }
	}
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

      
	