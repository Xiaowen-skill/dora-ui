// MP3播放器及歌曲库js


var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
	[{
			title: "鬼迷心窍",
			artist: "李宗盛",
			mp3: "http://music.163.com/song/media/outer/url?id=108740.mp3  ",
			poster: "http://p1.music.126.net/wAIlwR4SxuZg_ZMwgmSYcg==/3386495814257726.jpg?param=130y130"
		},
		{
			title: "给自己的歌",
			artist: "李宗",
			mp3: "http://music.163.com/song/media/outer/url?id=394670.mp3 ",
			poster: "http://p1.music.126.net/OCGt5ln0lPPtPbVJ3VEKtA==/109951163020570422.jpg?param=130y130"
		},
		{
			title: "山丘",
			artist: "李宗盛",
			mp3: "http://music.163.com/song/media/outer/url?id=407002091.mp3",
			poster: "http://p1.music.126.net/tg2zke_mrqwuOPlEIEUjGg==/18294773975127592.jpg?param=130y130"
		}
	],

	{
		playlistOptions: {
			enableRemoveControls: true
		},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});


//past
var latest = [{
		title: "鬼迷心窍",
		artist: "李宗盛",
		mp3: "http://music.163.com/song/media/outer/url?id=108740.mp3",
		poster: "http://p1.music.126.net/XXlcoIURJoLp3D5YcX1V9g==/109951163071279000.jpg?param=130y130"
	},
	{
		title: "给自己的歌",
		artist: "李宗盛",
		mp3: "http://music.163.com/song/media/outer/url?id=394670.mp3 ",
		poster: "http://p1.music.126.net/CZQlP4Qgy2jbk22BKyDkUA==/120946279068589.jpg?param=130y130"
	},
	{
		title: "山丘",
		artist: "李宗盛",
		mp3: "http://music.163.com/song/media/outer/url?id=407002091.mp3",
		poster: "http://p2.music.126.net/B1ePGczwQUZueJl70TITWQ==/3287539775420245.jpg?param=130y130"
	},
	{
		title: "当爱已成往事",
		artist: "李宗盛 / 林忆莲",
		mp3: "http://music.163.com/song/media/outer/url?id=108370.mp3",
		poster: "http://p2.music.126.net/a1uV59DV8OJzn4OVXRlLPw==/109951163071276550.jpg?param=130y130"
	},
	{
		title: "飘洋过海来看你",
		artist: "娃娃",
		mp3: "http://music.163.com/song/media/outer/url?id=108752.mp3",
		poster: "http://p1.music.126.net/XXlcoIURJoLp3D5YcX1V9g==/109951163071279000.jpg?param=130y130"
	},
	{
		title: "好久不见",
		artist: "陈奕迅",
		mp3: "http://music.163.com/song/media/outer/url?id=65538.mp3",
		poster: "http://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=130y130"
	},
	{
		title: "富士山下",
		artist: "陈奕迅",
		mp3: "http://music.163.com/song/media/outer/url?id=65766.mp3",
		poster: "http://p1.music.126.net/PcJq6i7zMcPgudejdn1yeg==/109951163256302356.jpg?param=130y130"
	},
	{
		title: "生而为人",
		artist: "尚士达",
		mp3: "http://music.163.com/song/media/outer/url?id=1335350269.mp3",
		poster: "http://p1.music.126.net/dgPK-FDvF92suiQmnl5kCg==/109951163745432466.jpg?param=130y130"
	},
	{
		title: "披着羊皮的狼(国)",
		artist: "谭咏麟",
		mp3: "http://music.163.com/song/media/outer/url?id=152517.mp3",
		poster: "http://p1.music.126.net/jiynw5C7gnn8kmpEj-UhDQ==/109951165154275149.jpg?param=130y130"
	}
];

