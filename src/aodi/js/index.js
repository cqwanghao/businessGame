(function () {
    $(function () {
        // 背景音乐播放
        function audioAutoPlay(id){
            var audio = document.getElementById(id);
            audio.play();
            audio.volume = 0.2;
            document.addEventListener("WeixinJSBridgeReady", function () {
              audio.play();
              audio.volume = 0.2;
            }, false);
        }
        audioAutoPlay('media');
        $('.video_exist').on('click', function () {
            var media = document.getElementById('media');
            if (media.paused) {
                media.play();
                $(this).addClass('rotate');
            }else {
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
        },0);
        donghua.to($('.page0-06'), 4, {
            opacity: .3,
            ease: Linear.easeIn
        },0);
        donghua.to($('.page0-07'), 5, {
            opacity: 1,
            ease: Linear.easeIn
        },0);
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
        },6);


        // 点击启动
        $(".page1-03").on("click", function () {
            $(this).off("click");
            // 文字播放
            var i = 1;
            for (; i < 25; i++) {
                playWord(i, 0.2);
            }
            var timer = setTimeout(function(){
                // 启动车辆音乐
                document.getElementById('media2').play();
                $(".page1-04").find(".wheel").addClass("active");
                // 背景移动
                donghua.to($('.page1-00'), 12, {
                    // opacity: 1,
                    // display: "block",
                    backgroundPosition: "-1000px 0",
                    ease: Linear.easeIn,
                    // transform: 'translate3d(-1824px , 0, 0)'
                    // transform: 'translate3d(0 , 0, 0)'
                });
                // 文字淡出
                // page0淡出
                donghua.to($('.page1-05'), 2, {
                    opacity: 0,
                    ease: Linear.easeIn,
                },2);

                clearTimeout(timer);
            },4800);

            var timer1 = setTimeout(function(){
                $(".page1-04").find(".wheel").removeClass("active");
                clearTimeout(timer1);
            },16800);
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