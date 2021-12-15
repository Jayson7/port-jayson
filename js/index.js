$(document).ready(function() {
    $(".fa-bars").click(function() {
        $("header").addClass("active-header");
        $("header").removeClass("header-wraps");
        $("body").addClass("body-stopper");
    });
    $(".fa-times").click(function() {
        $("header").addClass("header-wraps");
        $("header").removeClass("active-header");
        $("body").removeClass("body-stopper");
    });
});