document.addEventListener("DOMContentLoaded", function () {
    // Check the screen size and set the target section's selector accordingly
    const isMobileScreen = window.matchMedia("(max-width: 700px)").matches;
    const targetSectionSelector = isMobileScreen ? '.mobile-banner-section' : '.home-banner-section';
    let targetSection = document.querySelector(targetSectionSelector);
    
    // Fallback for about page
    if (!targetSection) {
        targetSection = document.querySelector('.about-intro-section');
    }
    
    // console.log('1st');
    // console.log(targetSection);
    if (!targetSection) {
        console.log("Target section not found");
        return; // Exit if section is missing
    }
    // Set up the observer options
    const options = {
        root: null,           // Use the viewport as the root
        rootMargin: '200px',    // Trigger as soon as the section is in view
        threshold: 0        // Trigger when 50% of the section is visible
    };

    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // console.log('2ndf');
            if (entry.isIntersecting) {
                console.log('Section is in view');
                observer.unobserve(entry.target); // Stop observing after triggering

                // Place your animation code here
                // gsap.to(".first", { delay: .5, top: "-100%", ease: Expo.easeInOut });
                // gsap.to(".second", { delay: .7, top: "-100%", ease: Expo.easeInOut });
                // gsap.to(".third", { delay: .9, top: "-100%", ease: Expo.easeInOut });

                setTimeout(() => {
                    console.log("keeerrrii");

                    gsap.to(".first", { delay: .5, top: "-100%", ease: Expo.easeInOut });
                    gsap.to(".second", { delay: .7, top: "-100%", ease: Expo.easeInOut });
                    gsap.to(".third", { delay: .9, top: "-100%", ease: Expo.easeInOut });


                }, 1000)

                // Re-add your Owl Carousel setup here if needed

                $(document).ready(function () {
                    setTimeout(() => {
                        console.log("keeerrrii");
                        locoscroll();
                    }, 2000)
                    owlCarousels();
                });
            }
        });
    }, options);

    // Start observing the target section
    observer.observe(targetSection);
});


function locoscroll() {

    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);
    if (window.innerWidth > 768) {

        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },

            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });
    }


    var t1 = gsap.timeline({ paused: true });

    t1.to(".one", 0.8, {
        y: 6,
        rotation: 45,
        ease: Expo.easeInOut
    });
    t1.to(".two", 0.8, {
        y: -6,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.8
    });

    t1.to(".menu", 2, {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -1
    });
    gsap.from(".logo-s1", 2, {
        delay: 1,
        opacity: 0,
        y: 300,
        ease: Expo.easeInOut
    }, 0.2);
    // gsap.to(".first", 1.5,
    //     {
    //         delay: .5,
    //         top: "-100%",
    //         ease: Expo.easeInOut
    //     });
    // gsap.to(".second", 1.5, {
    //     delay: .7,
    //     top: "-100%",
    //     ease: Expo.easeInOut
    // });
    // gsap.to(".third", 1.5, {
    //     delay: .9,
    //     top: "-100%",
    //     ease: Expo.easeInOut
    // });
    gsap.from(".brand-header div", 1.5, {
        delay: 1.5,
        opacity: 0,
        y: "20",
        ease: Expo.easeInOut
    }, 0.08);
    gsap.from(".about-projects h2", 1.5, {
        delay: 1.7,
        opacity: 0,
        x: "-40",
        ease: Expo.easeInOut
    }, 0.08);
    gsap.from(".about-projects h4", 1.5, {
        delay: 1.8,
        opacity: 0,
        x: "-20",
        ease: Expo.easeInOut
    }, 0.08);


    gsap.from(".s-shape1", 1.5, {
        delay: 1.5,
        opacity: 0,
        x: "-50",
        ease: Expo.easeInOut
    }, 0.08);

    // gsap.fromTo(".about-header h1 span", 3.8,
    //   {top: "300"}, {top: "0"}, 2
    // );
    gsap.from(".about-header h2 span", .8, {
        delay: 2,
        opacity: 0,
        duration: 1.5,
        //ease: "elastic.out(1, 0.6)", 
        y: 40
    }, 0.08);

    gsap.from(".parent h2", {
        scrollTrigger: {
            trigger: ".parent h2",
            start: "top bottom -=500",
            scroller: ".smooth-scroll",
            toggleActions: "restart none none none"
        },

        delay: 1,
        opacity: 0,
        duration: 1,
        y: 120
    });

    gsap.from(".child", {
        scrollTrigger: {
            trigger: ".child",
            start: "top center",
            scroller: ".smooth-scroll",
            toggleActions: "restart none none none"
        },

        delay: 1,
        opacity: 0,
        duration: 2.5, ease: "elastic.out(1, 0.6)", y: -40
    });

    gsap.from(".about-us h2", {
        scrollTrigger: {
            trigger: ".about-us h2",
            start: "top bottom -=500",
            scroller: ".smooth-scroll",
            toggleActions: "restart none none none"
        },

        delay: 1,
        opacity: 0,
        duration: 1,
        x: -60
    });

    gsap.from(".app-titles h2", {
        scrollTrigger: {
            trigger: ".app-titles h2",
            start: "top bottom -=500",
            scroller: ".smooth-scroll",
            toggleActions: "restart none none none"
        },

        delay: 1,
        opacity: 0,
        duration: 1,
        x: -60
    });

    t1.from(".menu ul li", 2, { x: "-200", opacity: "0", ease: "expo.out", stagger: 0.1 });

    t1.reverse();
    $(document).on("click", ".home-menu", function () {
        t1.reversed(!t1.reversed());
    });
    $(document).on("click", ".toggle-btn", function () {
        t1.reversed(!t1.reversed());
    });

    gsap.from(".carRentalBx .mob-ui", {
        scrollTrigger: {
            trigger: ".carRentalBx",
            scroller: ".smooth-scroll",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "restart none none none",
            scrub: false,
        },
        delay: .2,
        opacity: 0,
        duration: 1.5,
        y: -20,
        x: -150,
        scale: .5,
        stagger: .2
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    $(".home-menu").click(function () {
        $(".menu").addClass("showMenu").slideDown();
    });
    $(".toggle-btn").click(function () {
        $(".menu").slideUp();
    });



    setTimeout(() => {
        console.log("keeerreeeeeeeerii");
        locoScroll.update();
    }, 500)
}


function owlCarousels() {
    $('#team_slider').owlCarousel({
        loop: true,
        autoplay: 700,
        autoplayTimeout: 5000,
        nav: false,
        margin: 30,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1150: {
                items: 3
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

    $('#client_slide').owlCarousel({
        loop: true,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        items: 4,
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


}