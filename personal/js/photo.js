/**
 * Created by a123 on 2018/3/21.
 */
//photo轮播图
var oBgimg = document.getElementById('bg-img');
var oPhotoli = document.getElementById('photo-li');
var oBgcontent = document.getElementById('bg-content');
var aLi2 = oPhotoli.children;
var aP = oBgcontent.children;
var index = 0;//代表当前正在显示的图片的索引

for(var i=0; i<aLi2.length; i++){
    aLi2[i].index = i;
    aLi2[i].onclick = function () {
        index = this.index;
        changP(this);
    };
}

function changP(elem) {
    for(var i=0; i<aLi2.length; i++){
        aLi2[i].className = '';
        aP[i].className = '';
    }
    elem.className = 'selected';
    aP[elem.index].className = 'selected';
    // aP[elem.index].className = 'animated bounceInRight';
}


var timer;
function run() {
    timer = setInterval(function () {
        index++;
        if(index == aLi2.length){
            index = 0;
        }
        changP(aLi2[index]);
    }, 3000);
}
run();

oBgimg.onmouseover = function () {
    clearInterval(timer);
};
oBgimg.onmouseout = function () {
    run();
};