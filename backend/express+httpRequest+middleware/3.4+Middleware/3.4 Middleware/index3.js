import express from "express";
const app = express();
const port = 3000;

// 'logger' es un middleware personalizado que se encarga de mostrar en la consola un mensaje cada vez que se hace una petición al servidor, con la fecha y hora, el método HTTP y la URL de la petición
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);// 'new Date().toISOString()' es para mostrar la fecha y hora en formato ISO, 'req.method' es para mostrar el método HTTP de la petición (GET, POST, etc.) y 'req.url' es para mostrar la URL de la petición
  next();// 'next' es una función que se utiliza para indicar que el middleware ha terminado su trabajo y que el siguiente middleware en la cadena puede continuar con la ejecución
};//'${}' pertenece a JQuery, es una forma de insertar variables dentro de un string, en este caso se utiliza para mostrar la fecha y hora, el método HTTP y la URL de la petición en el mensaje que se muestra en la consola

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
