//搜索栏下的面板的打开与关闭
var searchInput = document.querySelector(".search_input");
var smartBox = document.querySelector(".smart_box");
searchInput.onfocus = function(){
    smartBox.classList.add("display");
}

EventUtil.addHandler(document,"click",function(e){
    e = e || window.event;
    element = e.target || e.srcElement;
    
    //防止点到子节点
    while(element){
        if(element == smartBox || element == searchInput){
            return;// 是内容区，或打开按钮不做处理
        }
        element = element.parentNode;
    }
    //点到了内容区外，关闭面板
    smartBox.classList.remove("display");
})





//用户历史记录面板的三个选项的切换

var historyPane = document.querySelector(".visited_history_pane");
//显示选项按钮
var selectedBtns = historyPane.querySelectorAll(".button");
//三个按钮的文字框（选中的要加下边框和变色）
var textBoxs = [];
for(var i=0; i<selectedBtns.length; i++){
    textBoxs[i] = selectedBtns[i].querySelector("span");
}
//不同的三个页面
var pages = historyPane.querySelectorAll(".page");

for(var i=0; i<selectedBtns.length; i++){
    selectedBtns[i].num = i;
    selectedBtns[i].onclick = function(){
        //改变按钮样式
        setBtnStyle(this.num);
        displaySelectedPage(this.num);
    }
}
function setBtnStyle(num){
    for(var i=0; i<textBoxs.length; i++){
        textBoxs[i].classList.remove("on");
    }
    textBoxs[num].classList.add("on");
}
function displaySelectedPage(num){
    for(var i=0; i<pages.length; i++){
        pages[i].style.display = "none";
    }
    pages[num].style.display = "block";
}




//banner内容切换
var backgroundImgs = ["just30.jpg","runningMan.jpg","chuanyue.jpg","speaking.jpg","wuDongQianKun.jpg","gaga.jpg","gansu.jpg","Mr.miao.jpg","superStartSportMeeting.jpg"];
var backgroundColors = ["rgb(25,117,180)","rgb(74,105,151)","rgb(0,0,0)","rgb(25,24,81)","rgb(82,17,15)","rgb(174,23,120)","rgb(123,90,147)","rgb(7,5,25)","rgb(167,171,174)"];

//获取右边nav
var slider_nav = document.querySelector(".slider_nav");
//nav的选项
//大家在看
var labelMine = document.querySelector(".nav_link_mine");
//重磅推荐
var labels = document.querySelectorAll(".nav_link_label");

//banner下的两个用来展示重磅推荐的a标签
var linkActive1 = document.querySelector(".link_active1");
var linkActive2 = document.querySelector(".link_active2");

//用来展示大家在看的div
var bannerVideoSlider = document.querySelector(".banner_mine");


//bannerVideoSlider的打开,css的z-index要大于两个linkActive（最大为2）,直接改变display为block

//改变slider_nav的背景色

labelMine.addEventListener("mouseenter",function(){
    slider_nav.openBannerSlider();
},false);



//打开Banner视频滑动器
slider_nav.openBannerSlider = function (){
    bannerVideoSlider.style.display = "block";
    labelsTitleOff();
    labelMineOn();
    slider_nav.classList.add("slider_nav_black");
}
//关闭
slider_nav.closeBannerSlider = function(){
    bannerVideoSlider.style.display ="none";
    labelMineOff();
    slider_nav.classList.remove("slider_nav_black");
}
function labelMineOn (){
    labelsOff();// 清除labels[i]残余样式
    var icon = labelMine.querySelector(".link_mine_icon");
    var text = labelMine.querySelector(".nav_link_mine_title");
    icon.classList.add("link_mine_icon_on");
    text.classList.add("link_mine_title_on");
}
function labelMineOff (){
    var icon = labelMine.querySelector(".link_mine_icon");
    var text = labelMine.querySelector(".nav_link_mine_title");
    icon.classList.remove("link_mine_icon_on");
    text.classList.remove("link_mine_title_on");
}
function labelsOn(index){
    labelsOff();
    var text1 = labels[index].querySelector(".text1");
    var text2 = labels[index].querySelector(".text2");
    //本来想用样式名来做的但是没效果
    labels[index].style.color="#ff5c38";
    labels[index].style.fontWeight = "700";
    text1.style.fontSize = "18px";
    text2.style.display = "inline";
}
function labelsOff(){
    for(var index=0; index<labels.length; index++){
        var text1 = labels[index].querySelector(".text1");
        var text2 = labels[index].querySelector(".text2");
        labels[index].style.color="";
        labels[index].style.fontWeight = "";
        text1.style.fontSize = "";
        text2.style.display = "";
    }
}

