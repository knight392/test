var todayHots_info = new Object();

todayHots_info.title  = [
     "他是峡谷里奔跑的召唤师！ 易烊千玺代言王者荣耀",
     "广东男篮确认易建联跟腱断裂 已顺利接受手术",
     "8500立方米/秒！成都迎本世纪以来最大沱江洪峰",
     "星巴克门店拒收硬币引发热议，官方回应",
     "杨超越对粉丝灵魂三连问，成家立业有成就了吗？",
     "超新星：陈小纭射箭强势夺冠，于小彤台下超激动",
     "鹅外惊喜：张沫凡回应奉子成婚，称好事将近",
     "辽宁悬赏30万的杀妻案告破！2千多警力搜捕",
     "鲍毓明回应涉嫌性侵案：没见过女方身份证",
     "超新星：女子武术，刘人语绝美舞枪仙气飘飘",
     "广东2-1辽宁加冕CBA十冠王，阿联受伤",
     "15日NBA五佳球 小琼斯旱地拔葱隔人暴扣",
     "嘎嘎：杨超越下腰走路，这柔韧度太绝了",
     "超新星运动会：纪凌尘破男子50米纪录夺冠",
]


todayHots_info.caption = [
    "00:58",
    "00:26",
    "01:06",
    "01:07",
    "01:52",
    "36:14",
    "01:08",
    "00:34",
    "01:56",
    "03:57",
    "03:58",
    "01:05",
    "01:16",
    "02:20",
]

todayHots_info.img = [
    "img/row_box_todayNews/list_item1.jpg",
    "img/row_box_todayNews/list_item2.jpg",
    "img/row_box_todayNews/list_item3.jpg",
    "img/row_box_todayNews/list_item4.jpg",
    "img/row_box_todayNews/list_item5.jpg",
    "img/row_box_todayNews/list_item6.jpg",
    "img/row_box_todayNews/list_item7.jpg",
    "img/row_box_todayNews/list_item8.jpg",
    "img/row_box_todayNews/list_item9.jpg",
    "img/row_box_todayNews/list_item10.jpg",
    "img/row_box_todayNews/list_item11.jpg",
    "img/row_box_todayNews/list_item12.jpg",
    "img/row_box_todayNews/list_item13.jpg",
    "img/row_box_todayNews/list_item14.jpg",
]
todayHots_info.img_inner = [
  "img/row_box_todayNews/list_item1_inner.jpg",
  "img/row_box_todayNews/list_item2_inner.jpg",
  "img/row_box_todayNews/list_item3_inner.jpg",
  "img/row_box_todayNews/list_item4_inner.jpg",
  "img/row_box_todayNews/list_item5_inner.jpg",
  "img/row_box_todayNews/list_item6_inner.jpg",
  "img/row_box_todayNews/list_item7_inner.jpg",
  "img/row_box_todayNews/list_item8_inner.jpg",
  "img/row_box_todayNews/list_item9_inner.jpg",
  "img/row_box_todayNews/list_item10_inner.jpg",
  "img/row_box_todayNews/list_item11_inner.jpg",
  "img/row_box_todayNews/list_item12_inner.jpg",
]




function setInfo(obj,source,item){
    var list_item = null;
    if(item){
      list_item = item;
    }else{
       list_item =  obj.querySelectorAll(".list_item");
    }
    var imgInner_index = 0;
    for(var i=0; i<list_item.length; i++){

      //一种是有icon的
        if(list_item[i].querySelector(".figure_detail .icon")){
          list_item[i].querySelector(".figure_detail .text").innerHTML =  source.title[i];
          //一种是有大标题和小标题
        }else if(list_item[i].querySelector(".figure_detail .figure_title")){
          list_item[i].querySelector(".figure_detail .figure_title").innerHTML =  source.title[i];
          list_item[i].querySelector(".figure_detail .figure_desc").innerHTML = source.desc[i];
        }
        else{
          //一种是只有文字的
          list_item[i].querySelector(".figure_detail").innerHTML = source.title[i];
        }
        
        if(list_item[i].querySelector(".figure_img .total")){
          list_item[i].querySelector(".figure_img .total").innerHTML = source.caption[i];
        }else if(list_item[i].querySelector(".figure_img .figure_caption")){
          list_item[i].querySelector(".figure_img .figure_caption").innerHTML = source.caption[i];
        }
        if(list_item[i].querySelector(".figure_img .cover_pane")){
          list_item[i].querySelector(".figure_img .cover_pane img").src = source.img[i];
        }else {
          list_item[i].querySelector(".figure_img .figure_cover img").src = source.img[i];
        }
        

        if(list_item[i].querySelector(".figure_keyframes")){
          list_item[i].querySelector(".figure_keyframes img").src = source.img_inner[imgInner_index++];
        }
        //原创精选的作者信息
        if(list_item[i].querySelector(".author_figure")){
          list_item[i].querySelector(".author_figure img").src = source.author_pic[i];
          list_item[i].querySelector(".author_figure span").innerHTML = source.author_name[i];
        }
    }
}

