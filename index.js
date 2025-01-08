import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dir + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    if (email === "azeem.talikoti@gmail.com" && pass === "44551") {
        res.sendFile(__dir + "/public/submit.html");
    } else {
        res.sendFile(__dir + "/public/index.html");
    }
})

app.listen(port, () => {
    console.log("Server is up and running");
})