import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/* Step 1: */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/blogs", (req, res) => {
  res.render("writeBlog.ejs");
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    console.log("Datos recibidos en el servidor:", username, password);
    
    // Aquí en el futuro verificarás con la Base de Datos.
    // Por ahora, como pediste, redirigimos directamente:
    res.redirect("/blogs"); 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
