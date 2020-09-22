//rowBoxScroll的换页操作和窗口变小页码变换


//工厂模式 创建一个rowBox对象

function getRowBox(obj,pageControler){
    //换页按钮
    obj.preBtn = pageControler.querySelector(".btn_pre");
    obj.nextBtn = pageControler.querySelector(".btn_next");
    //当前页面和总页面
    obj.nowPage = 1;
    //可显示的一个元素的下标
    obj.firstViewIndex = 0;
    //获取容器
    obj.innerBox = obj.querySelector(".row_box_inner");
    //获取所有的内容个体
    obj.listItems = obj.innerBox.querySelectorAll(".list_item");

    //获取容器的层数
    obj.innerBoxRow = getInnerBoxRow(obj);
    obj.totalPage = getTotalPage(obj);
    obj.pageNumPane = pageControler.querySelector(".page_num");
    obj.resized = false;

    return obj;
}


//翻页函数
//下一页,让当前页的所有的listItem都隐藏,

function rowBoxToNextPage(obj){
    //获取当前窗口大小下一页成展示的listItem数量
    var changeNum = getRowBoxViewNum(obj);
    if(obj.resized){
        replaceListItems(obj);
        obj.resized = false;
    }
    if(obj.nowPage < obj.totalPage){
        for(var i=0; i<changeNum; i++){
            if((obj.firstViewIndex + changeNum) < obj.listItems.length){
                obj.listItems[obj.firstViewIndex++].style.display = "none";
            }else{
                break;
            } 
        }
        obj.nowPage++;
    }
    //更新页面面板
    setPageNum(obj);
    rowBoxIsNeedDisable(obj);
}


//上一页则是把上一页的listItem都显示
function rowBoxToPrePage(obj){
    //获取当前窗口大小下一页成展示的listItem数量
    var changeNum = getRowBoxViewNum(obj);
   console.log(changeNum);
    if(obj.nowPage > 1){
        for(var i=0; i<changeNum; i++){
            if(obj.firstViewIndex>0){
                obj.listItems[--obj.firstViewIndex].style.display = "block";
            }else{
                break;
            }
        }
        obj.nowPage--;
    }
    //更新页面面板
    setPageNum(obj);
    rowBoxIsNeedDisable(obj);
    
}
//设置翻页按钮是否可用
function rowBoxIsNeedDisable(obj){
    if(obj.nowPage==1){
        obj.preBtn.classList.add("disable");
        obj.nextBtn.classList.remove("disable");
    }else if(obj.nowPage==obj.totalPage){
        obj.nextBtn.classList.add("disable");
        obj.preBtn.classList.remove("disable");
    }else{
        obj.preBtn.classList.remove("disable");
        obj.nextBtn.classList.remove("disable");
    }
}

//设置html的页面展示内容
function setPageNum(obj){
    obj.pageNumPane.innerHTML = obj.nowPage +"/" + obj.totalPage;
}

function setTotalPage(obj){
    obj.totalPage = getTotalPage(obj);
}

//获取当前页能展示的选项个数
function getRowBoxViewNum(obj){
    var innerBox = obj.innerBox;
    var viewNum = Math.floor((innerBox.offsetWidth) / (obj.listItems[obj.listItems.length-1].offsetWidth+18));
    return viewNum * obj.innerBoxRow;
}

function getInnerBoxRow(obj){
    //根据innerBox的高度确定层数，从而确定可展示的个数
    var innerBoxHeight = obj.innerBox.clientHeight;
    var listItemHeight = obj.listItems[obj.listItems.length-1].clientHeight;
   
    return Math.floor(innerBoxHeight / listItemHeight);// 40是margin-bottom
}


//获取当前窗口大小下rowBox的总页数
function getTotalPage(obj){
    var viewNum = getRowBoxViewNum(obj);
    return Math.ceil(obj.listItems.length / viewNum);
}

//重新展示所有的选项，用在resize中
function replaceListItems(obj){
   
    for(var i=0; i<obj.listItems.length-1; i++){
        obj.listItems[i].style.display = "block";
    }
}

function replaceRowBox(obj){
    //重置页数面板
    obj.nowPage = 1;
    setTotalPage(obj);
    setPageNum(obj);
    rowBoxIsNeedDisable(obj);
    
}


//每个个体在鼠标悬浮时的那个图片切换和图片大小的变化

