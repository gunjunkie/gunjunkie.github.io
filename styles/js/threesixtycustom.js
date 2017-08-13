window.onload = init;

var product;
function init(){

    my360 = $('#mythreesixty').ThreeSixty({
        totalFrames: 52, // Total no. of image you have for 360 slider
        endFrame: 52, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath:'threesixty-slider-master/assets/product1/', // path of the image assets
        filePrefix: '', // file prefix if any
        ext: '.png', // extention for the assets
        height: 795,
        width: 1200,
        navigation: true,
        disableSpin: false // Default false
    });
}

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
