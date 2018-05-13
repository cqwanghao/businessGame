(function () {
  $(function () {
    // 公共头部
    // 首页
    $(".nav_main").on("click", ".home", function () {
      window.location.href = "home.html";
    });
    // 购物车
    $(".nav_main").on("click", ".cart", function () {
      window.location.href = "cart.html";
    });
    // 菜单
    $(".nav_main").on("click", ".mine", function () {
      $(this).find(".menus").slideDown(500);
    });
    // 订单
    $(".nav_main .mine").find("li").eq(0).on("click", function () {
      window.location.href = "order.html";
    });
    // 照片
    $(".nav_main .mine").find("li").eq(1).on("click", function () {
      window.location.href = "photo.html";
    });
    // 地址
    $(".nav_main .mine").find("li").eq(2).on("click", function () {
      window.location.href = "address.html";
    });
    // 个人资料
    $(".nav_main .mine").find("li").eq(3).on("click", function () {
      window.location.href = "profile.html";
    });
    // 退出
    $(".nav_main .mine").find("li").eq(4).on("click", function () {
      window.location.href = "login.html";
    });

    // 开启mask
    $(".nav_main").on("click", ".menu", function () {
      $(".pageMask").fadeIn(500);
      $(".nav_main").find(".mine").find(".menus").slideUp(500);
      $(".pageMask").find("li").addClass("enter").removeClass("leave");
    });
    // 关闭mask
    $(".pageMask").on("click", ".close", function () {
      $(".pageMask").fadeOut(500);
      $(".pageMask").find("li").removeClass("enter").addClass("leave");
    });
    // 你不懂得王福记
    $(".pageMask .maskMenu").find("li").eq(0).on("click", function () {
      window.location.href = "introduction.html";
    });
    // 马山购买
    $(".pageMask .maskMenu").find("li").eq(1).on("click", function () {
      window.location.href = "buy.html";
    });
    // 成为猪肉脯代言人
    $(".pageMask .maskMenu").find("li").eq(2).on("click", function () {
      var flag = 1;
      if (flag == 1) {
        // 未定制
        window.location.href = "home.html";
      } else if (flag == 2) {
        window.location.href = "ranklist.html";
      }
    });
    // 王福记大事件
    $(".pageMask .maskMenu").find("li").eq(3).on("click", function () {
      window.location.href = "about.html";
    });
    // 帮助
    $(".pageMask .maskMenu").find("li").eq(4).on("click", function () {
      window.location.href = "help.html";
    });
  });
})();

//上传图片
function uploadImg($obj, callback, selector) {
  $obj.on("change", selector, function (e) {
    var $this = $(this);
    if (e.target.files.length == 0) {
      return false;
    }
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
        var cw = image.width;
        var ch = image.height;
        var w = image.width;
        var h = image.height;

        var cvs = document.createElement('canvas');
        var ctx = cvs.getContext('2d');
        var scale = 1; //预留压缩比

        cvs.width = this.width * scale;
        cvs.height = this.height * scale; //计算等比缩小后图片宽高

        if (cw > 400 && cw > ch) {
          w = 400;
          h = (400 * ch) / cw;
          cvs.width = w;
          cvs.height = h;
        }
        if (ch > 400 && ch > cw) {
          h = 400;
          w = (400 * cw) / ch;
          cvs.width = w;
          cvs.height = h;

        }

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
        layer.closeAll();
        if (typeof callback !== "undefined" && typeof callback === "function") {
          callback(cvs, $this);
        }
      };
    };
  });
}

// 旋转缩放
function transformImg(obj1, obj2) {
  var pinchRotateImg = obj1;
  var mobanImg = obj2;
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