(function () {
    var seept = 3;
    $(function () {
        // 出生年、月、医院
        var dateYear = "";
        var dateMonth = "";
        var dateAddr = "";
        var userName = "微风";
        var nowDate = new Date();
        var nowYear = nowDate.getFullYear();
        var pageIndex = 1;
        // 关键词
        var keywords = [
            '才貌双全',
            '天真无邪',
            '天资过人',
            '聪明伶俐',
            '纯真',
            '调皮',
            '乖巧',
            '机灵',
            '可爱',
            '萌萌哒'
        ];

        // 随机数
        var RndNum = Math.floor(Math.random() * 10);

        var donghua = new TimelineMax();
        //预加载资源
        var progress = 0;
        var queue = new createjs.LoadQueue(true);
        var queue2 = new createjs.LoadQueue(true);
        var manifest = [
            'images/arrow-left.png',
            'images/arrow-right.png',
            'images/bg1.jpg',
            'images/bgMain.jpg',
            'images/brief-cloud12.png',
            'images/brief-word1.png',
            'images/briefBg.png',
            'images/chibang.png',
            'images/cloud1.png',
            'images/cover-cloud.png',
            'images/cover-crane.png',
            'images/cover-light.png',
            'images/dashu.png',
            'images/denglong1.png',
            'images/geng.png',
            'images/gou.png',
            'images/gou1.png',
            'images/gou2.png',
            'images/guoduYun1.png',
            'images/hua.png',
            'images/load.jpg',
            'images/loading.jpg',
            'images/loading.gif',
            'images/loading1.png',
            'images/loadingBg.jpg',
            'images/loadingBg1.png',
            'images/loadingBg2.png',
            'images/text1.png',
            'images/text2.png',
            'images/text3.png',
            'images/warn.png',
            'images/xianhe1.png',
            'images/xianhe2.png',
            'images/xingxing1.png',
            'images/yun1.png',
            'images/yun2.png',
            'images/yun3.png',
            'images/yun4.png',
            'images/yun6.png',
            'images/yun7.png',
            'images/yun9.png',
            'images/dl1.png',
            'images/dl2.png',
            'images/dl3.png',
            'images/dl4.png',
            'images/dl5.png',
            'images/dl6.png',
        ];

        var manifest2 = [
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
            'images/next1.png',
            'images/page1yun2.png',
            'images/qrcode.png',
            'images/result1.png',
            'images/share-btn.png',
            'images/share-cloud1.png',
            'images/share-cloud2.png',
            'images/share-cloud3.png',
            'images/share-crane.png',
            'images/share-logo.png',
            'images/share-mushroom.png',
            'images/share-mushroom2.png',
            'images/share-pine.png',
            'images/share-save.png',
            'images/share-stone.png',
            'images/share.png',
            'images/shareBg.png',
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
            'images/templet1.png',
            'images/templet2.png',
            'images/templet3.png',
        ]

        // 服务器路径
        // manifest.forEach(function(item,index){
        //     item = "/Scripts/mp/FeiHe/"+ item;
        //     manifest[index] = item;
        // });

        queue.loadManifest(manifest);
        queue.on("fileload", function (e) {
            progress++;
            $('.loadYBg .count').html(parseInt(progress / manifest.length * 100));
        }, this);
        queue.on('complete', handleComplete, this);
        //加载完毕处理函数
        function handleComplete() {
            //二次加载资源
            queue2.loadManifest(manifest2);
            donghua.to(".yun1", seept,{top: '-1000'},1.2);
            donghua.to(".yun2", seept,{top: '-1000'},1.3);
            donghua.to(".loadYBg", seept,{top: '-1000'},1.4);
            donghua.to(".bg1", seept,{top: '-1000'},1.5);
            donghua.to(".bg2", seept,{top: '-1000'},1.5);
            donghua.to(".xingxing", seept,{top: '-1000'},1.2);
            donghua.to(".xianhe1", seept,{top: '-1000'},1.5);
            donghua.to(".yun3", seept,{top: '-1000'},1.2);
            donghua.to(".yun4", seept,{top: '-1000'},1.2);
            donghua.to(".loadingPage", seept,{'backgroundPosition': 'left bottom'},1.2);

            //第二屏动画
            donghua.to(".gou1", seept,{top: '3.4rem'},1.2);
            donghua.to(".yun6", seept,{top: '-.6rem'},1.2);
            donghua.to(".yun7", seept,{bottom: '3.6rem'},1.2);
            donghua.to(".hua", seept,{bottom: '12.4rem'},.5);
            donghua.to(".yun8", seept,{bottom: '-13.4rem'},1.2);
            donghua.from('.text1', 1, {x: '', autoAlpha: 0});
            donghua.from('.text2', 1, {x: '', autoAlpha: 0});
            donghua.from('.text3', 1, {x: '', autoAlpha: 0});
            donghua.to(".nextBtn1", seept,{bottom: '0'},5.5);
        }

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

        // 验证年
        $(".year").on("input", function () {
            var yearVal = $(".year").val();
            if (isNaN(yearVal)) {
                $(".year").val("");
                return false;
            }
            if (yearVal.length > 4) {
                yearVal = yearVal.substring(0, 4);
                $(".year").val(yearVal);
                return false;
            }
        });

        $(".year").on("blur",function(){
            var yearVal = $(".year").val();
            yearVal = Number(yearVal);
            if(yearVal > nowYear){
                layer.open({
                    content: '请输入合法年份！',
                    btn: '我知道了'
                });
            }
            yearVal = yearVal.toString();
            if(yearVal.length !== 4){
                layer.open({
                    content: '请输入合法年份！',
                    btn: '我知道了'
                });
            }
        });

        // 验证月
        $(".month").on("input", function (e) {
            var monthVal = $(".month").val();
            if (isNaN(monthVal)) {
                $(".month").val("");
                return false;
            }
            if (monthVal <= 0 || monthVal >= 13) {
                $(".month").val("");
                return false;
            }
        });

        // 选择模板
        var swiper = new Swiper('.tempSwiper', {
            loop: true,
            on: {
                init: function () {
                    pageIndex = this.activeIndex;
                    $(".upload-box").hide().eq(pageIndex).show();
                    $(".fileUpload").hide().eq(pageIndex).show();
                    // 上传图片
                    uploadImg();
                },
                slideChangeTransitionEnd: function () {
                    pageIndex = this.activeIndex;
                    $(".upload-box").hide().eq(pageIndex).show();
                    $(".fileUpload").hide().eq(pageIndex).show();
                    // 上传图片
                    uploadImg();
                },
            },
            navigation: {
                nextEl: '.swiper-arrow-next',
                prevEl: '.swiper-arrow-prev',
            },
        });

        //生成二维码
        var qrcode = new QRCode(document.querySelector(".qrcode"), {
            width: 150,
            height: 150,
            colorDark: "#d7453c"
        });
        qrcode.makeCode('http://h5.zegelo.com/MP/FeiHe/Index');

        var qrcodeTimer = setTimeout(function () {
            // 获取二维码
            var qrcodeImg = $(".qrcode img").attr("src");
            $(".qrcodes img").attr("src", qrcodeImg);
            clearTimeout(qrcodeTimer);
        }, 1000);

        var uploadFlag = false;

        function uploadImg(){
            //上传图片
            $(".fileUpload").eq(pageIndex).on("change", function (e) {
                layer.open({
                    type: 2,
                    content: '上传中...',
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
                        // 更换模板
                        $('.templetBg').attr('src', cvs.toDataURL('image/png', 0.7));
                        if (!uploadFlag) {
                            //移动缩放旋转
                            transformImg();
                        }
                        layer.closeAll();
                        uploadFlag = true;
                    };
                };
            });
        }

        //移动缩放旋转
        function transformImg() {
            var pinchRotateImg0 = $('.templetBg')[0];
            var pinchRotateImg1 = $('.templetBg')[1];
            var pinchRotateImg2 = $('.templetBg')[2];
            var pinchRotateImg3 = $('.templetBg')[3];
            var pinchRotateImg4 = $('.templetBg')[4];

            var mobanImg0 = $(".fileUpload")[0];
            var mobanImg1 = $(".fileUpload")[1];
            var mobanImg2 = $(".fileUpload")[2];
            var mobanImg3 = $(".fileUpload")[3];
            var mobanImg4 = $(".fileUpload")[4];
            Transform(pinchRotateImg0);
            Transform(pinchRotateImg1);
            Transform(pinchRotateImg2);
            Transform(pinchRotateImg3);
            Transform(pinchRotateImg4);
            new AlloyFinger(mobanImg0, {
                rotate: function (evt) {
                    pinchRotateImg0.rotateZ += evt.angle;
                },
                multipointStart: function () {
                    initScale = pinchRotateImg0.scaleX;
                },
                pinch: function (evt) {
                    pinchRotateImg0.scaleX = pinchRotateImg0.scaleY = initScale * evt.zoom;
                },
                pressMove: function (evt) {
                    pinchRotateImg0.translateX += evt.deltaX;
                    pinchRotateImg0.translateY += evt.deltaY;
                    evt.preventDefault();
                }
            });
            new AlloyFinger(mobanImg1, {
                rotate: function (evt) {
                    pinchRotateImg1.rotateZ += evt.angle;
                },
                multipointStart: function () {
                    initScale = pinchRotateImg1.scaleX;
                },
                pinch: function (evt) {
                    pinchRotateImg1.scaleX = pinchRotateImg1.scaleY = initScale * evt.zoom;
                },
                pressMove: function (evt) {
                    pinchRotateImg1.translateX += evt.deltaX;
                    pinchRotateImg1.translateY += evt.deltaY;
                    evt.preventDefault();
                }
            });
            new AlloyFinger(mobanImg2, {
                rotate: function (evt) {
                    pinchRotateImg2.rotateZ += evt.angle;
                },
                multipointStart: function () {
                    initScale = pinchRotateImg2.scaleX;
                },
                pinch: function (evt) {
                    pinchRotateImg2.scaleX = pinchRotateImg2.scaleY = initScale * evt.zoom;
                },
                pressMove: function (evt) {
                    pinchRotateImg2.translateX += evt.deltaX;
                    pinchRotateImg2.translateY += evt.deltaY;
                    evt.preventDefault();
                }
            });
            new AlloyFinger(mobanImg3, {
                rotate: function (evt) {
                    pinchRotateImg3.rotateZ += evt.angle;
                },
                multipointStart: function () {
                    initScale = pinchRotateImg3.scaleX;
                },
                pinch: function (evt) {
                    pinchRotateImg3.scaleX = pinchRotateImg3.scaleY = initScale * evt.zoom;
                },
                pressMove: function (evt) {
                    pinchRotateImg3.translateX += evt.deltaX;
                    pinchRotateImg3.translateY += evt.deltaY;
                    evt.preventDefault();
                }
            });
            new AlloyFinger(mobanImg4, {
                rotate: function (evt) {
                    pinchRotateImg4.rotateZ += evt.angle;
                },
                multipointStart: function () {
                    initScale = pinchRotateImg4.scaleX;
                },
                pinch: function (evt) {
                    pinchRotateImg4.scaleX = pinchRotateImg4.scaleY = initScale * evt.zoom;
                },
                pressMove: function (evt) {
                    pinchRotateImg4.translateX += evt.deltaX;
                    pinchRotateImg4.translateY += evt.deltaY;
                    evt.preventDefault();
                }
            });
        }

        //监听输入框值
        $('.addr-s').on('input', function() {
            if ($('.addr-s').val().length >= 8) {
                $('.addr-s').css({'fontSize':'.56rem'})
            }else {
                $('.addr-s').css({'fontSize':'.8rem'})
            }
        });

        //生成图片
        $('#templet-card').click(function () {
            // 判断图片是否上传
            var fileFlag = false;
            for(var i = 0;i < $(".fileUpload").length;i++){
                if($(".fileUpload")[i].files.length != 0){
                    fileFlag = true;
                }
            };
            if (!fileFlag) {
                layer.open({
                    content: '请上传图片在合成！',
                    btn: '我知道了'
                });
                return false;
            }
            var index = layer.open({
                type: 2
                ,shadeClose: false
            });
            // 显示标签
            var tagIndex = "";
            tagIndex = pageIndex;
            if(pageIndex === 4){
                tagIndex = 1;
            }
            if(pageIndex === 0){
                tagIndex = 3;
            }
            console.log(tagIndex);
            $(".word-area .tag img").eq(pageIndex).attr("src", "images/tag" + tagIndex + "-" + (RndNum + 1) + ".png");
            // 服务器路径
            // $(".word-area .tag img").eq(pageIndex).attr("src", "/Scripts/mp/FeiHe/images/tag" + (pageIndex + 1) + "-" + (RndNum + 1) + ".png");
            
            $(".word-area .tag").eq(pageIndex).show();
            $(".t-tag").show();


            html2canvas($(".upload-box-wrap")[pageIndex], {
                backgroundColor: 'transparent', // 设置背景透明
            }).then(function (canvas0) {
                $(".upload-box-wrap").eq(pageIndex).html('<img src="' + canvas0.toDataURL("image/png") +'" class="templetBg" />');

                html2canvas($(".upload-area")[pageIndex], {
                    backgroundColor: 'transparent', // 设置背景透明
                }).then(function (canvas) {
                    layer.close(index);
                    // 合成图
                    $('#resultImg').attr('src', canvas.toDataURL("image/png"));
                    // 分享小图
                    $('#shareImg').attr('src', $(".upload-box img").attr("src"));

                    $(".share").css("z-index",1);

                    $(".loadingPage").hide();
                    $(".share").show();

                    var resultTimer = setTimeout(function () {
                        html2canvas(document.querySelector("#shareResult"), {
                            backgroundColor: 'transparent', // 设置背景透明
                        }).then(function (canvas2) {
                            $("#shareLogo").attr("src", canvas2.toDataURL("image/png"));
                            $("[name=UploadPhoto]").val($(".templetBg").eq(pageIndex).attr("src"));
                            $("[name=TempLateID]").val(tagIndex + 1);
                            $("[name=UserPhoto]").val($("#resultImg").attr("src"));
                            $("[name=SharePhoto]").val($("#shareLogo").attr("src"));

                            // 调用接口
                            // coper.subuserPhoto();
                        });
                        clearTimeout(resultTimer);
                    }, 2000);

                });
            });
        });

        
        var donghua2 = new TimelineMax();
        var donghua3 = new TimelineMax();
        // 跳到下一页
        $(".next-btn").click(function () {
            donghua2.to('.yun6', seept, {top: '-1000'}, .2);
            donghua2.to('.gou1', seept, {top: '-1000'}, .2);
            donghua2.to('.yun6', seept, {top: '-1000'}, .2);
            donghua2.to('.yun7', seept, {top: '-1000'}, .2);
            donghua2.to('.hua', seept, {top: '-1000'}, .2);
            donghua2.to('.yun8', seept, {top: '-1000'}, .2);
            donghua2.to('.nextBtn1', seept, {top: '-1000'}, .2);
            donghua2.to('.textBox', seept, {top: '-1000'}, .2);
            donghua2.to('.gou11', 3, {top: '-1000'}, .4);

            
            donghua2.to('.guodu2', seept, {top: '0'}, .1);

            
            //表单
            donghua3.to('.guodu2', 2, {top: '-82%'}, 1);
            donghua2.to('.message-lantern', seept, {top: '6.1%'}, 1.2);
            donghua2.to('.message-cloud1', seept, {top: '39%'}, 1.2);
            donghua2.to('.message-cloud2', seept, {top: '85.7%'}, 1.2);
            donghua2.to('.message-upload', seept, {top: '88.3%'}, 1.2);
            donghua2.to('.dashu', seept, {bottom: '-18rem'}, 1.2);
            donghua3.to('.infoBoxZ', 0, {display: 'flex'}, 1.2);
            donghua3.to('.message-box', seept, {top: '32%'}, 1.4);
            donghua3.to('.message-word1', seept, {top: '23.8%'}, 1.4);
            donghua3.to('.message-word2', seept, {top: '51.9%'}, 2);
            donghua3.to('.message-box2', seept, {top: '59.4%'}, 2);
        });

        $(".message-upload").click(function () {
            dateYear = $(".year").val();
            dateMonth = $(".month").val();
            dateAddr = $(".addr-s").val();
            $('.briefPage .ani').show();
            if (!dateYear || !dateMonth || !dateAddr || !userName) {
                $(".messageCover").fadeIn();
            } else {
                // 验证年份合法性
                var yearVal = $(".year").val();
                yearVal = Number(yearVal);
                if(yearVal > nowYear){
                    layer.open({
                        content: '请输入合法年份！',
                        btn: '我知道了'
                    });
                    return false;
                }
                yearVal = yearVal.toString();
                if(yearVal.length !== 4){
                    layer.open({
                        content: '请输入合法年份！',
                        btn: '我知道了'
                    });
                    return false;
                }
                $(".t-year").html(dateYear);
                $(".t-month").html(dateMonth);
                $(".t-addr").html(dateAddr);
                $(".t-name").html(userName);
                $(".t-tag").html(keywords[RndNum]);

                var donghua4 = new TimelineMax();
                donghua4.to('.guodu2', seept, {top: '-130%'}, .2);
                donghua4.to('.message-lantern', seept, {top: '-100%'}, .2);
                donghua4.to('.message-cloud1', seept, {top: '-100%'}, .2);
                donghua4.to('.message-cloud2', seept, {top: '-100%'}, .2);
                donghua4.to('.message-upload', seept, {top: '-100%'}, .2);
                donghua4.to('.dashu', seept, {bottom: '80%'}, .2);
                donghua4.to('.infoBoxZ', 0, {top: '-120%'}, .2);
                donghua4.to('.message-box', seept, {top: '32%'}, .2);
                donghua4.to('.message-word1', seept, {top: '23.8%'}, .2);
                donghua4.to('.message-word2', seept, {top: '51.9%'}, .2);
                donghua4.to('.message-box2', seept, {top: '59.4%'}, .2);
                // donghua4.to('.dl1', seept, {display: 'none'}, 3);
                donghua4.to('.dl6', 2, {top: '-50%'}, .3);
                donghua4.to('.dl3', 2, {top: '14.2rem'}, .5);
                donghua4.to('.dl1', 2, {top: '9.2rem'},  .7);
                donghua4.to('.dl5', 2, {top: '13.2rem'}, 1.1);
                donghua4.to('.dl2', 2, {top: '10.2rem'}, 1.3);
                donghua4.to('.templet', seept, {top: '0'}, 1);
                donghua4.to('.templet-lantern3', seept, {top: '49.9%'}, 1);
                donghua4.to('.templet-lantern2', seept, {bottom: '0'}, 1);
                donghua4.to('.yun33', seept, {top: '.4rem'}, 1);
            }
        });

        // 分享按钮
        $("#share-btn").click(function () {
            $(".cover").fadeIn();
        });
        $(".cover").click(function () {
            $(".cover").fadeOut();
        });
        // 关闭信息提示
        $(".messageCover").click(function () {
            $(".messageCover").fadeOut();
        });

    });

})();