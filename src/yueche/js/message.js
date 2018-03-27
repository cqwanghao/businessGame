$(function () {
    //上传图片
    $(".fileUpload").on("change", function (e) {
        layer.open({
            type: 2,
            content: '上传中...',
            shadeClose: false
        });
        var file = e.target.files[0];
        var Orientation = null;
        // if (!file.type.match('image.*')) {
        //     return false;
        // }
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
                // 获得的图片
                $('.avatarImg').attr('src', cvs.toDataURL('image/png', 0.7));
                layer.closeAll();
            };
        };
    });

    $(".submit").click(function(){
        html2canvas(document.querySelector("#avatar"), {
            backgroundColor: 'transparent', // 设置背景透明
        }).then(function (canvas) {
            $("#avatarResult").attr("src", canvas.toDataURL("image/png"));
        });
    });

});