gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: !1,
    trialWarn: !1
});

function htbgmove() {
  const ht_elm = gsap.utils.toArray('.ht-bg-move');
    if (ht_elm.length == 0) return
    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {
            ht_elm.forEach((box, i) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        start:"top bottom",
                    end: "bottom bottom",
                        scrub: 0.02
                    },
                    defaults: {
                        ease: "none"
                    }
                });
                tl.fromTo(box, {
                    scaleX: 1,
                transformOrigin: "center center", 
                ease: "none",
                }, {
                    scaleX: .95,
                borderRadius: "30px",
                transformOrigin: "center center", 
                ease: "none",
                })
            })
        }
    }) 
};

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill())
    }
});

jQuery(window).on('load', function() {
    htbgmove();
    gsap.delayedCall(1, () => ScrollTrigger.getAll().forEach((t) => {
        t.refresh()
    }))
})