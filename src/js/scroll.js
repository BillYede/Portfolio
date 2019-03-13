const Container = document.querySelector(".bill")
const pics = document.querySelector(".picture")
let currentPixel = window.pageYOffset
$('document').ready(function(){
    var transEffect = Barba.BaseTransition.extend({
        start: function(){
          this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
        },
        fadeInNewcontent: function(nc) {
          nc.hide();
          var _this = this;
          $(this.oldContainer).fadeOut(1000).promise().done(() => {
            nc.css('visibility','visible');
            nc.fadeIn(1000, function(){
              _this.done();
            })
          });
        }
    });
    Barba.Pjax.getTransition = function() {
      return transEffect;
    }
    Barba.Pjax.start();
  });

const loop = () => {
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    const speed = diff * 0.25

    pics.style.transform = "skewY(" + speed + "deg)"


    currentPixel = newPixel

    requestAnimationFrame(loop)
}

loop();

var rellax = new Rellax('.header')
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

document.addEventListener("scroll", function (){
    fadeIn()
})

window.addEventListener("resize", function(){
    fadeIn()
})







