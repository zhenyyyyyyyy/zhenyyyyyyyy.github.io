


TweenLite.from("#logoani",0.6, {opacity:0, ease: Back.easeOut.config(1.3), x: -1000 });
TweenLite.to("#logoani",0.5, {opacity:1, ease: Back.easeOut.config(1.3), x: 1300, delay:1});
TweenLite.to("#redpage",.5, {opacity:1, ease: Back.easeOut.config(1.3), y: -1000, delay:1.2});




var switchs = document.getElementById("switch");
var spacial = document.getElementById('spacial')
var thirdpart = document.getElementById('thirdpart')
var bigCard = document.getElementById('bigcard')
var bigPeople = document.getElementById('bigpeople')
var basket = document.getElementById('basket')
var introductionsentence = document.getElementById('introductionsentence')
var icons = document.getElementsByClassName('icons')






//7317


// $(document).ready(function(){

//     $(window).scroll(function(event){  

//     var wScrollY = window.scrollY; // 当前滚动条位置    
//     var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）    
//     var bScrollH = document.body.scrollHeight; // 滚动条总高度    

//     if (wScrollY>= bScrollH*0.4) { 
//         console.log("bScrollH:"+bScrollH);
//         // console.log("wInnerH:"+wInnerH);
//         console.log("wScrollY:"+wScrollY);
//         console.log(wScrollY/bScrollH);


//          switchs.style.transform="scale(1,0)";
//         introductionsentence.style.opacity="1";
//     }else{
//         switchs.style.transform="scale(1,1)";

//     } 
// });  
// });



window.onscroll=function(e){

    if(window.scrollY>1150){
        switchs.style.transform="scale(1,0)";
        introductionsentence.style.opacity="1";
    }

    if(window.scrollY>1500){
        spacial.style.marginTop="10%";
    }
    if(window.scrollY>2400){
        thirdpart.style.marginTop="10%";
    }

    if(window.scrollY>2500){

TweenLite.to("#angle", 7, {strokeDashoffset:0,ease: Power0.easeOut});
TweenLite.to(".lines", 1, {opacity:1, ease: Power0.easeOut,delay:1});
TweenLite.to("#outWhite", 1, {transform:"scale(0, 1)", ease: Power0.easeOut});
TweenLite.to("#m1", 2, {height:111.5, ease: Power3.easeOut,delay:1});
TweenLite.to("#m2", 2, {height:111.5, ease: Power3.easeOut,delay:1});
TweenLite.to("#m3", 2, {width:131, ease: Power3.easeOut,delay:1});
TweenLite.to("#m4", 2, {width:131, ease: Power3.easeOut,delay:1});
TweenLite.to("#m5", 2, {width:103.6, ease: Power3.easeOut,delay:1});
TweenLite.to("#m6", 2, {width:103.6, ease: Power3.easeOut,delay:1});
TweenLite.to("#line1", 2, {width:175.3, ease: Power3.easeOut,delay:1.5});
TweenLite.to("#line2", 2, {width:130.7, ease: Power3.easeOut,delay:1.5});
TweenLite.to("#line3", 2, {width:164.6, ease: Power3.easeOut,delay:1.5});
TweenLite.to('.blackcolor', 1, {opacity:1, ease: Circ.easeOut,delay:2.5});


TweenLite.to(".redcolorM",0.5, {opacity:0, ease: Power1.easeOut,delay:4.5});
TweenLite.to(".redcolor",0.5, {opacity:0, ease: Power1.easeOut,delay:4.5});

    }

    if(window.scrollY>3000){
        bigCard.style.top="3900px";
    }
    if(window.scrollY>4000){
        bigPeople.style.top="4900px";
    }
    if(window.scrollY>4800){
        basket.style.top="5800px";
    }

};



var circles = document.getElementById("circles");
    var redT = document.getElementById('redTop');
    var red2 = document.getElementById('red2');
    var red3 = document.getElementById('red3');
    var redB = document.getElementById('redBottom');
    var grey1 = document.getElementById('grey1');
    var grey2 = document.getElementById('grey2');
    var gery3 = document.getElementById('grey3');


    circles.onmouseover=function move(e){
        mouseX = ((Math.random()-0.5)*e.clientX);
        mouseY = ((Math.random()-0.5)*e.clientY);

        redT.style.transform="translate("+mouseX+"px, "+mouseY+"px)";
        red2.style.transform="translate("+mouseX+"px, "+mouseY+"px)";
        red3.style.transform="translate("+mouseX+"px, "+mouseY+"px)";
        redB.style.transform="translate("+mouseX+"px, "+mouseY+"px)";
        grey1.style.transform="translate("+mouseX+"px, "+mouseY+"px)";
        grey2.style.transform="translate("+mouseX+"px, "+mouseY+"px)";
        grey3.style.transform="translate("+mouseX+"px, "+mouseY+"px)";

    }

    circles.onmouseout=function stop(e){

        movX = Math.random();
        movY = Math.random();

        redT.style.transform="translate(0px, 0px)";
        red2.style.transform="translate(0px, 0px)";
        red3.style.transform="translate(0px, 0px)";
        redB.style.transform="translate(0px, 0px)";
        grey1.style.transform="translate(0px, 0px)";
        grey2.style.transform="translate(0px, 0px)";
        grey3.style.transform="translate(0px, 0px)";

    }


    var cir1 = document.getElementById('cir1')
    var cir2 = document.getElementById('cir2')
    var cir3 = document.getElementById('cir3')
    var cir4 = document.getElementById('cir4')
    var cirlAni = document.getElementById('cirlAni')



     self.setInterval(function cirAnimation(){

        cir1.style.cx=Math.random()*1000;
        cir1.style.cy=Math.random()*2000;

        cir2.style.cx=Math.random()*1500;
        cir2.style.cy=Math.random()*1500;

        cir3.style.cx=Math.random()*2000;
        cir3.style.cy=Math.random()*2000;

        cir4.style.cx=Math.random()*900;
        cir4.style.cy=Math.random()*1500;
    },2000);



// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth;
//       if (!clientWidth) return;
//       docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
//     };

//   // Abort if browser does not support addEventListener
//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, recalc, false);
//   doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);



