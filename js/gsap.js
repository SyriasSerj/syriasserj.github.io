//wait for DOM to load, then run GSAP
document.addEventListener("DOMContentLoaded", function(event){
    //logo top left RGB
    //gsap.set(".rgbLogo", {x:"-5rem"}); //setting opacity 0 and X offscreen to manipulate them afterwards
    /*var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#aboutMe",
            start: "top top"
        },
        repeat: 0
    }); //creating GSAP timeline to do multiple anims together
    tl.to(".rgbLogo", { x:"0rem", duration:1.25, ease:"power2.out" }); //animation L/R
    tl.to(".rgbLogo", { opacity:1, duration:1.25 },"<0"); //animation opacity delayed by 0.2sec */

    /* 
     TEST ANIMAZIONE
    */
     var actionLogo = gsap.to('.rgbLogo', {x:'60', duration:0.8, ease:'power2.in', paused:true});
     var showHideLogo = gsap.to('.rgbLogo', {opacity:0, duration:1, ease:'power2.out'});

     ScrollTrigger.create({
       trigger: "#aboutMe",
       start: "top top",
       end: 99999,
       onUpdate: ({progress, direction, isActive}) => {
         if (direction == -1) {
           actionLogo.play();
           showHideLogo.play()
         } if (direction == 1 ) {
           actionLogo.reverse();
           showHideLogo.reverse();
         } else if (direction == 1 && isActive == true) {
           showHideLogo.reverse()
         }
       }
     });

      
    //S
    gsap.fromTo(".backToTop1", {
        color: function(index, target, targets) {
          return "hsl(" + ((index / targets.length) * 360) + ", 100%, 50%)";
        }
      },{
        color: "hsl(+=360, +=0%, +=0%)",
        duration: 5,
        repeat: -1,
        ease: "none"
      });
    //B
    gsap.fromTo(".backToTop2", {
        color: function(index, target, targets) {
          return "hsl(" + ((index / targets.length) * 360) + ", 100%, 50%)";
        }
      },{
        color: "hsl(+=360, +=0%, +=0%)",
        duration: 5,
        repeat: -1,
        ease: "none"
      },"0.35");

    //Landing Page animation
    gsap.set(".landPanelAnim", {opacity:0, y:"200%"}); //setting opacity 0 and Y offscreen to manipulate them afterwards
    var tl = gsap.timeline({repeat: 0}); //creating GSAP timeline to do multiple anims together
    tl.to(".landPanelAnim", {
        y:"0", duration:1.25, ease:"back.out"
        }); //animation from bottom to top

    tl.to(".landPanelAnim", {
        opacity:1, duration:1.2
        },
        "0.2"
        ); //animation for fade in starting 0.1 seconds after the first anim
    
    //-------------------------
    //About Me animation
    //Left column
    gsap.set(".aboutL", { x:"-200%", opacity:0});
    gsap.to(".aboutL", {
        scrollTrigger: {
            trigger: "#aboutMe",
            start: "top 50%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //Right Column
    gsap.set(".aboutR", { x:"200%", opacity:0 });
    gsap.to(".aboutR", {
        scrollTrigger: {
            trigger: "#aboutMe",
            start: "top 50%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });

    //-------------------------
    //Music animation
    //Left column
    gsap.set(".musicL", { x:"-200%", opacity:0 });
    gsap.to(".musicL", {
        scrollTrigger: {
            trigger: "#musicPanel",
            start: "top 50%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //Right Column
    gsap.set(".musicR", { x:"200%", opacity:0 });
    gsap.to(".musicR", {
        scrollTrigger: {
            trigger: "#musicPanel",
            start: "top 50%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });

    //-------------------------
    //Photos animation
    //Left column
    gsap.set(".photosL", { x:"-200%", opacity:0 });
    gsap.to(".photosL", {
        scrollTrigger: {
            trigger: "#photoPanel",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //Right Column
    gsap.set(".photosR", { x:"200%", opacity:0 });
    gsap.to(".photosR", {
        scrollTrigger: {
            trigger: "#photoPanel",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });

    //-------------------------
    //Career animation
    //Left column
    gsap.set(".careerL", { x:"-200%", opacity:0 });
    gsap.to(".careerL", {
        scrollTrigger: {
            trigger: "#careerPanel",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //Right Column
    gsap.set(".careerR", { x:"200%", opacity:0 });
    gsap.to(".careerR", {
        scrollTrigger: {
            trigger: "#careerPanel",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //SINGLE JOBS
    //First
    gsap.set(".career1Job", { x:"200%",opacity:0 });
    gsap.to(".career1Job", {
        scrollTrigger: {
            trigger: ".career1Job",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //Second
    gsap.set(".career2Job", { x:"-200%",opacity:0 });
    gsap.to(".career2Job", {
        scrollTrigger: {
            trigger: ".career2Job",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });
    //Third
    gsap.set(".career3Job", { x:"200%",opacity:0 });
    gsap.to(".career3Job", {
        scrollTrigger: {
            trigger: ".career3Job",
            start: "top 70%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    });

    //-------------------------
    //Socials animation
    gsap.set(".socialTab", { opacity:0, x:"-200%" });
    gsap.to(".socialTab", {
        scrollTrigger: {
            trigger: ".socialTab",
            start: "top 90%"
        },
        x:0,
        opacity:1,
        duration:0.75,
        ease: "power2.out"
    }); //title animation

    gsap.set(".socialAnim1", {opacity:0, x:"-200%"});
    gsap.set(".socialAnim2", {opacity:0, x:"-200%"});
    gsap.set(".socialAnim3", {opacity:0, x:"-200%"});
    gsap.set(".socialAnim4", {opacity:0, x:"-200%"});
    gsap.set(".socialAnim5", {opacity:0, x:"-200%"});
    gsap.set(".socialAnim6", {opacity:0, x:"-200%"}); //pre-setting props of all social icons

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".socialTab",
            start: "top 80%"
        },
        repeat: 0
    }); //creating timeline and animating each social icon in cascade only when #socialTab enters viewport

    var socialXEase="back.out"; //setting some variables re-used to optimize changes
    var socialXDrtn="0.6";
    var socialFadeDrtn="0.6"; 

    tl.to(".socialAnim1", {x:"0", duration:socialXDrtn, ease:socialXEase},"<0.2");
    tl.to(".socialAnim1", {opacity:1, duration:socialFadeDrtn},"<0.1");
    tl.to(".socialAnim2", {x:"0", duration:socialXDrtn, ease:socialXEase}, "<0.1");
    tl.to(".socialAnim2", {opacity:1, duration:socialFadeDrtn}, "<0.1");
    tl.to(".socialAnim3", {x:"0", duration:socialXDrtn, ease:socialXEase}, "<0.1");
    tl.to(".socialAnim3", {opacity:1, duration:socialFadeDrtn}, "<0.1");
    tl.to(".socialAnim4", {x:"0", duration:socialXDrtn, ease:socialXEase}, "<0.1");
    tl.to(".socialAnim4", {opacity:1, duration:socialFadeDrtn}, "<0.1");
    tl.to(".socialAnim5", {x:"0", duration:socialXDrtn, ease:socialXEase}, "<0.1");
    tl.to(".socialAnim5", {opacity:1, duration:socialFadeDrtn}, "<0.1");
    tl.to(".socialAnim6", {x:"0", duration:socialXDrtn, ease:socialXEase}, "<0.1");
    tl.to(".socialAnim6", {opacity:1, duration:socialFadeDrtn}, "<0.1");
//END
})