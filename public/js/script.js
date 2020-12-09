// jQuery

// MINIFY HERE: https://www.minifier.org/

// Use ready() to make a function available after the document is loaded
$(document).ready(function() {

    // reload the page
    // remove # url
    $(".js--reload").click(function () { 
        if (window.location.href.indexOf('#') > -1) {
            window.location.href = window.location.pathname;
        }
    });

    // sticky plugin waypoint
    // use direction to decide if user is scrolling up or down
    // back to top
    $(".main").waypoint(function(direction) {
        // if user scrolls down/up the section
        if (direction == "down") {
            // add class btt__sticky (back to top) with fade
            $(".js--wp-back").fadeIn("fast", function() {
                $(this).addClass("btt__sticky");
                // reapply animation, because other wp
                $(".btt__sticky").css("animation", "moveInbtt 2s ease");
            });

            $(".js--wp-git").fadeIn("fast", function() {
                $(".github").css("display", "inherit");
                // reapply animation, because other wp
                $(".github").css("animation", "moveInbtt 2s ease");
            });
        } else {
            // remove the class when back on top with fade
            $(".js--wp-back").fadeOut("slow", function() {
                $(this).removeClass("btt__sticky");
                $(".btt__sticky").css("animation", "moveInbtt 2s ease");
            });

            $(".js--wp-git").fadeOut("slow", function() {
                $(".github").css("display", "none");
                $(".github").css("animation", "moveInbtt 2s ease");
            });
        }
    }, {
        // delay
        offset: "3rem"
    });

    // the last section / before the footer
    $("section").last().waypoint(function(direction) {
        // if user scrolls down/up the section
        if (direction == "down") {
            // stop before footer
            $(".btt").insertBefore($(".footer"));
            // remove animation, because only needed at heading
            $(".btt__sticky").css("animation", "none");
            // stick on top of footer
            $(".btt__sticky").css("position", "absolute");
            $(".btt__sticky").css("bottom", "0");
            $(".btt__sticky").css("right", "5%");
        } else {
            // back to fixed when scrolled up
            $(".btt__sticky").css("position", "fixed");
            $(".btt__sticky").css("bottom", "5%");
            $(".btt__sticky").css("right", "5%");
        }
    }, {
        // delay
        offset: "-100rem"
    });


    // smooth scroll navigations
    // scroll to header
    $(".js--scroll-to-header").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $("body").offset().top}, 1000);
    });

    // scroll from header
    // back to top
    $(".js--scroll-from-header").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $("#section-tours").offset().top}, 1000);
    });

    // uncheck the nav
    $(".js--nav-link").click(function(){
        $("#navi-toggle").prop("checked", false);
    });

    // media queries with jquery (test: refresh dont resize!)
    if (window.matchMedia("(max-width: 37.5em)").matches) {
        // disable video when on phone 
        $(".bg-video").css("display", "none");
        // align center h3 in specific section
        $(".story__text h3").css("text-align", "center");
    }
    else {
        $(".bg-video").css("display", "");
        $(".story__text h3").css("text-align", "");
    }

    // click outside popup
    $(document).click(function(event) { 
        var $target = $(event.target);
        if(!$target.closest(".popup__content").length && 
        $(".popup").is(":visible")) {
            $(".popup").css("transition", " all .5s");
            $(".popup").css("opacity", "0");
            $(".popup").css("visibility", "hidden");
        }        
    });

    // show popup again
    $(".js--popup").click(function() {
        $(".popup").css("transition", " all 1s");
        $(".popup").css("opacity", "1");
        $(".popup").css("visibility", "visible");
        event.stopPropagation();
    });

    // close popup again
    $(".js--popup__close").click(function() {
        $(".popup").css("transition", " all .5s");
        $(".popup").css("opacity", "0");
        $(".popup").css("visibility", "hidden");
    });


});