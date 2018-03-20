/**
 * Created by a123 on 2017/10/15.
 */

//about选项卡
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

//回到顶部
var down = document.getElementById('down');
down.onclick = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = setInterval(function () {
        window.scrollTo(0, scrollTop-=10);
        if(scrollTop <= 0){
            clearInterval(timer);
        }
    }, 5);
};



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
$(window).ready(function(){
    $("#home").height($(window).height());
//     // $("#home").width($(window).width());
});

//菜单动画
$(".h-img ").on("click",function () {
        $('#menu').slideDown();
});

$(".fa-times").on("click",function () {
    $('#menu').slideUp();

});

//隐藏菜单栏和回到顶部
$(window).on('scroll', function(){//监听滚动事件
    var scrollH = $(window).scrollTop();
    if(scrollH >240){
        $("#header").slideDown();
        $("#down").css(
            "display","block")
    }else{
        $("#header").slideUp();
        $("#down").css(
            "display","none"
        )
    }

});

//menu
$(".home").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#home").offset().top},1000);
});
$(".mouse,.about").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#about").offset().top-60},1000);
});
$(".photo").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#work").offset().top},1000);
});
$(".choose").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#photo").offset().top-120},1000);
});
$(".item").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#item").offset().top},1000);
});
$(".contact").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#fellow").offset().top},1000);
});



//work选项卡
var oBlock = document.getElementById('work-blocks');
var oTitle = document.getElementById('work-title');
var aUl1 =oBlock .getElementsByTagName('ul');
var aLi1 = oTitle.getElementsByTagName('li');
for(i=0; i < aUl1.length; i++){
    aLi1[i].index = i;
    aLi1[i].onclick = function () {
        for(var i=0; i<aLi1.length; i++){
            aUl1[i].className = '';
            aLi1[i].className = '';
        }
        this.className = 'selected';
        aUl1[this.index].className= 'selected';

    }

}



