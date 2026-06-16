document.addEventListener("DOMContentLoaded", function() {
  const servicesMenu = document.querySelector(".sub-menu-li .down-arrow-image");
  const submenu = document.querySelector(".sub-menu-li .submenu-ul");

  servicesMenu.addEventListener("click", function() {
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      servicesMenu.classList.toggle("rotate"); // Toggle rotation
  });
});


gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger);

gsap.to(".marquee-div1", {
  backgroundPosition: "-=2000px",  // Adjust based on your image width
  duration: 30,  // How long the scroll should take
  ease: "none",
  repeat: -1  // Infinite loop
});

gsap.to(".marquee-div2", {
  backgroundPosition: "+=2000px",  // Adjust based on your image width
  duration: 30,  // How long the scroll should take
  ease: "none",
  repeat: -1  // Infinite loop
});


let zIndexState = 10; // Initial z-index state

let animation = gsap.to(".planet", {
  x: -700,                    // Move 700px to the left
  duration: 3,                // Animation duration (3 seconds)
  ease: "power1.inOut",        // Smooth easing
  repeat: -1,                  // Infinite loop
  yoyo: true,                  // Reverse direction after reaching the end
  onUpdate: function () {       // Monitor the position during the animation
    const planet = document.querySelector('.planet');
    if (!planet) return;
    const xPos = gsap.getProperty(planet, "x"); // Get current x position

    const tolerance = 5; // Allow a small range to account for minor offsets
    // When the element is close to the left end (-700px)
    if (xPos <= -700 + tolerance && zIndexState !== -1) {
      planet.style.zIndex = "-1"; // Reduce z-index (move behind)
      zIndexState = -1; // Update state
    }
    // When the element is close to the original position (0px)
    else if (xPos >= -100 - tolerance && zIndexState !== 10) {
      // console.log()
      planet.style.zIndex = "10"; // Increase z-index (move in front)
      zIndexState = 999999; // Update state
    }
  }
});

gsap.to(".planet2", {
  x: 610,                    // Move 700px to the left
  duration: 3,                // Animation duration (3 seconds)
  ease: "power1.inOut",        // Smooth easing
  repeat: -1,                  // Infinite loop
  yoyo: true,                  // Reverse direction after reaching the end
  onUpdate: function () {       // Monitor the position during the animation
    const planet = document.querySelector('.planet2');
    if (!planet) return;
    const xPos = gsap.getProperty(planet, "x"); // Get current x position
    const tolerance = 5; // Allow a small range to account for minor offsets
    // When the element is close to the left end (-700px)
    if (xPos <= 0 + tolerance && zIndexState !== -9) {
      planet.style.zIndex = "-1"; // Reduce z-index (move behind)
      zIndexState = -99; // Update state
    }
    // When the element is close to the original position (0px)
    else if (xPos >= 610 - tolerance && zIndexState !== 10) {
      planet.style.zIndex = "10"; // Increase z-index (move in front)
      zIndexState = 999999; // Update state
    }
  }
});


gsap.timeline({ repeat: -1, yoyo: true })
  .to(".element-24-3-img", {
    duration: 2,
    scale: 1.2, // Slight pulsing effect
    filter: "drop-shadow(0px 0px 40px orange)", // Glowing effect
    ease: "power1.inOut", // Smooth animation
    y: -5, // Move up slightly
    opacity: 0.8, // Slightly fade out
  })
  .to(".element-24-3-img", {
    duration: 1,
    scale: 1, // Return to original size
    filter: "drop-shadow(0px 0px 20px yellow)", // Adjust glow for dynamic effect
    ease: "power1.inOut",
    y: 0, // Return to original position
    opacity: 1, // Return to full opacity
  })
  .to(".element-24-3-img", {
    duration: 1,
    color: "cyan", // Change color dynamically (requires proper CSS setup)
    ease: "power1.inOut",
  });


gsap.to(".element-24-1-img", {
  duration: 2,                // Duration to fade in
  opacity: 1,                 // Fade in to fully visible
  scale: 1.1,                 // Scale up a bit while fading in
  rotate: 5,                  // Slight rotation while fading in
  skewX: 5,                   // Slight skew on the X-axis
  ease: "power1.inOut",       // Smooth easing
  onComplete: () => {
    // Fade out after fade in is complete
    gsap.to(".element-24-1-img", {
      duration: 2,        // Duration to fade out
      opacity: 0.5,       // Fade out to semi-transparent
      scale: 1,           // Scale back to original size
      rotate: 0,          // Reset rotation
      skewX: 0,           // Reset skew
      ease: "power1.inOut",
      repeat: -1,         // Repeat indefinitely
      yoyo: true          // Yoyo for continuous fade in and out
    });
  }
});




