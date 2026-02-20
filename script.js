var initialPath = "M 10 100 Q 250 100 990 100";
var finalPath = "M 10 100 Q 250 100 990 100";

var string = document.querySelector("#main")
var str = document.querySelector("#main")

string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out"
    })
    gsap.to("svg circle", {
        attr: { cx: dets.x, cy: dets.y },
        duration: 0.5,
        ease: "power3.out"
    })

})
string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
    gsap.to("svg circle", {
        attr: { cx: 95, cy: 75 },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})