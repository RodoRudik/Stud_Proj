var numberOfDrums = document.querySelectorAll(".drum").length;//se seleccionan todos los elementos con la clase .drum y se obtiene su longitud para saber cuántos botones de tambor hay en la página//

function makeSound(key) {
  switch (key) {//se utiliza un switch para determinar qué sonido reproducir en función del contenido del botón clickeado o presionado en teclado//  
        
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");//se crea un nuevo elemento de audio y se le asigna la ruta del sonido a reproducir//
      tom1.play();
      break;//break se utiliza para salir del switch después de ejecutar el caso correspondiente//
    case "a": 
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s": 
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d": 
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j": 
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(key);//default se ejecuta si no se cumple ningún caso en el switch, en este caso se imprime la tecla presionada en la consola//
  }
}

for(var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     //var audio = new Audio("sounds/tom-1.mp3");//se crea un nuevo elemento de audio y se le asigna la ruta del sonido a reproducir//
      //audio.play();//play metodo reproduce el sonido//

      //this.innerHTML se refiere al contenido del elemento que se ha clickeado, en este caso el boton con la clase .drum, y se le asigna a la variable buttonInnerHTML//
      //this.innerHTML;//

      //this.style.color = "white";//cambia el color del texto del boton clickeado a blanco//
      var buttonInnerHTML = this.innerHTML;//se asigna el contenido del botón clickeado a la variable buttonInnerHTML//      
      makeSound(buttonInnerHTML);//se llama a la función makeSound y se le pasa el contenido del botón clickeado como argumento para reproducir el sonido correspondiente//
      buttonAnimation(buttonInnerHTML);//se llama a la función buttonAnimation y se le pasa el contenido del botón clickeado como argumento para agregar la animación al botón correspondiente// 
  });     
}

document.addEventListener("keydown", function(event) {//se agrega un event listener al documento para escuchar los eventos de teclado//
  makeSound(event.key);//se llama a la función makeSound y se le pasa la tecla presionada como argumento para reproducir el sonido correspondiente//
  buttonAnimation(event.key);//se llama a la función buttonAnimation y se le pasa la tecla presionada como argumento para agregar la animación al botón correspondiente//
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);//se selecciona el botón correspondiente a la tecla presionada utilizando querySelector y se le asigna a la variable activeButton//
  activeButton.classList.add("pressed");//se agrega la clase "pressed" al botón seleccionado para aplicar la animación//
  setTimeout(function() {//setTimeout se utiliza para ejecutar una función después de un cierto tiempo, en este caso se utiliza para eliminar la clase "pressed" después de 100 milisegundos//
    activeButton.classList.remove("pressed");//se elimina la clase "pressed" del botón seleccionado para quitar la animación//
  },100);
};