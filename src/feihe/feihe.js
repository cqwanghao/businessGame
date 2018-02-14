var coper = {
    timelinetitle: "朋友圈分享标题",
    appmessagetitle: "好友分享的标题",
    appmessagedesc: "好友分享的描述信息",
    shareimgurl: "http://h5.zegelo.com/Scripts/mp/feihe/images/share.png",
    sharelinkurl: "http://h5.zegelo.com/mp/feihe/index",
};

coper.FileUpload = function (fileElementId) {
    //fileElementId input 的ID
    var load = layer.open({ type: 2, shadeClose: false });
    $.ajaxFileUpload({
        url: '/Layer/Layer/UploadImage?id=feihe', //用于文件上传的服务器端请求地址
        secureuri: false, //是否需要安全协议，一般设置为false
        fileElementId: fileElementId, //文件上传域的ID
        dataType: 'json', //返回值类型 一般设置为json
        success: function (data, status)  //服务器成功响应处理函数
        {
            var imgurl = data.imgName;
            alert("图片文件名称：" + imgurl);
        },
        error: function (data, status, e)//服务器响应失败处理函数
        {
        }
    });
    return false;
}


coper.subuserPhoto = function () {
    var data = {
        Years: $(".year").val(),
        Month: $(".month").val(),
        Hospital: $(".addr-s").val(),
        UploadPhoto: $("[name=UploadPhoto]").val(),//上传的原始图片
        TempLateID: $("[name=TempLateID]").val(),//模版id
        UserPhoto: $("[name=UserPhoto]").val(),//合成的图片
        SharePhoto: $("[name=SharePhoto]").val(),//200*200分享图片
        Type: $("[name=Type]").val(),
    };
    WeiXin.Ajax({
        data: data, url: '/mp/feihe/AddUserPhoto', cb: function (data) {
            if (data.success==true) {
                alert("提交数据成功");
                console.log("提交数据成功");
            }
        }
    });
}

coper.initWxShare = function () {
    WeiXin.Ajax({
        data: { type: "jssdk", gid: "20180218feihe" },
        url: '/mp/api/get',
        cb: function (data) {
            if (data != null && data.success == true) {
                wx.config({
                    appId: data.source.AppId,
                    timestamp: data.source.Timestamp,
                    nonceStr: data.source.NonceStr,
                    signature: data.source.Signature,
                    jsApiList: WeiXin.jsApiList
                });
                wx.error(function (res) {
                    console.log(res)
                });
                coper.loadWXReady();
            } else {
                WeiXin.log("GetJsSdkUiPackage加载异常")
            }
        }
    });
}

coper.loadWXReady = function () {
    wx.ready(function () {
        //转发到朋友圈
        wx.onMenuShareTimeline({
            title: coper.timelinetitle, // 分享标题
            link: coper.sharelinkurl, // 分享链接
            imgUrl: coper.shareimgurl, // 分享图标
            success: function () {
                WeiXin.Ajax({ data: { "type": "share", sharetype: 1, acttag: "dettol" }, url: '/mp/api/get', cb: function (data) { } });
            },
            cancel: function () { }
        });
        //转发给朋友
        wx.onMenuShareAppMessage({
            title: coper.appmessagetitle, // 分享标题
            desc: coper.appmessagedesc, // 分享desc
            link: coper.sharelinkurl, // 分享链接
            imgUrl: coper.shareimgurl, // 分享图标
            type: 'link',
            dataUrl: '',
            success: function () {
                WeiXin.Ajax({ data: { "type": "share", sharetype: 2, acttag: "dettol" }, url: '/mp/api/get', cb: function (data) { } });
            },
            cancel: function () { }
        });
    });
}

$(document).ready(function () {
    coper.initWxShare();
});