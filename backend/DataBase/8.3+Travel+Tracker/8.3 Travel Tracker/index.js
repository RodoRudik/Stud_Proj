import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
await db.connect();

const app = express();
const port = 3000;

db.query("SELECT country_code FROM visited_countries", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
    return;
  }
  console.log(res.rows);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
});


// ahora vamos a crear un post para recibir el nombre del pais, buscar el codigo del pais y mostrarlo en el mapa
app.post("/add", async (req, res) => {
  const input = req.body["country"];//aqui recibimos el nombre del pais
  const result = await db.query(//aqui buscamos el codigo del pais
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );
  if (result.rows.length !== 0) {//si el codigo existe mostramos el codigo
    const data = result.rows[0];//aqui mostramos el codigo
    const countryCode = data.country_code;
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);//aqui insertamos el codigo en la tabla visited_countries
    res.redirect("/");//y redirigimos al index
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
