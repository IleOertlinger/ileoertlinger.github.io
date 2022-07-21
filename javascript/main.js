//obtener los elementos de la clase .closed

let links = document.querySelectorAll(".closed");

//recorrerlos

links.forEach(function(link) {
//agregar un evento click a cada uno de ellos - case sensitive

    link.addEventListener("click", function(ev){
      ev.preventDefault();
      let content = document.querySelector('.content');
//quitarle las clases de animacion que ya addEventListener
      content.classList.remove("animate__fadeInDown");
      content.classList.remove("animate__animated");

//agregar clases para animar su salida fadeOutUp
      content.classList.add("animate__fadeOutUp");
      content.classList.add("animate__animated");

      setTimeout(function(){
      location.href = "/";
      },600);



      return false;
    })
});
