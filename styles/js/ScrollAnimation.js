$(document).ready(function() {
    window.setTimeout("fadeMyDiv();", 1500);
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.FeatureImages').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
});

function fadeMyDiv() {
   $("#intro").fadeOut('slow');
}

$('.drop').hover(function(){
    $('#ModelsContent').stop().slideToggle(400);
});

$('.drop2').hover(function(){
    $('#VoteContent').stop().slideToggle(400);
});
