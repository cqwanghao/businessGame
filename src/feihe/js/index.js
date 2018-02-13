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
                if(target == 4){
                    // 销毁当前实例
                    // slide.destroy();
                }
            },
        });
        window.slide = slide;

        slide.slideTo(4);

        var pageIndex = 0;

        // 选择模板
        var swiper = new Swiper('.swiper-container', {
            on: {
                init: function(){
                    pageIndex = this.activeIndex;
                    console.log(pageIndex);
                    //移动缩放旋转
                    transformImg();
                },
                slideChangeTransitionEnd: function(){
                    pageIndex = this.activeIndex;
                    console.log(pageIndex);
                    //移动缩放旋转
                    transformImg();
                },
            },
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
                // 销毁实例
                swiper.destroy();
                // 更换模板
                $(".upload-area").hide().eq(pageIndex).show();
                $('.templetBg').eq(pageIndex).attr('src', arg.target.result);
                $('#upload').hide();
                $(".arrow-left").hide();
                $(".arrow-right").hide();
            }
        });

        //移动缩放旋转
        // var pinchRotateImg = document.querySelector('.templetBg');
        // var mobanImg = document.querySelector(".templetImg");
        function transformImg(){
            var pinchRotateImg = $('.templetBg')[pageIndex];
            var mobanImg = $(".templetImg")[pageIndex];
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

                // 重新初始化实例
                // slide = new slidePage({
                //     useAnimation: true,
                //     before: function(origin,direction,target){
                //         console.log("origin:"+origin+",direction:"+direction+",target:"+target);
                //     },
                //     after: function(origin,direction,target){
                //         console.log("origin:"+origin+",direction:"+direction+",target:"+target);
                //         if(target == 4){
                //             // 销毁当前实例
                //             slide.destroy();
                //             console.log(slide);
                //         }
                //     },
                // });
                // window.slide = slide;

                // console.log(slide);
                // 跳到下一页
                // slide.slideNext();
                // 传入page页码，滑动定位到对应的page
                slide.slideTo(5);
                // $('.page.saveImg ').fadeIn();
                // $('.page.canvas').fadeOut();
            });
        });

    });

})();