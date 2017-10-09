


// window.onload=function(){
// function move(e);
// function stop(e);
// function demo(e); 
// }



(function (doc, win) {
    // 分辨率Resolution适配
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };

    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
    (function(){
        return;
        var dpr = scale =1;
         var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
           scale = 1 / dpr;
           
           // 
           var metaEl = "";
           metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    })();
        
})(document, window);    




///////////////////////////////////////////////////////////////////////////////////////


TweenLite.from("#logoani",1, {opacity:0, ease: Back.easeOut.config(1.3), x: -1000 });
TweenLite.to("#logoani",1, {opacity:1, ease: Back.easeOut.config(1.3), x: 1300, delay:2});
TweenLite.to("#redpage",1, {opacity:1, ease: Back.easeOut.config(1.3), y: -1300, delay:2.7});




var switchs = document.getElementById("switch");
var spacial = document.getElementById('spacial')
var thirdpart = document.getElementById('thirdpart')
var bigCard = document.getElementById('bigcard')
var bigPeople = document.getElementById('bigpeople')
var basket = document.getElementById('basket')
var introductionsentence = document.getElementById('introductionsentence')
var icons = document.getElementsByClassName('icons')

window.onscroll=function(e){

console.log(window.scrollY);

    if(window.scrollY>1200){
        console.log(1200);
        switchs.style.transform="scale(1,0)";
        introductionsentence.style.opacity="1";
    }

    if(window.scrollY>1500){
        spacial.style.marginTop="8%";
    }
    if(window.scrollY>2600){
        thirdpart.style.marginTop="10%";
    }

    if(window.scrollY>2700){

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

    if(window.scrollY>3200){
        bigCard.style.top="7.7rem";
    }
    if(window.scrollY>4550){
        bigPeople.style.top="9.7rem";
    }
    if(window.scrollY>5200){
        basket.style.top="11.8rem";
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
        mouseX = ((Math.random()-0.5)*e.clientX)*0.9;
        mouseY = ((Math.random()-0.5)*e.clientY)*0.9;

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



    cirlAni.onmousemove=function demo(e){

        cir1.style.cx=e.offsetX+100;
        cir1.style.cy=e.offsetY+100;

        cir2.style.cx=e.offsetX+200;
        cir2.style.cy=e.offsetY+500;

        cir3.style.cx=e.offsetX-200;
        cir3.style.cy=e.offsetY-200;

        cir4.style.cx=e.offsetX+100;
        cir4.style.cy=e.offsetY+100;

    }



    // (function(){
    //         // 动态加载script
    //         var script = document.createElement('script');
    //         var head = document.getElementsByTagName('head')[0];
    //         // console.log(head);
    //         // 脚本加载完就移除
    //         script.onload = function(){
    //             console.log('loaded script ready to remove');
    //             head.removeChild(script);
    //         };
    //         script.src = './t.js';
    //         console.log('load script');
    //         // 将script放到head里
    //         head.appendChild(script);
    //     })();






  // TweenLite.to("#pp1", 1, { ease: Bounce.easeOut, y:860 });

  // TweenLite.to("#pp2", 1, { ease: Bounce.easeOut, y:800 });


  // TweenLite.to("#bb1", 1, { ease: Bounce.easeOut, y:800 x:500});




























