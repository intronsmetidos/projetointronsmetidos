
  var appText = document.querySelector('.description');
  var description = document.querySelector('.description').innerText;

  var typewriter = new Typewriter(appText, {
  loop: true,
  });

  typewriter
  .typeString(description)
  .pauseFor(1500)
  .start();

 
