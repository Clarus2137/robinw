function showGreetings() {
   setTimeout(function () {
      document.getElementById('greetings').classList.add('visible');
   }, 500);
}

function showGreetingsText() {
   setTimeout(function () {
      document.getElementById('greetings__text').classList.add('visible');
   }, 1250);
}

showGreetings();

showGreetingsText();