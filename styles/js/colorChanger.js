var selection = "Body";
var color = "orange";
var flag = false;

start();


$("#BuildBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".BuildBoundary").offset().top},
        'slow');
});

function start(){
    $("#btnBody").css("box-shadow", "2px 2px rgba(255,255,255,0.3)");
    $("#btnTrigger").css("box-shadow", "none");
    $("#btnFlag").css("box-shadow", "none");
    $("#flagLayer").css("display","none");
}

function selectionClicked(item){
    switch (item) {
        case "bod":
            selection = "Body";
            $("#btnBody").css("box-shadow", "2px 2px rgba(255,255,255,0.3)");
            $("#btnTrigger").css("box-shadow", "none");
            console.log("1");
            break;
        case "trigger":
            selection = "Trigger";
            $("#btnTrigger").css("box-shadow", "2px 2px rgba(255,255,255,0.3)");
            $("#btnBody").css("box-shadow", "none");
            console.log("2");
            break;
        case "flag":
            if(flag){
                flag = false;
                $("#btnFlag").css("box-shadow", "none");
                $("#flagLayer").css("display","none");
                console.log(flag);
            }
            else{
                flag = true;
                $("#btnFlag").css("box-shadow", "2px 2px rgba(255,255,255,0.3)");
                $("#flagLayer").css("display","inline-block");
                console.log(flag);
            }
            break;
        default:
            break;
    }
}

function colorClicked(item){
    switch (item) {
        case "gray":
            color = "gray";
            console.log("1");
            break;
        case "green":
            color = "green";
            console.log("2");
            break;
        case "orange":
            color = "orange";
            console.log("3");
            break;
        case "purple":
            color = "purple";
            console.log("4");
            break;
        case "red":
            color = "red";
            console.log("5");
            break;
        case "yellow":
            color = "yellow";
            console.log("6");
            break;
        case "blue":
            color = "blue";
            console.log("7");
            break;
        default:
            break;
    }
    update(selection, color);
}

function update(selection, color){
    if (selection == "Body"){
        bodyImages = document.getElementsByClassName("bodyLayer");
        for (i = 0; i < bodyImages.length; i++) {
            var angle = i+1;
            bodyImages[i].src = "images/colorimages/Body/"+angle.toString()+"/"+color+".jpg";
        }
    }
    else if (selection == "Trigger"){
        triggerImages = document.getElementsByClassName("TriggerLayer");
        for (j = 0; j < triggerImages.length; j++) {
            var angle = j+1;
            triggerImages[j].src = "images/colorimages/Trigger/"+angle.toString()+"/"+color+".png";
        }
        fadeIn("TriggerLayer", 4);
    }
}

function fadeOut(id,val){
      if(isNaN(val)){ val = 9;}
      document.getElementsByClassName(id)[0].style.opacity='0.'+val;
      document.getElementsByClassName(id)[0].style.filter='alpha(opacity='+val+'0)';
      document.getElementsByClassName(id)[1].style.opacity='0.'+val;
      document.getElementsByClassName(id)[1].style.filter='alpha(opacity='+val+'0)';
      document.getElementsByClassName(id)[2].style.opacity='0.'+val;
      document.getElementsByClassName(id)[2].style.filter='alpha(opacity='+val+'0)';
      if(val>0){
        val--;
        setTimeout('fadeOut("'+id+'",'+val+')',90);
      }else{return;}
}

function fadeIn(id,val){
      if(isNaN(val)){ val = 0;}
      document.getElementsByClassName(id)[0].style.opacity='0.'+val;
      document.getElementsByClassName(id)[0].style.filter='alpha(opacity='+val+'0)';
      document.getElementsByClassName(id)[1].style.opacity='0.'+val;
      document.getElementsByClassName(id)[1].style.filter='alpha(opacity='+val+'0)';
      document.getElementsByClassName(id)[2].style.opacity='0.'+val;
      document.getElementsByClassName(id)[2].style.filter='alpha(opacity='+val+'0)';

      if(val<9){
        val++;
        setTimeout('fadeIn("'+id+'",'+val+')',90);
       }
       else if (val == 10) {
           setTimeout('fadeIn("'+id+'",'+val+')',90);
       }else{
           document.getElementsByClassName(id)[0].style.opacity='1';
           document.getElementsByClassName(id)[0].style.filter='alpha(opacity=1)';
           document.getElementsByClassName(id)[1].style.opacity='1';
           document.getElementsByClassName(id)[1].style.filter='alpha(opacity=1)';
           document.getElementsByClassName(id)[2].style.opacity='1';
           document.getElementsByClassName(id)[2].style.filter='alpha(opacity=1)';
           return;}
}
