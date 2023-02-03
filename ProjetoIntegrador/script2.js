
  var appText = document.querySelector('.description');
  var description = document.querySelector('.description').innerText;

  var typewriter = new Typewriter(appText, {
  loop: true,
  });

  typewriter
  .typeString(description)
  .pauseFor(1500)
<script>
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }



  const titulo = document.querySelector('. description);
  typeWriter(titulo);
</script>
