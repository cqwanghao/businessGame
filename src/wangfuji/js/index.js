(function () {
  $(function () {
    // 公共头部
    // 首页
    $(".nav_main").on("click",".home",function(){
      window.location.href="home.html";
    });
    // 购物车
    $(".nav_main").on("click",".cart",function(){
      window.location.href="cart.html";
    });
    // 菜单
    $(".nav_main").on("click",".mine",function(){
      $(this).find(".menus").slideDown(500);
    });
    // 订单
    $(".nav_main .mine").find("li").eq(0).on("click",function(){
      window.location.href="order.html";
    });
    // 照片
    $(".nav_main .mine").find("li").eq(1).on("click",function(){
      window.location.href="photo.html";
    });
    // 地址
    $(".nav_main .mine").find("li").eq(2).on("click",function(){
      window.location.href="address.html";
    });
    // 个人资料
    $(".nav_main .mine").find("li").eq(3).on("click",function(){
      window.location.href="profile.html";
    });
    // 退出
    $(".nav_main .mine").find("li").eq(4).on("click",function(){
      window.location.href="login.html";
    });

    // 开启mask
    $(".nav_main").on("click",".menu",function(){
      $(".pageMask").fadeIn(500);
      $(".nav_main").find(".mine").find(".menus").slideUp(500);
    });
    // 关闭mask
    $(".pageMask").on("click",".close",function(){
      $(".pageMask").fadeOut(500);
    });
    // 你不懂得王福记
    $(".pageMask .maskMenu").find("li").eq(0).on("click",function(){
      window.location.href="introduction.html";
    });
    // 马山购买
    $(".pageMask .maskMenu").find("li").eq(1).on("click",function(){
      window.location.href="buy.html";
    });
    // 成为猪肉脯代言人
    $(".pageMask .maskMenu").find("li").eq(2).on("click",function(){
      var flag = 1;
      if(flag == 1){
        // 未定制
        window.location.href="home.html";
      }else if(flag == 2){
        window.location.href="ranklist.html";
      }
    });
    // 王福记大事件
    $(".pageMask .maskMenu").find("li").eq(3).on("click",function(){
      window.location.href="about.html";
    });
    // 帮助
    $(".pageMask .maskMenu").find("li").eq(4).on("click",function(){
      window.location.href="help.html";
    });
  });
})();