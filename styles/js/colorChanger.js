var selection = "Body";
var color = "orange";
var bodColor = "orange";
var triggerColor = "orange";
var flag = false;

var modal = document.getElementById('buildModal');
var btn = document.getElementById('btnSubmit');

btn.onclick = function() {
    document.getElementById("metaImg").content = "http://www.gunjunkie.io/images/redirectPagesTiny/"+bodColor+"/"+triggerColor+".jpg";
    document.getElementById("modalImage").src = "images/redirectPagesTiny/"+bodColor+"/"+triggerColor+".jpg";
    modal.style.display = "block";
    $.post(
    'https://graph.facebook.com',
    {
        id: 'http://www.gunjunkie.io',
        scrape: true
    },
    function(response){
       console.log(response);
    }
);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

start();


$("#BuildBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".BuildBoundary").offset().top},
        'slow');
});

function start(){
    $("#btnBodyClicked").css("display", "block");
    $("#btnTriggerClicked").css("display", "none");
    $("#btnFlagClicked").css("display", "none");
    $("#flagLayer").css("display","none");
}

function selectionClicked(item){
    switch (item) {
        case "bod":
            selection = "Body";
            $("#btnBodyClicked").css("display", "block");
            $("#btnTriggerClicked").css("display", "none");
            break;
        case "trigger":
            selection = "Trigger";
            $("#btnBodyClicked").css("display", "none");
            $("#btnTriggerClicked").css("display", "block");
            break;
        case "flag":
            if(flag){
                flag = false;
                $("#btnFlagClicked").css("display", "none");
                $("#flagLayer").css("display","none");
                console.log(flag);
            }
            else{
                flag = true;
                $("#btnFlagClicked").css("display", "block");
                $("#flagLayer").css("display","inline-block");
                console.log(flag);
            }
            break;
        default:
            break;
    }
}

function colorClicked(item){
    console.log(bodColor);
    console.log(triggerColor);
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
    changeRedirect(bodColor,triggerColor);
}

function update(selection, color){
    if (selection == "Body"){
        bodyImages = document.getElementsByClassName("bodyLayer");
        bodColor = color;
        for (i = 0; i < bodyImages.length; i++) {
            var angle = i+1;
            bodyImages[i].src = "images/colorimages/Body/"+angle.toString()+"/"+color+".jpg";
        }
    }
    else if (selection == "Trigger"){
        triggerImages = document.getElementsByClassName("TriggerLayer");
        triggerColor = color;
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
       }
       else{
           document.getElementsByClassName(id)[0].style.opacity='1';
           document.getElementsByClassName(id)[0].style.filter='alpha(opacity=1)';
           document.getElementsByClassName(id)[1].style.opacity='1';
           document.getElementsByClassName(id)[1].style.filter='alpha(opacity=1)';
           document.getElementsByClassName(id)[2].style.opacity='1';
           document.getElementsByClassName(id)[2].style.filter='alpha(opacity=1)';
           return;
       }
}

function changeRedirect(bodColor,triggerColor){
    console.log(bodColor);
    console.log(triggerColor);
    // document.getElementById("redirectLink").href = bodColor+triggerColor+".html";
    }
