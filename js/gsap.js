//wait for DOM to load, then run GSAP
document.addEventListener("DOMContentLoaded", function(event){

//Landing Page animation
gsap.set(".landPanelAnim", {opacity:1});
gsap.from(".landPanelAnim",
    {
        y:"100%",
        duration:1,
        ease:"back.out",
        opacity:0
    })

//lPanel animation
gsap.set(".lPanel", {opacity:1});
gsap.from(".lPanel",
    {
        x:"-100%",
        duration:1.5,
        ease:"circ.out",
        opacity:0
    })

//END
})