var todayHots = document.querySelector(".todayHots");
setInfo(todayHots,todayHots_info);
 


  var originalWorks_info = new Object();
  originalWorks_info.title = [
    "这技术太惊人了！滑雪冲下悬崖，还得躲避密集的树木",
    "高考志愿填报时，考虑院校优先还是专业优先呢",
    "世锦赛赛场现搞笑事件，尼尔·罗伯逊泼洒咖啡后退场",
    "一碗“乱七八糟”的虾仁蛋面",
    "专骗大学毕业生！电话一响几千元就没了！",
    "记录平凡，像素笔记用镜头将现实拆成无数个像素",
    "香港没歌坛，只有娱乐圈—黄家驹Beyond人物志",
    "飞狗MOCO来袭！国产动画“新物种”治愈又暖心",
    "长这么大没见过这么嚣张的棋！今天让你见识下",
    "在日本主场把日本选手打得抱头痛哭，许昕够狠、够浪！",
    "没有网购却收到“货到付款”的快递，你可得小心了",
    "支配华语乐坛的传奇，从服务生到音乐天王的巅峰逆袭",
    "经纪人痛批星女郎鄂靖文：艺人不营业就是不敬业!",
    "动画趣味解读来了！当民法典遇上《四大名著》",
    "哈登库里詹姆斯一个都不放过 莱昂纳德生涯50大抢断",
  ]

  originalWorks_info.caption = [
    "02:21",
    "02:49",
    "01:24",
    "07:48",
    "17:32",
    "07:44",
    "05:12",
    "08:55",
    "03:23",
    "01:17",
    "15:56",
    "11:54",
    "01:40",
    "09:42",
  ]

  originalWorks_info.img = [
      "img/original_works/list_item1.jpg",
      "img/original_works/list_item2.jpg",
      "img/original_works/list_item3.jpg",
      "img/original_works/list_item4.jpg",
      "img/original_works/list_item5.jpg",
      "img/original_works/list_item6.jpg",
      "img/original_works/list_item7.jpg",
      "img/original_works/list_item8.jpg",
      "img/original_works/list_item9.jpg",
      "img/original_works/list_item10.jpg",
      "img/original_works/list_item11.jpg",
      "img/original_works/list_item12.jpg",
      "img/original_works/list_item13.jpg",
      "img/original_works/list_item14.jpg",
      
  ]
  originalWorks_info.img_inner =[
    "img/original_works/list_item1_inner.jpg",
    "img/original_works/list_item2_inner.jpg",
    "img/original_works/list_item3_inner.jpg",
    "img/original_works/list_item4_inner.jpg",
    "img/original_works/list_item5_inner.jpg",
    "img/original_works/list_item7_inner.jpg",
    "img/original_works/list_item10_inner.jpg",
    "img/original_works/list_item12_inner.jpg",
    "img/original_works/list_item13_inner.jpg",
    "img/original_works/list_item14_inner.jpg",
  ]

originalWorks_info.author_pic = [
  "img/original_works/author1.jpg",
  "img/original_works/author2.jpg",
  "img/original_works/author3.jpg",
  "img/original_works/author4.jpg",
  "img/original_works/author5.jpg",
  "img/original_works/author6.jpg",
  "img/original_works/author7.jpg",
  "img/original_works/author8.jpg",
  "img/original_works/author9.jpg",
  "img/original_works/author10.jpg",
  "img/original_works/author11.jpg",
  "img/original_works/author12.jpg",
  "img/original_works/author13.jpg",
  "img/original_works/author14.jpg",
]

