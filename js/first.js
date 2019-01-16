//郝鑫宁   js部分

/*
   处理导航栏部分
*/

// headleElecProduct();
// function headleElecProduct(){
// 	//获取元素
// 	var oDescribeList = document.querySelectorAll('.describe-list img');
// 	var aLeftArrow = document.querySelector('.left-arrow');
// 	var aRightArrow = document.querySelector('.right-arrow');
// 	var aName = document.querySelector('.name');
// 	var oTxt4 = document.querySelector('.txt4');
// 	var oTxt5 = document.querySelector('.txt5');
// 	var aYear = document.querySelector('.year');
// 	//添加事件
// 	aLeftArrow.oncilck = function(){
// 		for(var i =0;i<oDescribeList.length;i++){
// 		console.log(oDescribeList);
// 	    }
// 	}

// }
//处理顶部	
var oUserInfo = document.getElementById('user-info');
var oUserInfoRight = document.getElementById('user-info-right');
window.onscroll = function(){
	console.log(oUserInfo)
	getScrollTop();
	if(getScrollTop() >= 100){
		oUserInfo.style.position = 'fixed';
		oUserInfo.style.top = '0px';
		oUserInfo.style.zIndex = '99';
	}else{
        oUserInfo.style.position = '';

	}
}
// 顶部导航购物车js
window.onload = function(){
	
	var oLink = document.getElementById('link');
	var oTankuang = document.getElementById('tankuang');
	oLink.onmouseover = function(){
		oTankuang.style.display = 'block';
	}
	oLink.onmouseout = function(){
		oTankuang.style.display = 'none';
	}
}
