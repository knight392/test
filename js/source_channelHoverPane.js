var source_col2_row1 = ["潮玩人类在哪里","明日之子乐团季","脱口秀大会3","超新星运动会","认真的嘎嘎们","女人30+","奔跑吧4","青春环游记2","极限挑战6","炙热的我们","创造营2020","让生活好看","拜托了冰箱6","横冲直撞20岁","王牌对王牌5 "];


var col2_row = document.querySelectorAll(".mode_main_nav .mode_main_nav_1 .nav_figure_popup_pane");

function setChannelItem(target,source){
   var items = target.querySelectorAll(".nav_pop_link");
   
   for(var i=0; i<items.length; i++){
      
       items[i].innerHTML = source[i];
   }
}
 
setChannelItem(col2_row[0],source_col2_row1);

var source_col2_row2 = ["恋与制作人","万界春秋","独步逍遥","Re:0 第2季","飞狗MOCO","一念永恒","非人哉","快把我哥带走","仙风剑雨录","首席御灵师","无上神帝","武动乾坤","假面骑士零一","武神主宰","妖神记"]

setChannelItem(col2_row[1],source_col2_row2);

var source_col3_row1 = [ "超级小熊布迷","舒克贝塔","超迷你战士","乌龙院","巧虎早教专区","汪汪队","小鹿杏仁儿","乐高视频专区","豆乐儿歌","小猪佩奇","爆笑虫子","小公主苏菲亚","海底小纵队","熊猫和小鼹鼠","功夫熊猫" ]

var source_col3_row2 = [ "此画怎讲","城市梦","风味原产地·甘肃","庇护所：阿尔卑斯山求生记","大唐帝陵","地球生命","寻味东莞","风味人间·第2季","航拍中国 第3季","风味实验室·第2季","荒野间谍·第2季","人生第一次","小孩的神秘生活","沸腾吧火锅","风味年夜饭" ]

var col3_row = document.querySelectorAll(".mode_main_nav .mode_main_nav_2 .nav_figure_popup_pane");

setChannelItem(col3_row[0],source_col3_row1);
setChannelItem(col3_row[1],source_col3_row2);

var source_col4_cell1_row2 = [ "操行十分","2019中国好声音","合唱吧！300","篮球大唱片","潮音战纪","2018微博之夜","COLOR VIBES第2季","由你音乐榜样","VIP古典音乐汇","618潮iN盛典","另一种语言","Street Credit街头玩家","大事发声","相信音乐演唱会","滚石经典演唱会" ]

var source_col4_cell2_row1 = ["易经的智慧","明朝皇帝那些事儿","珍稀动物图鉴","解码金庸","樊登：低风险创业课","寻找外星人","武皇：我的后半生","恐龙历险记","韩秀云讲经济","《周易》姓名学","熊猫博士看世界","猫小帅快乐英语","樊登：可复制的沟通力","单词世界","名师教你填报志愿"]

var source_col4_cell2_row2 = [ "SNH48 GROUP总决选","Big磅来了","阿云嘎","郑丹妮专访","Big磅来了","【胡兵不老兵法】","歌剧魅影小剧场","全国青年歌手展演（结业音乐会）","当代年轻人的饮食状况","SNH48 GROUP第七届总决选","曹云金","Big磅来了","《桃源》晚上见#嘎式练声#","【阿杰729】","出戏·鹿晗" ]

var source_col4_cell3_row1 = ["旅游","成为妈妈后2","国潮手艺人","小哥哥的咖啡店","倍儿想吃","倍儿享瘦 2.0","年味有FUN 第3季","锋味全球美食地图 第2季","美食告白记 第2季","PLUS生活研究所","名厨争锋","明星健身房","来吧，开饭啦","征途从清爽走去大海开始","萌主来了"]
   
var source_col4_cell4_row1 = [ "NV-XQF拿下决赛首日积分榜首","天刀手游终极测试","国产单机《黑神话：悟空》实机演示","iG陷魔咒惨遭LGD零封","爱玩PEL下饭秀","PEL版谁是卧底","起小点TOP10","是大腿求生TOP10","当欢乐茶馆遇上乐天苗乡","众神之王试玩测评","林小北云顶之弈","我是电竞人","《梦想新大陆》启梦测试","DNF：生而为魔 我很抱歉","是大腿TOP10" ]

