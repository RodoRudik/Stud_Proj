//selecionar todol los botones//
const botones = document.querySelectorAll("button");

const audioCache = {};//crear un objeto para almacenar los objetos de audio y evitar crear nuevos objetos cada vez que se hace click en un boton//

//recorrer la lista de botones y agragar un evento de click a cada uno//
botones.forEach(boton => { 

    const id = boton.dataset.sound;//obtener el id del sonido del boton a traves del atributo data-sound//
    audioCache[id] = new Audio(id);//crear un nuevo objeto de audio con el id del sonido y almacenarlo en el cache de audio//  
    
    boton.addEventListener("click",() => {

        console.log('Has hecho click en el botón' + boton.dataset.sound);//imprimir en consola el sonido del boton que se ha hecho click//

        //recorrer el cache de audio y detener cualquier sonido que se este reproduciendo para evitar que se superpongan los sonidos//
        Object.values(audioCache).forEach(audio => {
            audio.pause();//detener el sonido//
            audio.currentTime = 0;//reiniciar el tiempo del audio para que se reproduzca desde el principio la proxima vez que se haga click en un boton//
        });
        
        //obtener el objeto de audio del cache de audio utilizando el id del sonido del boton//
        const audio = audioCache[id];        
        audio.play();//reproducir el sonido//
        
        boton.classList.add("estilo");//agregar la clase de estilo al boton para cambiar su apariencia//
        setTimeout(() => {
            boton.classList.remove("estilo");//remover la clase de estilo despues de 4000 milisegundos para volver a su apariencia original//
        }, 4000);
    });
});