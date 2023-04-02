const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',function(){
    navbar.classList.toggle('slide');
});