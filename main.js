gsap.registerPlugin(ScrollTrigger);


var Pic = document.getElementById('pic').cloneNode();
document.getElementById('container').appendChild(Pic);
var line = document.createElement('div'); line.className = 'line';
document.getElementById('container').appendChild(line);  

var title = document.getElementById('main-title').cloneNode(true);
document.querySelector('.titleCont').appendChild(title);
title.classList.add("overTitle")
var line2 = document.createElement('div');


var tl = new TimelineMax({repeat:-1});
var tl2 = new TimelineMax({repeat:-1});



for(var i=50; i--;){
  tl.to(Pic,R(0.03,0.17),{opacity:R(0,1),y:R(-1.5,1.5)})
  tl.to(title,R(0.03,0.17),{opacity:R(0,1),y:R(-1.5,1.5), x:R(-1.5,1.5)})
};

tl.to(line,tl.duration()/2,{opacity:R(0.1,1),x:R(0,300),repeat:1,yoyo:true},0);

tl2.to(line2,tl2.duration()/2,{opacity:R(0.1,1),x:R(0,300),repeat:1,yoyo:true},0);
function R(max,min){return Math.random()*(max-min)+min};




gsap.defaults({ ease:"none",duration:2,delay:0.5})

tl = gsap.timeline();



tl.to(".telonCortina",{y:"-100%",duration:5,delay:2});

gsap.fromTo(".telonIzq",{ webkitFilter: "brightness(1)", filter: "brightness(1)" },
    {
      delay:6.4,
      duration: 4,
      webkitFilter: "brightness(0)",
      filter: "brightness(0)",
      scale:1.3,
      x:"100%",
      display:"none"
    }
  );

  gsap.fromTo(".telonDer",{ webkitFilter: "brightness(1)", filter: "brightness(1)" },
  {
    delay:6.4,
    duration: 4,
    webkitFilter: "brightness(0)",
    filter: "brightness(0)",
    display:"none",
    x:"-100%",
    scale:1.3,
  }
);

gsap.fromTo(".telonTech",{ webkitFilter: "brightness(1)", filter: "brightness(1)" },
    {
    delay:6,
      duration: 4,
      webkitFilter: "brightness(0)",
      display:"none",
      filter: "brightness(0)",
      y:"-100%",
      scale:1,
    }
  );


gsap.to(".ledPantalla",{
    opacity:0.2,
    delay:7.2,
})


gsap.to(".noise",{
  opacity:0.2,
  delay:7.2,
})

gsap.to("#container",{
  opacity:1,
  delay:7.2,
})
gsap.to(".pic",{
  opacity:1,
  delay:7.2,
})



gsap.to(".titleCont",{
  delay:7.8,
  opacity:1
})




/* pantalla  */
/* 
ScrollTrigger.create({
    trigger:"container",
    markers:true,
    start: "top top",
    end: "+=3000",
    pin:true,
    scrub: true
}) 
 */



/* gsap.to(".ledPantalla",{
  delay:7.4,
  duration:3,
  backgroundColor:"rgb(15, 15, 15)"

})
gsap.to(".ledPantalla",{
  delay:7.6,
  duration:3,
  backgroundColor:"rgb(105, 105, 105)"

})
gsap.to(".ledPantalla",{
  delay:7.8,
  duration:3,
  backgroundColor:"rgb(200, 200, 200)"

}) */



/* 
  gsap.to(".telonTech",{delay:9,display:"none" });

  gsap.to(".containerImg",{scale: 1.5,delay:9,display:"none" });

  gsap.to(".containerImg",{scale: 2,delay:9,display:"none" });

  gsap.to(".containerImg",{scale: 2.5,delay:9,display:"none" });

  gsap.to(".containerImg",{delay:9,display:"none"}) */;


