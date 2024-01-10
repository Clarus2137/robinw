function showGreetings() {
   setTimeout(function () {
      document.getElementById('greetings').classList.add('visible');
   }, 750);
}

function showGreetingsText() {
   setTimeout(function () {
      document.getElementById('greetings__text').classList.add('visible');
   }, 1500);
}

showGreetings();

showGreetingsText();