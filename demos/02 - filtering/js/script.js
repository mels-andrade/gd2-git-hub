$(".filters button").click(function() {
    var f = $(this).data("year");
    //alert(f);
    $(f).fadeOut(500);
});