//now
var popular = [{
		title: "讲不出再见",
		artist: "谭咏麟",
		mp3: "http://music.163.com/song/media/outer/url?id=152392.mp3",
		poster: "http://p2.music.126.net/ow3GKMyAg8hdWDRmhKl4iw==/109951163066633801.jpg?param=130y130"
	},
	{
		title: "一生中最爱",
		artist: "谭咏麟",
		mp3: "http://music.163.com/song/media/outer/url?id=153784.mp3",
		poster: "http://p1.music.126.net/EDe8WuEF_RbxugBQJcofXQ==/41781441856503.jpg?param=130y130"
	},
	{
		title: "再见亦是泪",
		artist: "谭咏麟",
		mp3: "http://music.163.com/song/media/outer/url?id=152391.mp3",
		poster: "http://p1.music.126.net/ow3GKMyAg8hdWDRmhKl4iw==/109951163066633801.jpg?param=130y130"
	},
	{
		title: "爱情陷阱",
		artist: "谭咏麟",
		mp3: "http://music.163.com/song/media/outer/url?id=4871718.mp3",
		poster: "http://p1.music.126.net/QigStkElP-yXC8H8ibnGog==/109951164900283582.jpg?param=130y130"
	},
	{
		title: "多想在平庸的生活拥抱你",
		artist: "隔壁老樊",
		mp3: "http://music.163.com/song/media/outer/url?id=1346104327.mp3",
		poster: "http://p1.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg?param=130y130"
	},
	{
		title: "悟空",
		artist: "戴荃",
		mp3: "http://music.163.com/song/media/outer/url?id=33162226.mp3",
		poster: "http://p2.music.126.net/gn4pPKc_Wk3EyByfi86lUQ==/3333719255417035.jpg?param=130y130"
	},
	{
		title: "画",
		artist: "赵雷",
		mp3: "http://music.163.com/song/media/outer/url?id=202369.mp3",
		poster: "http://p2.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg?param=130y130"
	},
	{
		title: "野子 (Live)",
		artist: "苏运莹",
		mp3: "http://music.163.com/song/media/outer/url?id=36229105.mp3",
		poster: "http://p2.music.126.net/YNDRHrY2eueSPKsKPRGD_Q==/109951165271508129.jpg?param=130y130"
	},
	{
		title: "药水歌",
		artist: "药水哥",
		mp3: "http://music.163.com/song/media/outer/url?id=1472945318.mp3",
		poster: "http://p2.music.126.net/hrMf33CzLpvwMMSRsr5VmA==/109951165256910065.jpg?param=130y130"
	}
];

//future
var rank = [{
		title: "创奏",
		artist: "霜月はるか",
		mp3: "http://music.163.com/song/media/outer/url?id=645239.mp3",
		poster: "http://p1.music.126.net/Fp7CYfdZsQAYZls-gD8KpQ==/2262794929982835.jpg?param=130y130"
	},
	{
		title: "願い枯れゆく歌声",
		artist: "Ether",
		mp3: "http://music.163.com/song/media/outer/url?id=40915970.mp3",
		poster: "http://p1.music.126.net/DU6RM83OPR0KMcVP05f6zA==/3294136844455797.jpg?param=130y130"
	},
	{
		title: "LICHT MEER",
		artist: "河合夕子",
		mp3: "http://music.163.com/song/media/outer/url?id=499086.mp3",
		poster: "http://p1.music.126.net/z7Mk6Au_otaoWozoM-t62w==/2402432906715323.jpg?param=130y130"
	},
	{
		title: "Nocturne No. 2 ",
		artist: "Chopin",
		mp3: "http://music.163.com/song/media/outer/url?id=1060914.mp3",
		poster: "http://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg?param=130y130"
	},
	{
		title: "夜曲",
		artist: "Chopin",
		mp3: "http://music.163.com/song/media/outer/url?id=5266269.mp3",
		poster: "http://p1.music.126.net/-jxEuvKopuUdXDTKL7KuWw==/105553116283769.jpg?param=130y130"
	},
	{
		title: "降E大调夜曲",
		artist: "Chopin",
		mp3: "http://music.163.com/song/media/outer/url?id=25830129.mp3",
		poster: "http://p1.music.126.net/h3MYwTuGIpkWiMuBwZ3Vmg==/6631154628238015.jpg?param=130y130"
	},
	{
		title: "即兴幻想曲",
		artist: "Chopin",
		mp3: "http://music.163.com/song/media/outer/url?id=25830133.mp3",
		poster: "http://p1.music.126.net/8cSVJulJa2tiLydRxyXuTg==/109951162938339077.jpg?param=130y130"
	},
	{
		title: "Nocturne op. 32",
		artist: "Chopin",
		mp3: "http://music.163.com/song/media/outer/url?id=26160789.mp3",
		poster: "http://p1.music.126.net/MiXbBt6j6xWNlv_QCFSRAw==/2288083697427927.jpg?param=130y130"
	},
	{
		title: "Prelude in Des",
		artist: "Chopin",
		mp3: "http://music.163.com/song/media/outer/url?id=26818399.mp3",
		poster: "http://p1.music.126.net/68_Rrtyz1A9MGImm2cUb-w==/2078076976524854.jpg?param=130y130"
	}
];

