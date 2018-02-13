(function () {
    $(function () {
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

        // 随机数
        var RndNum = Math.floor(Math.random()*10);

        // return false;

        // $("#testVideo")[0].play();
        // $("#testVideo")[0].pause();

        // var $video = $('#testVideo');
        // $('#play').on("touchstart", function() {
        //     // $(this).hide();
        //     // 背景音乐暂停
        //     document.getElementById('bgMusic').pause();
        //     $("#audio_btn").removeClass('rotate');

        //     $(".loading").hide();
        //     $(".video").show();
        //     $video[0].play();
        // });
        // if(!isWeiXin()&&isAndroid&&!isQQBrowser){
        //     $video.show();
        //     $video.removeAttr('x5-video-player-type');
        //     $video.removeAttr('x5-video-player-fullscreen');
        //     $video.removeAttr('webkit-playsinline');
        //     $video.removeAttr('playsinline');
        //     $video.css({
        //         "width":"100%",
        //         "height":"auto"
        //     });					
        //     $('#testCanvas').remove();
        // }
        // else{
        //     var videoW, videoH;
        //     setTimeout(function() {
        //         videoW = $video.width();
        //         videoH = $video.height();
        //         TestCanvas.width = videoW;
        //         TestCanvas.height = videoH;

        //         // setCanvasStartImg();
        //         //之所以这里要播放下，是因为经过测试，第一次点击CANVAS时，视频播放又立即停止了
        //         TestVideo.play();
        //         TestVideo.pause();

        //         console.log(videoW);
        //         console.log(videoH);
        //         console.log(TestVideo.width);
        //         console.log(TestVideo.height);
        //     }, 100);


        //     /*以下是渲染CANVAS画布中的视频*/

        //     //获取video
        //     var TestVideo = document.getElementById("testVideo");
        //     //获取canvas画布
        //     var TestCanvas = document.getElementById("testCanvas");
        //     //设置画布
        //     var TestCanvas2D = TestCanvas.getContext('2d');
        //     //设置setinterval定时器
        //     var TestVideoTimer = null;
        //     //监听播放
        //     TestVideo.addEventListener('play', function() {
        //         $('.start_video').hide();
        //         TestVideoTimer = setInterval(function() {
        //             TestCanvas2D.drawImage(TestVideo, 0, 0, videoW, videoH);
        //         }, 20);
        //         TestVideo.setAttribute("x5-video-orientation", "landscape|portrait");//Andriod需要控制,不然不能横频
        //     }, false);
        //     //监听暂停
        //     TestVideo.addEventListener('pause', function() {
        //         clearInterval(TestVideoTimer);
        //         $('.start_video').show();
        //             TestVideo.setAttribute("x5-video-orientation", "portrait");//设置成竖屏(翻页会暂停播放器)
        //     }, false);
        //     //监听结束
        //     TestVideo.addEventListener('ended', function() {
        //         clearInterval(TestVideoTimer);
        //         // $('.start_video').show();
        //         console.log('1 over');
        //         // _this.showPage02(1);
                
        //         $(".video").hide();
        //         $(".page1").show();
        //         // 可以摇一摇
        //         shake();
        //         // 背景音乐播放
        //         document.getElementById('bgMusic').play();
        //         $("#audio_btn").addClass('rotate');

        //         TestVideo.setAttribute("x5-video-orientation", "portrait");//设置成竖屏

        //     }, false);
        // }

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
        audioAutoPlay('bgMusic');
        $('.video_exist').on('click', function () {
            var media = document.getElementById('bgMusic');
            if (media.paused) {
                media.play();
                $(this).addClass('rotate');
            }else {
                media.pause();
                $(this).removeClass('rotate');
            }
        });
        
        //   记录是否摇过
        var shakeFlag = false;
        //  分享链接
        // var shareUrl = "http://h5.zegelo.com/static/metro/index.html";
        // 微信分享
        var coper = {};
        var share = {};
        coper = {};
        share = {};
        share.title = "2018麦德龙专属幸运签，开抽！";
        share.desc = "新年新气象，好运摇出来";
        share.imgUrl = "http://h5.zegelo.com/static/metro/images/shareLogo.jpg";
        share.link = "http://h5.zegelo.com/static/metro/index.html";

        coper.GetJsSdkUiPackage = function () {
            WeiXin.Ajax({
                data: { url: window.location.href },
                url: 'http://h5.zegelo.com/mp/api/GetJsSdkUiPackage',
                cb: function (data) {
                    console.log(data);
                    if (data != null && data.success == true) {
                        wx.config({
                            // debug: true,
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

        // 关键词
        var keywords = [
            '巴适自在',
            '吃嘛嘛香',
            '冲劲爆表',
            '大放异彩',
            '福气满满',
            '钱包得意',
            '强行脱单',
            '幸福敲门',
            '颜值正义',
            '迎风向前'
        ];

        // 摇一摇事件
        function shake() {
            var time = true;//记录摇晃的次数
            var state = true;//记录是否上滑
            if (window.DeviceMotionEvent && time) {
                // var speed = 25;
                var speed = 10;
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

                            createjs.Sound.play("shake");

                            // 播放摇一摇声音
                            // document.getElementById('shakingAudio').play();
                            // //处理iphone不能自动播放
                            // document.addEventListener('WeixinJSBridgeReady', function () {
                            //     document.getElementById('shakingAudio').play();
                            // }, false);


                            // 2s后出现摇签动画
                            // var drawTimer = setTimeout(function () {
                            //     $(".draw1").addClass("active");
                            //     clearTimeout(drawTimer);
                            // }, 2000);

                            // 摇签动画
                            signLight();

                            //   state = false;
                            time = false;
                            shakeFlag = true;
                            var shareUrl = "http://h5.zegelo.com/static/metro/share.html?type=" + (RndNum + 1);
                            // 微信分享
                            share.link = shareUrl;
                            share.title = "我的2018关键词是" + keywords[RndNum] + "，你的呢？";
                            share.desc = "麦德龙专属新年幸运签，开抽！";
                            coper.GetJsSdkUiPackage();
                        }
                    }
                    lastX = x;
                    lastY = y;
                }, false);
            }
        }

        // 测试代码,正式需删除
        // $(".page1").on("click",function(){
        //     // 摇签动画
        //     signLight();
        // });
        // $(".loading").on("click",function(){
        //     alert(11);
        //     createjs.Sound.play("shake");
        // });

        // 摇签动画
        function signLight(){
            $(".page1 .draw .lotpotGroup").addClass("animated swing2 infinite");
            var signTimer = setTimeout(function(){
                $(".page1 .draw .lotpotGroup").removeClass("animated swing2 infinite");
                $(".page1 .draw .sign3 img").addClass("animated bounceInUp2");
                clearTimeout(signTimer);
            },2000);
            
            var signTimer1 = setTimeout(function(){
                $(".page1 .draw .light img").addClass("on");
                clearTimeout(signTimer1);
            },2500);

            // var signTimer2 = setTimeout(function(){
            //     $(".page1 .draw .sign3 img").removeClass("animated bounceInUp2").addClass("animated fadeOut");
            //     clearTimeout(signTimer2);
            // },3500);

            // var signTimer3 = setTimeout(function(){
            //     $(".page1 .draw .sign4 img").addClass("on");
            //     clearTimeout(signTimer3);
            // },4500);

            // 7s后移除摇签动画类
            var drawTimer2 = setTimeout(function () {
                $(".page1").hide();
                $(".page2").show();
                $(".container").addClass("active");
                // 随机选择抽签图片
                randomImg();
                $(".draw1").removeClass("active");
                // 图片合成
                drawImage();
                clearTimeout(drawTimer2);
            }, 4500);
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
            'images/progressbar.png'
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
            'images/firecrackers1.png',
            'images/firecrackers2.png',
            'images/fireworks.png',
            'images/golden.jpg',
            'images/lamp.png',
            'images/light.png',
            'images/lotpot.png',
            'images/newyear.png',
            'images/poster.png',
            'images/projection.png',
            'images/redbag.png',
            'images/shading.png',
            'images/shake.png',
            'images/share.png',
            'images/shareLogo.jpg',
            'images/sign1.png',
            'images/sign2.png',
            'images/sign3.png',
            'images/sign4.png',
            'images/signTitle.png',
            'images/snow.png',
            'images/snowflake.png',
            'images/snowman.png',
            'images/tip.png',
            'images/word2.png',
            'images/signBg1.png',
            'images/signBg2.png',
            'images/signBg3.png',
            'images/signBg4.png',
            'images/signBg5.png',
            'images/signBg6.png',
            'images/signBg7.png',
            'images/signBg8.png',
            'images/signBg9.png',
            'images/signBg10.png',
            {"src": "media/shake.mp3","id": "shake"},
            {"src": "media/music1.mp3","id": "music"}
        ];
        var imgLength = imagesArr.length;
        queue.installPlugin(createjs.Sound);
        queue.loadManifest(imagesArr);
        queueBefore.on("complete", function (e) {
            $(".loadBefore").hide();
            $(".loading").show();
            queue.on("complete", function (e) {
                // 显示播放按钮
                $("#play").show();
                $("#television").attr("src","images/television2.png");
                // 进度条消失
                $(".loading .loadingBox").hide();
            }, this);
        }, this);
        queue.on("fileload", function (e) {
            progress++;
            // 进度条变化
            $("#progressbar").css("left", "-" + parseInt(100 - progress / imgLength * 100) + "%");
            $("#progressValue").html(parseInt(progress / imgLength * 100) + "%");
        }, this);


        // document.getElementById('shakingAudio').play();
        // document.getElementById('shakingAudio').pause();
        // //处理iphone不能自动播放
        // document.addEventListener('WeixinJSBridgeReady', function () {
        //     document.getElementById('shakingAudio').play();
        //     document.getElementById('shakingAudio').pause();
        // }, false);

        // 生成二维码
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            width: 150,
            height: 150
        });
        qrcode.makeCode('http://h5.zegelo.com/static/metro/index.html');

        //获取video
        var TestVideo = document.getElementById("video");
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
            // 背景音乐暂停
            document.getElementById('bgMusic').pause();
            $("#audio_btn").removeClass('rotate').hide();

            // 视频播放结束之后
            document.getElementById("video").addEventListener("ended", function () {
                // 背景音乐播放
                document.getElementById('bgMusic').play();
                $("#audio_btn").addClass('rotate');
                // 关闭视频页，显示抽签页
                $(".media").hide();
                $(".page1").show();
                // 可以摇一摇
                shake();
                // 显示播放按钮
                $("#audio_btn").show().addClass("rotate");
                // 播放背景音乐
                // createjs.Sound.play("music");
                document.getElementById('bgMusic').play();
                $("#audio_btn").addClass('rotate');
            });
            // 视频暂停之后
            document.getElementById("video").addEventListener("pause", function () {
                // 背景音乐播放
                document.getElementById('bgMusic').play();
                $("#audio_btn").addClass('rotate').show();
                // 关闭视频页，显示抽签页
                $(".media").hide();
                $(".page1").show();
                // 可以摇一摇
                shake();
                // 显示播放按钮
                $("#audio_btn").show().addClass("rotate");
                // 播放背景音乐
                // createjs.Sound.play("music");
                document.getElementById('bgMusic').play();
                $("#audio_btn").addClass('rotate');
            });
        });

        // 随机选择抽签图片
        function randomImg() {
            // RndNum = Math.floor(Math.random()*10);
            console.log(RndNum);
            $("#signBg").attr("src","images/signBg" + (RndNum + 1) + ".png");
            $("#synthesis").find("img").attr("src","images/result" + (RndNum + 1) + ".png");
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
            // 抽麦穗的测试链接
            window.location.href = "https://metrochina.vchangyi.com/Metroredpack/Frontend/Index/index?me_id=12";
        });
        // 点击弹出遮罩层
        $("#share").click("on", function () {
            $(".cover").show();
        });

        $(".cover").click("on", function () {
            $(".cover").hide();
        });


        // 图片合成
        function drawImage(){
            //生成二维码
            // new QRCode(document.querySelector(".qrcode"), 'http://h5.zegelo.com/static/metro/index.html');
            //图片数组
            var data = [
                'images/signBg1.png',
                'images/signTitle.png',
                'images/golden.jpg',
                'images/qrcode.png',
                'images/word2.png',
                'images/shading.png'
            ];
            data[0] = 'images/signBg'+ (RndNum + 1) +'.png';
            // var base64 = [];
            draw(function(share) {
                $('#synthesis').find("img").attr('src', share);
            });


            //合成图片
            function draw(fn) {
                var c = document.createElement('canvas'),
                ctx = c.getContext('2d'),
                len = data.length;
                c.width = 750;
                c.height = 1334;
                // c.height = 1206;
                ctx.rect(0, 0, c.width, c.height);
                ctx.fillStyle = '#ba131a';
                ctx.fill();
                function drawing(n) {
                if (n < len) {
                    var x = 0;
                    var y = 0;
                    var w = "";
                    var h = "";
                    switch (n | 0) {
                        case 0:
                            x = 15;
                            y = 92;
                            w = 720;
                            h = 848;
                            break;
                        case 1:
                            x = 94;
                            y = 34;
                            w = 570;
                            h = 142;
                            break;
                        case 2:
                            x = 287;
                            y = 969;
                            w = 173;
                            h = 173;
                            break;
                        case 3:
                            var qrImg = $('.qrcode img').attr('src');
                            if (!qrImg) return alert('二维码生成失败~');
                            data[2] = qrImg;
                            x = 298;
                            y = 980;
                            w = 150;
                            h = 150;
                            break;
                        case 4:
                            x = 180;
                            y = 1165;
                            w = 390;
                            h = 27;
                            break;
                        case 5:
                            x = 0;
                            y = 1224;
                            w = 750;
                            h = 108;
                            break;
                    }
                    var img = new Image;
                    img.crossOrigin = 'Anonymous'; //解决跨域
                    img.src = data[n];
                    img.onload = function () {
                    ctx.drawImage(img, x, y, w, h);
                    drawing(n + 1);//递归
                    }
                } else {
                    //保存生成作品图片
                    // base64.push(c.toDataURL("image/jpeg", 0.8));
                    fn && fn(c.toDataURL("image/jpeg", 0.8))
                }
                }
                drawing(0);
            }
        }



    });

})();