/**
 * 图片长和宽 == figure_img的clientHeight*3 和 clientWidth*3
移动的位置 : top 和 left 变化的值 == figure_img的clientHeight 和 clientWidth

如果有个值记录要展示的图片，num编号从0 – 7 共 8个

   x: num / 3    y: num%3
    0(0,0)	1(0,1)	2(0,2)
    3(1,0)	4(1,1)	5(1,2)
    6(2,0)	7(2,1)	

得： top = -x * clientHeight
	 left = - y * clientWidth


编号获取

1/8	1/4	3/8	1/4	5/8	3/4	8/7	1	offsetX/clientWidth
0	1	2	3	4	5	6	7	num

 */

 //工厂模式创建listItem下的keyframe

function keyframes(parent){
    var keyframe = parent.querySelector(".figure_keyframes");
    keyframe.img = keyframe.querySelector("img");
    keyframe.progressValue = keyframe.querySelector(".figure_keyframes_value");
    return keyframe;
}

function changeProgress(event){
    var percent = event.offsetX / this.clientWidth;
    var index = getKeyframesImgIndex(percent);
    var x = Math.floor(index/3);
    var y = index % 3;
    setPicturePositon(this.img, x, y,this.clientWidth, this.clientHeight);
    setProgressbarValue(this.progressValue, percent);
}

//获取显示的图片的下标

function getKeyframesImgIndex(percent){
    var index =-1;
    if(0<=percent && percent< 0.125){
        index = 0;
    }else if(0.125<=percent && percent< 0.25){
        index = 1;
    }
    else if(0.25<=percent && percent< 0.375){
        index = 2;
    }
    else if(0.375<=percent && percent< 0.5){
        index = 3;
    }
    else if(0.5<=percent && percent< 0.625){
        index = 5;
    }
    else if(0.625<=percent && percent< 0.75){
        index = 5;
    }
    else if(0.75<=percent && percent< 0.875){
        index = 6;
    }
    else{
        index = 7;
    }
    return index;
}


//设置显示图片的位置
function setPicturePositon(img, x, y,width,height){
    img.style.left = -(y*width) + "px";
    img.style.top = -(x*height) + "px";
}

//设置进度条的长度
function setProgressbarValue(barValue,percent){
    barValue.style.width = percent * 100 + "%";
}

function setKeyframesImgSize(keyframe){
    keyframe.img.style.width = keyframe.clientWidth * 3 + "px";
    keyframe.img.style.height = keyframe.clientHeight * 3 + "px";
}

//填充空白位置
function fillBlank(obj){
    var viewNum = getRowBoxViewNum(obj);
    var remainNum = obj.listItems.length-obj.firstViewIndex;
    //向前恢复listItem的显示，填充空位
    while(viewNum>remainNum && obj.firstViewIndex>0){
        obj.listItems[--obj.firstViewIndex].style.display = "block";
        remainNum++;
    }
}

//所有翻页的盒子调用这个函数就能实现翻页功能
function setRowBoxAllEvent(rowBoxName,pageControler){
    var rowBox = getRowBox(rowBoxName,pageControler);

    //初始化操作
    replaceListItems(rowBox);
    replaceRowBox(rowBox);
    
    rowBox.preBtn.onclick = function(){
        rowBoxToPrePage(rowBox);
    }
    rowBox.nextBtn.onclick = function(){
        rowBoxToNextPage(rowBox);
    }
    
    for(var i=0; i<rowBox.listItems.length; i++){
        //如果有keyframes
        if(rowBox.listItems[i].querySelector(".figure_keyframes")){
            
            //获取到了keyframe
            rowBox.listItems[i].keyframe = keyframes(rowBox.listItems[i]);
    
            //获取控制面板
            rowBox.listItems[i].controlPane = rowBox.listItems[i].querySelector(".controlPane");
            rowBox.listItems[i].controlPane.num = i;
            //鼠标在keyframe上移动时触发事件
            EventUtil.addHandler(rowBox.listItems[i].controlPane,"mousemove",function(event){
                var num = this.num;
                changeProgress.call(rowBox.listItems[num].keyframe,event);
            })
        }
    }
    
    
    //窗口大小改变后，页数面板、翻页按钮和keyframes图片大小也跟着改变
    EventUtil.addHandler(window,"resize",function(){
        replaceRowBox(rowBox);
        rowBox.resized = true;
        for(var i=0; i<rowBox.listItems.length; i++){
            if(rowBox.listItems[i].querySelector(".figure_keyframes")){
                var keyframe = keyframes(rowBox.listItems[i]);
                setKeyframesImgSize(keyframe);
            }
        }
        fillBlank(rowBox);

    })
}



