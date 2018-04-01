(function() {
    var scroll=true;
    $(document).on("touchmove", 'body', function(e) {
        if (scroll) {
            e.preventDefault();
        }
    });

  var fest = [
      {"src":"/Scripts/mp/Jeep/images/common/normalmusic.png","id":"normalmusic"},
      {"src":"/Scripts/mp/Jeep/images/common/nums.png","id":"nums"},
      {"src":"/Scripts/mp/Jeep/images/common/down.png","id":"down"},
      {"src":"/Scripts/mp/Jeep/images/common/shake.mp3","id":"shake"},
      {"src":"/Scripts/mp/Jeep/images/common/car.mp3","id":"car"},
      {"src":"/Scripts/mp/Jeep/images/common/phone.mp3","id":"phone"},
  ];


  $.tap(".page01",function(i,e){
    console.log("page01");
    tar.hitTag('进入线索一页面');
    // if(!e.hasClass("active")){return false;}
    // if(e.is(":animated")){return false;}
    var dir = 1;
    if (i==2) {
      var _this = this;
      if (dir==1) {
          pageHide($(".page01"),dir);
          pageShow($(".page02"),dir);
      }else{
          pageHide($(".page03"),dir);
          pageShow($(".page02"),dir);
      }
    }else{
        // _this.curPage01(-1);
    }
  });

  $.tap(".page02",function(i,e){
    console.log("page02");
    tar.hitTag('进入线索二页面');
        // if(!e.hasClass("active")){return false;}
        // if(e.is(":animated")){return false;}
        if (i==2) {
          var dir = 1;
          if (dir==1) {
            pageHide($(".page02"),dir);
            pageShow($(".page03"),dir);
          }else{
              pageHide($(".page04"),dir);
              pageShow($(".page03"),dir);
          }
        }else if(i==-2){
          var dir = -1;
          if (dir==1) {
            pageHide($(".page01"),dir);
            pageShow($(".page02"),dir);
          }else{
              pageHide($(".page03"),dir);
              pageShow($(".page02"),dir);
          }
        }
    });

})()