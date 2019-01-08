//郝鑫宁   js部分

/*
   处理导航栏部分
*/

// window.onload = function(){
// 	var oUl = document.querySelector('.top-nav1');
// 	var oLi = document.querySelectorAll('.top-nav-item');
// 	oLi.onmouseover = function(){
// 		oLi.style.backgroundColor = 'white';
// 		oLi.style.fontWeight = 'bold';
// 	}
// 	oLi.onmouseout = function(){
// 		oLi.style.backgroundColor = '#666';
// 	}
// }

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