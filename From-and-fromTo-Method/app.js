/*
from and fromTo method
from: dont have to specify the initial
fromTo: you have to specify the initial
*/

// gsap.from(".box1", {
//     y: -200,
//     duration:3,
//     ease:'linear',
//     repeat: -1,
//     yoyo: true,
// })

gsap.fromTo(".box2",{
    y:200,
    opacity:0,
},{
    y:-200,
    opacity:1,
    duration: 3,
    ease: "linear",
    borderRadius:0,
    repeat: -1,
    yoyo:true,
})