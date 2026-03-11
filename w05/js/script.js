$("#preamble-btn-2").click(function(){
    //alert("alert");
    $("#preamble-btn-1").css({
        "rotate":"45deg"
    });
})

$(".header-left").click(function(){
    $("#menu").toggleClass("active");
})

$(".album-thumbs").flickity({
    wrapAround: true,
    pageDots: false, 
    /*let thumbnail = $('.carousel').flickity({
        fade: true; <-- not working
    })*/ 
})


/*$(document).scroll(function(){
    let distanceScrolled = $(document).scrollTop();
    //let height = $(document).height() - window.height();
    //let ratio = distanceScrolled / height; <-- not working, written wrong
    $(".header-right").html("you have traveled: " +distanceScrolled + " pixels.");
    $(".h1").css({

    });
    //console.log(distanceScrolled);
})*/