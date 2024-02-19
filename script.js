// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
};

// *=============================== github calender ==================================
// GitHubCalendar(".calendar", "HiteshChandra001");

// // or enable responsive functionality:
// GitHubCalendar(".calendar", "HiteshChandra001", { responsive: true });

GitHubCalendar(".calendar", "your-username");

// or enable responsive functionality:
GitHubCalendar(".calendar", "Vikas3126", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "Vikas3126", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
}).then(r => r.text())

// *=============================== resume open in new tab ==================================


let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)


function NewTab() {
  window.open(
    "./Vikas-Yadav-Resume.pdf",
    "_blank"
  );
}

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
//       });
//     };

//   });
//   // *=============================== sticky navbar ==================================

//   let header = document.querySelector('header');

//   header.classList.toggle('sticky', window.scrollY > 100);

//   // *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

//   menuIcon.classList.remove('bx-x');
//   navbar.classList.remove('active')

// };

// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// *===============================  typed js==================================

const typed = new Typed('.multiple-text', {
  strings: ['Node Backend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})

// $('section').each(function () {
//   let height = $(this).height();
//   let offset = $(this).offset().top - 200;
//   let top = $(window).scrollTop();
//   let id = $(this).attr('id');

//   if (top > offset && top < offset + height) {
//       $('.navbar ul li a').removeClass('active');
//       $('.navbar').find(`[href="#${id}"]`).addClass('active');
//   }
// });

$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      $('section').each(function () {
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let top = $(window).scrollTop();
          let id = $(this).attr('id');

          if (top > offset && top < offset + height) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear')
  })
})