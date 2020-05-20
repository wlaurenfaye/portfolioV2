function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

function animation(currentTime){
  if (startTime===null) startTime=currentTime;
  var timeElapsed = currentTime - startTime;
  var run = ease(timeElapsed, startPosition, distance, duration);
  window.scrollTo(0,run);
  if(timeElapsed< duration) requestAnimationFrame(animation);
  }
//http://gizma.com/easing/
  function ease(t, b, c, d){
    t/= d/2;
    if (t<1) return c / 2 * t * t + b;
    t--;
    return -c /2 * (t *(t -2)-1)+b;
  }


  requestAnimationFrame(animation);
}


var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var home = document.getElementById('home');
var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');

home.addEventListener('click', function(){
  smoothScroll('.box1', 2000);
});

aboutMe.addEventListener('click',function(){
  smoothScroll('.box2', 1500);
});

projects.addEventListener('click', function(){
  smoothScroll('.box3', 1500);
});
box1.addEventListener('click', function(){
  smoothScroll('.box2',1500);

});

/// NAV BAR

const navSlide= () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //toggle actives
    nav.classList.toggle('nav-active');
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation){
       link.style.animation = ''
     }else {
       link.style.animation=`navLinkFade 0.9s ease forwards ${index /7 + 0.5 }s`;
      }
    });
    });
  }

navSlide();