originalWorks_info.author_name = [
  "梦与极限",
  "鹅老师课堂",
  "斯洛克金牌学院",
  "李子柒",
  "小鹅花钱",
  "潮生",
  "脑洞菌Alee",
  "潮生",
  "街头象棋",
  "斯蒂卡V乒乓",
  "小鹅花钱",
  "脑洞菌Alee",
  "老板不知道的我",
  "中国纪委国家监委网站",
  "篮球老诗人",
  
]


  var originalWorks = document.querySelector(".originalWorks");
  setInfo(originalWorks,originalWorks_info);

  
  

  var shortVideo_infos = [];
  shortVideo_infos[0] = new Object();
  shortVideo_infos[0].title = [
    "潮汕各种橄榄美食，健康又开胃，既能下饭又能当零食吃",
    "捧红孙越、王自健的相声前辈重出江湖，却因搭档不给力令老郭纠结",
    "鹰嘴豆沙拉怎么做？色香味俱全，10分钟就能搞定",
    "陶虹称父母通过去世把自己叫醒，从此活的不再混沌 ",
    "【拙见·演讲】洪启：音乐里的理想",
    "酸酸甜甜菠萝饭",
    "把夜市里的人气小吃搬回家：炸鱿鱼海鲜饭丨绵羊料理",
    "奥特曼开车送披萨外卖 小猪佩奇睡衣小英雄汪汪队秋季郊游",
    "专专和小专专的星星泥PK，一个明亮一个暗黑，喜欢哪种？无硼砂",
    "TFBOYS组团7年，各位成员最新单曲合集!你最爱哪一首?",
  ]
  shortVideo_infos[0].caption = [
    "01:03",
    "03:50",
    "03:42",
    "04:42",
    "19:52",
    "06:42",
    "07:42",
    "08:42",
    "09:42",
    "10:42",
  ]

  shortVideo_infos[0].img = [
    "img/shortVideo/mod_figure1/list_item1.jpg",
    "img/shortVideo/mod_figure1/list_item2.jpg",
    "img/shortVideo/mod_figure1/list_item3.jpg",
    "img/shortVideo/mod_figure1/list_item4.jpg",
    "img/shortVideo/mod_figure1/list_item5.jpg",
    "img/shortVideo/mod_figure1/list_item6.jpg",
    "img/shortVideo/mod_figure1/list_item7.jpg",
    "img/shortVideo/mod_figure1/list_item8.jpg",
    "img/shortVideo/mod_figure1/list_item9.jpg",
    "img/shortVideo/mod_figure1/list_item10.jpg",
    
  ]
  shortVideo_infos[0].img_inner = [
    "img/shortVideo/mod_figure1/list_item1_inner.jpg",
    "img/shortVideo/mod_figure1/list_item2_inner.jpg",
    "img/shortVideo/mod_figure1/list_item3_inner.jpg",
    "img/shortVideo/mod_figure1/list_item4_inner.jpg",
    "img/shortVideo/mod_figure1/list_item5_inner.jpg",
    "img/shortVideo/mod_figure1/list_item6_inner.jpg",
    "img/shortVideo/mod_figure1/list_item7_inner.jpg",
  ]

  shortVideo_infos[1] = new Object();
  shortVideo_infos[1].title = [
    "暴走的小药:挑战98K通关团竞遗迹，遭到敌人狂喷，这也太难了!",
    "和平精英:雪地双桥镇，-局捡十个三级包，你敢信!",
    "狙击手麦克:氪金众神之王只花了800元，还送了两套女神装!",
    "和平精英:挑战跳伞直接跳到火力对决无人机上，秀操作的时候到了",
    "爆笑吃鸡: SS9新赛季展示最终皮肤竟是众神之王宙斯!太酷了",
    "和平精英:挑战只用C字楼+密室吃鸡，机场连灭12人，太牛了!",
    "爆笑师徒45:亲手怒杀萌新队友，却心痛落泪，难道我真的错了吗",
    "和平精英:火力对决可以“无限复制”任何武器，我不会被封号吧",
    "爆笑吃鸡:无人机的秘密!偷偷潜伏到敌人面前，竟没被发现?",
    "和平精英:挑战迷宫+敌人物资吃鸡，偶遇小姐姐，送我满配神器!"
  ]
  shortVideo_infos[1].caption = [
    "02:59",
    "02:14",
    "02:42",
    "01:19",
    "01:18",
    "02:24",
    "01:58",
    "01:20",
    "01:19",
    "02:15",
  ]

  shortVideo_infos[1].img = [
    "img/shortVideo/mod_figure2/list_item1.jpg",
    "img/shortVideo/mod_figure2/list_item2.jpg",
    "img/shortVideo/mod_figure2/list_item3.jpg",
    "img/shortVideo/mod_figure2/list_item4.jpg",
    "img/shortVideo/mod_figure2/list_item5.jpg",
    "img/shortVideo/mod_figure2/list_item6.jpg",
    "img/shortVideo/mod_figure2/list_item7.jpg",
    "img/shortVideo/mod_figure2/list_item8.jpg",
    "img/shortVideo/mod_figure2/list_item9.jpg",
    "img/shortVideo/mod_figure2/list_item10.jpg"

    
  ]
  shortVideo_infos[1].img_inner = [
    "img/shortVideo/mod_figure2/list_item1_inner.jpg",
    "img/shortVideo/mod_figure2/list_item2_inner.jpg",
    "img/shortVideo/mod_figure2/list_item3_inner.jpg",
    "img/shortVideo/mod_figure2/list_item4_inner.jpg",
    "img/shortVideo/mod_figure2/list_item5_inner.jpg",
    "img/shortVideo/mod_figure2/list_item6_inner.jpg",
    "img/shortVideo/mod_figure2/list_item7_inner.jpg",
    "img/shortVideo/mod_figure2/list_item8_inner.jpg",
    "img/shortVideo/mod_figure2/list_item9_inner.jpg",
    "img/shortVideo/mod_figure2/list_item10_inner.jpg",
    
  ]

  shortVideo_infos[2] = new Object();
  shortVideo_infos[2].title = [
    "全球首款粒子束武器即将问世，什么都无法拦截，可将航母直接打穿",
    "歼20升级“狂野模式”!令美军事措手不及，俄:中国无敌了!",
    "中国大陆还有五个月就要统一台湾了？美国政客文章在岛内引发讨论",
    "美侦察机再次逼近广东，东部战区这次果断出手，大批军舰猛烈开火",
    "朝鲜战场，志愿军首次看见苏联战机，奇特的外形就将众人吸引",
    "如果原子弹爆炸，跳入水中能否保住性命，日本人用亲身经历告诉你",
    "真以为中国不会还击?美军舰穿越台海，逼近大陆，解放军立即行动",
    "朝鲜战争是真正的现代化战争，老兵：上去一个连半小时就打光",
    "挑战中国底线？解放军集结台海后，美媒曝光美国对台的下一步计划",
    "出兵朝鲜：中国志愿军刚踏上朝鲜战场，首都平壤就已经沦陷了"
    
  ]
  shortVideo_infos[2].caption = [
    "02:59",
    "02:14",
    "02:42",
    "01:19",
    "01:18",
    "02:24",
    "01:58",
    "01:20",
    "01:19",
    "02:15",
  ]

  shortVideo_infos[2].img = [
    "img/shortVideo/mod_figure3/list_item1.jpg",
    "img/shortVideo/mod_figure3/list_item2.jpg",
    "img/shortVideo/mod_figure3/list_item3.jpg",
    "img/shortVideo/mod_figure3/list_item4.jpg",
    "img/shortVideo/mod_figure3/list_item5.jpg",
    "img/shortVideo/mod_figure3/list_item6.jpg",
    "img/shortVideo/mod_figure3/list_item7.jpg",
    "img/shortVideo/mod_figure3/list_item8.jpg",
    "img/shortVideo/mod_figure3/list_item9.jpg",
    "img/shortVideo/mod_figure3/list_item10.jpg"
    
  ]
  shortVideo_infos[2].img_inner = [
    "img/shortVideo/mod_figure3/list_item1_inner.jpg",
    "img/shortVideo/mod_figure3/list_item3_inner.jpg",
    "img/shortVideo/mod_figure3/list_item4_inner.jpg",
    "img/shortVideo/mod_figure3/list_item5_inner.jpg",
    "img/shortVideo/mod_figure3/list_item6_inner.jpg",
    "img/shortVideo/mod_figure3/list_item7_inner.jpg",
    "img/shortVideo/mod_figure3/list_item8_inner.jpg",
    "img/shortVideo/mod_figure3/list_item9_inner.jpg"
 
  ]

  shortVideo_infos[3] = new Object();
  shortVideo_infos[3].title = [
    "夫妻俩打麻将，用骂人的话对暗号，你一句我一句太逗了",
    "公交车上看到一位美女，走近一看，手机屏幕是亮点！",
    "适合捉弄朋友和室友的爆笑食物恶作剧，DIY整蛊点子和妙招！",
    "看来我们办公室里的饮水机要报废了，同事们真会玩，太逗了！",
    "广东梅州发现一条“聪明猪”，会听懂主人说话看完感觉智商受到侮辱",
    "巧克力成精了，还是逃不了被人吃掉",
    "神探王小九3：医生走错教室？王小九通过味道找出真相，会是谁呢",
    "谁是卧底2：师生为找卧底斗智斗勇，老师输了被罚无限放假，真逗",
    "涂鸦精灵：趣味小精灵，给你的生活带来一丝快乐！",
    "结婚不到一个月就天天睡懒觉，老公只好下狠手了，这馊主意真不错！",
  ]
  shortVideo_infos[3].caption = [
    "01:03",
    "03:50",
    "03:42",
    "04:42",
    "19:52",
    "06:42",
    "07:42",
    "08:42",
    "09:42",
    "10:42",
  ]

  shortVideo_infos[3].img = [
    "img/shortVideo/mod_figure4/list_item1.jpg",
    "img/shortVideo/mod_figure4/list_item2.jpg",
    "img/shortVideo/mod_figure4/list_item3.jpg",
    "img/shortVideo/mod_figure4/list_item4.jpg",
    "img/shortVideo/mod_figure4/list_item5.jpg",
    "img/shortVideo/mod_figure4/list_item6.jpg",
    "img/shortVideo/mod_figure4/list_item7.jpg",
    "img/shortVideo/mod_figure4/list_item8.jpg",
    "img/shortVideo/mod_figure4/list_item9.jpg",
    "img/shortVideo/mod_figure4/list_item10.jpg"
    
  ]
  shortVideo_infos[3].img_inner = [
    "img/shortVideo/mod_figure4/list_item1_inner.jpg",
    "img/shortVideo/mod_figure4/list_item3_inner.jpg",
    "img/shortVideo/mod_figure4/list_item4_inner.jpg",
    "img/shortVideo/mod_figure4/list_item5_inner.jpg",
    "img/shortVideo/mod_figure4/list_item6_inner.jpg",
    "img/shortVideo/mod_figure4/list_item7_inner.jpg",
    "img/shortVideo/mod_figure4/list_item8_inner.jpg",
    "img/shortVideo/mod_figure4/list_item9_inner.jpg",
    "img/shortVideo/mod_figure4/list_item10_inner.jpg",
    
  ]

  shortVideo_infos[4] = new Object();
  shortVideo_infos[4].title = [
    "国服第- .诺手大战5大职业高手，连Faker都被秀哭，这操作太可怕了",
    "主播真会玩永恩篇:我愚蠢的欧豆豆你的哥哥回来啦",
    "看到theshy被3人包围，阿水:他死了!下一.秒瞬间打脸，惊呆众人",
    "Mlxg赛前精准预测出结局:不用看比赛，就知道iG要被LGD零封!",
    "魅惑了万千人的九尾妖狐，竟被孙悟空说还没母猴子漂亮",
    "云顶之弈:当亚索变成圣盾使，再加上两个青龙刀，-秒一个大招!",
    "搞笑英雄联盟动画，小鱼人击杀卡特身负重伤，却被小兵虐待致死",
    "L0L:世界第一机器人单挑5个青铜，预判神Q连钩5人，竟打赢了对手",
    "中国队暴揍韩国队，Uzi香锅默契配合功不可没，彻底把Faker秀傻了!",
    "LOL:全球第一人，盲僧1级10杀，开局3600金币，把官方都看懵了",
  ]
  shortVideo_infos[4].caption = [
    "01:02",
    "08:04",
    "01:03",
    "01:12",
    "01:16",
    "01:02",
    "00:53",
    "01:02",
    "01:03",
    "01:41",
  ]

  shortVideo_infos[4].img = [
    "img/shortVideo/mod_figure5/list_item1.jpg",
    "img/shortVideo/mod_figure5/list_item2.jpg",
    "img/shortVideo/mod_figure5/list_item3.jpg",
    "img/shortVideo/mod_figure5/list_item4.jpg",
    "img/shortVideo/mod_figure5/list_item5.jpg",
    "img/shortVideo/mod_figure5/list_item6.jpg",
    "img/shortVideo/mod_figure5/list_item7.jpg",
    "img/shortVideo/mod_figure5/list_item8.jpg",
    "img/shortVideo/mod_figure5/list_item9.jpg",
    "img/shortVideo/mod_figure5/list_item10.jpg"
    
  ]
  shortVideo_infos[4].img_inner = [
    "img/shortVideo/mod_figure5/list_item1_inner.jpg",
    "img/shortVideo/mod_figure5/list_item2_inner.jpg",
    "img/shortVideo/mod_figure5/list_item3_inner.jpg",
    "img/shortVideo/mod_figure5/list_item4_inner.jpg",
    "img/shortVideo/mod_figure5/list_item5_inner.jpg",
    "img/shortVideo/mod_figure5/list_item7_inner.jpg",
    "img/shortVideo/mod_figure5/list_item8_inner.jpg",
    "img/shortVideo/mod_figure5/list_item9_inner.jpg",
    
  ]

  shortVideo_infos[5] = new Object();
  shortVideo_infos[5].title = [
    "乐艺谈|弦吟琴鸣，流连沉浸大提琴曼妙弦音(“美丽星期天”公益演出)",
    "米希亚-Everything (冲绳烛光之夜现场)",
    "超强的14岁大提琴天才，凭感觉调音的绝对音感(中字)",
    "芭蕾舞者的必备技能一一“定制”她们的足尖鞋。",
    "钢琴演绎《千与千寻》主题曲，太治愈了",
    "鬼才小提琴家吉利●阿帕一Gigue in 4 movements",
    "满满的童年回忆，萨克斯演绎《百变小樱》《精灵宝可梦》 主题曲",
    "大英博物馆里那些偷来、抢来的艺术品应该何去何从?",
    "啊!艺术-特殊收藏篇:乐此不疲的唐吉诃德(六)",
    "重庆歌舞团古典舞《丽人行》，太美了",
  ]
  shortVideo_infos[5].caption = [
    "53:55:00",
    "06:36",
    "12:41",
    "05:31",
    "05:35",
    "04:56",
    "06:29",
    "09:32",
    "24:14",
    "08:02"
  ]
  shortVideo_infos[5].img = [
    "img/shortVideo/mod_figure6/list_item1.jpg",
    "img/shortVideo/mod_figure6/list_item2.jpg",
    "img/shortVideo/mod_figure6/list_item3.jpg",
    "img/shortVideo/mod_figure6/list_item4.jpg",
    "img/shortVideo/mod_figure6/list_item5.jpg",
    "img/shortVideo/mod_figure6/list_item6.jpg",
    "img/shortVideo/mod_figure6/list_item7.jpg",
    "img/shortVideo/mod_figure6/list_item8.jpg",
    "img/shortVideo/mod_figure6/list_item9.jpg",
    "img/shortVideo/mod_figure6/list_item10.jpg"
    
  ]
  shortVideo_infos[5].img_inner = [
    "img/shortVideo/mod_figure6/list_item1_inner.jpg",
    "img/shortVideo/mod_figure6/list_item9_inner.jpg", 
  ]



  


  //热点短视频
  var shortVideo = document.querySelector(".shortVideo");
  var figureTypes = shortVideo.querySelectorAll(".mod_figure");

  

