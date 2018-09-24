var changeNumImg = function(numImg, direction) {
    numImg = Number(numImg);
    return result = direction == "left" ? (numImg == "1" ? "5" : String(numImg - 1)) : direction == "right" ? (numImg == "5" ? "1" : String(numImg + 1)) : false;
}
var slide = function(event) {
    var target = $(event.target);
    var direction = target[0].className;
    var numImg = target[0].id.substr(2, 1);
    $(".same").unbind("click");
    if (direction == "left") {
        $(".pic" + numImg + "_news").appendTo($(".pic_and_desc_of_pic")).attr({
            "style": "position:absolute ; left:-835px"
        });
        $("#current").css({
            "animation": "animationSliderTwo .7s",
            "margin-left": "835px"
        });
        $(".pic" + numImg + "_news").css({
            "animation": "posleft .7s",
            "left": "0"
        });
        target.attr("id", "to" + changeNumImg(numImg, direction))
        $(".same .right").attr("id", "to" + changeNumImg($(".same .right")[0].id.substr(2, 1), direction));
        $(".description_picture").css({
            "animation": "descboxleft .3s",
            "right": "900px"
        })
        setTimeout(function() {
            $(".description_picture").css({
                "right": "0",
                "animation": "todescboxleft .4s"
            })

        }, 550)

    } else {
        $(".pic" + numImg + "_news").appendTo($(".pic_and_desc_of_pic")).attr({
            "style": "position:absolute"
        });
        $("#current").css({
            "animation": "animationSlider .7s",
            "margin-left": "-900px"
        });
        target.attr("id", "to" + changeNumImg(numImg, direction))
        $(".same .left").attr("id", "to" + changeNumImg($(".same .left")[0].id.substr(2, 1), direction));
        $(".description_picture").css({
            "animation": "descboxright .4s",
            "right": "900px"
        })

        setTimeout(function() {
            $(".description_picture").css({
                "right": "-360px",
                "animation": "todescboxright .3s"
            })
            setTimeout(function() {
                $(".description_picture").css({
                    "right": "0"
                })
            }, 310)
        }, 450)

    }

    setTimeout(function() {
        $("#current").appendTo($(".cache_img"));
        $(".cache_img img:last-child").removeAttr("id").removeAttr("style");
        $(".pic" + numImg + "_news").attr("id", "current").removeAttr("style");
        $(".same").bind("click", slide);
        $(".description_picture").removeAttr("style");
    }, 850)
}
$(".same").bind("click", slide);


//ЗУМ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var toSize = function() {
    $(".wrap_arrow_news").hide();
    $(".pic_of_news").css({
        "width": "1300px",
        "height": "700px"
    })
    $(".nav_news").css({
        "width": "1300px",
        "height": "700px"
    })
    $(".main_first").css({
        "width": "1300px",
        "height": "700px"
    })

}
$(".to_big_size").bind("click", toSize);