/**
 * 热点短视频的逻辑
 */

 //不同的视频类的打开

 //获取热点视频容器



 var figureTypeButtons = shortVideo.querySelectorAll(".tab_item");

 

 //当前正在展示的figureType
 var figureTypeOn = figureTypes[0];

 //获取figureTypes[i]下的所有listItems

 

 for(var i=0; i<figureTypes.length; i++){
     
     for(var j=0; j<figureTypes[i].items.length; j++){
         var playBtn = figureTypes[i].items[j].querySelector(".figure_detail .icon");
         playBtn.num = j;
         EventUtil.addHandler(playBtn,"click",function(){playNext(this.num)});
     }
 }

 shortVideo.pageControler = shortVideo.querySelector(".mod_page_small");

 
 //默认展示第一类型

 //设置换页
 setRowBoxAllEvent(figureTypes[0],shortVideo.pageControler);

 for(var i=0; i<figureTypeButtons.length; i++){
     figureTypeButtons[i].num = i;
     EventUtil.addHandler(figureTypeButtons[i],"mouseenter",function(){
        
         for(var i=0; i<figureTypes.length; i++){
             figureTypes[i].style.display = "none";
             figureTypeButtons[i].classList.remove("tab_on");
         }
         //更换播放类型
         figureTypes[this.num].style.display = "block";
         this.classList.add("tab_on");
         //设置换页功能
         setRowBoxAllEvent(figureTypes[this.num],shortVideo.pageControler);
         //加载视频资源
         focusPlayer.resource = figureTypes[this.num].videoUrls;
         //自动播放第一个视频
         figureTypeOn = figureTypes[this.num];
         loadVideoListItems(figureTypes[this.num]);
         playerAutoStart(figureTypes[this.num].items[0].querySelector(".figure_detail"));
        
     })
 }



 //视频的切换

 //切换视频类型的时候，把播放器上的item换掉，innerHTML和title;

 //切换视频的原理：更换url，自动重新加载，调用play()方法

 //资源，每个mod_figure都有一个保存视频url地址的数组，数组作为，mod_figure的属性

 //视频地址
 for( var i=0; i<figureTypes.length; i++){
    if(i%2==0){
        figureTypes[i].videoUrls = [
            "img/video_test/v_test1.mp4",
            "img/video_test/v_test2.mp4",
            "img/video_test/v_test3.mp4",
            "img/video_test/v_test4.mp4",
            "img/video_test/v_test1.mp4",
            "img/video_test/v_test2.mp4",
            "img/video_test/v_test3.mp4",
            "img/video_test/v_test4.mp4",
            "img/video_test/v_test1.mp4",
            "img/video_test/v_test2.mp4"
        ]
    }else{
        figureTypes[i].videoUrls = [
            "img/video_test/v_test4.mp4",
            "img/video_test/v_test3.mp4",
            "img/video_test/v_test2.mp4",
            "img/video_test/v_test1.mp4",
            "img/video_test/v_test4.mp4",
            "img/video_test/v_test3.mp4",
            "img/video_test/v_test2.mp4",
            "img/video_test/v_test1.mp4",
            "img/video_test/v_test4.mp4",
            "img/video_test/v_test3.mp4"
        ]
    }
    
 }
 

 

 

 var focusPlayer = shortVideo.querySelector(".mod_focus_player");
 focusPlayer.videoList = focusPlayer.querySelector(".video_list");

 focusPlayer.video = focusPlayer.querySelector("video");

 focusPlayer.nextVideoBtn = focusPlayer.querySelector(".next");

 focusPlayer.playSwitch = focusPlayer.querySelector(".switch");

 focusPlayer.videoTitle = focusPlayer.querySelector(".video_hd");
 


 //播放要展示的内容的来源
focusPlayer.resource= figureTypes[0].videoUrls;

//初始化播放器

//播放器开始工作
function playerAutoStart(obj){
    setVideoUrl(focusPlayer.resource[0]);
    focusPlayer.video.oncanplay = playVideo();
    rowBoxItem_off();
    rowBoxItem_on.call(obj);
    playerItem_off();
    playerItem_on(0);
    loadVideoTitle();
}

