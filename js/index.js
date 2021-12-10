$(document).ready(function() {
    $(".fa-bars").click(function() {
        $("header").addClass("active-header");
        $("header").removeClass("header-wraps");
    });
});