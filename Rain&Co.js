

$(function(){
    $("#navi").children().bind("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $("#page").attr("src", $(this).attr("data-href"));
    });
})

var music = document.getElementById("music");
$("#musicbutton").click(function(){
if(music.paused){music.play();
$("#musicbutton").removeClass("pause").addClass("play");
}else{music.pause();
$("#musicbutton").removeClass("play").addClass("pause");}});




function load(){

TweenLite.fromTo("#logoTop", 1.5, {opacity:0,attr:{height:0, x:840}},{attr:{height:1500, x:840},opacity:1,ease: Power3.easeOut});
TweenLite.fromTo("#logoBottom", 0.2, {opacity:0},{opacity:1,delay:0.8});
TweenLite.to("#logoTop", 0.1, {attr:{height:800},delay:1});

TweenLite.to("#logoTop", 2, {attr:{width:20,x:820},rotation:-45, transformOrigin:"100% 100%",ease: Expo.easeOut,delay:1.5});
TweenLite.to("#logoBottom", 2, {attr:{width:20},rotation:-45, transformOrigin:"0% 0%",ease: Expo.easeOut,delay:1.5});

TweenLite.to("#logoTop", 0.2, {attr:{x:830, width:1,height:2000}, ease:Linear.easeNone, delay:4});
TweenLite.to("#logoBottom", 0.2, {attr:{x:810,y:-310,width:1,height:2000}, ease:Linear.easeNone, delay:4});


TweenLite.to("#logoTop", 0.1, {attr:{y:-1000,height:1}, ease:Linear.easeNone, delay:4.2});
TweenLite.to("#logoBottom", 0.2, {attr:{y:1000,height:1}, ease:Linear.easeNone, delay:4.2});

TweenLite.to("#beginani", 1, {opacity:0, ease:Linear.easeNone, delay:4});
TweenLite.to("#beginani", 1, {height:0,display:"none", ease:Linear.easeNone, delay:5.8});


}


  var navi = document.getElementById('navi');
  var container = document.getElementById('container');


//   window.onmousemove = function(event){

//     console.log(event.clientX);

//     if(event.clientX <= 300){

//      navi.style.transform = "scale(1, 1)";

//  }else if(event.clientX > 300){

//      navi.style.transform = "scale(0, 1)";

//  }

// }

    

    function scale(){

    var time = new Date() * .00001;
    var sX =Math.sin(time * 50);

     console.log(sX);

    if(sX >= -.5){

     navi.style.transform = "scale(1, 1)";

 }else if(sX < -.5){

     navi.style.transform = "scale(0, 1)";

 }

 return function() {};

}

setInterval(scale,10);




    var cirButton = document.getElementById('cirButton');
    var cirButton2 = document.getElementById('cirButton2');
    var cirButton3 = document.getElementById('cirButton3');


    var moveMouse = document.getElementById('moveMouse');
    var clickAdd = document.getElementById('clickAdd');
    var mouseM = document.getElementById('mouseM');

    var countM = 1;
    var countC = 1;
    var countL = 1;


    cirButton.onclick= function circleButton(){
            
        if(countM){
        TweenLite.to("#moveMouse", 1, {opacity:1});
        TweenLite.to("#moveMouse", 1, {opacity:0,delay:2.5});
        countM = 0;


    }
    }

        cirButton2.onclick= function triangleButton(){
                var count = 1;
        if(countC){
        TweenLite.to("#clickAdd", 1, {opacity:1});
        TweenLite.to("#clickAdd", 1, {opacity:0,delay:2.5});
        countC = 0;
    }
    }

            cirButton3.onclick= function roundButton(){
                    var count = 1;
        if(countL){
        TweenLite.to("#mouseM", 1, {opacity:1});
        TweenLite.to("#mouseM", 1, {opacity:0,delay:2.5});
        countL = 0;
    }
    }




$(document).ready(function(){
  $("#finish").click(function(){
  $("#cF").show();
  TweenLite.to("#continue", 1, {opacity:1,delay:2});
  TweenLite.to("#change", 1, {opacity:1,delay:2});

   TweenLite.from("#cF", 0.1, {attr:{height:0, width:0}, ease:Linear.easeNone});
   TweenLite.from("#rainC",1, {scale:0,transformOrigin:"0% 0%",ease: Power4.easeOut,delay:0.5});

  });
    });

  $("#continue").click(function(){
   $("#cF").hide();
    $("#tF").hide();
   TweenLite.to("#continue", 1,{opacity:0});
   TweenLite.to("#change", 1,{opacity:0});
  });


var changeNumber = 0;

$('#change').click(function(){

    if(changeNumber %2==0){
    $("#cF").hide();
    $("#tF").show();


    }else{

    $("#cF").show();
    $("#tF").hide();
    }
    changeNumber ++;

});






































