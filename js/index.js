// 张燕的js

// input的js
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
	//搜索弹框js
	var oTxt = document.getElementById('txt');
	var oRight = document.getElementById('rightSousuo');
	var oList = document.getElementById('sousuoList');
	oTxt.onclick = function(ev){
		event.stopPropagation(window);
		this.placeholder = '请输入搜索的商品';
		oRight.style.display = 'none';
		oList.style.display = 'block';
	}
	window.onclick = function(){
		oTxt.placeholder = '';
		oRight.style.display = 'block';
		oList.style.display = 'none';
	}
	// 热门商品的js
	var oBtn1 = document.getElementById('btn1');
	var oBtn2 = document.getElementById('btn2');
	var oListbox = document.getElementById('listBox');
	// console.log(oListbox);
	oBtn1.onclick = function(){
		oListbox.style.marginLeft = '-1220px';
		this.className = 'active';
		oBtn2.className = '';
	}
	oBtn2.onclick = function(){
		oListbox.style.marginLeft = '0px';
		this.className = 'active';
		oBtn1.className = '';
	}
	// 底部锤子应用js
	var oUl= document.getElementById('ul1');
	var oBtn = oUl.querySelector('#ul1 #btn');
	var oBox = oUl.querySelector('#ul1 #box');
	console.log(oUl);
	console.log(oBtn);
	console.log(oBox);
	oBtn.onmouseover = function(){
		this.style.display = 'none';
		oBox.style.display = 'block';
	}
	oBtn.onmouseout = function(){
		oBox.style.display = 'none';
		this.style.display = 'block';
	}
}
