import express, { raw } from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hello is my</h1> <p>This is the about page.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});