(function() {
  createjs.Sound.addEventListener("fileload", listShow);
  createjs.Sound.registerSound({src:"./media/didi.mp3", id:"sound"});
  //图片数组
  var data1=['./images/result1.png','./images/qrLog.png'],
      data2=['./images/result2.png','./images/qrLog.png'],
      data3=['./images/result3.png','./images/qrLog.png'],
      data4=['./images/result4.png','./images/qrLog.png'],
      data5=['./images/result5.png','./images/qrLog.png'],
      base64=[];

  var pageNo = getUrlParameter("pageNo");
  switch(pageNo){
    case "1":
      $("#page1").addClass("active");
      document.title = "脱单联盟";
      break;
    case "2":
      $("#page2").addClass("active");
      document.title = "未来全球500强董事会";
      break;
    case "3":
      $("#page3").addClass("active");
      document.title = "闺蜜比天大";
      break;
    case "4":
      $("#page4").addClass("active");
      document.title = "刚撕了公司那个碧池";
      break;
    case "5":
      $("#page5").addClass("active");
      document.title = "老铁绿不绿";
      break;
    default:
      $("#page1").addClass("active");
      document.title = "脱单联盟";
      break;
  }

  // 第一张二维码
  qrcodeBuild(".qrcode1","http://www.baidu.com");
  // 第二张二维码
  qrcodeBuild(".qrcode2","http://www.qq.com/");
  // 第三张二维码
  qrcodeBuild(".qrcode3","http://www.sina.com.cn/");
  // 第四张二维码
  qrcodeBuild(".qrcode4","https://www.sogou.com/");
  // 第五张二维码
  qrcodeBuild(".qrcode5","http://www.163.com/");
  
  //生成二维码
  function qrcodeBuild(obj,url){
    new QRCode(document.querySelector(obj), {
      text: url,
      width: 300,
      height: 300
    });
  }
  
  //显示隐藏
  $('.btn').on('click', function() {
    var status = $(this).data('status');
    $('.page.active .msgList').removeClass('active');
    !(status | 0) ? $('.page.active .msgList2').addClass('active') : $('.page.active .msgList1').addClass('active');
    $('.page.active .btnActions').removeClass("active");
    $('.page.active .formBox').show();
    document.querySelector('.page.active .chatListBox').scrollTop = $('.page.active .chatBox').height() - $('.page.active .chatListBox').height();
  });
  $('.page.active .msgForm input').focus(function() {
    $('.page.active .msgList').removeClass('active');
  })
  $('.page.active .msgForm input').blur(function(e) {
    $('.page.active .formBox').hide();
    $('.page.active .btnActions').addClass("active");
  });
  //关闭分享图
  $('.page.active').on("click",".close",function() {
    $('.page.active .shareModa').hide();
  });

  // swiper初始化
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //点击生成图片
  $('.page.active').on("click",".link2",function() {
    // 显示第几个二维码
    swiper.slideTo(pageNo);
    // 第一张二维码
    draw(function(share) {
      $(".swiper-container").find(".page1").find('.shareImg').attr('src', share);
      $(".swiper-container").css("visibility","visible");
    },data1,1);
    // 第二张二维码
    draw(function(share) {
      $(".swiper-container").find(".page2").find('.shareImg').attr('src', share);
      $(".swiper-container").css("visibility","visible");
    },data2,2);
    // 第三张二维码
    draw(function(share) {
      $(".swiper-container").find(".page3").find('.shareImg').attr('src', share);
      $(".swiper-container").css("visibility","visible");
    },data3,3);
    // 第四张二维码
    draw(function(share) {
      $(".swiper-container").find(".page4").find('.shareImg').attr('src', share);
      $(".swiper-container").css("visibility","visible");
    },data4,4);
    // 第五张二维码
    draw(function(share) {
      $(".swiper-container").find(".page5").find('.shareImg').attr('src', share);
      $(".swiper-container").css("visibility","visible");
    },data5,5);
  });
  // 点击生成“愚乐”群聊
  $('.page.active .link1').click(function() {
    $(".page.active .newsList1").removeClass("active");
    $(".page.active .newsList2").addClass("active");
    listShow($('.page.active .newsList2'));
  });
  
  $('.page.active .btnActions').addClass("active");


  createjs.Sound.addEventListener("fileload", listShow);
  createjs.Sound.registerSound({src:"./media/didi.mp3", id:"sound"});
  //一个一个显示，需要添加active；
  // listShow($('.page.active .newsList1'));
  // listShow($('.page.active .newsList2'));

  // 刷新页面
  // $(".page.active .refresh").click(function(){
  //   window.history.go(0);
  // });
  
  //一个一个显示，需要添加active；
  function listShow(){
    var obj = $('.page.active .newsList2');
    var timeCount = null;
    var count = 0;
    timeCount = setInterval(function() {
      obj.find('.newsItem').eq(count).addClass('active');
      count ++;
      if (count < obj.find('.newsItem').length + 1) {
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
          WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
            createjs.Sound.play("./media/didi.mp3");
          });
        } else {
          createjs.Sound.play("./media/didi.mp3");
        }
        
      }
      document.querySelector('.page.active .chatListBox').scrollTop = $('.page.active .chatBox').height() - $('.page.active .chatListBox').height();
      if (count > obj.find('.newsItem').length) return clearInterval(timeCount);
    }, 800)
  }

  //合成图片
  function draw(fn,data,no){
    var c=document.createElement('canvas'),
      ctx=c.getContext('2d'),
      len=data.length;
    c.width=750;
    c.height=1334;
    ctx.rect(0,0,c.width,c.height);
    ctx.fillStyle='#1c1f70';
    ctx.fill();
    function drawing(n){
      if(n<len){
        var x = 0;
        var y = 0;
        var w = "";
        var h = "";
        var tempArr = data+no;
        tempArr = tempArr.split(",");
        switch (n | 0) {
          case 0:
            x = 0;
            y = 0;
            w = 750;
            h = 1334;
            break;
          case 1:
            // var qrImg = $('.qrcode img').attr('src');
            var qrImg = $('.qrcode' + no).find("img").attr('src');
            if (!qrImg) return alert('二维码生成失败~');
            // data[1] = qrImg;
            tempArr[1] = qrImg;
            x = 89;
            y = 608;
            w = 572;
            h = 572;
            break;
        }
        var img=new Image;
        img.crossOrigin = 'Anonymous'; //解决跨域
        // img.src=data[n];
        img.src=tempArr[n];
        img.onload=function(){
          ctx.drawImage(img, x, y, w, h);
          drawing(n+1);//递归
        }
      }else{
        //保存生成作品图片
        base64.push(c.toDataURL("image/jpeg",0.8));
        fn && fn(c.toDataURL("image/jpeg",0.8))
      }
    }
    drawing(0);
  }

  // 获取url参数
  function getUrlParameter(key) {
    var value = null,
      params = location.search.slice(1).split("&");
    for(var i = 0 ; i < params.length ; i++){
      var _key = params[i].split("=")[0];
      if(key == _key) {
        value = params[i].split("=")[1];
      }
    }
    return value;
  }
})()