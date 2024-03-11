// for typedJS

let typingText = new Typed ("#text", {
    strings: ['WEB DEVELOPER','WEB APP DESIGNER'],
    typeSpeed: 35,
    startDelay:500,
    backSpeed: 35,
    backDelay: 1000,
    loop: true,
    showCursor:true
});
 //for menu
const header = document.querySelector("header");

 window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
 })

 let menu =document.querySelector('#menu-icon');
 let navlist =document.querySelector('.navlist');


    menu.onclick = ()=>{
        menu.classList.toggle('fa-times');
        navlist.classList.toggle('active');
    };
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navlist.classList.remove('active');
    };
 
    const sr = ScrollReveal ({
        distance: '45px',
        duration: 2700,
        reset:true
     }) 
     
     sr.reveal('.home-text',{delay: 380,origin:'left'})
     sr.reveal('.circle',{delay: 380,origin:'right'})

     sr.reveal('.about,.qualification,.skills section,.portfolio,.service,.cta,.contact',{delay: 350,origin:'bottom'})
     sr.reveal('.skills-content',{delay: 350,origin:'right'})
     sr.reveal('.experience',{delay: 350,origin:'right'})
     sr.reveal('.education',{delay: 350,origin:'left'})
    //  sr.reveal('.wrapper',{delay: 350,origin:'right'})

     //for btn

        let btn = document.querySelector('.vibes')
        btn.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX * 5 - rect.left;
            btn.style.setProperty('--x', x + 'deg')
        })


//for img
 const text = document.querySelector('.text p');
 text.innerHTML = text.innerHTML.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
 ).join("")

 //arrow

 let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
     
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",() => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #008000 ${scrollValue}%)`;
 };
 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;

