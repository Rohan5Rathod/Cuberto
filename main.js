Shery.mouseFollower();
Shery.makeMagnet(".magnet");


gsap.to(".frightelem",{
    scrollTrigger:{
        trigger:".fimg",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
    },
    y:"-300%",
    ease:Power1
})

let section = document.querySelectorAll(".frightelem");
Shery.imageEffect(".images",{
    style:2,
    config:{ onMouse : { value : 1 }},
    slideStyle:(setScroll)=>{
       section.forEach(function(sections, index){
        ScrollTrigger.create({
            trigger:sections,
            start:"top top",
            // end:"bottom bottom",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress+index)
            }
        })
       })
    }
})