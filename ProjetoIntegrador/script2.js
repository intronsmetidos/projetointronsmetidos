
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 950 * i);
    });
  }


  const titulo = document.querySelector('.description');
  typeWriter(titulo);
