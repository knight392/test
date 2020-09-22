// firefox和chrome认为滚动条属于body标签对象，
 // 而scrollTop值又需要通过html标签对象来获取。

 //head的fixed 和 reletive状态切换
 var htmlBox = document.documentElement;
 var bodyBox = document.body;
 var head = document.querySelector(".head");
 var headCenter = head.querySelector(".center");
 var headRight = head.querySelector(".right");
 var searchForm = head.querySelector(".search_form");
 
 //边缘工具栏
 var sideTool = document.querySelector(".side_fixed_tool");
sideTool.toTop = sideTool.querySelector(".backToTop");
sideTool.download = sideTool.querySelector(".download");



 
 
 
 
 bodyBox.onscroll = setBodyScrollAllEvent;
 
 function setBodyScrollAllEvent(){
     //head的定位方式
     if(htmlBox.scrollTop>700){
         head.classList.add("head_fixed");
         head.querySelector(".head_content_inner").classList.add("head_content_inner_fixed");
         head.querySelector(".logo").classList.add("logo_fixed");
         head.querySelector(".channel_nav_fixed").style.display = "block";
         moreChannelPane.style.display = "none";
         searchForm.classList.add("search_form_fixed");
         searchForm.querySelector(".search_input").classList.add("search_input_fixed");
         headRight.appendChild(searchForm);
         //加深icon悬浮颜色
         head.querySelector(".historyIcon").classList.add("historyIcon_fixed");
         head.querySelector(".createIcon").classList.add("createIcon_fixed");
         head.querySelector(".pc_downloadIcon").classList.add("pc_downloadIcon_fixed");

     }else{
         head.classList.remove("head_fixed");
         head.querySelector(".head_content_inner").classList.remove("head_content_inner_fixed");
         head.querySelector(".logo").classList.remove("logo_fixed");
         head.querySelector(".channel_nav_fixed").style.display = "none";
         searchForm.classList.remove("search_form_fixed");
         searchForm.querySelector(".search_input").classList.remove("search_input_fixed");
         headCenter.appendChild(searchForm);
         //颜色还原
         head.querySelector(".historyIcon").classList.remove("historyIcon_fixed");
         head.querySelector(".createIcon").classList.remove("createIcon_fixed");
         head.querySelector(".pc_downloadIcon").classList.remove("pc_downloadIcon_fixed");
     }
     //边缘工具的返回顶部按钮
     
     if(htmlBox.scrollTop>1000){
        sideTool.toTop.style.display = "block";
        sideTool.download.classList.remove("bottom_tool_item");
     }else{
        sideTool.toTop.style.display = "none";
        sideTool.download.classList.add("bottom_tool_item");
     }
 
 }
 
 //中途刷新页面时要重新判断是否head要设为fixed,以及是否返回顶部按钮是否出现
 setBodyScrollAllEvent();

 //返回顶部
 sideTool.toTop.onclick = function(){
    sideTool.toTop.timer = setInterval(function(){
        if(htmlBox.scrollTop>2000){
            htmlBox.scrollTop -=200;
        }
        else if(htmlBox.scrollTop>1000){
            htmlBox.scrollTop -=100;
        }
        else if(htmlBox.scrollTop>800){
            htmlBox.scrollTop -=80;
        }
        else if(htmlBox.scrollTop>600){
            htmlBox.scrollTop -=80;
        }
        else if(htmlBox.scrollTop>400){
            htmlBox.scrollTop -=60;
        }
        else if(htmlBox.scrollTop>200){
            htmlBox.scrollTop -=40;
        }
        else if(htmlBox.scrollTop>100){
            htmlBox.scrollTop -=20;
        }
        else if(htmlBox.scrollTop>50){
            htmlBox.scrollTop -=5;
        }
        else{
            htmlBox.scrollTop = 0;
            clearInterval(sideTool.toTop.timer);
        }
    },2)
}



 
//返回顶部
// sideTool.toTop.onclick = function(){
//     sideTool.toTop.timer = setInterval(function(){
//         console.log(htmlBox.scrollTop);
//         if(htmlBox.scrollTop<50){
//             htmlBox.scrollTop -= 10;
//         }
//         else if(htmlBox.scrollTop<=0){
//             htmlBox.scrollTop = 0;
//             clearInterval(sideTool.toTop.timer);
//         }else{
//             htmlBox.scrollTop = Math.sqrt(htmlBox.scrollTop);
//         }
        
//     },500)

// }
