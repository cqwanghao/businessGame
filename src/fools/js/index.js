(function() {
  $('.btn').on('click', function() {
    var status = $(this).data('status');
    !(status | 0) ? $('.msgList').addClass('active') : $('.msgList').removeClass('active');
    $('.actions').hide();
    $('.formBox').show();
    $('.msgList').show();
    document.documentElement.scrollTop = $('.page').height()
  });
  $('.msgForm input').focus(function() {
    $('.msgList').hide();
  })
  $('.msgForm input').blur(function() {
    $('.formBox').hide();
    $('.actions').show();
  });
  var data=['http://wx.qlogo.cn/mmopen/vi_32/M5bIsGJ28pulMQ2iadpTo3Wf2dROjlUAdO1Q8stJW3CHPdfa3IyRbAof8EHRbhM33ZP0pPRuibTpWGnh2K3qibvSw/0', './images/canvas.png'],base64=[];
  function draw(fn){
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
        switch (n | 0) {
          case 0:
            x = 303;
            y = 174;
            w = 142;
            h = 142;
            break;
          case 1:
            x = 0;
            y = 0;
            w = 750;
            h = 1334;
            break;
        }
        var img=new Image;
        img.crossOrigin = 'Anonymous'; //解决跨域
        img.src=data[n];
        console.log(img)
        img.onload=function(){
          ctx.drawImage(img, x, y, w, h);
          drawing(n+1);//递归
        }
      }else{
        //保存生成作品图片
        base64.push(c.toDataURL("image/jpeg",0.8));
        $('.base64').attr('src', c.toDataURL("image/jpeg",0.8));
      }
    }
    drawing(0);
  }
  draw()
})()