// Set up GSAP matchMedia for responsive animations
gsap.matchMedia().add("(max-width: 450px)", () => {


  let zIndexState = 10; // Initial z-index state

  let animation = gsap.to(".planet", {
    x: -350,                    // Move 700px to the left
    duration: 3,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const planet = document.querySelector('.planet');
      if (!planet) return;
      const xPos = gsap.getProperty(planet, "x"); // Get current x position

      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)
      if (xPos <= -350 + tolerance && zIndexState !== -1) {
        planet.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -1; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= -100 - tolerance && zIndexState !== 10) {
        // console.log()
        planet.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
  });

  gsap.to(".planet2", {
    x: 250,                    // Move 700px to the left
    duration: 3,                // Animation duration (3 seconds)
    ease: "power1.inOut",        // Smooth easing
    repeat: -1,                  // Infinite loop
    yoyo: true,                  // Reverse direction after reaching the end
    onUpdate: function () {       // Monitor the position during the animation
      const planet = document.querySelector('.planet2');
      if (!planet) return;
      const xPos = gsap.getProperty(planet, "x"); // Get current x position
      const tolerance = 5; // Allow a small range to account for minor offsets
      // When the element is close to the left end (-700px)
      if (xPos <= 0 + tolerance && zIndexState !== -9) {
        planet.style.zIndex = "-1"; // Reduce z-index (move behind)
        zIndexState = -99; // Update state
      }
      // When the element is close to the original position (0px)
      else if (xPos >= 250 - tolerance && zIndexState !== 10) {
        planet.style.zIndex = "10"; // Increase z-index (move in front)
        zIndexState = 999999; // Update state
      }
    }
  });

});



gsap.to(".img-rotate", {
  rotation: 360,       // Full rotation (360 degrees)
  duration: 30,         // Duration of each full rotation (5 seconds)
  ease: "none",        // No easing, makes it a smooth continuous motion
  repeat: -1,          // Infinite loop
});



gsap.to(".up-down", {
  x: 2,                     // Move 50px on the x-axis
  y: -10,                     // Move 50px on the y-axis
  duration: 1,               // Duration for each movement
  repeat: -1,                // Infinite loop
  yoyo: true,                // Reverse the motion to create back and forth movement
  ease: "power1.inOut"        // Smooth easing for the up and down motion
});



gsap.to(".down-up", {
  x: -2,                     // Move 50px on the x-axis
  y: 10,                     // Move 50px on the y-axis
  duration: 1,               // Duration for each movement
  repeat: -1,                // Infinite loop
  yoyo: true,                // Reverse the motion to create back and forth movement
  ease: "power1.inOut"        // Smooth easing for the up and down motion
});







//   $.fn.parallax = function (resistance, mouse) {
//     $el = $(this);
//     TweenLite.to($el, 0.2, {
//         x: -((mouse.clientX - window.innerWidth / 2) / resistance),
//         y: -((mouse.clientY - window.innerHeight / 2) / resistance)
//     });
// };


// $(document).ready(function () {
// $(document).mousemove(function (e) {
//   if ($(window).width() > 1023) {
//       $(".mouse-move").parallax(-30, e);


//   }
// });
// });


// owl carousal section of home page


$(document).ready(function () {



  $('#testimonial_slider').owlCarousel({
    loop: true,
    autoplay: false,
    smartSpeed: 1000,
    nav: true,
    navText: ["<img src='images/arrow-left.png'>", "<img src='images/arrow-right.png'>"],
    dots: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
        margin: 40,
        nav: true,
      },
      767: {
        items: 3,
        margin: 30,
        nav: false
      },
      1200: {
        items: 3,
        margin: 40,
        nav: true,
        loop: false
      }
    }
  })

  $('#client_slide').owlCarousel({
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    items: 4,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 40,
        nav: true
      },
      767: {
        items: 3,
        margin: 30,
        nav: false
      },
      1200: {
        items: 3,
        margin: 40,
        nav: true,
        loop: false
      }
    }
  })

  $('#ourclients').owlCarousel({
    loop: true,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    items: 1
  })

  $('#casestudy_slider').owlCarousel({
    loop: true,
    autoplay: 2500,
    smartSpeed: 1000,
    nav: true,
    navText: ["<img src='images/arrow-left.png'>", "<img src='images/arrow-right.png'>"],
    dots: true,
    items: 1
  })

  $('#product-slider').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: false,
    dots: true,
    items: 1
  })

});


// console.clear();

// owl carousal section of home page ends



// about section animation





// New About Us section animations
gsap.from(".about-content-col > *", {
  scrollTrigger: {
    trigger: ".about-block-new",
    start: "top 75%",
    scroller: ".smooth-scroll",
    toggleActions: "play none none reverse"
  },
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power2.out"
});

gsap.from(".about-card-container", {
  scrollTrigger: {
    trigger: ".about-block-new",
    start: "top 70%",
    scroller: ".smooth-scroll",
    toggleActions: "play none none reverse"
  },
  scale: 0.85,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.2)"
});
