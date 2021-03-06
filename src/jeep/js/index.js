(function() {
    var scroll=true;
    var kai = true;
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    var timer4 = null;
    var time1 = null;
    $(document).on("touchmove", 'body', function(e) {
        if (scroll) {
            e.preventDefault();
        }
    });

    var queue0 = new createjs.LoadQueue(true);
    var fest0 = [
        {"src":"./images/music_on.png","id":"music_on"},
        {"src":"./images/music_off.png","id":"music_off"},
        {"src":"./media/shake.mp3","id":"shake"},
        {"src":"./media/bgm.mp3","id":"bgm"},
		{"src":"./media/phone.mp3","id":"phone"},

        {"src":"./images/page01-01.png","id":"page01-01"},
        {"src":"./images/page01-02.png","id":"page01-02"},
        {"src":"./images/page01-03.png","id":"page01-03"},

        {"src":"./images/bg2.png","id":"bg2"},
        {"src":"./images/page02-01.png","id":"page02-01"},
        {"src":"./images/dot.png","id":"dot"},
        {"src":"./images/strip1.png","id":"strip1"},
        {"src":"./images/strip2.png","id":"strip2"},
        {"src":"./images/strip3.png","id":"strip3"},
        {"src":"./images/page02-02.png","id":"page02-02"},
        {"src":"./images/page02-03.png","id":"page02-03"},
        {"src":"./images/page02-04.png","id":"page02-04"},
    ];

    var queue = new createjs.LoadQueue(true);
    var fest = [
        {"src":"./images/bg3.png","id":"bg3"},
        {"src":"./images/page03-01.png","id":"page03-01"},
        {"src":"./images/kaka.png","id":"kaka"},
        {"src":"./images/page03-02.png","id":"page03-02"},
        {"src":"./images/page03-03.png","id":"page03-03"},
        {"src":"./images/arrow.png","id":"arrow"},

        {"src":"./images/bg4.png","id":"bg4"},
        {"src":"./images/page04-01.png","id":"page04-01"},
        {"src":"./images/page04-02.png","id":"page04-02"},
        {"src":"./images/page04-03.png","id":"page04-03"},

        {"src":"./images/bg5.png","id":"bg5"},
        {"src":"./images/page05-01.png","id":"page05-01"},
        {"src":"./images/page05-02.png","id":"page05-02"},
        // {"src":"./images/page05-03.png","id":"page05-03"},

        {"src":"./images/bg6.png","id":"bg6"},
        {"src":"./images/page06-01.png","id":"page06-01"},
        {"src":"./images/page06-02.png","id":"page06-02"},
        {"src":"./images/page06-03.png","id":"page06-03"},
        {"src":"./images/page06-04.png","id":"page06-04"},

        {"src":"./images/bg7.png","id":"bg7"},
        {"src":"./images/page07-01.png","id":"page07-01"},
        {"src":"./images/page07-02a.png","id":"page07-02a"},
        {"src":"./images/page07-02as.png","id":"page07-02as"},
        {"src":"./images/page07-02b.png","id":"page07-02b"},
        {"src":"./images/page07-02bs.png","id":"page07-02bs"},
        {"src":"./images/page07-02c.png","id":"page07-02c"},
        {"src":"./images/page07-02cs.png","id":"page07-02cs"},
        {"src":"./images/page07-02d.png","id":"page07-02d"},
        {"src":"./images/page07-02ds.png","id":"page07-02ds"},
        {"src":"./images/page07-03.png","id":"page07-03"},
        {"src":"./images/page07-04.png","id":"page07-04"},
        {"src":"./images/page07-05.png","id":"page07-05"},

        {"src":"./images/error.png","id":"error"},
        {"src":"./images/btn.png","id":"btn"},

        {"src":"./images/bg8.png","id":"bg8"},
        {"src":"./images/appoint1.png","id":"appoint1"},
        {"src":"./images/appoint2.png","id":"appoint2"},
        {"src":"./images/submit.png","id":"submit"},

        {"src":"./images/privilege.png","id":"privilege"},
        {"src":"./images/detail.png","id":"detail"},
        {"src":"./images/close.png","id":"close"},
    ];
    var progress = 0;

    var game={
        // 初始化
        init: function() {
            var _this = this;
            _this.addEvent();

            queue0.installPlugin(createjs.Sound);
            queue0.loadManifest(fest0);
            queue0.on("fileload", _this.handleFileprogress0, this);
            queue0.on("complete", _this.handleComplete0, this);
        },

        // 加载进度0
        handleFileprogress0:function(e) {
            // progress++;
            // if (progress = fest.length) {
            //     // console.log(progress);
            // }
        },

        //加载进度完成0
        handleComplete0: function() {
            var _this = this;
            console.log("第一段加载进度完成");
            _this.curPage01(1);
            queue.installPlugin(createjs.Sound);
            queue.loadManifest(fest);
            queue.on("fileload", _this.handleFileprogress, this);
            queue.on("complete", _this.handleComplete, this);
        },

        // 加载进度
        handleFileprogress:function(e) {
            progress++;
            if (progress = fest.length) {
                // console.log(progress);
            }
        },

        //加载进度完成
        handleComplete: function() {
            console.log("全部加载进度完成");
        },

        curPage01:function(dir){
            var _this = this;
            if (dir==1) {
                pageHide($(".page00"),dir);
                pageShow($(".page01"),dir);
            }else{
                pageHide($(".page02"),dir);
                pageShow($(".page01"),dir);
            }
            // 暂停背景音乐
            // var timer = setTimeout(function(){
            //     $("#media")[0].pause();
            //     $("#audio_btn").removeClass("rotate");
            //     // createjs.Sound.play("phone");
            //     clearTimeout(timer);
            // },1000);
            $("#media1")[0].play();
        },

        curPage02: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page01"),dir);
                pageShow($(".page02"),dir);
            }else{
                pageHide($(".page03"),dir);
                pageShow($(".page02"),dir);
            }
            // 暂停背景音乐播放
            $("#media")[0].pause();
            $("#audio_btn").addClass("off").removeClass("rotate");
        },

        curPage03: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page02"),dir);
                pageShow($(".page03"),dir);
                $(".page02").removeClass("on");
            }else{
                pageHide($(".page04"),dir);
                pageShow($(".page03"),dir);
            }
            // 原点还原
            var voice = setTimeout(function(){
                reset();
            },1000);
            // 开始播放背景音乐
            $("#media")[0].play();
            $("#audio_btn").removeClass("off").addClass("rotate");
            TweenMax.killAll(true);
            TweenMax.from($('.page03-03'), 2, {
                opacity: 0,
                ease: Linear.easeIn,
                transform: 'translate3d(-10% , 0, 0) scale(1)'
            });
        },

        curPage04: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page03"),dir);
                pageShow($(".page04"),dir);
            }else{
                pageHide($(".page05"),dir);
                pageShow($(".page04"),dir);
            }
            TweenMax.killAll(true);
            TweenMax.from($('.page04-03'), 1, {
                ease: Circ.easeOut,
                transform: 'translate3d(30% , -20%, 0) scale(0.5)',
                delay:0.5
            });
        },

        curPage05: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page04"),dir);
                pageShow($(".page05"),dir);
            }else{
                pageHide($(".page06"),dir);
                pageShow($(".page05"),dir);
            }
            TweenMax.killAll(true);
            var tl6 = new TimelineMax();
            tl6.restart();
            tl6.to($('.guang1'), 1, {
                opacity: 1
            }, 1);
            tl6.to($('.guang2'), 1, {
                opacity: 1
            }, 1);
        },

        curPage06: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page05"),dir);
                pageShow($(".page06"),dir);
            }else{
                pageHide($(".page07"),dir);
                pageShow($(".page06"),dir);
            }
        },

        curPage07: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page06"),dir);
                pageShow($(".page07"),dir);
            }else{
                pageHide($(".page06"),dir);
                pageShow($(".page05"),dir);
            }
        },

        // 事件绑定
        addEvent: function() {
            var _this = this;
            // createjs.Sound.play("shake");
            // createjs.Sound.play("phone");
            // createjs.Sound.stop();

            // 播放背景音乐
            function audioAutoPlay(id){
                var audio = document.getElementById(id);
                audio.play();
                audio.pause();
                document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
                audio.pause();
                }, false);
            }
            audioAutoPlay('media');
            audioAutoPlay('media1');

            // 进入语音播放
            $.tap(".page01-02",function(){
                createjs.Sound.play("shake");
                createjs.Sound.stop();
                pageHide($(".page01"),1);
                pageShow($(".page02"),1);
            });

            // 播放高晓松语音
            $.tap(".voice",function(e){
                if (!e) return;
                // 防止多次点击
                $(".page02").addClass("on");
                // $("#media")[0].pause();
                createjs.Sound.stop();
                reset();
                createjs.Sound.play("shake");
                // 开始播放第一段语音
                $(".voice1 .strips img").addClass("active");
                $(".voice1 .dot").hide();
                // 播放完第一段语音
                timer1 = setTimeout(function(){
                    $(".voice1 .strips img").removeClass("active");
                    $(".voice2 .strips img").addClass("active");
                    $(".voice2 .dot").hide();
                    clearTimeout(timer1);
                },2000);
                // 播放完第二段语音
                timer2 = setTimeout(function(){
                    $(".voice2 .strips img").removeClass("active");
                    $(".voice3 .strips img").addClass("active");
                    $(".voice3 .dot").hide();
                    clearTimeout(timer2);
                },9000);
                // 播放完第三段语音
                timer3 = setTimeout(function(){
                    $(".voice3 .strips img").removeClass("active");
                    $(".voice4 .strips img").addClass("active");
                    $(".voice4 .dot").hide();
                    clearTimeout(timer3);
                },12000);
                // 播放完第四段语音
                timer4 = setTimeout(function(){
                    $(".voice4 .strips img").removeClass("active");
                    clearTimeout(timer4);
                },15000);

                // 语音播放完之后
                time1 = setTimeout(function(){
                    createjs.Sound.stop();
                    // 开始播放背景音乐
                    $("#media")[0].play();
                    $("#audio_btn").removeClass("off").addClass("rotate");
                    // clearTimeout(time1);
                    // 进入线索一
                    _this.curPage03(1);
                    $(".page02").removeClass("on");
                    clearTimeout(time1);
                },16000);
            });

            // 选择答案
            $(".page07-02 .select").on("click",function(){
                $(".page07-02 .select").removeClass("on");
                $(this).addClass("on");
            });

            // 确定答案
            $(".page07-03").on("click",function(){
                var idx = $(".page07-02 .select.on").index();
                if (idx == 2) {
                    $(".cover2").show();
                }else{
                    $(".cover1").show();
                }
                pageShow($(".page08"),1);
            });

            // 再试一次
            $(".cover1 .btn").on("click",function(){
                $(this).closest(".cover1").hide();
            });

            // 勾选
            $(".cover2 .appoint").on("click",function(){
                if ($(this).hasClass("on")) {
                    $(this).removeClass("on");
                }else{
                    $(this).addClass("on");
                }
            });

            //分享关闭
            $('.cover4').on('click', function() {
                $(this).fadeOut();
            })

            // 阻止手机虚拟键盘弹起
            $("#city").focus(function () {
                document.activeElement.blur();
            });

            // 提交
            $(".submit").on("click",function(){
                $(".cover3").show();
            });

            // 关闭预约成功
            $(".close").on("click",function(){
                $(".cover3").hide();
                $('.cover4').fadeIn();
            });

            // 城市选择器
            var area1 = new LArea();
            area1.init({
                'trigger': '#city',
                'valueTo': '#value1',
                'keys': {
                    id: 'value',
                    name: 'text'
                },
                'type': 2,
                'data': [provs_data, citys_data, dists_data]
            });

            // $.tap(".page01",function(i,e){
			// 	console.log("page01");
			// 	tar.hitTag('进入高晓松语音页面');
            //     // if(!e.hasClass("active")){return false;}
            //     // if(e.is(":animated")){return false;}
            //     if (i==2) {
            //         _this.curPage02(1);
            //     }else{
            //         // _this.curPage01(-1);
            //     }
            // });

            $.tap(".page02",function(i,e){
				console.log("page02");
				tar.hitTag('进入高晓松语音播放页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage03(1);
                    createjs.Sound.stop();
                }else if(i==-2){
                    _this.curPage01(-1);
                    reset();
                    $(".page02").removeClass("on");
                }
            });

            $.tap(".page03",function(i,e){
				console.log("page03");
				tar.hitTag('进入线索一页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage04(1);
                }else if(i==-2){
                    _this.curPage02(-1);
                }
            });

            $.tap(".page04",function(i,e){
				console.log("page04");
				tar.hitTag('进入线索二页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage05(1);
                }else if(i==-2){
                    _this.curPage03(-1);
                }
            });

            $.tap(".page05",function(i,e){
				console.log("page05");
				tar.hitTag('进入线索三页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage06(1);
                }else if(i==-2){
                    _this.curPage04(-1);
                }
            });

            $.tap(".page06",function(i,e){
				console.log("page06");
				tar.hitTag('进入线索四页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage07(1);
                }else if(i==-2){
                    _this.curPage05(-1);
                }
            });

            $.tap(".page07",function(i,e){
				console.log("page07");
				tar.hitTag('返回线索四页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    // _this.curPage07(1);
                }else if(i==-2){
                    _this.curPage06(-1);
                }
            });

        },


    };

    //初始化音乐
    function reset() {
        createjs.Sound.stop();
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(time1);
        $(".strips img").removeClass("active");
        $(".dot").show();
    }

    game.init();

})()