//更新播放器中播放内容的标题
function loadVideoTitle(){
    focusPlayer.videoTitle.innerHTML = focusPlayer.videoList.items[focusPlayer.playingIndex].innerHTML;
}


//函数 playVideo(url)
function playVideo(){
    //播放
    focusPlayer.playSwitch.classList.replace("pause","play")
    focusPlayer.video.play();
    focusPlayer.playSwitch.querySelector(".button_tip").innerHTML = "暂停";
}

function stopVideo(){
    focusPlayer.video.pause();
    //暂停
    focusPlayer.playSwitch.classList.replace("play","pause");
    focusPlayer.querySelector(".button_tip").innerHTML = "播放";
}
function setVideoUrl(url){
    focusPlayer.video.src= url;
}


//函数 rowBoxItem_on() 
function rowBoxItem_on(){
    this.querySelector('.text').classList.add("active")
    this.querySelector("path").classList.add("active");
}
function rowBoxItem_off(){
    for(var i=0; i<figureTypeOn.items.length; i++){
        figureTypeOn.items[i].querySelector(".figure_detail .text").classList.remove("active");
        figureTypeOn.items[i].querySelector(".figure_detail path").classList.remove("active");
    }
}


//函数 playerItem_on(index) active
function playerItem_on(index){
    focusPlayer.videoList.items[index].classList.add("active");
}
function playerItem_off(){
    for(var i=0; i<focusPlayer.videoList.items.length; i++){
        focusPlayer.videoList.items[i].classList.remove("active");
    }
}



focusPlayer.videoList.items = focusPlayer.videoList.querySelectorAll("li");

for(var i=0; i<focusPlayer.videoList.items.length; i++){
    focusPlayer.videoList.items[i].num = i;
    EventUtil.addHandler(focusPlayer.videoList.items[i],"click",function(){playNext(this.num)});
}

//更换播放器视频列表的item的名称
function loadVideoListItems(figureType){
    for(var i=0 ;i<figureType.items.length;i++){
        focusPlayer.videoList.items[i].innerHTML = figureType.items[i].querySelector(".figure_detail .text").innerHTML;
    }
}


 //更换播放内容

 //更换方式， VideoList更换、row_box_listItem更换、下一集按钮更换

 //下一集更换
focusPlayer.playNextBtn = focusPlayer.querySelector('.next');

focusPlayer.playingIndex = 0;

EventUtil.addHandler(focusPlayer.playNextBtn,"click",function(){
    if(focusPlayer.playingIndex >= focusPlayer.videoList.items.length-1){
        focusPlayer.playingIndex = -1;
    }
    playNext(focusPlayer.playingIndex+1);
    loadVideoTitle();
},false)

//播放指定的视频
function playNext(nextIndex){
    //更换视频
    stopVideo();
    setVideoUrl(focusPlayer.resource[focusPlayer.playingIndex+1]);
    playVideo();
    //更换样式
    playerItem_off();
    playerItem_on(nextIndex);
   // console.log(figureTypeOn.items[nextIndex].querySelector('.figure_detail'));
    rowBoxItem_off();
    rowBoxItem_on.call(figureTypeOn.items[nextIndex].querySelector('.figure_detail'));
    
    focusPlayer.playingIndex = nextIndex;
    //console.log(focusPlayer.playingIndex);
}



//其实播放就分成两类，一类是自动播放第一个，一个是播放下一个

 //播完后自动播放下一集
 EventUtil.addHandler(focusPlayer.video,"ended",function(){
    if(focusPlayer.playingIndex >= focusPlayer.videoList.items.length-1){
        focusPlayer.playingIndex = -1;
    }
     playNext(focusPlayer.playingIndex+1);
     loadVideoTitle();
 })


 loadVideoListItems(figureTypes[0]);

 playerAutoStart(figureTypes[0].items[0].querySelector(".figure_detail"));



 /**
 * 悬浮面板的打开与关闭
 */
 function openHoverPane(obj){
    //x,y为距离爷爷节点容器的内边距距离
    closeAllHoverPane(obj);
    var x = 0;
    
    var current = this;
    while(current!=obj){
        x += current.offsetLeft;
        current = current.offsetParent;
    }
    var y =0;
    current = this;
    while(current!=obj){
        y += current.offsetTop;
        current = current.offsetParent;
    }   
    obj.hoverPanes[this.num].style.display = "block";
    obj.hoverPanes[this.num].style.top= (y-(obj.hoverPanes[this.num].clientHeight-this.clientHeight)/2 )+"px";
    obj.hoverPanes[this.num].style.left = (x-(obj.hoverPanes[this.num].clientWidth- this.clientWidth)/2)+"px";
}

 


