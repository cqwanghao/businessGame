(function () {
    $(function () {
        var baseUrl = "./images/";
        // loading页图片加载
        var queue0 = new createjs.LoadQueue(true);
        var fest0 = [
            { "src": baseUrl + "01_car.png", "id": "01_car" },
            { "src": baseUrl + "02_bg.jpg", "id": "02_bg" },
            { "src": baseUrl + "bg.jpg", "id": "bg" },
            { "src": baseUrl + "carframe1.png", "id": "carframe1" },
            { "src": baseUrl + "carframe2.png", "id": "carframe2" },
            { "src": baseUrl + "carlight.png", "id": "carlight" },
            { "src": baseUrl + "circle.png", "id": "circle" },
            { "src": baseUrl + "citylight.png", "id": "citylight" },
            { "src": baseUrl + "flashlight.png", "id": "flashlight" },
            { "src": baseUrl + "light1.png", "id": "light1" },
            { "src": baseUrl + "light2.png", "id": "light2" },
            { "src": baseUrl + "normalmusic.png", "id": "normalmusic" },
            { "src": baseUrl + "page0-01.png", "id": "page0-01" },
            { "src": baseUrl + "page0-02.png", "id": "page0-02" },
            { "src": baseUrl + "page0-03.png", "id": "page0-03" },
            { "src": baseUrl + "page0-04.png", "id": "page0-04" },
            { "src": baseUrl + "page1-01.png", "id": "page1-01" },
            { "src": baseUrl + "page1-02.png", "id": "page1-02" },
            { "src": baseUrl + "page1-03.png", "id": "page1-03" },
            // { "src": baseUrl + "phone.png", "id": "phone" },
            { "src": baseUrl + "text.png", "id": "text" },
            { "src": baseUrl + "wave1.png", "id": "wave1" },
            { "src": baseUrl + "wave2.png", "id": "wave2" },
            { "src": baseUrl + "wave3.png", "id": "wave3" },
            { "src": baseUrl + "wheel.png", "id": "wheel" },
        ];

        var progress = 0;

        queue0.installPlugin(createjs.Sound);
        queue0.loadManifest(fest0);
        // queue0.on("fileload", _this.handleFileprogress0, this);
        // queue0.on("complete", _this.handleComplete0, this);

        // 背景音乐播放
        function audioAutoPlay(id) {
            var audio = document.getElementById(id);
            audio.play();
            audio.volume = 0.2;
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
                audio.volume = 0.2;
            }, false);
        }
        audioAutoPlay('media');

        document.getElementById('media2').play();
        document.getElementById('media2').pause();
        //处理iphone不能自动播放
        document.addEventListener('WeixinJSBridgeReady', function () {
            document.getElementById('media2').play();
            document.getElementById('media2').pause();
        }, false);

        // document.getElementById('media2').play();
        // document.addEventListener("WeixinJSBridgeReady", function () {
        //     WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        //         document.getElementById('media2').play();
        //     });
        // }, false);
        // 背景音乐暂停
        // document.getElementById('media2').pause();

        $('.video_exist').on('click', function () {
            var media = document.getElementById('media');
            if (media.paused) {
                media.play();
                $(this).addClass('rotate');
            } else {
                media.pause();
                $(this).removeClass('rotate');
            }
        });


        var donghua = new TimelineMax();

        // 文字播放
        function playWord(obj, second) {
            donghua.to($(".t" + obj), second, {
                ease: Linear.easeIn,
                opacity: 1
            });
        }

        // page0
        donghua.to($('.page0-03'), 2, {
            opacity: 0.2,
            ease: Linear.easeIn,
        });
        donghua.to($('.page0-04'), 3, {
            opacity: 1,
            ease: Linear.easeIn
        }, 0);
        donghua.to($('.page0-06'), 4, {
            opacity: .3,
            ease: Linear.easeIn
        }, 0);
        donghua.to($('.page0-07'), 5, {
            opacity: 1,
            ease: Linear.easeIn
        }, 0);
        // page0淡出
        donghua.to($('.page0'), 2, {
            opacity: 0,
            ease: Linear.easeIn,
            // transform: 'translate3d(-100% , 0, 0)'
        });
        donghua.to($('.page1'), 1, {
            display: "block",
            opacity: 1,
            ease: Linear.easeIn,
            // delay: 5
            // transform: 'translate3d(0 , 0, 0)'
        }, 6);


        // 点击启动
        $(".page1-03").on("click", function () {
            $(this).off("click");
            // 文字播放
            var i = 1;
            for (; i < 25; i++) {
                playWord(i, 0.2);
            }
            var timer = setTimeout(function () {
                // 启动车辆音乐
                // document.getElementById('media2').play();
                document.getElementById('media2').play();
                document.addEventListener("WeixinJSBridgeReady", function () {
                    // WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    document.getElementById('media2').play();
                    // });
                }, false);
                $(".page1-04").find(".wheel").addClass("active");
                // 背景移动
                donghua.to($('.page1-00'), 12, {
                    // opacity: 1,
                    // display: "block",
                    backgroundPosition: "-900px 0",
                    ease: Linear.easeIn,
                    // transform: 'translate3d(-1824px , 0, 0)'
                    // transform: 'translate3d(0 , 0, 0)'
                });
                // 文字淡出
                // page0淡出
                donghua.to($('.page1-05'), 2, {
                    opacity: 0,
                    ease: Linear.easeIn,
                }, 2);

                clearTimeout(timer);
            }, 4800);

            var timer1 = setTimeout(function () {
                $(".page1-04").find(".wheel").removeClass("active");
                clearTimeout(timer1);
            }, 16800);
            // donghua.to($('.page1-04'), 2, {
            //     ease: Linear.easeIn,
            //     transform: 'translate3d(40% , 0, 0)'
            // });

            // donghua.to($('.page1'), 2, {
            //     // opacity: 0,
            //     ease: Linear.easeIn,
            //     // delay: 5
            //     transform: 'translate3d(-100% , 0, 0)'
            // },4.8);

            // donghua.to($('.page1-04'), 10, {
            //     // display: "block",
            //     ease: Linear.easeIn,
            //     transform: 'translate3d(100px , 0, 0)'
            // },6.8);
            // donghua.to($('.page2'), 2, {
            //     // opacity: 1,
            //     display: "block",
            //     // backgroundPosition: "-1000px 0",
            //     ease: Circ.easeOut,
            //     // transform: 'translate3d(-1824px , 0, 0)'
            //     transform: 'translate3d(0 , 0, 0)'
            // },4.8);

        });
    });
})();