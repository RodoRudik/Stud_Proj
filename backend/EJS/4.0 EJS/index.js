import express from 'express';

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    const today = new Date();
    const dayIndex = today.getDay(); // Returns a number 0-6

    let type = "a weekday";
    let adv = "it's time to work hard!";

    
    if (dayIndex === 0 || dayIndex === 6) {
        type = "the weekend";
        adv = "It's time to have fun!";
    }
    res.render("index.ejs", { 
        dayType: type, 
        advice: adv 
    }); 
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