function closeHoverPane(){
     this.style.display = "none";
     //关闭视频
     if(this.querySelector("video")){
        this.querySelector("video").pause();
     }
}
function closeAllHoverPane(obj){
    for(var i=0; i<obj.hoverPanes.length;i++){
         obj.hoverPanes[i].style.display = "none";
        if(obj.hoverPanes[i].querySelector("video")){
           obj.hoverPanes[i].querySelector("video").muted = true;
           obj.hoverPanes[i].querySelector(".open").style.display = "none";             obj.hoverPanes[i].querySelector(".muted").style.display = "inline-block";
         }
    }
}

// 设置面板事件总函数

//list_item与hoverPane 数量相同或 不相同的情形都适用，关键在于参数figureImgs
function setHoverPaneEvent(obj,figureImgs){
    obj.figureImgs = figureImgs;
    obj.hoverPanes = obj.querySelectorAll(".hover_pane_container .figure_img_hover_pane");
    //为每个list_item的图片设置打开悬浮面板事件
    for(var i=0; i<obj.figureImgs.length; i++){
        obj.figureImgs[i].num = i;  
        obj.figureImgs[i].onmouseenter = function(){
            openHoverPane.call(this,obj);
        }
    }
    //为每个悬浮面板设置关闭事件
    for(var i=0; i<obj.hoverPanes.length; i++){
        // EventUtil.addHandler(obj.hoverPanes[i],"mouseleave",closeHoverPane)
        obj.hoverPanes[i].num = i;
        obj.hoverPanes[i].onmouseleave =function(){
            closeAllHoverPane(obj);
        };
        //如果有视频就设置音量开关功能
        if(obj.hoverPanes[i].querySelector("video")){
            openORcloseVolumn.call(obj.hoverPanes[i]);
        }
    }
    //防误触
    obj.onmouseleave = function(){
        closeAllHoverPane(obj);
    }
}


//悬浮面板的视频的声音打开
function openORcloseVolumn(){
    var video = this.querySelector("video");
    var volumeBtn = this.querySelector(".volume");
    var open = this.querySelector(".open");
    var muted = this.querySelector(".muted");
    volumeBtn.onclick = function(){
        if(video.muted){
            video.volume = 0.5;// 40%的音量
            video.muted = false;
            open.style.display = "inline-block";
            muted.style.display = "none";
        }else{
            video.muted = true;
            muted.style.display = "inline-block";
            open.style.display = "none";
        }
    }
}


//设置今日热点盒子翻页功能
 
 todayHots.pageControler = todayHots.querySelector(".mod_page_small");
 setRowBoxAllEvent(todayHots,todayHots.pageControler);
 
 //设置原创精选盒子翻页功能
 
 originalWorks.pageControler = originalWorks.querySelector(".mod_page_small");
 setRowBoxAllEvent(originalWorks,originalWorks.pageControler);
 
 
//设置同步剧场的盒子翻页功能
var hotTV = document.querySelector(".hot_tv");
hotTV.columnMain = hotTV.querySelector(".column_main")
hotTV.pageControler = hotTV.querySelector(".row_box_hd .mod_page_small");
//设置翻页
setRowBoxAllEvent(hotTV.columnMain,hotTV.pageControler);
//设置浮动面板
setHoverPaneEvent(hotTV.columnMain,hotTV.querySelectorAll(".list_item .figure_img"));




//设置电影的盒子翻页功能
var film = document.querySelector(".film");
film.columnMain = film.querySelector(".column_main")
film.pageControler = film.querySelector(".row_box_hd .mod_page_small");
setRowBoxAllEvent(film.columnMain,film.pageControler);
//设置浮动面板
setHoverPaneEvent(film.columnMain,film.querySelectorAll(".list_item .figure_img"));

//设置综艺的盒子翻页功能

varietyShow.columnMain = varietyShow.querySelector(".column_main")
varietyShow.pageControler = varietyShow.querySelector(".row_box_hd .mod_page_small");

