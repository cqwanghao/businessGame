(function () {
    $(function () {
        //预加载资源
        var progress = 0;
        var queue = new createjs.LoadQueue(false);
        var manifest = [
            'images/arrow-left.png',
            'images/arrow-right.png',
            'images/briefBg.png',
            'images/brief-card.png',
            'images/brief-cloud1.png',
            'images/brief-cloud2.png',
            'images/brief-cloud3.png',
            'images/brief-dog.png',
            'images/brief-flower.png',
            'images/brief-word1.png',
            'images/cover-cloud.png',
            'images/cover-crane.png',
            'images/cover-light.png',
            'images/loading1.png',
            'images/loadingBg.png',
            'images/loading-circle.png',
            'images/message-bird.png',
            'images/message-box.png',
            'images/message-cloud1.png',
            'images/message-cloud2.png',
            'images/message-crane.png',
            'images/message-lantern.png',
            'images/message-tree.png',
            'images/message-upload.png',
            'images/message-word1.png',
            'images/message-word2.png',
            'images/result1.png',
            'images/shareBg.png',
            'images/share-btn.png',
            'images/share-cloud1.png',
            'images/share-cloud2.png',
            'images/share-cloud3.png',
            'images/share-crane.png',
            'images/share-logo.png',
            'images/share-mushroom.png',
            'images/share-pine.png',
            'images/share-save.png',
            'images/share-stone.png',
            'images/templet1.png',
            'images/templet2.png',
            'images/templet3.png',
            'images/templet-bg1.png',
            'images/templet-bg2.png',
            'images/templet-bg3.png',
            'images/templet-card.png',
            'images/templet-cloud.png',
            'images/templet-lantern.png',
            'images/templet-lantern2.png',
            'images/templet-lantern3.png',
            'images/templet-pine.png',
            'images/templet-tree.png',
            'images/templet-upload1.png',
            'images/templet-upload2.png',
            'images/templet-upload3.png',
            'images/warn.png',
        ];
        queue.loadManifest(manifest);
        queue.on("fileload", function (e) {
            progress++;
            $('#progress').html(parseInt(progress / manifest.length * 100));
        }, this);
        queue.on('complete', handleComplete, this);
        //加载完毕处理函数
        function handleComplete() {
            var timer = setTimeout(function(){
                $('.page.loading').fadeOut();
            },2000);
        }

        // 出生年、月、医院
        var dateYear = "";
        var dateMonth = "";
        var dateAddr = "";
        var userName = "偶然的细雨";

        // 全屏滚动
        var slide = new slidePage({
            useAnimation: true,
            before: function(origin,direction,target){
                console.log("origin:"+origin+",direction:"+direction+",target:"+target);
            },
            after: function(origin,direction,target){
                console.log("origin:"+origin+",direction:"+direction+",target:"+target);
                if(target == 3){
                    // 销毁当前实例
                    // slide.destroy();
                    dateYear = $(".year").val();
                    dateMonth = $(".month").val();
                    dateAddr = $(".addr-s").val();
                    
                    $(".t-year").html(dateYear);
                    $(".t-month").html(dateMonth);
                    $(".t-addr").html(dateAddr);
                    $(".t-name").html(userName);
                }
            },
        });
        window.slide = slide;

        // slide.slideTo(3);
 
        // 跳到下一页
        $(".next-btn").click(function(){
            slide.slideNext();
        });

        var pageIndex = 0;

        // 选择模板
        var swiper = new Swiper('.swiper-container', {
            on: {
                init: function(){
                    pageIndex = this.activeIndex;
                    console.log(pageIndex);
                    
                },
                slideChangeTransitionEnd: function(){
                    pageIndex = this.activeIndex;
                    console.log(pageIndex);
                },
            },
            navigation: {
                nextEl: '.swiper-arrow-next',
                prevEl: '.swiper-arrow-prev',
            },
        });

        // 生成二维码
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            width: 150,
            height: 150,
            colorDark: "#d7453c"
        });
        // qrcode.makeCode('http://h5.zegelo.com/static/metro/index.html');
        qrcode.makeCode('https://www.baidu.com/');

        var qrcodeTimer = setTimeout(function(){
            // 获取二维码
            var qrcodeImg = $(".qrcode img").attr("src");
            $(".qrcodes img").attr("src",qrcodeImg);
            clearTimeout(qrcodeTimer);
        },1000);

        //上传图片
        $("#upload").on("change", function (e) {
            var file = e.target.files[0];
            if (!file.type.match('image.*')) {
            return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (arg) {
                // 销毁实例
                swiper.destroy();
                // 更换模板
                $(".upload-area").hide().eq(pageIndex).show();
                $('.templetBg').eq(pageIndex).attr('src', arg.target.result);
                $('#upload').hide();
                $(".arrow-left").hide();
                $(".arrow-right").hide();
                //移动缩放旋转
                transformImg();
            }
        });

        //移动缩放旋转
        // var pinchRotateImg = document.querySelector('.templetBg');
        // var mobanImg = document.querySelector(".templetImg");
        function transformImg(){
            var pinchRotateImg = $('.templetBg')[pageIndex];
            var mobanImg = $(".word-area")[pageIndex];
            // var mobanImg = $(".templetImg")[pageIndex];
            Transform(pinchRotateImg);
            new AlloyFinger(mobanImg, {
                rotate: function (evt) {
                pinchRotateImg.rotateZ += evt.angle;
                },
                multipointStart: function () {
                initScale = pinchRotateImg.scaleX;
                },
                pinch: function (evt) {
                pinchRotateImg.scaleX = pinchRotateImg.scaleY = initScale * evt.zoom;
                },
                pressMove: function (evt) {
                pinchRotateImg.translateX += evt.deltaX;
                pinchRotateImg.translateY += evt.deltaY;
                evt.preventDefault();
                }
            });
        }

        //生成图片
        $('#templet-card').click(function () {
            // console.log(document.getElementById('templet-card').value)
            if (!document.getElementById('upload').files.length) return alert('请上传图片在合成！');
            html2canvas($(".upload-area")[pageIndex], {
                backgroundColor: 'transparent', // 设置背景透明
            }).then(function (canvas) {
                $('#resultImg').attr('src', canvas.toDataURL("image/png"));

                if(!dateYear || !dateMonth || !dateAddr || !userName){
                    alert("信息不能为空");
                    // 跳到上一页
                    slide.slidePrev();
                    return false;
                }
                console.log(dateYear+","+dateMonth+","+dateAddr+","+userName);

                // 跳到下一页
                slide.slideNext();
            });
        });

        // 分享按钮
        $("#share-btn").click(function(){
            $(".cover").fadeIn();
        });
        $(".cover").click(function(){
            $(".cover").fadeOut();
        });

    });

})();