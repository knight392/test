 //网络连接测试
 window.addEventListener("online",function(){alert("网络已连接")},false);
 window.addEventListener("offline",function(){alert("网络连接断开")},false);
 var focusPlayer = document.querySelector(".mod_focus_player")
 var video = focusPlayer.querySelector("video");
 var playSwitch = focusPlayer.querySelector(".switch");
 var controlPane = focusPlayer.querySelector(".controlPane");
 
 //播放与暂停
 
EventUtil.addHandler(playSwitch,"click",playOrPause);
EventUtil.addHandler(focusPlayer.video,"click",playOrPause);
EventUtil.addHandler(document,"keyup",function(event){
    //keyCode 32 是空格键
    //去除默认下一页事件
    
    if(event.keyCode == 32){
        playOrPause();
        if (event&&event.preventDefault)
        {
            event.preventDefault();
        }
        else
        {
            window.event.returnValue = false;
        }
    }

})


  function playOrPause (){
     if(video.paused){
         //播放
         playSwitch.classList.replace("pause","play")
         video.play();
         playSwitch.querySelector(".button_tip").innerHTML = "暂停";
         var centerIcon = focusPlayer.querySelector(".center_icon");
         centerIcon.style.display = "block";
         focusPlayer.querySelector(".playing_icon").style.display="none";
        focusPlayer.querySelector(".start_icon").style.display = "block";
     }else{
         //暂停
         playSwitch.classList.replace("play","pause")
         video.pause();
         playSwitch.querySelector(".button_tip").innerHTML = "播放";
        focusPlayer.querySelector(".playing_icon").style.display="block";
        focusPlayer.querySelector(".start_icon").style.display = "none";
     }
 }
 //全屏按钮
 var fullScreenBtn = focusPlayer.querySelector(".fullScreen");

 fullScreenBtn.onclick = function(){
     //能力测试
     if(document.fullscreenElement || document.webkitFullScreenElement || 
     document.mozFullScreenElement || document.msFullScreenElement || document.oFullScreenElemen ){
        //退出全屏
        if(document.cancelFullScreen)  
             document.canceltFullScreen();
         else if(document.webkitCancelFullScreen)
             document.webkitCancelFullScreen();
         else if(document.mozCancelFullScreen)
             document.mozCancelFullScreen();
         else if(document.msCancelFullScreen)
             document.msCancelFullScreen();
         else if(document.oCancelFullScreen)
             document.oCancelFullScreen();
        this.querySelector(".button_tip").innerHTML = "全屏";
     }else{
         //打开全屏
         if(focusPlayer.requestFullScreen)  
         focusPlayer.requestFullScreen();
         else if(focusPlayer.webkitRequestFullScreen)
         focusPlayer.webkitRequestFullScreen();
         else if(focusPlayer.mozRequestFullScreen)
         focusPlayer.mozRequestFullScreen();
         else if(focusPlayer.msRequestFullScreen)
         focusPlayer.msRequestFullScreen();
         else if(focusPlayer.oRequestFullScreen)
         focusPlayer.oRequestFullScreen();
         this.querySelector(".button_tip").innerHTML = "退出全屏";
         this.querySelector(".button_tip").style.width = "60px";
     }

 }
 //设置当前时间和总时长
 var now = focusPlayer.querySelector(".now");
 var duration1 = focusPlayer.querySelector(".duration");
 //当视频可以播放时计算总时长
 video.oncanplay = function(){
     duration1.innerHTML = format(video.duration);
 }
 var currentBar = focusPlayer.querySelector(".current");

 //视频在播放时，进入条段在变化
 video.ontimeupdate = function(){
     now.innerHTML = format(video.currentTime);
     //设置进度条长度
     currentBar.style.width=video.currentTime/video.duration*100 + "%";
 }
 //这个应要在播放时不停调用
 
 function format(time){
     //把秒化为时：分：秒
     var hour = Math.floor(time/3600);
     hour = hour<10 ? "0"+hour : hour;
     var minute = Math.floor(time%3600/60);
     minute = minute<10 ? "0"+minute : minute;
     var second = Math.floor(time%60);
     second = second<10 ? "0"+second : second;
     return hour+":"+minute+":"+second;
 }

 //视频跳转
 var controlBar = focusPlayer.querySelector(".bar");
 
 controlBar.onclick = function(e){
     //百分比
      var percent =  e.offsetX/controlBar.clientWidth;
     //设置视频的currentTime
     video.currentTime = percent*video.duration;
     //修改播放按钮样式
     playSwitch.classList.replace("pause","play");
     video.play();
     playSwitch.querySelector(".button_tip").innerHTML = "暂停";
     //当currentTime改变后就会触发timeupdate事件，因此不需要再次设置进度条长度
 }
 
 //音量大小设置
 var volumeBar = focusPlayer.querySelector(".volumeBar");
 var volumeBtn = focusPlayer.querySelector(".volume");
 var volumePane = focusPlayer.querySelector(".volumePane");

 //音量面板的打开与关闭
 volumeBtn.addEventListener("click",function(){
     //如果面板已经打开了，那么再点击就是静音与非静音的来回切换
     if(volumePane.classList.contains("open")){
         if(video.muted ){
             openVioce();
         }else{
            closeVioce();
         } 
     }else{
         //在面板未打开状态下
         //如果当前是静音状态就切换成非静音状态并打开面板
         if(video.muted ){
             openVioce();
         }
     }
    
     volumePane.classList.add("open")
 },false)

 function openVioce(){
     volumeBar.value = 50;
     setVolume();
 }
 function closeVioce(){
     volumeBar.value = 0;
     setVolume();
 }
 volumePane.addEventListener("mouseleave",function(){
     volumePane.classList.remove("open");
 },false)
 
 //刚打开的时候音量为0
 video.muted=true;
 //设置音量函数
 function setVolume(){
     if(volumeBar.value==0){
         //打卡静音
         video.muted = true;
         volumeBtn.classList.replace("voice","mute");
     }else{
         //打开声音
         video.muted = false;
         volumeBtn.classList.replace("mute","voice");
     }
     volumeBar.style.background = 'linear-gradient(to right,orange, white '+volumeBar.value+'%, white)';
     video.volume= volumeBar.value/100;
 }

 volumeBar.addEventListener("input",setVolume,false)
 

 //倍速设置
 var ratePane = focusPlayer.querySelector(".playBackRate");
 var rateList = ratePane.querySelectorAll("li");
 var rateBtn = focusPlayer.querySelector(".rate")
 //面板的打开
 rateBtn.addEventListener("click",function(){
     ratePane.classList.toggle("open");
 })
 ratePane.addEventListener("mouseleave",function(){ratePane.classList.remove("open");},false)
 
 for(var i=0; i<rateList.length; i++){
     rateList[i].onclick = function(){
         video.playbackRate = parseFloat(this.innerHTML);
     }
 }

 //视频播放菜单的打开与关闭
 var videoList = focusPlayer.querySelector(".video_list");
 var fpSwitch = videoList.querySelector(".fp_switch");
 videoList.state = false;
 EventUtil.addHandler(fpSwitch,"click",function(){
    if(!videoList.state){
        //打开
        videoList.style.right = "0px";
        fpSwitch.querySelector(".open").style.display = "none";
        fpSwitch.querySelector(".close").style.display = "block";
        videoList.state = true;
    }else{
        videoList.style.right = "-160px";
        fpSwitch.querySelector(".open").style.display = "block";
        fpSwitch.querySelector(".close").style.display = "none";
        videoList.state = false;
    }
 })

 //播放控制面板的打开与关闭
 EventUtil.addHandler(focusPlayer,"mousemove",function(){
     clearTimeout(focusPlayer.timer);
     controlPane.style.display = "block";
     focusPlayer.timer = setTimeout(function(){
         if(!video.paused){
            controlPane.style.display = "none";
         }
     },2000)
 })
 EventUtil.addHandler(focusPlayer,"mouseleave",function(){
    clearTimeout(focusPlayer.timer);
    if(!video.paused){
        controlPane.style.display = "none";
    }else{
        controlPane.style.display = "block";
    }
    
})

 


 