for(var i=0;i<figureTypes.length; i++){
  figureTypes[i].items = figureTypes[i].querySelectorAll(".list_item");
  setInfo(figureTypes[i],shortVideo_infos[i],figureTypes[i].items);
}

  

//同步剧场
var hotTV = document.querySelector(".hot_tv");

var hotTV_info = new Object();

hotTV_info.title = [
  "摩天大楼[全网独播]",
  "且听凤鸣[独播 会员先看]",
  "女世子[全网独播]",
  "幸福还会来敲门",
  "生活像阳光一样灿烂",
  "三十而已[限时免费]",
  "穿越火线[会员先看]",
  "胜算[会员抢先看]",
  "锦绣南歌[全网独播]",
  "嗨，什刹海[会员抢先看]",
  "战毒[会员抢先看]",
  "正是青春璀璨时",
  "不说谎恋人[独播 会员先看]",
  "局中人[会员抢先看]",
  "蜗牛与黄鹂鸟[会员抢先看]",
  "时间倒数[会员抢先看]",
  "凤归四时歌[会员先看]"
]

hotTV_info.desc = [
  "郭涛杨子姗揭穿谎言罗生门",
  "废柴少女杨超越爆笑修仙",
  "尤靖茹女扮男装邂逅姜潮",
  "卫龙cp聂远吴谨言续前缘",
  "二婚夫妇宋佳袁弘逗趣日常",
  "江疏影童瑶直面30女性困境",
  "鹿晗超燃电竞逐梦",
  "柳云龙金牌谍战来袭",
  "高燃！李沁秦昊虐恋情深",
  "关晓彤吴磊烹饪美味奇缘",
  "黄宗泽吴卓羲关智斌缉毒追凶",
  "三线建设英雄史诗",
  "不说谎霸总与职场萌妹甜恋",
  "林允张新成共谱夏日梦幻恋曲",
  "00后沙雕总裁爆笑追妻",
  "作精女主爱上毒舌王爷"
]

