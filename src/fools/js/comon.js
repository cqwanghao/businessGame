(function(document, window, $) {
  $.extend({
    //隐藏页面
    hidePage: function(dom) {
      $(dom).css({opacity: '0', display: 'none'});
    },
    showPage: function(dom) {
      $(dom).css({opacity: '1', display: 'block'})
    }
  })
})(document, window, window.jQuery || window.Zepto);