var rects = document.querySelector(".center");

rects.addEventListener("mousemove",function(dets){
    var rectangleLocation = rects.getBoundingClientRect();
    var rectInsideVal=dets.clientX - rectangleLocation.left;

    if(rectInsideVal<rectangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,rectInsideVal);
        gsap.to(rects,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4

        });
    }
    else {
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,rectInsideVal);
        gsap.to(rects,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease:Power4
        });
    }
})

rects.addEventListener("mouseleave",function(){
    gsap.to(rects,{
        backgroundColor:"white"
    })

})