hotTV_info.caption = [
  "更新至04集",
  "更新至18集",
  "更新至10集",
  "更新至15集",
  "更新至15集",
  "全43集",
  "全36集",
  "全40集",
  "全53集",
  "全42集",
  "全30集",
  "全42集",
  "全31集",
  "全49集",
  "全40集",
  "全24集",
  "全34集"
]

hotTV_info.img = [
  "img/row_box_hot_tv/list_item1.jpg",
  "img/row_box_hot_tv/list_item2.jpg",
  "img/row_box_hot_tv/list_item3.jpg",
  "img/row_box_hot_tv/list_item4.jpg",
  "img/row_box_hot_tv/list_item5.jpg",
  "img/row_box_hot_tv/list_item6.jpg",
  "img/row_box_hot_tv/list_item7.jpg",
  "img/row_box_hot_tv/list_item8.jpg",
  "img/row_box_hot_tv/list_item9.jpg",
  "img/row_box_hot_tv/list_item10.jpg",
  "img/row_box_hot_tv/list_item11.jpg",
  "img/row_box_hot_tv/list_item12.jpg",
  "img/row_box_hot_tv/list_item13.jpg",
  "img/row_box_hot_tv/list_item14.jpg",
]

var hotTV_hover_info = new Object();
hotTV_hover_info.title = hotTV_info.title;
hotTV_hover_info.img = [
  "img/row_box_hot_tv/list_item1_inner.jpg",
  "img/row_box_hot_tv/list_item2_inner.jpg",
  "img/row_box_hot_tv/list_item3_inner.jpg",
  "img/row_box_hot_tv/list_item4_inner.jpg",
  "img/row_box_hot_tv/list_item5_inner.jpg",
  "img/row_box_hot_tv/list_item6_inner.jpg",
  "img/row_box_hot_tv/list_item7_inner.jpg",
  "img/row_box_hot_tv/list_item8_inner.jpg",
  "img/row_box_hot_tv/list_item9_inner.jpg",
  "img/row_box_hot_tv/list_item10_inner.jpg",
  "img/row_box_hot_tv/list_item11_inner.jpg",
  "img/row_box_hot_tv/list_item12_inner.jpg",
  "img/row_box_hot_tv/list_item13_inner.jpg",
  "img/row_box_hot_tv/list_item14_inner.jpg",
]

