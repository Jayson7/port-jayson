$(document).ready(function() {
    $(".fa-bars").click(function() {
        $("header").addClass("active-header");
        $("header").removeClass("header-wraps");
    });
    $(".fa-times").click(function() {
        $("header").addClass("header-wraps");
        $("header").removeClass("active-header");
    });
});