// oline song/dream/
var main = [{
		title: "手写着从前",
		artist: "澤野弘之",
		mp3: "http://music.163.com/song/media/outer/url?id=448706025.mp3 ",
		poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130"
	},
	{
		title: "God of ink",
		artist: "澤野弘之",
		mp3: "http://music.163.com/song/media/outer/url?id=484056491.mp3",
		poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130"
	},
	{
		title: "white silence (album version)",
		artist: "TK from 凛として時雨",
		mp3: "http://music.163.com/song/media/outer/url?id=769672.mp3",
		poster: "http://p1.music.126.net/OX-yCGzOUHbhqiKK9Xx4Vg==/4442026976217692.jpg?param=130y130"
	},
	{
		title: "结び",
		artist: "饭碗的彼岸",
		mp3: "http://music.163.com/song/media/outer/url?id=445198872.mp3",
		poster: "http://p1.music.126.net/dlC4rAiDvq_uUi2fpnxKMA==/109951162819138078.jpg?param=130y130"
	},
	{
		title: "VV - ALK",
		artist: "Tielle",
		mp3: "http://music.163.com/song/media/outer/url?id=507116416.mp3",
		poster: "http://p1.music.126.net/WStPGvMUlDC89Wus9813zA==/109951163014870789.jpg?param=130y130"
	},
	{
		title: "M41+42",
		artist: "梶浦由記",
		mp3: "http://music.163.com/song/media/outer/url?id=591021.mp3",
		poster: "http://p1.music.126.net/lf9G9OQf_ouA_FuPZjm1HA==/890604418498843.jpg?param=130y130"
	},
	{
		title: "偏爱",
		artist: "张芸京",
		mp3: "http://music.163.com/song/media/outer/url?id=86369.mp3",
		poster: "http://p1.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg?param=130y130"
	},
	{
		title: "算什么男人",
		artist: "周杰伦",
		mp3: "http://music.163.com/song/media/outer/url?id=29818120.mp3",
		poster: "http://p1.music.126.net/unW9CQcqjzh8BYjsVqosWw==/18874216602702134.jpg?param=130y130"
	},
	{
		title: "兰若词",
		artist: "刘亦菲",
		mp3: "http://music.163.com/song/media/outer/url?id=255739.mp3",
		poster: "http://p1.music.126.net/YIhF9kpKMx_wBKQFN-DwTw==/81363860472987.jpg?param=130y130"
	},
	{
		title: "open",
		artist: "miu-clips",
		mp3: "http://music.163.com/song/media/outer/url?id=618338.mp3",
		poster: "http://p1.music.126.net/fJ4Y4PN_h0Mg3ByQ2yfL9g==/838927371993316.jpg?param=130y130"
	}
];
var spirit = [{
		title: "M19+20",
		artist: "梶浦由記",
		mp3: "http://music.163.com/song/media/outer/url?id=591753.mp3 ",
		poster: "http://p1.music.126.net/lW4YKD6cMgm32nI66CzWVg==/5702067301704441.jpg?param=130y130"
	},
	{
		title: "Sis puella magica!",
		artist: "梶浦由記",
		mp3: "http://music.163.com/song/media/outer/url?id=496902072.mp3",
		poster: "http://p1.music.126.net/tFTRt1H87rReNTyO1K9IDQ==/18498183627713149.jpg?param=130y130"
	},
	{
		title: "月は优しく (月)",
		artist: "梶浦由記",
		mp3: "http://music.163.com/song/media/outer/url?id=590623.mp3",
		poster: "http://p1.music.126.net/7xaV2qB-T1d9m8b1XZC6tQ==/725677674344222.jpg?param=130y130"
	},
	{
		title: "Euterpe エウテルペ ",
		artist: "染音若蔡",
		mp3: "http://music.163.com/song/media/outer/url?id=452654214.mp3",
		poster: "http://p1.music.126.net/Iqckrd2sOB1ztqrSOw4XzA==/109951162841140691.jpg?param=130y130"
	},
	{
		title: "幻光",
		artist: "杨秉音",
		mp3: "http://music.163.com/song/media/outer/url?id=526989692.mp3",
		poster: "http://p1.music.126.net/4xHOkSVWH-n6p5pB3Jf0yQ==/109951162922204274.jpg"
	},
	{
		title: "世界の約束",
		artist: "神罗Shinra",
		mp3: "http://music.163.com/song/media/outer/url?id=429460870.mp3",
		poster: "http://p1.music.126.net/rkJSVKRZkfLXOoVwXtiB4w==/18283778858733705.jpg?param=130y130"
	},
	{
		title: "Cave OF Mind",
		artist: "久石譲",
		mp3: "http://music.163.com/song/media/outer/url?id=28457572.mp3",
		poster: "http://p1.music.126.net/HdmtedPRZEEBduHcmUnk3w==/853221023209311.jpg?param=130y130"
	},
	{
		title: "幽灵公主",
		artist: "K. Williams",
		mp3: "http://qzone.haoduoge.com/music3/2015-01-26/1422203098.mp3",
		poster: "http://p1.music.126.net/GNKtRK8w7edPw3jAsavL2A==/5980243743832365.jpg?param=130y130"
	},
	{
		title: "心之逆鳞",
		artist: "魏小涵",
		mp3: "http://music.163.com/song/media/outer/url?id=408280658.mp3",
		poster: "http://p1.music.126.net/k_WRxDY1qQ4ztB5uFFrvoA==/17907745881679448.jpg?param=130y130"
	},
	{
		title: "愛を教えてくれた君へ",
		artist: "Qaijff",
		mp3: "http://music.163.com/song/media/outer/url?id=521416051.mp3",
		poster: "http://p1.music.126.net/-c3qURPNRNLe-YJMbiZoKA==/109951163072509863.jpg?param=130y130"
	}
];
var magic = [{
		title: "群雄疾走",
		artist: "川井憲次",
		mp3: "http://music.163.com/song/media/outer/url?id=448153.mp3",
		poster: "http://p1.music.126.net/r4TK33y6f8cwlntVidXZbQ==/931286348726555.jpg?param=130y130"
	},
	{
		title: "Ghost of a smile",
		artist: "EGOIST",
		mp3: "http://music.163.com/song/media/outer/url?id=35955908.mp3",
		poster: "http://p1.music.126.net/ivONokvElv9ZCzyrZp84FQ==/3297435373557125.jpg?param=130y130"
	},
	{
		title: "樱子小姐的脚下埋着尸体",
		artist: "大竹佑季",
		mp3: "http://music.163.com/song/media/outer/url?id=36271375.mp3",
		poster: "http://p1.music.126.net/Q4Dg5QXwft213TBKMv26_A==/3276544653004159.jpg?param=130y130"
	},
	{
		title: "非科学的表裏一体",
		artist: "豚乙女",
		mp3: "http://music.163.com/song/media/outer/url?id=30870899.mp3",
		poster: "http://p1.music.126.net/84dpde0vkfsDAVsNNjulXg==/7906588115750467.jpg?param=130y130"
	},
	{
		title: "You're the Shine",
		artist: "：FELT",
		mp3: "http://music.163.com/song/media/outer/url?id=26260757.mp3",
		poster: "http://p1.music.126.net/b04i7LFbHLJkmkzwhwRLMA==/2343059278838229.jpg?param=130y130"
	},
	{
		title: "旅の途中",
		artist: "清浦夏実",
		mp3: "http://music.163.com/song/media/outer/url?id=26220167.mp3",
		poster: "http://p1.music.126.net/4BgAnUbCDFex3m4z-hWULA==/2509085534622060.jpg?param=130y130"
	},
	{
		title: "夏祭り",
		artist: "東山奈央",
		mp3: "http://music.163.com/song/media/outer/url?id=488388729.mp3",
		poster: "http://p1.music.126.net/3eyBH8RjxjXG-EqWShU1wg==/18887410742154555.jpg?param=130y130"
	},
	{
		title: "Sway",
		artist: "Nevve",
		mp3: "http://music.163.com/song/media/outer/url?id=475073464.mp3",
		poster: "http://p1.music.126.net/KmPcFcxxg61d15R8yu5x_A==/18681802069425034.jpg?param=130y130"
	},
	{
		title: "Vanish",
		artist: " Breathe Carolina",
		mp3: "http://music.163.com/song/media/outer/url?id=427542077.mp3",
		poster: "http://p1.music.126.net/xaX_RkkW0cT4f38k62N8yg==/3413983630702236.jpg?param=130y130"
	},
	{
		title: "It's Over",
		artist: "MEIDEN",
		mp3: "http://music.163.com/song/media/outer/url?id=477933011.mp3",
		poster: "http://p1.music.126.net/foJM2P9nq8pXHnCZjcf75w==/19047939439716625.jpg?param=130y130"
	}
];

