function changeImage(){
    var slide1 = document.getElementById("first-slide");
    var slide2 = document.getElementById("second-slide");
    var slide3= document.getElementById("third-slide");
    var slide4 = document.getElementById("fourth-slide");
    slide1.src="images/AWP.jpg";
    slide2.src="images/AWP.jpg";
    slide3.src="images/AWP.jpg";
    slide4.src="images/AWP.jpg";
    return false;
}

$('#one').click(function() {
    // increase the 500 to larger values to lengthen the duration of the fadeout and/or fadein
    $('#first-slide').fadeOut(500, function() {
        $('#first-slide').attr("src","images/AWP.jpg");
        $('#first-slide').fadeIn(500);
    });
    $('#second-slide').fadeOut(500, function() {
        $('#second-slide').attr("src","images/AWP.jpg");
        $('#second-slide').fadeIn(500);
    });
    $('#third-slide').fadeOut(500, function() {
        $('#third-slide').attr("src","images/AWP.jpg");
        $('#third-slide').fadeIn(500);
    });
    $('#fourth-slide').fadeOut(500, function() {
        $('#fourth-slide').attr("src","images/AWP.jpg");
        $('#fourth-slide').fadeIn(500);
    });

});
