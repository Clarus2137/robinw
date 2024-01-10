function showGreetings() {
   document.getElementById('greetings').classList.add('visible');
}

function showGreetingsText() {
   setTimeout(function () {
      document.getElementById('greetings__text').classList.add('visible');
   }, 750);
}

showGreetings();

showGreetingsText();