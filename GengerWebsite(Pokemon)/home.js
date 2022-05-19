//Mouseover effect
let img = document.querySelector('#monster');
img.addEventListener("mouseover", function(){
    this.src = "monster2.png";
})

img.addEventListener("mouseout", function(){
    this.src = "gengerr.png";
})

//Parallax effect
let lightinings = document.getElementById('lightining');
let stars = document.getElementById('stars');
let gengar = document.getElementById('monster');
let mountains_behind = document.getElementById('mountains_behind');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.getElementById('header');
let crygengar = document.getElementById('crygengar');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    lightinings.style.left = value * 0.5 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    header.style.top = value * 0.5 + 'px';
})







  

