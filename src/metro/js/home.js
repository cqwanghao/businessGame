(function(){
    $(function(){
        // 摇一摇事件
        var time = true;//记录摇晃的次数
        var state = true;//记录是否上滑
    
        if (window.DeviceMotionEvent && time) {
          var speed = 25; 
          var last_update = 0;
          var x = y = z = lastX = lastY = lastZ = 0;
          
          // 监听设备运动
          window.addEventListener('devicemotion', function () {
    
            var acceleration = event.accelerationIncludingGravity; 
            x = acceleration.x;  
            y = acceleration.y;
            var curTime = new Date().getTime();
            
            if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
    
              if(state && curTime-last_update > 20){
    
                  var diffTime = curTime -last_update;
                  last_update = curTime;
                //   $(".pot>div:eq(0)").addClass("wave");
                //   $(".pop:eq("+Math.round(Math.random() * 8) % 4+")").show();
                //   $(".share").click(function(){
                //     $(".links").show();
                //     $(".links").click(function (){
                //       $(".links").hide();
                //     })
                //   })
                $(".page1 .shake").addClass("animated swing");
                var animatedTimer = setTimeout(function(){
                    $(".page1 .shake").removeClass("animated swing");
                    clearTimeout(animatedTimer);
                },1000);
                // 播放摇一摇声音
                document.getElementById('shakingAudio').play(); 
                //处理iphone不能自动播放
                document.addEventListener('WeixinJSBridgeReady',function(){  
                    document.getElementById('shakingAudio').play();
                },false);

                //   state = false;
                //   time = false;          
              }             
            }
            lastX = x;
            lastY = y;
          }, false);
        }

        // 图片加载
        var progress = 0;
        var queue = new createjs.LoadQueue(true);
        var imagesArr = [
            'images/acer.png',
            'images/btn1.png',
            'images/btn2.png',
            'images/cloud1.png',
            'images/cloud2.png',
            'images/confetti1.png',
            'images/confetti2.png',
            'images/dog1.png',
            'images/dog2.png',
            'images/draw1.png',
            'images/draw2.png',
            'images/draw3.png',
            'images/firecrackers1.png',
            'images/firecrackers2.png',
            'images/firelantern.png',
            'images/fireworks.png',
            'images/keyword1.png',
            'images/lamp.png',
            'images/loadingBg.png',
            'images/newyear.png',
            'images/play.png',
            'images/progressbar.png',
            'images/projection.png',
            'images/redbag.png',
            'images/shake.png',
            'images/signBg.png',
            'images/signTitle.png',
            'images/snow.png',
            'images/snowflake.png',
            'images/snowman.png',
            'images/snowmanDog.png',
            'images/television.png',
            'images/tip.png',
            'images/word1.png',
            'images/word2.png',
            'media/video.mov',
            'media/shake.mp3',
            'images/result1.png',
        ];
        var imgLength = imagesArr.length;
        queue.loadManifest(imagesArr);
        queue.on("fileload", function (e) {
            progress++;
            // 进度条变化
            $("#progressbar").css("left","-" + parseInt(100-progress/imgLength*100) + "%");
            $("#progressValue").html(parseInt(progress/imgLength*100) + "%");
        }, this);
        queue.on("complete", function (e) {
            // 显示播放按钮
            $("#play").show();
        }, this);

        document.getElementById('shakingAudio').play();
        document.getElementById('shakingAudio').pause();
        //处理iphone不能自动播放
        document.addEventListener('WeixinJSBridgeReady',function(){  
            document.getElementById('shakingAudio').play();
            document.getElementById('shakingAudio').pause();
        },false);

        // 生成二维码
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            width : 150,
            height : 150
        });
        qrcode.makeCode('http://www.baidu.com');

        // 点击播放视频
        $("#play").click(function(){
            $(".loading").hide();
            $(".media").show();
            document.getElementById('video').play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    document.getElementById('video').play();
                });
            }, false);
            // 播放结束之后
            document.getElementById("video").addEventListener("ended",function(){
                // 关闭视频页，显示抽签页
                $(".media").hide();
                $(".page1").show();
            });
        });

        // 长按事件
        var press = $api.domAll('#synthesis');
        new Hammer(press[0]).on('press', function(ev) {
            var imgTimer = setTimeout(function(){
                $(".tip").css("visibility","hidden");
                $("#synthesis").hide();
                clearTimeout(imgTimer);
            },2000);
        });

    });

})();