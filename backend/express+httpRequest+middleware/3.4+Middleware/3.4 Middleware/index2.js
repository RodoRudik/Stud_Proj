import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny")); // esto es para mostrar en la consola las peticiones que se hacen al servidor, con el formato "tiny" que es más conciso

// Middleware personalizado para mostrar un mensaje en la consola cada vez que se hace una petición al servidor
// el metodo app.get() se utiliza para definir una ruta en el servidor, en este caso la ruta raíz "/"
app.get("/", (req, res) => {//'req' es el objeto que representa la petición que se hace al servidor, y 'res' es el objeto que representa la respuesta que se va a enviar al cliente
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
