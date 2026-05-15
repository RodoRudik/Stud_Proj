import express from "express";
// esto es para poder usar la función 'dirname' que se utiliza para obtener el directorio actual del archivo, ya que en ES6 no se puede usar '__dirname' directamente
import { dirname } from "path";
// esto es para poder usar la función 'fileURLToPath' que se utiliza para convertir una URL a una ruta de archivo, ya que en ES6 no se puede usar '__dirname' directamente
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// esto es para obtener el directorio actual del archivo, ya que en ES6 no se puede usar '__dirname' directamente
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// esta variable se utiliza para almacenar el nombre de la banda que se va a generar a partir de los datos enviados desde el formulario
var bandName = ""; 

// esto es para que el servidor pueda entender los datos enviados a través de formularios HTML
app.use(bodyParser.urlencoded({ extended: true }));

// este middleware se utiliza para generar el nombre de la banda a partir de los datos enviados desde el formulario, concatenando el nombre de la calle y el nombre de la mascota, y luego se llama a 'next()' para indicar que el middleware ha terminado su trabajo y que el siguiente middleware en la cadena puede continuar con la ejecución
function bandNameGenerator(req, res, next) {
  console.log(req.body); // esto es para mostrar en la consola los datos enviados desde el formulario
  bandName = req.body["street"] + req.body["pet"]; // esto es para generar el nombre de la banda a partir de los datos enviados desde el formulario, concatenando el nombre de la calle y el nombre de la mascota
  next(); // esto es para indicar que el middleware ha terminado su trabajo y que el siguiente middleware en la cadena puede continuar con la ejecución
};

// esto es para aplicar el middleware 'bandNameGenerator' a todas las rutas
app.use(bandNameGenerator);

// este middleware permite 'app.get()' para enviar archivos HTML al cliente, en este caso se utiliza para enviar el archivo 'index.html' que se encuentra en la carpeta 'public' cuando se hace una petición a la ruta raíz "/"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");// esto es para enviar el archivo 'index.html' que se encuentra en la carpeta 'public' al cliente cuando se hace una petición a la ruta raíz "/"
});

app.post("/submit", (req, res) => {
  console.log(req.body); // esto es para mostrar en la consola los datos enviados desde el formulario
  res.send(`<h1>The Band Name is:</h1><h2>${bandName}✌️</h2>`); // esto es para enviar una respuesta al cliente con el nombre de la banda generado a partir de los datos enviados desde el formulario
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

