//Assignment of target elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


//When you click 'hamburger', run this block - open, fade, toggle - open CSS, fade CSS
hamburger.addEventListener('click', ()=>{
   //Open box while Animate links with fade
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Triggers burger toggle CSS Animation - nav still opens
    hamburger.classList.toggle("toggle");
});