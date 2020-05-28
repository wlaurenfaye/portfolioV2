function smoothScroll(target,duration){
  //what is clicked on
  var target = document.querySelector(target);

  //position of target on the window
  var targetPosition = target.getBoundingClientRect().top;

  //starting position of window
  var startPosition = window.pageYOffset;

  //how far it is to get there
  var distance = targetPosition - startPosition;

  var home =  document.querySelector(".box1");

  //allows for requestAnimationFrame
  var startTime = null;

function animation(currentTime){

  //start time= time it takes for user to click button
  //current time = how long after that it takes to scroll?
  if (startTime===null) startTime=currentTime;
  //if (targetPosition < startPosition)
  //timeElapsed = how long it takes to get to target
  var timeElapsed = currentTime - startTime;

  //run = animation function
  //paramaters = t b c d
  var run = ease(timeElapsed, startPosition, distance, duration);

//vertically scroll run function
  window.scrollTo(0, run);

  //duration = 1500, timeElapsed = how long it takes to get there
  //dont stop animation untill timeElapsed is over duration
  if(timeElapsed < duration) requestAnimationFrame(animation);
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
var box4= document.querySelector(".box4");
var home = document.getElementById('home');
var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');
var cv = document.getElementById('cv');

home.addEventListener('click', function(){
  smoothScroll('.box1', 2000);
});

aboutMe.addEventListener('click',function(){
  smoothScroll('.box2', 2000);
});

projects.addEventListener('click', function(){
  smoothScroll('.box3', 2000);
});

cv.addEventListener('click', function(){
  smoothScroll('.box4',2000);

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
