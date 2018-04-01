var haoAnimateRun=null;
var mediaPlay=false;
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isQQBrowser = navigator.userAgent.indexOf("MQQBrowser") > -1
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
function pageShow(e, b) {
    if (!b) {
        // setTimeout(function(){
            e.css("z-index", "2");
            e.css("opacity", "1");
            e.css("display", "block");
        // },300)
    } else {
        if (b == 1) {
            e.css("z-index", "0");
            e.css("display", "block");
            e.css("transition", "");
            // e.css("transform", "scale(1.3) translate(0,500px) translateZ(0px)");
            e.css("transform", "scale(1) translate(0,80%) translateZ(0px)");
            e.css("opacity", "0");
            setTimeout(function() {
                e.css("transition", "all 0.5s");
                e.css("transform", "scale(1) translate(0,0) translateZ(0px)");
                e.css("opacity", "1");
            }, 50)
        } else {
            e.css("z-index", "0");
            e.css("display", "block");
            e.css("transition", "");
            e.css("transform", "scale(.8) translate(0,-80%) translateZ(0px)");
            e.css("opacity", "0");
            setTimeout(function() {
                e.css("transition", "all 0.5s");
                e.css("transform", "scale(1) translate(0,0) translateZ(0px)");
                e.css("opacity", "1");
            }, 50)
        }
        setTimeout(function() {
            e.siblings().removeClass("active");
            e.addClass("active");
        // }, 600)
        }, 300)
    }
}

function pageHide(e, b) {
    if (!b) {
        // setTimeout(function(){
            e.removeClass("active");
            e.css("z-index", "-1");
            e.css("opacity", "0");
        // },150)
    } else {
        if (b == 1) {
            e.css("z-index", "1");
            e.css("transition", "");
            e.css("transform", "scale(1) translate(0 0) translateZ(0px)");
            e.css("opacity", "1");
            setTimeout(function() {
                e.css("transition", "all 0.5s");
                // e.css("transform", "scale(.8) translate(0,-200px) translateZ(0px)");
                e.css("transform", "scale(1) translate(0,0) translateZ(0px)");
                e.css("opacity", "0");
            }, 50)
            setTimeout(function() {
                e.css("display", "none");
            // }, 550);
            }, 250);
        } else {
            e.css("z-index", "1");
            e.css("transition", "");
            e.css("transform", "scale(1) translate(0 0) translateZ(0px)");
            e.css("opacity", "1");
            setTimeout(function() {
                e.css("transition", "all 0.5s");
                // e.css("transform", "scale(1.3) translate(0,500px) translateZ(0px)");
                e.css("transform", "scale(1) translate(0,0) translateZ(0px)");
                e.css("opacity", "0");
            }, 50)
            setTimeout(function() {
                e.css("display", "none");
            // }, 550);
            }, 250);
        }
        setTimeout(function() {
            e.removeClass("active");
        // }, 600)
        }, 300)
    }
}

