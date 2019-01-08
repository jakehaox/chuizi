var oFoldBtn = document.getElementById('fold-btn');
var oFoldHide = document.getElementById('fold-hide');
var foldbleBoxHeight = getComputedStyle(oFoldHide,false)['height'];

oFoldBtn.onclick = function(){
	oFoldHide.style.height = '59px';
}