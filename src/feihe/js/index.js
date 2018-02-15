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

        // 服务器路径
        // manifest.forEach(function(item,index){
        //     item = "/Scripts/mp/FeiHe/"+ item;
        //     manifest[index] = item;
        // });

        queue.loadManifest(manifest);
        queue.on("fileload", function (e) {
            progress++;
            $('#progress').html(parseInt(progress / manifest.length * 100));
        }, this);
        queue.on('complete', handleComplete, this);
        //加载完毕处理函数
        function handleComplete() {
            $('.pageAnimate').show();
           console.log('complete')
        }

        // 验证年
        $(".year").on("input",function(){
            var yearVal = $(".year").val();
            if(isNaN(yearVal)){
                $(".year").val("");
                return false;
            }
            if(yearVal.length > 4){
                yearVal = yearVal.substring(0,4);
                $(".year").val(yearVal);
                return false;
            }
        });

        // 验证月
        $(".month").on("input",function(e){
            var monthVal = $(".month").val();
            if(isNaN(monthVal)){
                $(".month").val("");
                return false;
            }
            if(monthVal <= 0 || monthVal >= 13){
                $(".month").val("");
                return false;
            }
        });

        // 出生年、月、医院
        var dateYear = "";
        var dateMonth = "";
        var dateAddr = "";
        var userName = "微风";

        // 全屏滚动
        var slide = new slidePage({
            useAnimation: true,
            before: function(origin,direction,target){
                $('.pageAnimate').fadeOut();
                switch (target | 0) {
                    case 1: 
                        $('.page.loading .pageAnimate').fadeIn();
                        console.log(9999)
                        // $('.glbYun1').show().removeClass('active');
                        break;
                    case 2:
                        $('.page.guodu .pageAnimate').fadeIn();
                        break;
                    case 3: 
                        $('.xianhe2').show();
                        break;
                    default:
                        break;
                }
            },
            after: function(origin,direction,target){
                if(target === 2){
                    console.log(2);
                    $(".xianhe3").addClass("animated fadeOut");
                    $(".xianhe").addClass("active");
                    var timer = setTimeout(function(){
                        $(".xianhe3").removeClass("animated fadeOut");
                        $(".xianhe").removeClass("active");
                        clearTimeout(timer);
                    },3000);
                }
                console.log("target:"+target);
                switch (target | 0) {
                    case 2:
                        // if (direction === 'next') slide.slideNext();
                        // else slide.slidePrev();
                        break;
                    default:
                        break;
                }
                // $('.pageAnimate').hide();
                // if (direction === 'prev') {
                //     switch (target | 0) {
                //         case 1: 
                //             $('.page.loading .pageAnimate').show();
                //             console.log(9999)
                //             // $('.glbYun1').show().removeClass('active');
                //             break;
                //         case 2:
                //         alert(2)
                //             $('.glbYun1').show().addClass('active');
                //             break;
                //         case 3: 
                //             $('.xianhe2').show();
                //             break;
                //         default:
                //             break;
                //     }
                // }
                if(target == 4){
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
        qrcode.makeCode('http://h5.zegelo.com/MP/FeiHe/Index');

        var qrcodeTimer = setTimeout(function(){
            // 获取二维码
            var qrcodeImg = $(".qrcode img").attr("src");
            $(".qrcodes img").attr("src",qrcodeImg);
            clearTimeout(qrcodeTimer);
        },1000);

        //上传图片
        $("#upload").on("change", function (e) {
            layer.open({
                type: 2,
                content:'上传中...',
                shadeClose: false
            });
            var file = e.target.files[0];
            var Orientation = null;
            if (!file.type.match('image.*')) {
                return false;
            }
            EXIF.getData(file, function () {
                Orientation = EXIF.getTag(this, 'Orientation');
            });

            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (event) {
                var result = event.target.result; //返回的dataURL
                var image = new Image();
                image.src = result;
                image.onload = function () { //创建一个image对象，给canvas绘制使用

                    var cvs = document.createElement('canvas');
                    var ctx = cvs.getContext('2d');
                    var scale = 1; //预留压缩比

                    cvs.width = this.width * scale;
                    cvs.height = this.height * scale; //计算等比缩小后图片宽高

                    if (Orientation && Orientation != 1) {
                        switch (Orientation) {
                            case 6: // 旋转90度

                            cvs.width = this.height * scale;
                            cvs.height = this.width * scale;
                            ctx.rotate(Math.PI / 2);
                            // (0,-imgHeight) 从旋转原理图那里获得的起始点
                            ctx.drawImage(this, 0, -this.height * scale, this.width * scale, this.height * scale);
                            break;
                            case 3: // 旋转180度
                            ctx.rotate(Math.PI);
                            ctx.drawImage(this, this.width * scale, -this.height * scale, this.width * scale, this.height * scale);
                            break;
                            case 8: // 旋转-90度

                            cvs.width = this.height * scale;
                            cvs.height = this.width * scale;
                            ctx.rotate(3 * Math.PI / 2);
                            ctx.drawImage(this, -this.width * scale, 0, this.width * scale, this.height * scale);
                            break;

                        }
                    } else {
                        ctx.drawImage(this, 0, 0, cvs.width, cvs.height);
                    } 
                    // $('#pinchRotateImg').attr('src', cvs.toDataURL('image/png', 0.7));
                    // $('#upload').hide();
                    // 销毁实例
                    swiper.destroy();
                    // 更换模板
                    $(".upload-area").hide().eq(pageIndex).show();
                    $('.templetBg').eq(pageIndex).attr('src', cvs.toDataURL('image/png', 0.7));
                    $('#upload').hide();
                    $(".arrow-left").hide();
                    $(".arrow-right").hide();
                    //移动缩放旋转
                    transformImg();
                    layer.closeAll();
                };
            };
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
                // 合成图
                $('#resultImg').attr('src', canvas.toDataURL("image/png"));
                // 分享小图
                $('#shareImg').attr('src', canvas.toDataURL("image/png"));

                
                if(!dateYear || !dateMonth || !dateAddr || !userName){
                    $(".messageCover").fadeIn();
                    // alert("信息不能为空");
                    // 跳到上一页
                    slide.slidePrev();
                    return false;
                }
                console.log(dateYear+","+dateMonth+","+dateAddr+","+userName);
                
                var resultTimer = setTimeout(function(){
                    html2canvas(document.querySelector("#shareResult"), {
                        backgroundColor: 'transparent', // 设置背景透明
                    }).then(function (canvas2) {
                        // console.log(canvas2.toDataURL("image/png"));
                        $("#shareLogo").attr("src",canvas2.toDataURL("image/png"));
                        $("[name=UploadPhoto]").val($(".templetBg").eq(pageIndex).attr("src"));
                        $("[name=TempLateID]").val(pageIndex + 1);
                        $("[name=UserPhoto]").val($("#resultImg").attr("src"));
                        $("[name=SharePhoto]").val($("#shareLogo").attr("src"));
        
                        // 调用接口
                        // coper.subuserPhoto();
                    });
                    clearTimeout(resultTimer);
                },2000);

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

        $(".messageCover").click(function(){
            $(".messageCover").fadeOut();
        });

    });

})();