//添加播放歌曲

$("#latest li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: latest[k].title,
		artist: latest[k].artist,
		//free:true,
		mp3: latest[k].mp3,
		//oga:"",
		poster: latest[k].poster
	});
	myPlaylist.play(-1);
});

$("#popular li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: popular[k].title,
		artist: popular[k].artist,
		//free:true,
		mp3: popular[k].mp3,
		//oga:"",
		poster: popular[k].poster
	});
	myPlaylist.play(-1);
});

$("#rank li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: rank[k].title,
		artist: rank[k].artist,
		//free:true,
		mp3: rank[k].mp3,
		//oga:"",
		poster: rank[k].poster
	});
	myPlaylist.play(-1);
});

$("#main li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: main[k].title,
		artist: main[k].artist,
		//free:true,
		mp3: main[k].mp3,
		//oga:"",
		poster: main[k].poster
	});
	myPlaylist.play(-1);
});

$("#spirit li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: spirit[k].title,
		artist: spirit[k].artist,
		//free:true,
		mp3: spirit[k].mp3,
		//oga:"",
		poster: spirit[k].poster
	});
	myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function () {
	var m = $(this).parent("li").index();
	myPlaylist.add({
		title: magic[m].title,
		artist: magic[m].artist,
		//free:true,
		mp3: magic[m].mp3,
		//oga:"",
		poster: magic[m].poster
	});
	myPlaylist.play(-1);
});
//添加歌曲结束