function labelsTitleOn(){
    var labelsTitleIcon = slider_nav.querySelector(".link_active_icon");
    var labelsTitleText = slider_nav.querySelector(".nav_link_active_title");
    labelsTitleIcon.classList.add("link_active_icon_on");
    labelsTitleText.classList.add("nav_link_active_title_on");
}
function labelsTitleOff(){
    var labelsTitleIcon = slider_nav.querySelector(".link_active_icon");
    var labelsTitleText = slider_nav.querySelector(".nav_link_active_title");
    labelsTitleIcon.classList.remove("link_active_icon_on");
    labelsTitleText.classList.remove("nav_link_active_title_on");
}



//构建环状数据结构
linkActive1.next = linkActive2;
linkActive2.next = linkActive1;

//初始化节点
var node = linkActive1;

for(var i=0; i<labels.length; i++){
    labels[i].num= i;
    labels[i].addEventListener("mouseenter",
        openLinkActive,false);
}
//打开向要展示的LinkActive
function openLinkActive(){
    //第一次打开时关闭bannerVideoSlider
   
    if(bannerVideoSlider.style.display !="none"){
        slider_nav.closeBannerSlider();
        labelsTitleOn();
    }
    labelsOn(this.num);
    node.style.zIndex = 1;
    var currentNode = node.next;
    //对tempNode改变背景图、背景色和z-index;
    currentNode.style.backgroundImage = 'url("img/'+backgroundImgs[this.num]+'")';
    currentNode.style.backgroundColor = backgroundColors[this.num];
    currentNode.style.zIndex = 2;
    //更新node
    node = node.next;
}
//构建slider_nav的轮播计时方法
slider_nav.autoChange =  function (index){
    //定时器开始工作
    
    slider_nav.timer = setInterval(function(){
        if(index >= labels.length){
            index=-1;
        }
        if(index==-1){
            slider_nav.openBannerSlider();
            index++;
        }else{
            slider_nav.openLinkActive_auto(index);
            index++;
        }
    },3000);
}


//刚打开的时候就有自动轮播
slider_nav.autoChange(-1);




//停止自动轮播: 把labelMine、labels[i]、bannerVideoSlider有鼠标悬浮时就会关闭
labelMine.addEventListener("mouseenter",function(){
    clearInterval(slider_nav.timer)
},false);

for(var i=0; i< labels.length; i++){
    labels[i].addEventListener("mouseenter",function(){
        clearInterval(slider_nav.timer)
    },false);
}

bannerVideoSlider.onmouseenter = function(){
    clearInterval(slider_nav.timer);
};



//重新打开自动轮播: 1、离开labelMine或labels[i]时---参数是分别是-1 或 labels[i].num
//                 2、离开bannerVideoSlider时 ---参数是-1
labelMine.addEventListener("mouseleave",function(){
    slider_nav.autoChange(-1);
    //由于labels的自动切换的方法原因，当离开labelMine后应该重新将node的样式进行设置，否则会出现顺序错误
    node.style.backgroundImage = 'url("img/'+backgroundImgs[0]+'")';
    node.style.backgroundColor = backgroundColors[0];
},false);

for(var i=0; i< labels.length; i++){
    labels[i].addEventListener("mouseleave",function(){slider_nav.autoChange(this.num)},false);
}

bannerVideoSlider.onmouseleave = function(){slider_nav.autoChange(-1)};


slider_nav.openLinkActive_auto = function(index){
    //第一次打开时关闭bannerVideoSlider
    if(bannerVideoSlider.style.display !="none"){
        labelsTitleOn();
        slider_nav.closeBannerSlider();
    }
    labelsOn(index);
    node.style.zIndex = 2;
   
    if(index+1>=labels.length){
        index = -1;
    }
    //提前加载好下一个要展示的linkActive的样式: 
    //改变背景图、背景色和z-index;
    node.next.style.backgroundImage = 'url("img/'+backgroundImgs[index+1]+'")';
    node.next.style.backgroundColor = backgroundColors[index+1];
    node.next.style.zIndex = 1;
    //更新node
    node = node.next;
}


