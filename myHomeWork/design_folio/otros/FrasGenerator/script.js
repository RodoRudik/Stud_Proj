//array de frases y autor//
const frasesArray = [{texto: "La mayor gloria no es no caer nunca, sino levantarse siempre", autor: "Nelson Mandela"},
   {texto: "Debes hacer las cosas que crees que no puedes hacer", autor:"Eleanor Roosevelt"},
   {texto:"Si no pierdes, no puedes disfrutar de las victorias", autor:"Rafael Nadal"}, 
   {texto:"Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito", autor:"Aristóteles"},
   {texto:"No es que tengamos poco tiempo, sino que perdemos mucho", autor: "Séneca"},
   {texto:"Sé tú mismo. Todos los demás puestos están ocupados", autor:"Oscar Wilde"},
   {texto:"Quien quiere hacer algo encuentra el medio, quien no quiere hacer nada encuentra una excusa", autor: "Proverbio tradicional árabe"}
];

//array para guardar las frases que ya se mostraron//
const frasesMostradas = [];

//bonus de contador de vistas//
let vistas = 0;
const contadorElement = document.getElementById("contador");

//seleccionar elementos del DOM//
const elementoFrase = document.querySelector(".frase");
const elementoAutor = document.querySelector(".author");
const boton = document.querySelector(".creation");
const btnCopiar = document.querySelector(".copiar");//boton de copiar//

//funcion para generar nueva frase//
function generadorNuevaFrase() {
   //filtrar las frases que no se han mostrado aun//
   //fraseArray.filter() se utiliza para crear un nuevo array que contiene solo las frases que no están presentes en el array frasesMostradas. La función de filtro toma cada frase del array frasesArray y verifica si no está incluida en frasesMostradas utilizando el método includes(). Si la frase no ha sido mostrada, se incluye en el nuevo array frasesDisponibles.//
   //este signo '!' se utiliza para negar la condición. En este caso, se está negando la condición de que la frase esté incluida en el array frasesMostradas. Por lo tanto, solo se incluirán las frases que no han sido mostradas aún.//
   const frasesDisponibles = frasesArray.filter(
    frase => !frasesMostradas.includes(frase.texto)
   );

   //si no hay frases nuevas deshabilitar el boton y mostrar mensaje//
   if (frasesDisponibles.length === 0) {
        elementoFrase.textContent = "¡No hay más frases disponibles!";
        elementoAutor.textContent = "";
        boton.disabled = true; 
        return;       
   }     
   
   // seleccionar una frase aleatoria de las disponibles //
   const fraseSeleccionada = frasesDisponibles[Math.floor(Math.random() * frasesDisponibles.length)];
   elementoFrase.textContent = fraseSeleccionada.texto;
   elementoAutor.textContent = fraseSeleccionada.autor;
       
   // guardar la frase mostrada para evitar repetirla//
   frasesMostradas.push(fraseSeleccionada.texto);

   //para el contador de vistas//
   vistas++;
   contadorElement.textContent = "Vistas: " + vistas;
}

// enlazar boton con una funcion para generar frase,agregacion de evenlistener//
boton.addEventListener("click", generadorNuevaFrase);

// envenlistener para el boton de copiar//
btnCopiar.addEventListener("click", () => {
   const textoFrase = document.querySelector(".frase").textContent;
   const textoAutor = document.querySelector(".author").textContent;
   const textoCompleto = `${textoFrase} - ${textoAutor}`;

   // Copiar al portapapeles
    navigator.clipboard.writeText(textoCompleto)
        .then(() => {//.then se utiliza para manejar la promesa resuelta, es decir, cuando la acción de copiar se ha completado con éxito.//
            // Feedback visual temporal
            const originalText = btnCopiar.textContent;
            btnCopiar.textContent = "¡Copiado! ✅";
            setTimeout(() => {//Después de 2 segundos, el texto del botón vuelve a su estado original.//
                btnCopiar.textContent = originalText;
            }, 2000);
        })
        .catch(err => {//.catch se utiliza para manejar cualquier error que pueda ocurrir durante la acción de copiar al portapapeles. Si ocurre un error, se muestra un mensaje de error en la consola y una alerta al usuario.//
            console.error("Error al copiar:", err);
            alert("No se pudo copiar. Intenta manualmente.");
        });
})
generadorNuevaFrase();

