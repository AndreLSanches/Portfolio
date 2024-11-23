$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
       $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
  });

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

 var typed = new Typed(".typing", {
  strings: ["Desenvolvedor Front End", "Freelancer"],
  typeSpeed: 100,
  backspeed: 60,
  backDelay:1000,
  loop: true
 });

 var typed = new Typed(".typing-2", {
  strings: ["Desenvolvedor Front End", "Freelancer"],
  typeSpeed: 100,
  backspeed: 60,
  backDelay:1000,
  loop: true
 });

$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1, 
          nav: false
      },
      600: {
          items: 2, 
          nav: false
      },
      1000: {
          items: 3, 
          nav: false
      }
  }
});
});


const tiltImages = document.querySelectorAll('.tilt-img');

tiltImages.forEach((image) => {
    image.addEventListener('mousemove', (e) => {
        const bounds = image.getBoundingClientRect();

        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const centerX = x / bounds.width - 0.5;
        const centerY = y / bounds.height - 0.5;

        const rotateX = centerY * 15; 
        const rotateY = centerX * -15; 

        image.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});

const modal = document.getElementById('project-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