//banner中的视频选项的滑动
//获取滑动按钮
var slider_pre_btn = document.querySelector(".slider_pre_btn");
var slider_next_btn = document.querySelector(".slider_next_btn");

//获取slider容器，用以获取距离页面上的偏移量
var slider_inner = document.querySelector(".banner_mine_slider");



//思想根据可见区的左右边缘到网页的左距离的差值 除以 每个选出的宽度来确定要移动的数量
function getViewNumber(){
    var rightOffset = getElementLeft(slider_nav);
    var leftOffset = getElementLeft(slider_inner);
    var distance = rightOffset-leftOffset;
    //220是figure的总宽度（包括margin）
    var figure_view_num = Math.floor(distance/220);
    return figure_view_num;
}


//获取视频选项
var slider_figures = document.querySelectorAll(".slider_figure");


//下一页：就是把前面的figure 不显示
//上一页：就是把前面的figure 恢复显示

//注意数组下标越界，标记显示figure的第一的下标
var first_view_index = 0;
//下一页操作
slider_next_btn.onclick = function(){
    //first_view_index值增加
    var maxNum = getViewNumber();// 最多改变的个数
    for(var i=0; i< maxNum; i++){
        if(first_view_index < (slider_figures.length - maxNum)){
            //没有越上界
            slider_figures[first_view_index++].style.display = "none";
        }else{
            break;
        }
    }
    changeSliderPreBtnVisibility();
    changeSliderNextBtnVisibility();
   
}
//上一页操作
slider_pre_btn.onclick = function(){
    //first_view_index值减少
   
    var maxNum = getViewNumber();// 最多改变的个数
    for(var i=0; i< maxNum; i++){
        if(first_view_index > 0){
            //没有越上界
            slider_figures[--first_view_index].style.display = "inline-block";
        }else{
            break;
        }
    }
    changeSliderPreBtnVisibility();
    changeSliderNextBtnVisibility();
}

//两个按钮的显示与隐藏
//上一页，由上一页点击后调用
function changeSliderPreBtnVisibility(){
    //firset_view_index是否为0
    
    if(first_view_index <=0){
        slider_pre_btn.style.display = "none";
    }else{
        slider_pre_btn.style.display = "block";
    }
}
//下一页，由下一页点击后调用
function changeSliderNextBtnVisibility(){
    //firset_view_index是否大于slider_figures.length-可见个数
    if(first_view_index>= (slider_figures.length - getViewNumber())){
        slider_next_btn.style.display = "none";
    }else{
        slider_next_btn.style.display = "block";
    }
}

//屏幕大小改变也会要调用
window.onresize = function(){
    changeSliderPreBtnVisibility();
    changeSliderNextBtnVisibility();
}


//获取距离页面上的偏移量的函数
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while(current != null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}



/***
 * 头部点击下拉展示更多频道 
 * */

//打开按钮
var openMoreChannelBtn = document.querySelector(".head .center .channel_item11");
var moreChannelPane = document.querySelector(".head .head_site_nav");

moreChannelPane.inner = moreChannelPane.querySelector(".site_nav_inner");

openMoreChannelBtn.onclick = function(){
    if(moreChannelPane.style.display == "none"){
        moreChannelPane.style.display="block";
        openMoreChannelBtn.querySelector(".svg_before").style.display= "none";
    }else{
        moreChannelPane.style.display="none";
        openMoreChannelBtn.querySelector(".svg_before").style.display= "inline-block";
    }
    
}

//关闭,点击非moreChannelPane内容区外的区域就会关闭面板
EventUtil.addHandler(document,"click",function(e){
    e = e || window.event;
    element = e.target || e.srcElement;
    //防止点到子节点
    while(element){
        if(element == moreChannelPane.inner || element == openMoreChannelBtn){
            return;// 是内容区，或打开按钮不做处理
        }
        element = element.parentNode;
    }
    //点到了内容区外，关闭面板
    moreChannelPane.style.display = "none";
    openMoreChannelBtn.querySelector(".svg_before").style.display= "inline-block";
})






