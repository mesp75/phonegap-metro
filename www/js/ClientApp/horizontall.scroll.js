(function (appObj) {

    appObj.initHorizontallMenou = function (elementId) {
        var step = 2;
        var current = 0;
        var maximum = $("#" + elementId + " ul li").size() ;
        var visible = 3;
        var speed = 450;
        var liSize = 105;//$(window).width() / 3+24;//appObj.categoriesMenouWidth();// $(window).width() / 3;//104;//$(window).width();
        //alert(liSize);
        var height = 40;
        var ulSize = liSize * maximum + 25;
        var divSize = liSize * visible ;

        $('#' + elementId).css("width", "auto")//
                          .css("height", height + "px")
                            .css("visibility", "visible")
                            .css("overflow", "hidden")
                            .css("position", "relative")
                            .css("margin", "0px")
                            .css("padding", "0px")
                            //.css("padding-bottom", "1px")
                            //.css("margin-bottom", "1px")
                            .css("vertical-align", "middle")
                            .css("border", "0px solid red");



        $("#" + elementId + " ul").css("width", ulSize + "px")
                                .css("left", -(current * liSize))
                                .css("position", "absolute")
                                .css("white-space", "nowrap")
                                .css("margin", "0px")
                                .css("padding", "0px")
                                .css("height", "100%")
                                //.css("padding-top", "5px")
                                //.css("margin-bottom", "5px")
                                .css("vertical-align", "middle")
                                .css("border", "0px solid silver");

        $("#" + elementId + " ul li").css("list-style", "none")
                                    .css("display", "inline-block")
                                    .css("width", liSize + "px")
                                    .css("height", "78%")
                                    .css("vertical-align", "top")
                                    .css("margin", "0")
                                    .css("padding", "0")
                                    
                                    .css("border", "0px solid silver");

        $("#" + elementId + " ul li a")
                                    .css("display", "block")
                                    .css("text-decoration", "none")
                                    .css("text-align", "center")
                                    .css("font-size", "16px")
                                    .css("font-weight", "bold")
                                    .css("width", "100%")
                                    .css("height", "100%")
                                    .css("padding-top", "3px")
                                    .css("vertical-align", "middle")
                                    //.css("margin", "0px")
                                    //.css("padding", "0px")

                                    
                                    //.css("padding-top", "1px")
                                    //.css("padding-bottom", "2px")
                                    //.css("padding-left", "2px")

                                    //.css("margin-top", "1px")
                                    //.css("margin-bottom", "2px")
                                    //.css("margin-left", "2px")
                                    
                                    .css("border", "0px solid yellow");

        /*
        $("#"+ elementId).swipeleft(function (event) {
            if (current + step < 0 || current + step > maximum - visible) { return; }
            else {
                current = current + step;
                $('#' + elementId + ' ul').animate({ left: -(liSize * current) }, speed, null);
                //appObj.categoriesMenouIndex(appObj.categoriesMenouIndex() + 1);
            }
            return false;
        });

        $("#"+ elementId).swiperight(function () {
            if (current - step < 0 || current - step > maximum - visible) { return; }
            else {
                current = current - step;
                $('#' + elementId + ' ul').animate({ left: -(liSize * current) }, speed, null);
                //appObj.categoriesMenouIndex(appObj.categoriesMenouIndex() - 1);
                
            }
            return false;
        });
        */
    };
})(urbanit_MG);
