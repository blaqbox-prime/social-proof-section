// Simple Fade in Animations With GSAP
if(window.innerWidth <= 760){
    // Mobile Animation
    gsap.timeline().from('.title',{y: -50, opacity: 0,duration: 1, ease: "power2.out"})
    .from('.subtitle',{duration: .8, y: -30, opacity: 0, ease: "power2.out"}, "-=.8")
    .from('.rating',{duration: 1, y: 25, opacity: 0, stagger: 0.2,ease: "elastic"})
    .from('.card',{duration: 1, opacity:0, y:25, ease: "power2.out", stagger: .2}, "-=.5" );
    
} else{
    // Desktop Animation
    gsap.timeline().from('.title',{x: -50, opacity: 0,duration: 1, ease: "power2.out"})
    .from('.subtitle',{duration: .8, x: -30, opacity: 0, ease: "power2.out"}, "-=.5")
    .from('.rating',{duration: 1, x: 25, opacity: 0, stagger: 0.2,ease: "power2.inOut"}, "-=.5")
    .from('.card',{duration: 1, opacity:0, y:25, ease: "power2.out", stagger: .2}, "-=.5" );
}

