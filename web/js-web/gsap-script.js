gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.from(".imgWrapper img",{
  scrollTrigger:{
      trigger:".imgWrapper",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 2.5, 
  x:120,
  scale:.5,
  stagger: 0.5 
});



gsap.from(".fishPic",{
  scrollTrigger:{
      trigger:".secondBlock",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 2.5, 
  x:120,
  scale:.5,
  stagger: 0.5 
});

gsap.from(".bgtext2",{
  scrollTrigger:{
      trigger:".secondBlock",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .1,
  opacity: 0,
  duration: 2.5, 
  y:120,
  scale:1,
  stagger: 0.5 
});

gsap.from(".appBg1",{
  scrollTrigger:{
      trigger:".appBg1",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .1,
  opacity: 0,
  duration: 2.5, 
  y:250,
  scale:1.2,
  stagger: 0.5 
});

gsap.from(".appUiScreens",{
  scrollTrigger:{
      trigger:".fourthBlock",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: .6,
  duration: 2.5, 
  x:-120,
  y:120,
  scale:1.2,
  stagger: 0.5 
});

gsap.from(".appUiScreens1",{
  scrollTrigger:{
      trigger:".fourthBlock",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: .6,
  duration: 2.5, 
  x:-120,
  y:120,
  scale:1.2,
  stagger: 0.5 
});

gsap.from(".fourthBlock2 .proNumCount span",{
  scrollTrigger:{
      trigger:".fourthBlock2",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 4, 
  x:120,
  y:50,
  scale:2.2,
  stagger: 0.2 
});


gsap.from(".fourthBlock2 .projectInfo",{
  scrollTrigger:{
      trigger:".fourthBlock2",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});

gsap.from(".fifthBlock .bg1",{
  scrollTrigger:{
      trigger:".fifthBlock",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:200,
  x:150,
  scale:1.5,
  stagger: 0.2 
});


gsap.from(".fifthBlock .bg2",{
  scrollTrigger:{
      trigger:".fifthBlock",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:200,
  x:150,
  scale:1.5,
  stagger: 0.2 
});



gsap.from(".fifthBlock2 .proNumCount span",{
  scrollTrigger:{
      trigger:".fifthBlock2",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 4, 
  x:200,
  y:150,
  scale:.5,
  stagger: 0.2 
});


gsap.from(".fifthBlock2 .projectInfo",{
  scrollTrigger:{
      trigger:".fifthBlock2",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});

gsap.from(".section-4 .projectInfo",{
  scrollTrigger:{
      trigger:".section-4",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});



gsap.from(".clikpayPics .bg1",{
  scrollTrigger:{
      trigger:".clikpayPics",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:100,
  x:200,
  scale:1.3,
  stagger: 0.2 
});



gsap.from(".clikpayPics .bg2",{
  scrollTrigger:{
      trigger:".clikpayPics",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:100,
  x:200,
  scale:1.2,
  stagger: 0.2 
});


gsap.from(".clikpayPics2 .bg1",{
  scrollTrigger:{
      trigger:".clikpayPics",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  x:-100,
  y:100,
  scale:1.3,
  stagger: 0.2 
});



gsap.from(".clikpayPics2 .bg2",{
  scrollTrigger:{
      trigger:".clikpayPics",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:100,
  x:-100,
  scale:1.2,
  stagger: 0.2 
});



gsap.from(".newBlock .proNumCount span",{
  scrollTrigger:{
      trigger:".newBlock",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .6,
  duration: 2, 
  x:100,
  y:20,
  scale:1.2,
  stagger: 0.3 
});

gsap.from(".section-4 .proNumCount span",{
  scrollTrigger:{
      trigger:".section-4",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .6,
  duration: 2, 
  x:100,
  y:20,
  scale:1.2,
  stagger: 0.3 
});


gsap.from(".doctorAppUi .centerPic",{
  scrollTrigger:{
      trigger:".doctorAppUi",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  rotationY:45,
  scale:1,
  stagger: 0.2 
});

gsap.from(".doctorAppUi .leftPic1",{
  scrollTrigger:{
      trigger:".doctorAppUi",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  x:100,
  scale:1,
  stagger: 0.2 
});

gsap.from(".doctorAppUi .leftPic2",{
  scrollTrigger:{
      trigger:".doctorAppUi",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  x:100,
  scale:1,
  stagger: 0.4 
});


gsap.from(".doctorAppUi .rightPic1",{
  scrollTrigger:{
      trigger:".doctorAppUi",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  x:-100,
  scale:1,
  stagger: 0.2 
})
gsap.from(".doctorAppUi .rightPic2",{
  scrollTrigger:{
      trigger:".doctorAppUi",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  x:-100,
  scale:1,
  stagger: 0.4 
});



gsap.from(".doctorAppUi .doctorPic",{
  scrollTrigger:{
      trigger:".doctorAppUi",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:-100,
  scale:1.3,
  stagger: 0.2 
});


gsap.from(".seventhBlock2 .proNumCount span",{
  scrollTrigger:{
      trigger:".seventhBlock2",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 4, 
  x:100,
  y:-150,
  scale:1.7,
  stagger: 0.2 
});

gsap.from(".seventhBlock2 .projectInfo",{
  scrollTrigger:{
      trigger:".seventhBlock2",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});



gsap.from(".eightBlock .bg1",{
  scrollTrigger:{
      trigger:".eightBlock",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 1,
  duration: 2, 
  y:-100,
  scale:1.3,
  stagger: 1  
});



gsap.from(".eightBlock2 .proNumCount span",{
  scrollTrigger:{
      trigger:".eightBlock2",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 4, 
  x:100,
  y:-150,
  scale:1.7,
  stagger: 0.2 
});

gsap.from(".eightBlock2 .projectInfo",{
  scrollTrigger:{
      trigger:".eightBlock2",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});

gsap.from(".logo-packsents .projectInfo",{
  scrollTrigger:{
      trigger:".logo-packsents",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});



gsap.from(".worldstageSection .proNumCount span",{
  scrollTrigger:{
      trigger:".worldstageSection",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 4, 
  x:100,
  y:-150,
  scale:1.7,
  stagger: 0.2 
});

gsap.from(".packsentssection .proNumCount span",{
  scrollTrigger:{
      trigger:".packsentssection",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 4, 
  x:100,
  y:-150,
  scale:1.7,
  stagger: 0.2 
});

gsap.from(".worldstageSection .projectInfo",{
  scrollTrigger:{
      trigger:".worldstageSection",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 2, 
  x:-120,
  stagger: 0.2 
});



gsap.from(".worldstageXpics img",{
  scrollTrigger:{
      trigger:".worldstageXpics",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 2.5, 
  x:-70,
  scale:.8,
  stagger: 0.5 
});

gsap.from(".worldstageXpics1 img",{
  scrollTrigger:{
      trigger:".worldstageXpics1",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 0,
  opacity: 0,
  duration: 2.5, 
  x:-200,
  y: 200,
  scale:.8,
  stagger: 0.5 
});

gsap.from(".worldstageXpics5 img",{
  scrollTrigger:{
      trigger:".worldstageXpics5",
      scroller: ".smooth-scroll",
      start:"top 150%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: 0,
  opacity: 0,
  duration: 2.5, 
  x:-200,
  y: 200,
  scale:.8,
  stagger: 0.5 
});


gsap.from(".worldstageXpics2 img",{
  scrollTrigger:{
      trigger:".worldstageXpics2",
      scroller: ".smooth-scroll",
      start:"top 50%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 5.5, 
  x:100,
  scale:3,
  stagger: .5 
});

gsap.from(".worldstageXpics6 img",{
  scrollTrigger:{
      trigger:".worldstageXpics6",
      scroller: ".smooth-scroll",
      start:"top 50%",
      end:"bottom 50%",
      scrub:true,
      toggleActions:"restart none none none",
  },   
  delay: .3,
  opacity: 0,
  duration: 5.5, 
  x:100,
  scale:3,
  stagger: .5 
});


gsap.from(".contact-section .contactTitle h2 span",{
  scrollTrigger:{
      trigger:".contact-section",
      scroller: ".smooth-scroll",
      start:"top 100%",
      end:"bottom 50%",
      scrub:false,
      toggleActions:"restart none none none",
  },  
  opacity: 0, 
  delay: .3,
  duration: 1.5, 
  x:100,
  y:-100,
  scale:1.7,
  stagger: 0.2 
});