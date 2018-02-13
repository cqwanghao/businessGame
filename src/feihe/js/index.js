(function () {
    $(function () {
        var slide = new slidePage({
            useAnimation: true,
            before: function(origin,direction,target){
                console.log("origin:"+origin+",direction:"+direction+",target:"+target);
            },
            after: function(origin,direction,target){
                console.log("origin:"+origin+",direction:"+direction+",target:"+target);
            },
        });
        window.slide = slide;

        slide.slideTo(4);

    });

})();