const Container = document.querySelector(".bill")
const pics = document.querySelector(".picture")
var rellax = new Rellax('header')
let currentPixel = window.pageYOffset

const loop = () => {
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    const speed = diff * 0.25

    pics.style.transform = "skewY(" + speed + "deg)"


    currentPixel = newPixel

    requestAnimationFrame(loop)
}

loop();

var rellax = new Rellax('header')
var lerellax = new Rellax('.Form')


const animate = document.querySelectorAll(".project2, .bill, .unble");

animate.forEach(element => {
    element.style.opacity = 0
});

const fadeIn = function () {


    let delay = 0.25;

    animate.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom

        if(elementTop < window.innerHeight) {
            element.style.animation = `fadein 1s ${delay}s both`
            delay = delay + 0.25;
        }
    })
}
fadeIn();

document.addEventListener("scroll", () => {
    fadeIn()
})

window.addEventListener("resize", () =>{
    fadeIn()
})