//悬浮面板信息,由于时间不足，只添加图片或视频 和title

function setHoverPaneInfo(obj,source){
  var items = obj.querySelectorAll(".figure_img_hover_pane");
  var video_index = 0;
  var img_index = 0;
  for(var i=0; i<items.length; i++){
    items[i].querySelector(".hover_pane_title").innerHTML = source.title[i];
    if(items[i].querySelector("video")){
      items[i].querySelector("video").src = source.video[video_index++];
    }else{
      items[i].querySelector(".hover_pane_cover img").src = source.img[img_index++];
    }
  }
}

setInfo(hotTV,hotTV_info);
setHoverPaneInfo(hotTV,hotTV_hover_info);


//综艺

var varietyShow = document.querySelector(".variety_show");

var varietyShow_info = new Object();

varietyShow_info.title = [
  "脱口秀大会·爆笑吃瓜",
  "女人30+·超有情调",
  "忘不了·青岛贵妇回归",
  "超新星·绝美体操",
  "极挑·张东升上身",
  "明日之子·进来洗耳朵",
  "潮玩人类在哪里",
  "环游记·刘敏涛心态崩",
  "嘎嘎们·这小蛮腰真软",
  "奔跑吧•杨颖笑翻",
  "你的明子·全程爆笑",
  "极挑·仓鼠跑轮既视感",
  "诗和远方·超女师徒",
  "R1SE周年季·笑出腹肌",
]

