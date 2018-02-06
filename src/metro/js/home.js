(function () {
    $(function () {

        function shake() {
            // 摇一摇事件
            var time = true;//记录摇晃的次数
            var state = true;//记录是否上滑
            if (window.DeviceMotionEvent && time) {
                var speed = 25;
                var last_update = 0;
                var x = y = z = lastX = lastY = lastZ = 0;

                // 监听设备运动
                window.addEventListener('devicemotion', function () {
                    if(!time){
                        return false;
                    }
                    var acceleration = event.accelerationIncludingGravity;
                    x = acceleration.x;
                    y = acceleration.y;
                    var curTime = new Date().getTime();

                    if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {

                        if (state && curTime - last_update > 20) {

                            var diffTime = curTime - last_update;
                            last_update = curTime;
                            // $(".page1 .shake").addClass("animated swing");
                            // var animatedTimer = setTimeout(function () {
                            //     $(".page1 .shake").removeClass("animated swing");
                            //     clearTimeout(animatedTimer);
                            // }, 1000);
                            // 播放摇一摇声音
                            document.getElementById('shakingAudio').play();
                            //处理iphone不能自动播放
                            document.addEventListener('WeixinJSBridgeReady', function () {
                                document.getElementById('shakingAudio').play();
                            }, false);
                            // 2s后出现摇签动画
                            var drawTimer = setTimeout(function () {
                                $(".draw1").addClass("active");
                                clearTimeout(drawTimer);
                            }, 2000);
                            // 4s后移除摇签动画类
                            var drawTimer2 = setTimeout(function () {
                                $(".page1").hide();
                                $(".page2").show();
                                // 随机选择抽签图片
                                randomImg();
                                $(".draw1").removeClass("active");
                                clearTimeout(drawTimer2);
                            }, 4000);

                            //   state = false;
                            time = false;
                        }
                    }
                    lastX = x;
                    lastY = y;
                }, false);
            }
        }

        // loading页图片加载
        var queueBefore = new createjs.LoadQueue(true);
        var imagesBeforeArr = [
            'images/firelantern.png',
            'images/confetti1.png',
            'images/snowmanDog.png',
            'images/confetti2.png',
            'images/word1.png',
            'images/television1.png',
            'images/television2.png',
            'images/play.png',
            'images/loadingBg.png',
            'images/progressbar.png',
        ];
        // var imgBeforeLength = imagesBeforeArr.length;
        queueBefore.loadManifest(imagesBeforeArr);
        // 图片加载
        var progress = 0;
        var queue = new createjs.LoadQueue(true);
        var imagesArr = [
            'images/acer.png',
            'images/btn1.png',
            'images/btn2.png',
            'images/cloud1.png',
            'images/cloud2.png',
            'images/dog1.png',
            'images/dog2.png',
            'images/draw1.png',
            'images/draw2.png',
            'images/draw3.png',
            'images/firecrackers1.png',
            'images/firecrackers2.png',
            'images/fireworks.png',
            'images/lamp.png',
            'images/newyear.png',
            'images/projection.png',
            'images/redbag.png',
            'images/shake.png',
            'images/signTitle.png',
            'images/snow.png',
            'images/snowflake.png',
            'images/snowman.png',
            'images/tip.png',
            'images/word2.png',
            'media/video.mov',
            'media/shake.mp3',
            'images/signBg1.png',
            'images/result1.png',
        ];
        var imgLength = imagesArr.length;
        queue.loadManifest(imagesArr);
        queueBefore.on("complete", function (e) {
            $(".loadBefore").hide();
            $(".loading").show();
            queue.on("complete", function (e) {
                // 显示播放按钮
                $("#play").show();
                $("#television").attr("src","./images/television2.png");
            }, this);
        }, this);
        queue.on("fileload", function (e) {
            progress++;
            // 进度条变化
            $("#progressbar").css("left", "-" + parseInt(100 - progress / imgLength * 100) + "%");
            $("#progressValue").html(parseInt(progress / imgLength * 100) + "%");
        }, this);

        document.getElementById('shakingAudio').play();
        document.getElementById('shakingAudio').pause();
        //处理iphone不能自动播放
        document.addEventListener('WeixinJSBridgeReady', function () {
            document.getElementById('shakingAudio').play();
            document.getElementById('shakingAudio').pause();
        }, false);

        // 生成二维码
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            width: 150,
            height: 150
        });
        qrcode.makeCode('http://www.baidu.com');

        // 点击播放视频
        $("#play").click(function () {
            $(".loading").hide();
            $(".media").show();
            document.getElementById('video').play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    document.getElementById('video').play();
                });
            }, false);
            // 播放结束之后
            document.getElementById("video").addEventListener("ended", function () {
                // 关闭视频页，显示抽签页
                $(".media").hide();
                $(".page1").show();
                // 可以摇一摇
                shake();
            });
        });

        // 随机选择抽签图片
        function randomImg() {
            var RndNum = Math.floor(Math.random()*2);
            console.log(RndNum);
            var signArr = [
                'images/result1.png',
                'images/result2.png',
                'images/result3.png'
            ];
            alert(signArr[RndNum]);
            $("#synthesis").find("img").attr("src",signArr[RndNum]);
        }

        // 长按事件
        var press = $api.domAll('#synthesis');
        new Hammer(press[0]).on('press', function (ev) {
            $(".tip").addClass("fadeOut");
            var imgTimer = setTimeout(function () {
                $(".tip").css("visibility", "hidden");
                clearTimeout(imgTimer);
            }, 2000);
        });

        // 点击领取礼包
        $("#receive").click("on", function () {
            window.location.href = "https://metrochina.vchangyi.com/Metroredpack/Frontend/Index/index?me_id=8";
        });
        // 点击分享给好友
        $("#share").click("on", function () {
            // alert("分享给好友");
        });

        // 微信分享
        var coper = {};
        var share = {};
        share.title = "2018麦德龙专属幸运签，开抽！";
        share.desc = "新年新气象，好运摇出来";
        share.imgUrl = "http://h5.zegelo.com/static/sohurh/images/share-img.jpg";
        share.link = "http://h5.zegelo.com/static/metro/index.html";
        coper.GetJsSdkUiPackage = function () {
            WeiXin.Ajax({
                data: { url: window.location.href },
                url: 'http://h5.zegelo.com/mp/api/GetJsSdkUiPackage',
                cb: function (data) {
                    console.log(data);
                    if (data != null && data.success == true) {
                        wx.config({

                            appId: data.source.AppId, // 必填，公众号的唯一标识
                            timestamp: data.source.Timestamp, // 必填，生成签名的时间戳
                            nonceStr: data.source.NonceStr, // 必填，生成签名的随机串
                            signature: data.source.Signature,// 必填，签名，见附录1
                            jsApiList: WeiXin.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.error(function (res) {
                            // alert(res)
                        });
                        wx.ready(function () {

                            //转发到朋友圈
                            wx.onMenuShareTimeline({
                                title: share.title, // 分享标题
                                link: share.link, // 分享链接
                                imgUrl: share.imgUrl, // 分享图标
                                success: function () {
                                    //  alert("chenggong");
                                    //WeiXin.Ajax({
                                    //    data: { type: "share", sharetype: "1" },
                                    //    url: '/mp/api/get',
                                    //    cb: function (data) {
                                    //    }
                                    //});
                                },
                                cancel: function () {
                                }
                            });
                            ////转发给朋友
                            wx.onMenuShareAppMessage({
                                title: share.title, // 分享标题
                                desc: share.desc, // 分享desc
                                link: share.link, // 分享链接
                                imgUrl: share.imgUrl, // 分享图标
                                type: 'link',
                                dataUrl: '',
                                success: function () {
                                    //alert("chenggong");
                                    //WeiXin.Ajax({
                                    //    data: { type: "share", sharetype: "2" },
                                    //    url: '/mp/api/get',
                                    //    cb: function (data) {
                                    //    }
                                    //});
                                },
                                cancel: function () {
                                }
                            });

                        });
                    } else {
                        WeiXin.log("GetJsSdkUiPackage加载异常")
                    }
                }
            });
        }
        $(document).ready(function () {
            coper.GetJsSdkUiPackage();
        });
    });

})();