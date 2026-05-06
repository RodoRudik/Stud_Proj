var buttonColors = ["green", "red", "yellow", "blue"];
// array vacio para almacenar los colores aleatorio generados en la funcion//
var gamePattern = [];
// aaray vacio para almacenar los colores clicados//
var userClickedPattern = [];

var level = 0;
var started = false;


//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().//
$(document).keydown(function() {
  // '!started' se utiliza para verificar si la variable 'started' es falsa.//
  //Esto asegura que el bloque de código dentro del 'if' solo se ejecute la primera vez que//
  //se presiona una tecla, iniciando así el juego.//
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0"//
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;// Esto asegura que el juego solo se inicie una vez, evitando que se reinicie cada vez que se presiona una tecla después de haber comenzado.//
  }
});

$(".btn").click(function() {
  //'$(this)' se utiliza para referirse al elemento que desencadenó el evento, el botón que se hizo clic. Al usar '.attr("id")', se obtiene el valor del atributo 'id' de ese boton.//
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);// Se pasa 'userClickedPattern.length - 1' como argumento a la función 'checkAnswer()' para verificar la respuesta del usuario en el índice correcto del patrón de juego. Esto se hace porque los índices de los arrays comienzan en 0, por lo que el último elemento agregado al array 'userClickedPattern' estará en la posición 'length - 1'.//
});
//checkAnswer() se llama cada vez que el usuario hace clic en un botón, pasando el índice del último botón clicado para verificar si coincide con el patrón de juego en esa posición. Si el usuario ha completado correctamente el patrón, se llama a nextSequence() para generar el siguiente nivel después de un breve retraso. Si el usuario comete un error, se reproduce un sonido de error, se muestra una animación de "game over" y se reinicia el juego.//
function checkAnswer(currentLevel) {

  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      console.log("success");
      
    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {

    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over")
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function nextSequence() {
  // aaray vacio para almacenar los colores clicados//
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}
//reproducir sonidos//
function playSound(name) {
  var sonido = new Audio('./sounds/'+ name +'.mp3');
  sonido.play();
}
//animacion de boton clicado//
function animatePress(currentColor) {
  $("#"+ currentColor).addClass("pressed");
  setTimeout(() => {
    $("#"+ currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
  userClickedPattern = [];
  $("#level-title").text("Press A Key to Start");
}
