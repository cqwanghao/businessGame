(function () {
  $(function () {
    // baseurl
    var baseUrl = './';
    // 图片转换base64
    function toBase64(url, callback, outputFormat) { //图片地址，回调，输出格式
      var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        img = new Image;
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || "image/png", 0.7);
        callback.call(this, dataURL);
        canvas = null;
      };
      img.src = url;
    }

    // 随机参数
    var randomNum = Math.ceil(Math.random() * 30);

    if (randomNum < 10) {
      randomNum = "0" + randomNum;
    }
    $('.page4 .poster .text').attr('src', baseUrl + 'images/img-19.png');
    // 获取参数
    function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
    var userInfo = JSON.parse(getQueryString("userinfo")) || {};
    var o = getQueryString("o") || '';
    var friendid = '';
    var globImg = '';
    // 同步用户信息
    $('.page6-2 .photo img').attr('src', userInfo.avatarUrl);
    $('.page6-2 .name').text(userInfo.nickName);
    // 获取分享图片
    if (userInfo.openId) {
      var _encodeUrl = 'https://ms1.meituan.net/qrc/s?c=' + encodeURIComponent('https://zhenguo.meituan.com/pub/x_group_spread/share.html?o1=' + userInfo.openId);
      toBase64(_encodeUrl, function (img) {
        $('.qrcode-box img').attr('src', img)
      });
      // 我也要完连接更新
      $('.page7 .wan').attr('href', 'https://zhenguo.meituan.com/pub/x_group_spread/index.html?o=' + o + '&userinfo=' + encodeURIComponent(JSON.stringify(userInfo)));
      $.post('https://zhenguo.project.peidikeji.cn/api/share/' + o, function (data) {
        var _img = data.data.image || '';
        globImg = _img;
        friendid = data.data.openid;
        $('#shareImg').attr('src', _img);
      })
    }

    // 硬装id
    var ornamentArr0 = [];
    // 软装id
    var ornamentArr1 = [];
    // 日常id
    var ornamentArr2 = [];
    // 个性id
    var ornamentArr3 = [];
    // 场景图片
    var sceneSrc = "";
    // 传递id
    var transmitId = "";
    // 传递src
    var transmitSrc = "";
    // 传递配饰类型
    var goodsType = "";

    // 装饰id
    var woodId = "124";
    // 背景id
    var bgId = "11";
    // 添加icon数组
    var iconArr = [];
    // 场景索引
    var sceneIndex = 0;

    // 资源加载
    var queue0 = new createjs.LoadQueue(true);
    var queue1 = new createjs.LoadQueue(true);
    var fest0 = [
      // 公共图片
      baseUrl + 'images/loading.png',
      baseUrl + 'images/img-1.png',
      baseUrl + 'images/img-2.png',
      baseUrl + 'images/img-11.png',
      baseUrl + 'images/img-12.png',
      baseUrl + 'images/btns.png',
      baseUrl + 'images/page2.png',
      baseUrl + 'images/close.png',
      // 首页
      baseUrl + 'images/page1-1.png',
      baseUrl + 'images/page1-2.png',
      // 背景切换页
      baseUrl + 'images/page2-1.png',
      baseUrl + 'images/page2-2.png',
      baseUrl + 'images/page2-3.png',
      baseUrl + 'images/page2-4.png',
      baseUrl + 'images/page2-5.png',
      baseUrl + 'images/page2-6.png',
      baseUrl + "images/icons/1.png",
      baseUrl + "images/icons/2.png",
      baseUrl + "images/icons/3.png",
      baseUrl + "images/icons/4.png",
      baseUrl + "images/icons/5.png",
      // 背景图
      baseUrl + "images/icons/6.png",
      baseUrl + "images/icons/7.png",
      baseUrl + "images/icons/8.png",
      baseUrl + "images/icons/9.png",
      baseUrl + "images/icons/10.png",
      baseUrl + "images/icons/11.png",
      baseUrl + "images/icons/12.png",
      baseUrl + "images/icons/13.png",
      baseUrl + "images/icons/14.png",
      baseUrl + "images/icons/15.png",
      baseUrl + "images/icons/16.png",
      baseUrl + "images/icons/17.png",
      baseUrl + "images/icons/18.png",
      baseUrl + "images/icons/19.png",
      baseUrl + "images/icons/20.png",
      baseUrl + "images/icons/21.png",
      baseUrl + "images/icons/22.png",
      baseUrl + "images/icons/23.png",
      baseUrl + "images/icons/24.png",
      baseUrl + "images/icons/25.png",
      baseUrl + "images/icons/26.png",
      baseUrl + "images/icons/27.png",
      baseUrl + "images/icons/28.png",
      baseUrl + "images/icons/29.png",
      baseUrl + "images/icons/30.png",
    ]
    var fest1 = [
      // icons
      baseUrl + "images/icons/31.png",
      baseUrl + "images/icons/32.png",
      baseUrl + "images/icons/33.png",
      baseUrl + "images/icons/34.png",
      baseUrl + "images/icons/35.png",
      baseUrl + "images/icons/36.png",
      baseUrl + "images/icons/37.png",
      baseUrl + "images/icons/38.png",
      baseUrl + "images/icons/39.png",
      baseUrl + "images/icons/40.png",
      baseUrl + "images/icons/41.png",
      baseUrl + "images/icons/42.png",
      baseUrl + "images/icons/43.png",
      baseUrl + "images/icons/44.png",
      baseUrl + "images/icons/45.png",
      baseUrl + "images/icons/46.png",
      baseUrl + "images/icons/47.png",
      baseUrl + "images/icons/48.png",
      baseUrl + "images/icons/49.png",
      baseUrl + "images/icons/50.png",
      baseUrl + "images/icons/51.png",
      baseUrl + "images/icons/52.png",
      baseUrl + "images/icons/53.png",
      baseUrl + "images/icons/54.png",
      baseUrl + "images/icons/55.png",
      baseUrl + "images/icons/56.png",
      baseUrl + "images/icons/57.png",
      baseUrl + "images/icons/58.png",
      baseUrl + "images/icons/59.png",
      baseUrl + "images/icons/60.png",
      baseUrl + "images/icons/61.png",
      baseUrl + "images/icons/62.png",
      baseUrl + "images/icons/63.png",
      baseUrl + "images/icons/64.png",
      baseUrl + "images/icons/65.png",
      baseUrl + "images/icons/66.png",
      baseUrl + "images/icons/67.png",
      baseUrl + "images/icons/68.png",
      baseUrl + "images/icons/69.png",
      baseUrl + "images/icons/70.png",
      baseUrl + "images/icons/71.png",
      baseUrl + "images/icons/72.png",
      baseUrl + "images/icons/73.png",
      baseUrl + "images/icons/74.png",
      baseUrl + "images/icons/75.png",
      baseUrl + "images/icons/76.png",
      baseUrl + "images/icons/77.png",
      baseUrl + "images/icons/78.png",
      baseUrl + "images/icons/79.png",
      baseUrl + "images/icons/80.png",
      baseUrl + "images/icons/81.png",
      baseUrl + "images/icons/82.png",
      baseUrl + "images/icons/83.png",
      baseUrl + "images/icons/84.png",
      baseUrl + "images/icons/85.png",
      baseUrl + "images/icons/86.png",
      baseUrl + "images/icons/87.png",
      baseUrl + "images/icons/88.png",
      baseUrl + "images/icons/89.png",
      baseUrl + "images/icons/90.png",
      baseUrl + "images/icons/91.png",
      baseUrl + "images/icons/92.png",
      baseUrl + "images/icons/93.png",
      baseUrl + "images/icons/94.png",
      baseUrl + "images/icons/95.png",
      baseUrl + "images/icons/96.png",
      baseUrl + "images/icons/97.png",
      baseUrl + "images/icons/98.png",
      baseUrl + "images/icons/99.png",
      baseUrl + "images/icons/100.png",
      baseUrl + "images/icons/101.png",
      baseUrl + "images/icons/102.png",
      baseUrl + "images/icons/103.png",
      baseUrl + "images/icons/104.png",
      baseUrl + "images/icons/105.png",
      baseUrl + "images/icons/106.png",
      baseUrl + "images/icons/107.png",
      baseUrl + "images/icons/108.png",
      baseUrl + "images/icons/109.png",
      baseUrl + "images/icons/110.png",
      baseUrl + "images/icons/111.png",
      baseUrl + "images/icons/112.png",
      baseUrl + "images/icons/113.png",
      baseUrl + "images/icons/114.png",
      baseUrl + "images/icons/115.png",
      baseUrl + "images/icons/116.png",
      baseUrl + "images/icons/117.png",
      baseUrl + "images/icons/118.png",
      baseUrl + "images/icons/119.png",
      baseUrl + "images/icons/120.png",
      baseUrl + "images/icons/121.png",
      baseUrl + "images/icons/122.png",
      baseUrl + "images/icons/123.png"
    ]
    // 转换base64
    toBase64($('.page4 .textg .text').attr('src'), function (img) {
      $('.page4 .textg .text').attr('src', img);
    });
    toBase64($('.page4 .textg .logo').attr('src'), function (img) {
      $('.page4 .textg .logo').attr('src', img);
    });
    var progress = 0;
    queue0.loadManifest(fest0);
    queue0.on("fileload", function() {
      progress++;
      var _prop = parseInt(progress / fest0.length * 100);
      if ( _prop > 80) {
        $('.page0 .page0-1').addClass('active');
      }
      $('.page0 .page0-3').width(_prop + '%')
    }, this);
    queue0.on("complete", function() {
      queue1.loadManifest(fest1)
      // 加载完毕
      $('.page0').fadeOut();
      $('.page1').fadeIn();
      if (globImg) {
        $('.page4').fadeIn();
        $(".resultImg2").attr('src', globImg);
        $(".poster").css({
          "display": "none",
          "z-index": -1
        });
        $(".resultImg2Box").css({
          "display": "block",
          "z-index": 1
        });
      }
    }, this);

    // 下一页
    $('.page1 .page1-5').on('click', function () {
      $('.page1').fadeOut();
      $('.page2').fadeIn();
      var _s2 = null;
      clearTimeout(_s2)
      $('.page2 .page2-2').css({opacity: '1'});
      _s2 = setTimeout(function () {
        $('.page2 .page2-2').animate({
          opacity: '0'
        }, 800);
      }, 10000);
    });

    // 推荐场景切换
    $('.page2-3 .icon').on('click', function () {
      var _self = $(this);
      woodId = _self.attr('data-id');
      bgId = _self.attr('data-bg');
      sceneIndex = _self.index();
      var _imgUrl = baseUrl + "images/icons/" + bgId + ".png";
      _self.addClass('active').siblings('.icon').removeClass('active');
      $('.page2-1 .bg-img').attr('src', _imgUrl);
      sceneSrc = _imgUrl;
      var index = _self.index();
      $(".page2 .wrap").find(".ornaments").removeClass("active").eq(index).addClass("active");
    });


    // 下一步
    $('.page2 .next').on('click', function () {
      $('.page2').fadeOut();
      $('.page3').fadeIn();
      // 清空数组
      iconArr = [];
      iconArr.push(woodId, bgId);
      // 换场景图
      if (sceneSrc) {
        $("#scene").attr("src", sceneSrc);
      }
      // 生成装饰
      // createEles(woodId);
      if(sceneIndex == 0){
        createEles(124,256,34.4,3.2,"");
        createEles(121,55,51.4,47.4,"");
        createEles(76,153,17.9,11,"");
        createEles(73,153,23.8,56.5,"");
        createEles(43,151,4.8,"",2.4);
      }else if(sceneIndex == 1){
        createEles(24,182,37.8,53.8,"");
        createEles(66,244,13.2,"","0");
        createEles(23,131,27.8,1.3,"");
        createEles(68,75,63.8,22.6,"");
        createEles(119,43,43.5,"",7.4);
      }else if(sceneIndex == 2){
        createEles(32,319,48.9,13.6,"");
        createEles(108,70,36.1,"",11.4);
        createEles(37,124,30,6.8,"");
        createEles(55,141,17.6,"0","");
      }else if(sceneIndex == 3){
        createEles(31,64,7.2,"",2.4);
        createEles(30,262,38.1,"",-1.8);
        createEles(48,68,41,55.6,"");
        createEles(71,97,19.7,30.2,"");
        // createEles(125,70,16.2,10.4,"");
      }else if(sceneIndex == 4){
        createEles(34,70,"0","",23.4);
        createEles(90,138,9,"",-1);
        createEles(27,290,28.6,10.6,"");
      }else if(sceneIndex == 5){
        createEles(38,213,7.4,"","0");
        createEles(122,239,40.7,6.4,"");
      }
      // $(".addGoods .ornaments").css("top", 270);
      var _s1 = null;
      clearTimeout(_s1)
      $('.page3 .page3-2').css({opacity: '1'});
      _s1 = setTimeout(function () {
        $('.page3 .page3-2').animate({
          opacity: '0'
        }, 800);
      }, 10000);
    });

    // 返回
    $('.page3 .back').on('click', function () {
      $('.page3').fadeOut();
      $('.page2').fadeIn();
      // 重置
      resetInit();
    });
    // 返回
    $('.page5 .back').on('click', function () {
      $('.page5').fadeOut();
      $('.page4').fadeIn();
      // 重置
      resetInit();
    });
    // $('.page2 .back').on('click', function () {
    //   $('.page2').fadeOut();
    //   $('.page1').fadeIn();
    // });
    // menus
    $('.menus .menu').on('click', function () {
      var _self = $(this);
      var _index = $(this).index();
      _self.addClass('active').siblings('.menu').removeClass('active');
      $('.page3-4 .props').eq(_index).addClass('show').siblings('.props').removeClass('show');
    });

    // 在玩一次
    $('.page4 .reset').on('click', function () {
      resetInit();
      $('.page4').fadeOut();
      $('.page1').fadeIn();
      $(".poster").css({
        "display": "block",
        "z-index": 1
      });
      $(".resultImg2Box").css({
        "display": "none",
        "z-index": -1
      });
    });

    // 选择装饰
    $('.page3 .icons-l').on('click', ".icon-item", function () {
      var _self = $(this);
      var _imgUrl = _self.attr('data-id');
      var _type = _self.attr('data-type') | 0;
      if (_type === 1) {
        $('.bg-img').attr('src', baseUrl + "images/icons/" + _imgUrl + ".png");
        return false;
      }
      // 生成装饰
      createEles(_imgUrl);
    });

    // 重置
    function resetInit() {
      bgId = "11";
      woodId = "124";
      sceneIndex = 0;
      // 背景
      var _imgUrl = baseUrl + "images/icons/" + bgId + ".png";
      $('.page2-1 .bg-img').attr('src', _imgUrl);
      sceneSrc = _imgUrl;
      // 地板
      $(".page2-3 .icon").removeClass("active").eq(0).addClass("active");
      $(".page2 .wrap").find(".ornaments").removeClass("active").eq(0).addClass("active");
      // 销毁选中的模块
      $(".addGoods").find(".ornaments").remove();
    }

    // 旋转缩放
    function transformImg(obj1, obj2) {
      var pinchRotateImg = obj1;
      var mobanImg = obj2;
      Transform(pinchRotateImg);
      new AlloyFinger(mobanImg, {
        // rotate: function (evt) {
        //   pinchRotateImg.rotateZ += evt.angle;
        // },
        // multipointStart: function () {
        //   initScale = pinchRotateImg.scaleX;
        // },
        // pinch: function (evt) {
        //   pinchRotateImg.scaleX = pinchRotateImg.scaleY = initScale * evt.zoom;
        // },
        pressMove: function (evt) {
          pinchRotateImg.translateX += evt.deltaX;
          pinchRotateImg.translateY += evt.deltaY;
          evt.preventDefault();
        }
      });
    }

    // 获取点赞列表
    function getZanList() {
      var textArray = [
        '拒绝为你出价<br>是不是该考虑友尽了？',
        '给你的出价是：一个香蕉皮<br>要不要丢个鸡蛋给TA？',
        '给你的出价是：十个比特币<br>值得后面认真交往下！',
        '给你的出价是：一枚鸽子蛋<br>有没有闪瞎你的眼呀？',
        '给你的出价是：一颗真心<br>做好准备还TA十亿！',
        '给你的出价是：一捧玫瑰<br>先别急着高兴，玫瑰花饼了解一下~',
        '给你的出价是：告白气球<br>你的小心心有没有开始砰砰砰啦~',
        '给你的出价是：一顿烧烤<br>可以明确告诉TA这事儿解决不了…',
        '给你的出价是：一袋狗粮<br>如果你正需要的话…记得给个五星好评哦！',
        '给你的出价是：一个迷之微笑<br>请自己体会~',
      ]
      // 获取数据
      $.post("https://zhenguo.project.peidikeji.cn/api/zan_list/" + o + "?page_size=5000&page=1", function (data) {
        var _data = data.data.result.data;
        var _temp = '';
        if (_data.length) {
          for (var i = 0; i < _data.length; i++) {
            var _item = _data[i];
            _temp +=
              '<div class="conmen-item">' +
              '<em class="photo icon1">' +
              '<i class="icon' + ((_item.type | 0) + 1) + '"></i>' +
              '<img src="' + _item.headimgurl + '" alt="">' +
              '</em>' +
              '<p class="info">' +
              '<span>'+_item.nickname+'</span>'+
              textArray[_item.type] +
              '</p>' +
              '</div>';
          }
        }else {
          _temp = '<img src="'+ baseUrl +'images/img-21.png" alt="">'
        }
        // console.log(_data)
        
        $('.page5 .conments').append(_temp);
      });
    }
    getZanList();


    // 生成装饰
    function createEles(woodId,$width,$top,$left,$right) {
      var homeHtml = "";
      homeHtml += '<div class="ornaments" data-id="' + woodId + '" data-trans="false">';
      homeHtml += '<img src="' + baseUrl + 'images/icons/' + woodId + '.png" class="photo" />';
      homeHtml += '<img src="' + baseUrl + 'images/close.png" class="close">';
      homeHtml += '<img src="' + baseUrl + 'images/scale.png" class="scale" />';
      homeHtml += '</div>';
      $(".addGoods").append(homeHtml);
      var index = $(".addGoods .ornaments").length - 1;
      $(".addGoods .ornaments").eq(index).css("visibility", "hidden");
      var timer = setTimeout(function () {
        var width = $(".addGoods .ornaments").eq(index).find(".photo").width();
        width = width/2;
        if($width){
          width = $width;
        }
        $(".addGoods .ornaments").eq(index).find(".photo").width(width);
        $(".addGoods .ornaments").eq(index).width(width);
        if($left){
          $(".addGoods .ornaments").eq(index).css({"top":$top+"%","left":$left+"%"});
        }
        if($right){
          $(".addGoods .ornaments").eq(index).css({"top":$top+"%","right":$right+"%"});
        }
        if(!$top && !$left && !$right){
          $(".addGoods .ornaments").eq(index).css({"top":"1.6%","right":"1.6%"});
        }
        if (width == 0) {
          return false;
        }
        $(".addGoods .ornaments").eq(index).css("visibility", "visible");
        clearTimeout(timer);
      }, 100);
    }

    // 生成海报
    function createPoster(obj, target, callback) {
      html2canvas(obj, {
        useCORS: true
      }, {
        // backgroundColor: 'transparent', // 设置背景透明
        backgroundColor: "#fff",
      }).then(function (canvas) {
        // 合成图
        // target.attr('src', canvas.toDataURL("image/png"));
        target.attr('src', canvas.toDataURL("image/jpeg", 0.7));
        if (typeof callback === "function") {
          // callback(canvas.toDataURL("image/png"));
          callback(canvas.toDataURL("image/jpeg", 0.7));
        }
      });
    }

    // 禁止滑动
    $(".edit-container").on("touchmove", function (e) {
      e.preventDefault();
    });

    var oW, oH;
    // 绑定touchstart事件
    $(".addGoods").on("touchstart", ".ornaments", function (e) {
      var _self = $(this);
      // 模块层级
      _self.css("z-index", 2).siblings().css("z-index", 1);
      _self.addClass("del").siblings().removeClass("del");
      var touches = event.touches[0];
      oW = touches.clientX - $(this)[0].offsetLeft;
      oH = touches.clientY - $(this)[0].offsetTop;
      //阻止页面的滑动默认事件
      document.addEventListener("touchmove", defaultEvent, false);
    });

    $(".addGoods").on("touchmove", ".ornaments", function (e) {
      if (e.target == $(this).find(".photo")[0] || e.target == $(this).find(".close")[0]) {
        var touches = event.touches[0];
        var oLeft = touches.clientX - oW;
        var oTop = touches.clientY - oH;
        // if (oLeft < 0) {
        //   oLeft = 0;
        // } else if (
        //   oLeft > document.documentElement.clientWidth - $(this).width()
        // ) {
        //   oLeft = (document.documentElement.clientWidth - $(this).width());
        // }
        // if (oTop < 0) {
        //   oTop = 0;
        // } else if (
        //   oTop > $('.page3-1').height() - $(this).height()
        // ) {
        //   oTop = $('.page3-1').height() - $(this).height();
        // }
        var width = $(this).find(".photo").width();
        $(this).width(width);
        $(this).css("left", oLeft);
        $(this).css("top", oTop);
      }
    });

    $(".addGoods").on("touchend", ".ornaments", function (e) {
      document.removeEventListener("touchmove", defaultEvent, false);
    });

    function defaultEvent(e) {
      e.preventDefault();
    }

    var startPos = "";
    var isScrolling = "";
    var endPos = "";

    var initScale = "";
    var initWidth = "";

    $(".edit-container").on("touchstart", ".scale", function (e) {
      var touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
      startPos = {
        x: touch.pageX,
        y: touch.pageY,
        time: +new Date
      }; //取第一个touch的坐标值
      isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
      initWidth = $(this).siblings(".close").width();
    });

    // 缩放
    $(".edit-container").on("touchmove", ".scale", function (e) {
      if (e.target != this) {
        return false;
      }
      var touch = event.targetTouches[0];
      //当屏幕有多个touch或者页面被缩放过，就不执行move操作
      if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
      var touch = event.targetTouches[0];
      endPos = {
        x: touch.pageX - startPos.x,
        y: touch.pageY - startPos.y
      };
      isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //isScrolling为1时，表示纵向滑动，0为横向滑动
      var scale = "";
      var scale2 = "";
      // if(endPos.y > 0){
      scale = -endPos.y / 20;
      // }
      scale += 1;
      if (scale <= 0.3) {
        scale = 0.3;
      }
      // if(scale<=0.5){
      //   scale = 0.5;
      // }else if(scale>=1.5){
      //   scale = 1.5;
      // }
      scale2 = 1 / scale;
      $(this).parent(".ornaments").css("-webkit-transform", "scale3d(" + scale + "," + scale + "," + scale + ")");
      $(this).parent(".ornaments").css("transform", "scale3d(" + scale + "," + scale + "," + scale + ")");
      $(this).siblings(".close").css("-webkit-transform", "scale3d(" + scale2 + "," + scale2 + "," + scale2 + ")");
      $(this).siblings(".close").css("transform", "scale3d(" + scale2 + "," + scale2 + "," + scale2 + ")");
      $(this).css("-webkit-transform", "scale3d(" + scale2 + "," + scale2 + "," + scale2 + ")");
      $(this).css("transform", "scale3d(" + scale2 + "," + scale2 + "," + scale2 + ")");
      if (isScrolling === 0) {
        event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
      }
    });

    // 显示删除按钮
    // $(".addGoods").on("touchstart", ".ornaments", function (e) {
    $(".addGoods").on("click", ".ornaments", function (e) {
      e.stopPropagation();
      if (e.target != this && e.target != $(this).find(".photo")[0] && e.target != $(this).find(".close")[0]) {
        return false;
      }
      var _self = $(this);
      // 模块层级
      _self.css("z-index", 2).siblings().css("z-index", 1);
      _self.addClass("del").siblings().removeClass("del");
      var obj1 = _self[0];
      var obj2 = _self.find("img")[0];
      var trans = _self.attr("data-trans");
      if (trans == "false") {
        _self.attr("data-trans", "true");
        // 旋转缩放
        // transformImg(obj1, obj2);
      }
    });

    // 隐藏删除按钮
    $(".addGoods").on("click", function (e) {
      if (e.target != this) {
        return false;
      }
      $(this).find(".ornaments").removeClass("del");
    });

    Array.prototype.indexOf = function (val) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
      }
      return -1;
    };

    Array.prototype.remove = function (val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    };

    // 删除当前装饰
    $(".addGoods").on("click", ".close", function (e) {
      var _self = $(this);
      e.stopPropagation();
      // 当前id
      var goodsId = _self.closest(".ornaments").attr("data-id");
      // 删除数组元素
      iconArr.remove(goodsId);
      // 删除dom元素
      $(this).closest(".ornaments").remove();
    });

    // 完成海报
    $('.page3 .fusion').on('click', function () {
      var loading = layer.open({
        type: 2,
        content: '图片合成中...',
        shadeClose: false
      });
      $(".addGoods").find(".ornaments").removeClass("del");
      var obj = $(".edit-container")[0];
      var target = $("#resultImg");
      // 生成海报
      createPoster(obj, target, function () {
        $('.page3').fadeOut();
        $('.page4').fadeIn();
        // 延迟1.5秒
        var qrcodeTimer = setTimeout(function () {
          html2canvas(document.querySelector('.poster'), {
            // backgroundColor: 'transparent', // 设置背景透明
            backgroundColor: "#fff",
          }).then(function (canvas) {
            // 合成图
            var _base64 = canvas.toDataURL("image/jpeg", .7);
            $("#resultImg2").attr('src', _base64);
            $(".poster").css({
              "display": "none",
              "z-index": -1
            });
            $(".resultImg2Box").css({
              "display": "block",
              "z-index": 1
            });
            $.post('https://zhenguo.project.peidikeji.cn/api/share', {
              openid: o,
              nickname: userInfo.nickName,
              headimgurl: userInfo.avatarUrl,
              share_image: _base64,
            }, function () {
              layer.close(loading);
            });
          });
          clearTimeout(qrcodeTimer);
        }, 200);
      });
    });

    // 点赞
    var _type = -1;
    $('.page6-3 .swiper-slide').on('click', function () {
      var _self = $(this);
      _type = _self.attr('data-type') | 0;
      _self.addClass('active').siblings('.swiper-slide').removeClass('active');
    });

    // 确认出价
    $('.page6 .submit').on('click', function () {
      if (_type === -1) {
        layer.open({
          content: '请选择出价类型!',
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
        return false;
      }
      var loading1 = layer.open({
        type: 2,
        content: '出价中...',
        shadeClose: false
      });
      $.post('https://zhenguo.project.peidikeji.cn/api/zan/' + o, {
        nickname: userInfo.nickName,
        openid: userInfo.openId,
        headimgurl: userInfo.avatarUrl,
        type: _type
      }, function () {
        _type = -1;
        $('.page7').show();
        layer.close(loading1);
      })
    });

    var _parentIndex = 0;
    // 一级分类
    $('.page3-4 .menu-item').on('click', function () {
      var _self = $(this);
      var _index = _self.index();
      _parentIndex = _index;
      _self.addClass('active').siblings('.menu-item').removeClass('active');
      //显示二级菜单
      $('.page3 .meni2-item').removeClass('active');
      $('.page3 .menu-box').eq(_index).addClass('show').siblings('.menu-box').removeClass('show');
      $('.page3 .menu-box').eq(_index).find('.meni2-item:first').addClass('active');
      // icon切换
      $('.page3 .icons-l').eq(_index).addClass('show').siblings('.icons-l').removeClass('show');
      $('.page3 .icons-l').eq(_index).find('.icons-box').eq(0).addClass('show').siblings('.icons-box').removeClass('show');
    });

    // 二级分类
    $('.page3 .meni2-item').on('click', function () {
      var _self = $(this);
      var _index = _self.index();
      _self.addClass('active').siblings('.meni2-item').removeClass('active');
      $('.icons-l').eq(_parentIndex).find('.icons-box').eq(_index).addClass('show').siblings('.icons-box').removeClass('show');
    })

    // 分类隐藏
    $('.page3 .btn-show').on('click', function () {
      var _self = $(this);
      if (_self.hasClass('up')) {
        _self.removeClass('up');
        $('.page3 .page3-3').animate({
          bottom: '-5.2rem'
        });
        $('.page3 .btn-show').css({
          transform: 'rotate(180deg)'
        });
      } else {
        _self.addClass('up');
        $('.page3 .page3-3').animate({
          bottom: '0'
        });
        $('.page3 .btn-show').css({
          transform: 'rotate(0deg)'
        });
      }
    })

    // 重新出价
    $('.page7 .reset').on('click', function () {
      $('.page7').fadeOut();
      $('.page6-3 .swiper-slide').removeClass('active');
    })

    // 好友评价
    $('.page4 .comment').on('click', function () {
      $('.page4').fadeOut();
      $('.page5').fadeIn();
    });

    function ready() {
      wx.miniProgram.navigateTo({url: '/pages/web/web?openUrl=https%3A%2F%2Fi.meituan.com%2Fawp%2Fhfe%2Fblock%2F5805%2Findex.html&t=xiaochengxu&s=nyyhds'})
    }
    
    // 跳转小程序
    $('.page5 .link').on('click', function() {
      if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
        document.addEventListener('WeixinJSBridgeReady', ready, false)
      } else {
        ready();
      }
    })
  })
})();