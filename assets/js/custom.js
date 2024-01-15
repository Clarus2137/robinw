function showGreetings() {
   setTimeout(function () {
      document.getElementById('greetings').classList.add('visible');
   }, 250);
}


function showGreetingsText() {
   setTimeout(function () {
      document.getElementById('greetings__text').classList.add('visible');
   }, 1000);
}


function scrollToAnchor() {
   const anchors = document.querySelectorAll('a.nav-link[href*="#"')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const elementID = anchor.getAttribute('href').substr(1);
         document.getElementById(elementID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   }
}

function scrollToTop() {
   const toTopBtn = document.getElementById('to-top');
   const headerHeight = document.getElementById('header').clientHeight;

   toTopBtn.style.transitionDuration = 0.4;

   window.addEventListener('scroll', () => {
      if(window.scrollY > headerHeight) {
         toTopBtn.classList.add('visible');
         toTopBtn.style.opacity = 1;
      } else {
         toTopBtn.classList.remove('visible');
         toTopBtn.style.opacity = 0;
      }
   });
}



showGreetings();

showGreetingsText();

scrollToAnchor();

scrollToTop();