varietyShow_info.desc = [
  "建国爆猛料：李诞离婚？",
  "陶虹48岁仍和徐峥约会",
  "黄渤烈焰红唇逗笑李佳琦",
  "陈小纭张艺凡变黑白天鹅",
  "秦昊太直男气哭杨超越",
  "周深绝美花腔像天上仙音",
  "吴亦凡新歌首唱舞台酷炫",
  "贾玲爆笑模仿张雨绮顺拐",
  "哇哦 杨超越下腰走路",
  "宣仪忘记《卡路里》歌词",
  "付思超刘炀被罚化奇葩妆",
  "王迅秦昊玩水球看呆杨超越",
  "尚雯婕胡海泉唱《游仙吟》",
]

varietyShow_info.caption = [
  "更新至04集",
  "更新至18集",
  "更新至10集",
  "更新至15集",
  "更新至15集",
  "全43集",
  "全36集",
  "全40集",
  "全53集",
  "全42集",
  "全30集",
  "全42集",
  "全31集",
  "全49集",
  "全40集",
  "全24集",
  "全34集"
]

varietyShow_info.img = [
  "img/variety_shows/list_item1.jpg",
  "img/variety_shows/list_item2.jpg",
  "img/variety_shows/list_item3.jpg",
  "img/variety_shows/list_item4.jpg",
  "img/variety_shows/list_item5.jpg",
  "img/variety_shows/list_item6.jpg",
  "img/variety_shows/list_item7.jpg",
  "img/variety_shows/list_item8.jpg",
  "img/variety_shows/list_item9.jpg",
  "img/variety_shows/list_item10.jpg",
  "img/variety_shows/list_item11.jpg",
  "img/variety_shows/list_item12.jpg",
  "img/variety_shows/list_item13.jpg",
  "img/variety_shows/list_item14.jpg",
]

