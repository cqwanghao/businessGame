(function() {
    var scroll=true;
    $(document).on("touchmove", 'body', function(e) {
        if (scroll) {
            e.preventDefault();
        }
    });

    var queue = new createjs.LoadQueue(true);
    var fest = [
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

        {"src":"./images/bg3.png","id":"bg3"},
        {"src":"./images/page03-01.png","id":"page03-01"},
        {"src":"./images/kaka1.png","id":"kaka1"},
        {"src":"./images/kaka2.png","id":"kaka2"},
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
        {"src":"./images/page05-03.png","id":"page05-03"},

        {"src":"./images/bg6.png","id":"bg6"},
        {"src":"./images/page06-01.png","id":"page06-01"},
        {"src":"./images/page06-02.png","id":"page06-02"},
        {"src":"./images/page06-03.png","id":"page06-03"},

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

            queue.installPlugin(createjs.Sound);
            queue.loadManifest(fest);
            queue.on("fileload", _this.handleFileprogress, this);
            queue.on("complete", _this.handleComplete, this);
        },

        // 加载进度
        handleFileprogress:function(e) {
            progress++;
            if (progress = fest.length) {
                console.log(progress);
            }
        },

        //加载进度完成
        handleComplete: function() {
            console.log("加载进度完成");
            this.curPage01(1);
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
        },

        curPage03: function(dir) {
            var _this = this;
            if (dir==1) {
                pageHide($(".page02"),dir);
                pageShow($(".page03"),dir);
            }else{
                pageHide($(".page04"),dir);
                pageShow($(".page03"),dir);
            }
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

            $.tap(".page01",function(i,e){
				console.log("page01");
				tar.hitTag('进入高晓松语音页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage02(1);
                }else{
                    // _this.curPage01(-1);
                }
            });

            $.tap(".page02",function(i,e){
				console.log("page02");
				tar.hitTag('进入高晓松语音播放页面');
                // if(!e.hasClass("active")){return false;}
                // if(e.is(":animated")){return false;}
                if (i==2) {
                    _this.curPage03(1);
                }else if(i==-2){
                    _this.curPage01(-1);
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

    game.init();

})()