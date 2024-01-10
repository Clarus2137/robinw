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



showGreetings();

showGreetingsText();

scrollToAnchor();