//移除
$("#playlist-remove").click(function () {
	myPlaylist.remove(); //（0 1 2 ... -2 -1）
});

$("#listRemove").click(function () {
	myPlaylist.remove();
});

// 上一曲、下一曲

$("#playlist-next").click(function () {
	myPlaylist.next();
});
$("#playlist-previous").click(function () {
	myPlaylist.previous();
});

// 播放
$("#playlist-play").click(function () {
	myPlaylist.play();
});

$("#playlist-play--2").click(function () {
	myPlaylist.play(-2);
});
$("#playlist-play--1").click(function () {
	myPlaylist.play(-1);
});
$("#playlist-play-0").click(function () {
	myPlaylist.play(0);
});
$("#playlist-play-1").click(function () {
	myPlaylist.play(1);
});
$("#playlist-play-2").click(function () {
	myPlaylist.play(2);
});

// 暂停

$("#playlist-pause").click(function () {
	myPlaylist.pause();
});



//是否自动播放

$("#playlist-option-autoPlay-true").click(function () {
	myPlaylist.option("autoPlay", true);
});
$("#playlist-option-autoPlay-false").click(function () {
	myPlaylist.option("autoPlay", false);
});




//播放器列表滚动条js------------------------------------------------------------------------------------------------
var $bar = $(".bar");
var $scrollBar = $(".scrollBar");
var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
var $ul = $(".jp-playlist ul");
var $li = $(".jp-playlist ul li");
var disY = 0;
var iScale = 0;
var iSpeed = 0;

$ul.height(1000); //设置ul的高度

