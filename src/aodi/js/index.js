(function () {
    $(function () {
        var orientationFlag = false;
        var loadingFlag = false;
        // 判断方向
        oriDirection();
        window.addEventListener('orientationchange', function () {
            // 判断方向
            oriDirection();
        }, false);

        // 判断方向
        function oriDirection() {
            if (window.orientation == 90 || window.orientation == -90) {
                $("#orientLayer").hide();
                orientationFlag = true;
                if (orientationFlag && loadingFlag) {
                    // 首页开始
                    startPage();
                }
            } else if (window.orientation == 0 || window.orientation == 180) {
                $("#orientLayer").show();
            }
        }

        // 动画实例
        var donghua = new TimelineMax();
        var donghua2 = new TimelineMax();
        var page0 = new TimelineMax();
        var page1 = new TimelineMax();
        var page2 = new TimelineMax();
        var page3 = new TimelineMax();
        var page4 = new TimelineMax();

        var baseUrl = "./images/";
        var baseUrl2 = "./music/";
        // loading页图片加载
        var queue0 = new createjs.LoadQueue(true);
        var fest0 = [
            { "src": baseUrl2 + "music.mp3", "id": "music" },
            { "src": baseUrl2 + "car.mp3", "id": "02_bg" },
            { "src": baseUrl + "01_car.png", "id": "car" },
            { "src": baseUrl + "02_bg.jpg", "id": "02_bg" },
            { "src": baseUrl + "02_text.png", "id": "02_text" },
            { "src": baseUrl + "04_bg.jpg", "id": "04_bg" },
            { "src": baseUrl + "04_text.png", "id": "04_text" },
            { "src": baseUrl + "06_bg.jpg", "id": "06_bg" },
            { "src": baseUrl + "06_car.png", "id": "06_car" },
            { "src": baseUrl + "06_text.png", "id": "06_text" },
            { "src": baseUrl + "07_bg_1.jpg", "id": "07_bg_1" },
            { "src": baseUrl + "07_car.png", "id": "07_car" },
            { "src": baseUrl + "07_text1.png", "id": "07_text1" },
            { "src": baseUrl + "07_text2.png", "id": "07_text2" },
            { "src": baseUrl + "08_bg.jpg", "id": "08_bg" },
            { "src": baseUrl + "bg.jpg", "id": "bg" },
            { "src": baseUrl + "carframe1.png", "id": "carframe1" },
            { "src": baseUrl + "carframe2.png", "id": "carframe2" },
            { "src": baseUrl + "carlight.png", "id": "carlight" },
            { "src": baseUrl + "circle.png", "id": "circle" },
            { "src": baseUrl + "citylight.png", "id": "citylight" },
            { "src": baseUrl + "light1.png", "id": "light1" },
            { "src": baseUrl + "light2.png", "id": "light2" },
            { "src": baseUrl + "normalmusic.png", "id": "normalmusic" },
            { "src": baseUrl + "page0-02.png", "id": "page0-02" },
            { "src": baseUrl + "page0-04.png", "id": "page0-04" },
            { "src": baseUrl + "page1-02.png", "id": "page1-02" },
            { "src": baseUrl + "page3-03.png", "id": "page3-03" },
            { "src": baseUrl + "page05-01.png", "id": "page05-01" },
            { "src": baseUrl + "phone.png", "id": "phone" },
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
        queue0.on("complete", function () {
            $(".loading").hide();
            loadingFlag = true;
            if (orientationFlag && loadingFlag) {
                // 首页开始
                startPage();
            }
        }, this);

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

        // 车子启动
        document.getElementById('media2').play();
        document.getElementById('media2').pause();
        //处理iphone不能自动播放
        document.addEventListener('WeixinJSBridgeReady', function () {
            document.getElementById('media2').play();
            document.getElementById('media2').pause();
        }, false);

        // 播放暂停背景音乐
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

        // 文字播放
        function playWord(obj, second) {
            donghua2.to(obj, second, {
                ease: Linear.easeIn,
                opacity: 1
            });
        }
        
        // 首页开始
        function startPage() {
            // page0
            donghua.to($('.page0-03'), 2, {
                // opacity: 0.2,
                opacity: .5,
                ease: Linear.easeIn,
            });
            donghua.to($('.page0-04'), 2, {
                opacity: 1,
                ease: Linear.easeIn
            });
            donghua.to($('.page0-06'), 2, {
                opacity: .3,
                // opacity: 1,
                ease: Linear.easeIn
            });
            donghua.to($('.page0-07'), 2, {
                opacity: 1,
                ease: Linear.easeIn,
                onComplete: function () {
                    // page0淡出
                    page0.to($('.page0'), 3, {
                        opacity: 0,
                        zIndex: 1,
                        ease: Linear.easeOut,
                    });
                    // page1淡入
                    page1.to($('.page1'), 3, {
                        opacity: 1,
                        zIndex: 2,
                        ease: Linear.easeIn
                    });
                    // 淡入启动按钮
                    $(".page1-03").fadeIn(1000);
                }
            });
        }

        // 点击启动
        $(".page1-03").on("click", function () {
            $(this).off("click");
            $(this).fadeOut(1000);
            // 文字播放
            var i = 1;
            for (; i < 24; i++) {
                playWord($(".t" + i), 0.2);
            }

            donghua2.to($('.t24'), 0.2, {
                ease: Linear.easeIn,
                opacity: 1,
                onComplete: function () {
                    // 启动车辆音乐
                    document.getElementById('media2').play();
                    document.addEventListener("WeixinJSBridgeReady", function () {
                        document.getElementById('media2').play();
                    }, false);
                    // 添加车轮旋转样式
                    $(".page1-04").find(".wheel").addClass("active");
                    $(".page1-05").fadeOut(2000);
                    console.log("到这一步了");
                }
            });

            // 背景移动
            donghua2.to($('.page1-001 img'), 10, {
                // backgroundPosition: "-1rem 0",
                ease: Linear.easeIn,
                transform: 'translate3d(-14.6rem , 0, 0) scale(1.3)',
                onComplete: function(){
                    // page1淡出
                    page1.to($('.page1'), 2, {
                        opacity: 0,
                        zIndex: 1,
                        ease: Linear.easeOut
                    });
                    // page2淡入
                    page2.to($('.page2'), 2, {
                        opacity: 1,
                        zIndex: 2,
                        ease: Linear.easeIn
                    });
                }
            });

            // 背景移动
            // donghua2.to($('.page1-00'), 10, {
            //     backgroundPosition: "-14.6rem 0",
            //     ease: Linear.easeIn,
            //     onComplete: function () {
            //         // page1淡出
            //         page1.to($('.page1'), 2, {
            //             opacity: 0,
            //             zIndex: 1,
            //             ease: Linear.easeOut
            //         });
            //         // page2淡入
            //         page2.to($('.page2'), 2, {
            //             opacity: 1,
            //             zIndex: 2,
            //             ease: Linear.easeIn
            //         });
            //     }
            // });
            // page2
            // 背景移动
            // donghua2.to($('.page2-01'), 6, {
            //     backgroundPosition: "-1rem 0",
            //     ease: Linear.easeIn
            // });
            // 背景移动
            donghua2.to($('.page2-001 img'), 6, {
                // backgroundPosition: "-1rem 0",
                ease: Linear.easeIn,
                transform: 'translate3d(-1rem , 0, 0) scale(1.1)'
            });
            donghua2.from($('.page2-02'), 2, {
                opacity: 0,
                ease: Linear.easeIn,
                onComplete: function () {
                    // page2淡出
                    page2.to($('.page2'), 2, {
                        opacity: 0,
                        zIndex: 1,
                        ease: Linear.easeOut,
                    });
                    // page3淡入
                    page3.to($('.page3'), 2, {
                        opacity: 1,
                        zIndex: 2,
                        ease: Linear.easeIn
                    });
                }
            });

            // page3
            donghua2.to($('.page3-01'), 5, {
                ease: Linear.easeIn,
                transform: 'scale(1.6)'
            });
            donghua2.from($('.page3-04'), 2, {
                opacity: 0,
                ease: Linear.easeIn,
                onComplete: function () {
                    // page3淡出
                    page3.to($('.page3'), 2, {
                        opacity: 0,
                        zIndex: 1,
                        ease: Linear.easeOut,
                    });
                    // page4淡入
                    page4.to($('.page4'), 2, {
                        opacity: 1,
                        zIndex: 2,
                        ease: Linear.easeIn
                    });
                }
            });
            // page4
            donghua2.to($('.page4-02'), 5, {
                ease: Linear.easeIn,
                transform: 'translate3d(-120% , 0, 0)'
            });
            donghua2.from($('.page4-03'), 2, {
                opacity: 0,
                ease: Linear.easeIn
            });
            donghua2.from($('.page4-04'), 2, {
                opacity: 0,
                ease: Linear.easeIn,
                onComplete: function () {
                    donghua2.to($('.page4-03'), 2, {
                        opacity: 0,
                        ease: Linear.easeIn
                    });
                    donghua2.to($('.page4-04'), 2, {
                        opacity: 0,
                        ease: Linear.easeIn
                    });
                    donghua2.to($('.page4-02'), 5, {
                        opacity: 0,
                        ease: Linear.easeIn
                    });
                    donghua2.to($('.page4-05'), 4, {
                        opacity: 0.5,
                        ease: Linear.easeIn,
                        onComplete: function () {
                            $('.page4-05').fadeOut(500);
                        }
                    });
                    donghua2.to($('.page4-06'), 1, {
                        opacity: 1,
                        ease: Linear.easeIn
                    });
                    // 文字播放
                    var j = 1;
                    for (; j < 13; j++) {
                        playWord($(".j" + j), 0.2);
                    }
                }
            });

        });

    });
})();