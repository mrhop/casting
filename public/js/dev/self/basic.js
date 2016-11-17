/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("bootstrap");
require("flexslider");
require("mixitup");
require("fancybox"); 

var utilFun = require("utilFun");
$(document).ready(function () {
   //do something

    if($(document.body).attr("id") == "index"){
        $(".first-container .flexslider").flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
        });
    }
    if($(document.body).attr("id") == "equipment" || $(document.body).attr("id") == "product"){
        $('.portfoliolist').mixItUp();
        $('.portfolio-wrapper').hover(function () {
            $(this).find(".label").css("bottom", 0);
        }, function () {
            $(this).find(".label").css("bottom", "-20px");
        })
        $('.portfoliolist').on('mixEnd', function (e, state) {
            $('div.portfolio:visible a.fancyShow').fancybox({
                helpers: {
                    title: {
                        type: 'over'
                    }
                }
            });
        });
    }

    if($(document.body).attr("id") == "case"){

    }

    });