$bar.mousedown(function (event) {
	var event = event || window.event;
	disY = event.clientY - $(this).position().top;
	$(document).bind("mousemove", function (event) {
		var event = event || window.event;
		var iH = event.clientY - disY;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({
			top: iH + "px"
		});
		iScale = -iH / $maxH;
		$ul.css({
			top: iScale * ($ul.height() - $(".jp-playlist-box").height()) + "px"
		});
		return false;
	});
	$(document).bind("mouseup", function () {
		$(document).unbind("mousemove");
		$(document).unbind("mouseup");
	});
	return false;
});

//当鼠标移入，监听事件
$(".jp-playlist-box").mouseover(function () {
	//鼠标滚轮
	addHandler(this, "mousewheel", mouseWheel); //IE
	addHandler(this, "DOMMouseScroll", mouseWheel); //标准
	return false;
});
//绑定事件重写兼容
function addHandler(element, type, handler) {
	return element.addEventListener ? element.addEventListener(type, handler, false) :
		element.attachEvent("on" + type, handler, false)
}
//鼠标滚轮事件
function mouseWheel(event) {
	var event = event || window.event;
	if (event.wheelDelta) { //IE
		iSpeed = event.wheelDelta > 0 ? -3 : 3;
	} else if (event.detail) { //火孤
		iSpeed = event.detail < 0 ? -3 : 3;
	}
	move();

	//FF,绑定事件，阻止默认事件  
	if (event.preventDefault) {
		event.preventDefault();
	}
};
//滚轮 要执行的
function move() {
	var iH = $bar.position().top;
	iH = iH + iSpeed;
	iH <= 0 && (iH = 0);
	iH >= $maxH && (iH = $maxH);
	$bar.css({
		top: iH + "px"
	});
	iScale = -iH / $maxH;
	$ul.css({
		top: iScale * ($ul.height() - $(".jp-playlist-box").height()) + "px"
	});
	return false;
};
//播放器列表滚动条js 结束------------------------------------------------



//音乐播放器 收缩、展开----------------------------------------------
var fold = true; //标识

//页面加载时，播放器运动出来，延迟2秒，运动回去
$(".jp-video").animate({
	left: 0
}, "slow", function () {
	slideOut($(this));
}).delay(2000).animate({
	left: "-480px"
}, 350, function () {
	slideIn($(this));
});

//点击按钮运动出来，或运动回去
$("#btnfold").mouseover(function () {
	if (fold) {
		$(".jp-video").animate({
			left: "-480px"
		}, 350, function () {
			slideIn($(this));
		});
	} else {
		$(".jp-video").animate({
			left: 0
		}, 350, function () {
			slideOut($(this));
		});
	}
});
//封装按钮背景切换1
function slideOut(obj) {
	$("#btnfold").attr({
		"title": "点击收缩"
	});
	obj.find("span").css({
		"transform": "rotate(180deg)"
	});
	obj.find("span").css({
		"MozTransform": "rotate(180deg) translateX(2px)"
	});
	obj.find("span").css({
		"WebkitTransform": "rotate(180deg)"
	});
	fold = true;
};
//封装按钮背景切换2
function slideIn(obj) {
	$("#btnfold").attr({
		"title": "点击展开"
	});
	obj.find("span").css({
		"transform": "rotate(0deg)"
	});
	obj.find("span").css({
		"MozTransform": "rotate(0deg) translateX(-2px)"
	});
	obj.find("span").css({
		"WebkitTransform": "rotate(0deg)"
	});
	fold = false;
};

//歌曲列表展开、收缩---------------------------------------------------
var iOpen = false;
$("#listClose").click(function () {
	if (iOpen) {
		$(".jp-playlist-box").animate({
			height: 0
		}, 100);
		$("#btnfold").css({
			top: "5px"
		});
		$("#listRemove").css({
			display: "none"
		});
		$(".scrollBar").css({
			display: "none"
		});
		$(".jp-video").animate({
			height: "94px",
			bottom: "20px"
		}, 100);
		iOpen = false;
	} else {
		$(".jp-playlist-box").animate({
			height: "80px"
		}, 100);
		$("#btnfold").css({
			top: "52px"
		});
		$("#listRemove").css({
			display: "block"
		});
		$(".scrollBar").css({
			display: "block"
		});
		$(".jp-video").animate({
			height: "175px",
			bottom: "20px"
		}, 100);
		iOpen = true;
	}
});