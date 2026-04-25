//creacion de numero aleatorio numero 1 entre 1 -6//
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// tomando un atributo y cambiandolo//
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

//cambiaando las imagenes aleatorias//
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

//condicionales para determinar el ganador//
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}

