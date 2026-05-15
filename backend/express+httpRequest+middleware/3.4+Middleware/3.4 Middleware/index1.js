import express from "express";
import { dirname } from "path";// esto es para poder usar la función 'dirname' que se utiliza para obtener el directorio actual del archivo, ya que en ES6 no se puede usar '__dirname' directamente
import { fileURLToPath } from "url";// esto es para poder usar la función 'fileURLToPath' que se utiliza para convertir una URL a una ruta de archivo, ya que en ES6 no se puede usar '__dirname' directamente
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true })); // esto es para que el servidor pueda entender los datos enviados a través de formularios HTML

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body); // esto es para mostrar en la consola los datos enviados desde el formulario
  res.send("Datos recibidos correctamente");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
