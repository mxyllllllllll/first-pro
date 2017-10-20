/**
 * Created by a123 on 2017/10/15.
 */
//typed js
$(".typed").typed({
    strings: ["My Name is MiaoXinyu", "I'm a Web Designer", "Love Simplicity"],
    typeSpeed: 100,
    backDelay: 900,
    // loop
    loop: true
});
//主页面
//
$(document).ready(function(){
    $("#home").height($(window).height());
//     // $("#home").width($(window).width());
});

var oContent = document.getElementById('content');
var oCard = document.getElementById('card');
var aDiv = oContent.getElementsByTagName('div');
var aLi = oCard.getElementsByTagName('li');
for(i=0; i < aDiv.length; i++){

    aLi[i].index = i;
    aLi[i].onclick = function () {
        for(var i=0; i<aLi.length; i++){
            aDiv[i].className = '';
            aLi[i].className = '';
        }
        this.className = 'selected';
        aDiv[this.index].className= 'selected';

    }


}
