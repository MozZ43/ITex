var slide2 = function(event) {
    var margin = Number($(".container_slide2").attr("id"));
    if ($(event.target)[0].className == "rightspear2img") {
        if (margin > -700 || margin == 0) {

            $(".container_slide2").css({
                "margin-left": margin - 350 + "px"

            })

            $(".container_slide2").attr("id", margin - 350);

        }

    } else if ($(event.target)[0].className == "leftspear2img") {
        if (margin < 1200 && margin != 0) {

            $(".container_slide2").css({
                "margin-left": margin + 350 + "px"

            })

            $(".container_slide2").attr("id", margin + 350);

        }
    }

};


$(".rightspear2img").bind("click", slide2);

$(".leftspear2img").bind("click", slide2);