varietyShow_hover_info = new Object();
varietyShow_hover_info.title = varietyShow_info.title;
varietyShow_hover_info.video = [
  "img/video_test/v_test1.mp4",
  "img/video_test/v_test2.mp4",
  "img/video_test/v_test3.mp4",
  "img/video_test/v_test4.mp4",
  "img/video_test/v_test1.mp4",
  "img/video_test/v_test2.mp4",
  "img/video_test/v_test3.mp4",
  "img/video_test/v_test4.mp4",
  "img/video_test/v_test1.mp4",
  "img/video_test/v_test2.mp4",
  "img/video_test/v_test3.mp4",
  "img/video_test/v_test4.mp4",
  "img/video_test/v_test1.mp4",
  "img/video_test/v_test2.mp4",
 
]

setInfo(varietyShow,varietyShow_info);


setHoverPaneInfo(varietyShow,varietyShow_hover_info);


//强势推挡
var choice_qsjd = document.querySelector(".choice_qsjd");

var choice_qsjd_info = new Object();

choice_qsjd_info.title = [
  "酒剑","怒火追凶","古戒奇谭","穿书自救指南","瞄准","有翡","狼殿下","隐秘而伟大"
]
choice_qsjd_info.desc = [
  "酒剑仙谢苗平蜀山、战魔兽",
  "热血青年身陷毒巢逆风翻盘",
  "古墓现千年女祭司蛇影魅踪",
  "书穿反派开启洗白之路",
  "黄轩陈赫180小时狙击对决",
  "赵丽颖王一博仗热血战江湖",
  "野少年王大陆恋上李沁",
  "李易峰金晨乱世蜕变 ",
]

choice_qsjd_info.img = [
  "img/choice_qsjd/list_item1.jpg",
  "img/choice_qsjd/list_item2.jpg",
  "img/choice_qsjd/list_item3.jpg",
  "img/choice_qsjd/list_item4.jpg",
  "img/choice_qsjd/list_item5.jpg",
  "img/choice_qsjd/list_item6.jpg",
  "img/choice_qsjd/list_item7.jpg",
  "img/choice_qsjd/list_item8.jpg",
]

var choice_qsjd_hover_info = new Object();
choice_qsjd_hover_info.title = choice_qsjd_info.title;
choice_qsjd_hover_info.img = [
  "img/choice_qsjd/list_item1_inner.jpg",
  "img/choice_qsjd/list_item2_inner.jpg",
  "img/choice_qsjd/list_item3_inner.jpg",
  "img/choice_qsjd/list_item5_inner.jpg",
  "img/choice_qsjd/list_item7_inner.jpg",
  "img/choice_qsjd/list_item8_inner.jpg",
]
choice_qsjd_hover_info.video = [
  "img/video_test/v_test2.mp4",
  "img/video_test/v_test4.mp4",
]

setInfo(choice_qsjd,choice_qsjd_info);
setHoverPaneInfo(choice_qsjd,choice_qsjd_hover_info);

//最强笑点

shortVideo_infos[3].desc= varietyShow_info.desc;
var hotFuns = document.querySelector(".hot_funs");
setInfo(hotFuns,shortVideo_infos[3]);

//精品游戏
var hotGames = document.querySelector(".hot_games");
shortVideo_infos[4].desc= hotTV_info.desc;
setInfo(hotGames,shortVideo_infos[4]);

//综艺会员专享

var variety_show_vip = document.querySelector(".variety_show_VIP");

setInfo(variety_show_vip,varietyShow_info);

setHoverPaneInfo(variety_show_vip,varietyShow_hover_info);

//花絮、剧透、预告片
var TVPreview = document.getElementById("new_tv_preview");
shortVideo_infos[0].desc = hotTV_info.desc;
setInfo(TVPreview,shortVideo_infos[0]);
setHoverPaneInfo(TVPreview,hotTV_hover_info);