setRowBoxAllEvent(varietyShow.columnMain,varietyShow.pageControler);
//设置浮动面板
setHoverPaneEvent(varietyShow.columnMain,varietyShow.querySelectorAll(".list_item .figure_img"));

//设置动漫的盒子翻页功能
var cartoon = document.querySelector(".row_box_cartoon");
cartoon.columnMain = cartoon.querySelector(".column_main")
cartoon.pageControler = cartoon.querySelector(".row_box_hd .mod_page_small");

setRowBoxAllEvent(cartoon.columnMain,cartoon.pageControler);
//设置浮动面板
setHoverPaneEvent(cartoon.columnMain,cartoon.querySelectorAll(".list_item .figure_img"));

//设置少儿频道的盒子翻页功能
var hotChild = document.querySelector(".hot_child");
hotChild.columnMain = hotChild.querySelector(".column_main")
hotChild.pageControler = hotChild.querySelector(".row_box_hd .mod_page_small");

setRowBoxAllEvent(hotChild.columnMain,hotChild.pageControler);
//设置浮动面板
setHoverPaneEvent(hotChild.columnMain,hotChild.querySelectorAll(".list_item .figure_img"));

//设置的纪录片盒子翻页功能
var documentary = document.querySelector(".documentary");
documentary.columnMain = documentary.querySelector(".column_main")
documentary.pageControler = documentary.querySelector(".row_box_hd .mod_page_small");

setRowBoxAllEvent(documentary.columnMain,documentary.pageControler);
//设置浮动面板
setHoverPaneEvent(documentary.columnMain,documentary.querySelectorAll(".list_item .figure_img"));

//设置为你精选盒子翻页功能
var videoPinked = document.querySelector(".video_pinked");
videoPinked.columnMain = videoPinked.querySelector(".column_main")
videoPinked.pageControler = videoPinked.querySelector(".row_box_hd .mod_page_small");

setRowBoxAllEvent(videoPinked.columnMain,videoPinked.pageControler);
//设置浮动面板
setHoverPaneEvent(videoPinked.columnMain,videoPinked.querySelectorAll(".list_item .figure_img"));

//设置强势接档的悬浮面板

choice_qsjd.columnMain = choice_qsjd.querySelector(".column_main");
setHoverPaneEvent(choice_qsjd.columnMain,choice_qsjd.querySelectorAll(".list_item .figure_img"));



//设置最强笑点盒子翻页功能

hotFuns.pageControler = hotFuns.querySelector(".mod_page_small");
setRowBoxAllEvent(hotFuns,hotFuns.pageControler);

//设置生活资讯盒子翻页功能
var lifeNews = document.querySelector(".life_news");
lifeNews.pageControler = lifeNews.querySelector(".mod_page_small");
setRowBoxAllEvent(lifeNews,lifeNews.pageControler);

//设置精品游戏盒子翻页功能

hotGames.pageControler = hotGames.querySelector(".mod_page_small");
setRowBoxAllEvent(hotGames,hotGames.pageControler);

//设置电影盒子翻页功能
var filmPreview = document.querySelector(".film_preview");
filmPreview.pageControler = filmPreview.querySelector(".mod_page_small");
setRowBoxAllEvent(filmPreview,filmPreview.pageControler);

//设置会员尊享
variety_show_vip.pageControler = variety_show_vip.querySelector(".mod_page_small");
variety_show_vip.columnMain = variety_show_vip.querySelector(".row_box_overflow .column_main");
setRowBoxAllEvent(variety_show_vip,variety_show_vip.pageControler);
//为有悬浮面板的list_item设置悬浮面板的打开与关闭
setHoverPaneEvent(variety_show_vip.columnMain,variety_show_vip.querySelectorAll(".list_item .figure_img"));


//设置花絮*剧透*预告片盒子翻页功能
var TVPreview = document.getElementById("new_tv_preview");
TVPreview.pageControler = TVPreview.querySelector(".mod_page_small");
TVPreview.columnMain = TVPreview.querySelector(".row_box_overflow .column_main");
setRowBoxAllEvent(TVPreview,TVPreview.pageControler);
//为有悬浮面板的list_item设置悬浮面板的打开与关闭
setHoverPaneEvent(TVPreview.columnMain,TVPreview.querySelectorAll(".list_item_special .figure_img"));














 




 