var source_col4_cell4_row2 = [ "勃拉姆斯作品演奏现场","安娜·卡列尼娜","杨·李谢茨基钢琴独奏","波普艺术家杰夫昆斯","墨西哥女画家弗里达","英皇歌剧《蝴蝶夫人》","达利：不朽之旅","艺术微电影“封闭”","经典钢琴独奏音乐会","2015巴登复活节音乐会","伊夫·克莱因","2010年韦尔比耶音乐节","伊万·费舍尔指挥","芭蕾舞剧《吉赛尔》","啊！艺术"]

var source_col4_cell5_row2 = ["青少年成长类","经典诵读栏目【早安英文】","每天一个口语小知识","公务员考试常识题","穿军装的川妹子”来啦！","新东方雅思免费公开课","Fun Coding游戏编程课","30个最有用的心理学定律","单色少儿舞蹈","口袋乌龟的暑假日记","暑期每天学习一个"]

var source_col4_cell6_row1 = ["印迹IDENTITY","欧莱雅中国发展战略年度沟通会","精品风格盛典GUCCI灵感地图","MAHB时尚先生盛典","四大国际时装周","A咖时尚","2018维多利亚的秘密","告别996，清爽走"]

var source_col4_cell7_row1 = ["密室人生 第一季","毕业“鹅”旅行","寻觅“太平洋之心”，新喀里多尼亚（上）","春游必备拍照","小心机探界者","勇闯白骨之路","冷门宝藏美食让你吃到撑！","用悠游的心态慢慢记录旅行","客家香格里拉 景美味更"]

var source_col4_cell7_row2 = ["第四代飞度“素车”赛道极限测试来了","初晓敏：开上全球最贵SUV会飘吗？","看脱口秀演员呼兰如何驾驭爆梗之路","你没见过的 掀背思域生产实录","颠覆想象，本田技术做球鞋如此神奇！","最畅销的电动车特斯拉Model3超长续航少了","20多匹 它还是性能车吗？","扭矩超1000 试保时捷Taycan Turbo S","试驾百万级豪车奔驰全新GLS","试驾微蓝6 PHEV和微蓝7","全新丰田RAV4荣放值得买吗","1000万，能买什么样的快感？","德云社渴望诗和远方的灵魂车手","“奔驰”内饰 这辆比亚迪厉害了！","7.5秒破百 昂科"]

var source_col4_cell8_row1 = [ "高考志愿填报必备方法","鹅老师暑期课堂开课啦","名师教你填志愿","张雪峰老师志愿填报答疑","文科工科志愿填报","王宏斌老师解读志愿填报","勋哥教你填志愿","2020招办发言人","2020专业的秘密","强基计划考前冲刺","2020高考记忆","2020高考感动瞬间","学而思志愿填报指导" ]

var source_col4_cell8_row2 = ["育儿","房产","财经","热播榜","热搜榜","直播","网页游戏","演唱会","体育","LOL","搞笑","星座"]

var col4_row = document.querySelectorAll(".mode_main_nav_3 .nav_figure_popup_pane");

setChannelItem(col4_row[0],source_col4_cell1_row2);
setChannelItem(col4_row[1],source_col4_cell2_row1);
setChannelItem(col4_row[2],source_col4_cell2_row2);
setChannelItem(col4_row[3],source_col4_cell3_row1);
setChannelItem(col4_row[4],source_col4_cell4_row1);
setChannelItem(col4_row[5],source_col4_cell4_row2);
setChannelItem(col4_row[6],source_col4_cell5_row2);
setChannelItem(col4_row[7],source_col4_cell6_row1);
setChannelItem(col4_row[8],source_col4_cell7_row1);
setChannelItem(col4_row[9],source_col4_cell7_row2);
setChannelItem(col4_row[10],source_col4_cell8_row1);
setChannelItem(col4_row[11],source_col4_cell8_row2);
