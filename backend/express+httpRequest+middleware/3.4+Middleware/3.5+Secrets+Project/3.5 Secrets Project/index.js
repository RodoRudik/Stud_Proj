//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  if (req.body.password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");// esto es para enviar el archivo 'secret.html' que se encuentra en la carpeta 'public' al cliente cuando se hace una petición a la ruta "/submit" y la contraseña enviada desde el formulario es correcta
    } else {
    res.sendFile(__dirname + "/public/index.html");// esto es para enviar el archivo 'index.html' que se encuentra en la carpeta 'public' al cliente cuando se hace una petición a la ruta "/submit" y la contraseña enviada desde el formulario es incorrecta
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});