/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("bootstrap");
require("flexslider");
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
});

