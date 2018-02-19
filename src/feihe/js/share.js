(function () {
    $(function () {
        //预加载资源
        // var progress = 0;
        // var queue = new createjs.LoadQueue(true);
        // var manifest = [
        //     'images/arrow-left.png',
        //     'images/arrow-right.png',
        //     'images/bg1.jpg',
        //     'images/bgMain.jpg',
        //     'images/brief-cloud12.png',
        //     'images/brief-word1.png',
        //     'images/briefBg.png',
        //     'images/chibang.png',
        //     'images/cloud1.png',
        //     'images/cover-cloud.png',
        //     'images/cover-crane.png',
        //     'images/cover-light.png',
        // ];

        // 服务器路径
        // manifest.forEach(function(item,index){
        //     item = "/Scripts/mp/FeiHe/"+ item;
        //     manifest[index] = item;
        // });

        // queue.loadManifest(manifest);
        // queue.on("fileload", function (e) {
        //     progress++;
        //     $('.loadYBg .count').html(parseInt(progress / manifest.length * 100));
        // }, this);
        // queue.on('complete', handleComplete, this);
        // //加载完毕处理函数
        // function handleComplete() {
            
        // }

        $("#play-btn").click(function(){
            window.location.href = "index.html";
        });
        $(".share-mushroom2").click(function(){
            window.location.href = "index.html";
        });

    });

})();