(function(document, window, $) {
    // 工具
    $.extend($, {
        debug: function(e) {
            $(".debug").html(e)
        },
        /**
         * 模拟click
         * @param msg       信息
         * @param title     标题[可选]
         * @param callback1 确认回调函数
         * @param callback2 取消回调函数
         */
        tap: function(obj, _callback) {
            var _this = $(obj);
            var _x11 = 0,
                _x12 = 0,
                _y11 = 0,
                _y12 = 0;
            $(document).on("touchstart",obj, function(e) {
                _this = $(this);
                _x11 = 0, _x12 = 0, _y11 = 0, _y12 = 0;
                // var _touch1 = e.targetTouches[0];
                var _touch1 = e.originalEvent.targetTouches[0];
                _x11 = _touch1.pageX;
                _y11 = _touch1.pageY;
            });
            $(document).on("touchend",obj, function(e) {
                _this = $(this);
                // var _touch2 = e.changedTouches[0];
                var _touch2 = e.originalEvent.changedTouches[0];
                _x12 = _touch2.pageX;
                _y12 = _touch2.pageY;
                var result = null
                if (Math.abs(_x11 - _x12) < 4 && Math.abs(_y11 - _y12) < 4) {
                    result = 1;
                } else if(_y11 - _y12>10) {
                    console.log("上")
                    result = 2;
                } else if(_y11 - _y12<-10) {
                    console.log("下")
                    result = -2;
                }else{
                    result = 0;
                }
                _callback(result, _this);
            });
        },
        // 阻止连续点击
        preClick:function(obj){
            var _this=obj;
            if (_this.parent().hasClass("no")) {
                return false;
            }
            var nowTime = new Date().getTime();
            var clickTime = _this.attr("ctime");
            if (clickTime != undefined && (nowTime - clickTime < 3000)) {
                // $.toast('操作过于频繁，稍后再试');
                return false;
            } else {
                _this.attr("ctime", nowTime);
                return true;
            }
            return true;
        },

        // 验证是否全部输入
        checkInput:function(obj){
            var input=obj.find("input");
            var btn=obj.find(".blue-btn");
            var accAll=true;
            for(var i=0;i<input.length;i++){
                if (!input.eq(i).hasClass("can-space")) {
                    if(input.eq(i).val()==""||input.eq(i).val()==" "){
                        accAll=false;
                    }
                }
            }
            if (accAll) {
                btn.removeClass("no")
            }else{
                btn.addClass("no")
            }
        },
        // 60s 倒计时
        // obj jq对象 $("demo")
        // num 倒计时秒速
        // num-before 时间前文字
        // num-after 时间后文字
        // over 结束后文字
        cdn:function (obj,num,before,after,over,fn){
            obj.addClass("on");
            var time=parseInt(num==undefined?60:num);
            runTime=null;
            var before=(before==undefined?"（":before);
            var after=(after==undefined?"s）":after);
            var over=(over==undefined?"获取验证码":over);
            function timess(){
                if (time>0) {
                    obj.html(before+time+after)
                    runTime=setTimeout(timess,1000)
                    if (fn) {
                        fn(time,runTime);
                    }
                    time--;
                }else{
                    if (fn) {
                        fn(time,runTime);
                    }
                    obj.html(before+time+after)
                    clearTimeout(runTime)
                    obj.removeClass("on")
                    obj.html(over)
                }
            };
            timess()
        },
        htmlSize: function() {
            var value = document.documentElement.clientWidth
            // var ua = navigator.userAgent
            // if (ua.match(/MI 5/) && ua.match(/QQBrowser/)) {
            //     //value = (3 * value) / window.devicePixelRatio
            //     value = (3 * value) / 2.6 // 小米虽然 dpr 是3 但表现的依然是 2.6
            // }
            var deviceWidth = Math.min(750, value)
            // document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`
            document.documentElement.style.fontSize = 100*(deviceWidth/750)+"px";
        },
        wtips:function(text){
            $("body").append('<div class="wtips show">'+text+'</div>');
            setTimeout(function(){
                $(".wtips").remove();
            },2000)
        },

        /*  模拟gif动画
            html
                div>img+img+img
            $.animateGifClean();
            $.animateGif($(".screen03"),6)
        */
        animateGif:function(obj,looptime,loop){
            var _this=this;
            var num = 0;
            for(var i=0;i<obj.children().length;i++){
                if (obj.children().eq(i).css("visibility")=="visible") {
                    num=i;
                }
            }
            function swiper1() {
                obj.children().css("visibility","hidden");
                obj.children().eq(num).css("visibility","visible");
                num++;
                if (loop&&loop==1&&(num>=obj.children().length)) {
                    clearTimeout(haoAnimateRun);
                    haoAnimateRun=null;
                }else{
                    if (num>=obj.children().length) {
                        num=0;
                    }
                    haoAnimateRun = setTimeout(function() {
                        swiper1()
                    }, 1000/looptime)
                }
            }
            swiper1();
        },
        // 注销模拟动画
        animateGifClean:function(){
            clearTimeout(haoAnimateRun);
            haoAnimateRun=null;
        }

    });
    // 方法
    $.extend($.fn, {
        // 音乐播放
        audioAutoPlay: function(id) {
            var audio = document.getElementById(id),
                play = function() {
                    audio.play();
                    document.removeEventListener("touchstart", play, false);
                };
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function() {
                play();
            }, false);
            document.addEventListener('YixinJSBridgeReady', function() {
                play();
            }, false);
            document.addEventListener("touchstart", play, false);
        },
        // 音乐暂停
        audioAutoPause: function(id) {
            var audio = document.getElementById(id),
                pause = function() {
                    audio.pause();
                    document.removeEventListener("touchstart", pause, false);
                };
            audio.pause();
            document.addEventListener("WeixinJSBridgeReady", function() {
                pause();
            }, false);
            document.addEventListener('YixinJSBridgeReady', function() {
                pause();
            }, false);
            document.addEventListener("touchstart", pause, false);
        }
    });
    $(function(){

        // $.htmlSize();
        // $(window).resize(function(){
        //     $.htmlSize();
        // })
        $.tap("#audio_btn",function(e,obj){
            if (!e) return;
            if ($("#media")[0].paused) {
                $("#media")[0].play();
                obj.addClass("rotate");
                mediaPlay=true;
            } else {
                $("#media")[0].pause();
                obj.removeClass("rotate");
                mediaPlay=false;
            };
        })
        // 音乐end
        // 音乐调用 有音乐解开注释
        if ($("#audio_btn").length > 0) {
            mediaPlay=true;
            $("#media").audioAutoPlay("media");
        }
        // 音乐调用 有音乐解开注释
        // if ($("#audio_btn1").length > 0) {
        //     $("#media1").audioAutoPlay("media1");
        //     $("#media1")[0].pause();
        // }
        // 音乐调用end
        // -==================================================================

        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            $("body").addClass("android")
        }
        if (isiOS) {
            $("body").addClass("ios")
        }

        // 统一关闭
        // $(".close").on("click",function(){
        //     $(this).closest(".p-pup").hide();
        // });
        // 选择demo
        // $(".select-demo select").on("change",function(){
        //     var value=$(this).val();
        //     var text=$(this).find("option:selected").text();
        //     $(this).prev().attr("data-id",value)
        //     $(this).prev().html(text)
        // });


    })
})(document, window, window.jQuery || window.Zepto);

