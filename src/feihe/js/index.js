(function () {
    $(function () {
        // 全屏滚动
        var slide = new slidePage({
            useAnimation: true,
            before: function(origin,direction,target){
                console.log("origin:"+origin+",direction:"+direction+",target:"+target);
            },
            after: function(origin,direction,target){
                console.log("origin:"+origin+",direction:"+direction+",target:"+target);
            },
        });
        window.slide = slide;

        slide.slideTo(4);

        // 选择模板
        var swiper = new Swiper('.swiper-container', {
            navigation: {
              nextEl: '.swiper-arrow-next',
              prevEl: '.swiper-arrow-prev',
            },
        });

        //上传图片
        $("#upload").on("change", function (e) {
            var file = e.target.files[0];
            if (!file.type.match('image.*')) {
            return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (arg) {
                // 更换模板
                $('.templetBg').attr('src', arg.target.result);
                $('#upload').hide();
                swiper.destroy();
                $(".arrow-left").hide();
                $(".arrow-right").hide();
            }
        });

        //移动缩放旋转
        var pinchRotateImg = document.querySelector('.templetBg');
        var mobanImg = document.querySelector(".templetImg");
        // var pinchRotateImg = document.getElementById('templetBg');
        // var mobanImg = document.getElementById("templetImg");
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

    });

})();