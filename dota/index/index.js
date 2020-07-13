var advertDiv = document.getElementsByClassName('cover-group');
var speed = 20;
var wechat = document.getElementsByClassName('wechat')[0];
var tip = document.getElementById('wechat-tip');
//advert-item
// 鼠标移入
document.getElementsByClassName('advert-item')[0].onmouseenter = function() {
    advertDiv[0].style.bottom = speed + 'px';
}
document.getElementsByClassName('advert-item')[1].onmouseenter = function() {
    advertDiv[1].style.bottom = speed + 'px';
}
document.getElementsByClassName('advert-item')[2].onmouseenter = function() {
    advertDiv[2].style.bottom = speed + 'px';
}
// 鼠标移出
document.getElementsByClassName('advert-item')[0].onmouseleave = function() {
    advertDiv[0].style.bottom = '';
}
document.getElementsByClassName('advert-item')[1].onmouseleave = function() {
    advertDiv[1].style.bottom = '';
}
document.getElementsByClassName('advert-item')[2].onmouseleave = function() {
    advertDiv[2].style.bottom = '';
}

// wechat
wechat.onmouseenter = function() {
    tip.style.visibility = '';
}
wechat.onmouseleave = function() {
    tip.style.visibility = 'hidden';
}