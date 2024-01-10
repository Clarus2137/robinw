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

showGreetings();

showGreetingsText();