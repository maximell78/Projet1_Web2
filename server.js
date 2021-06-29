// server.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/06/28

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Message = require("./servicesweb/messageService")
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/message", (req, res) => {
    console.log("post method" + req.body);
    const myMessage = new Message(
        req.body.name,
        req.body.email,
        req.body.message
    );
    myMessage.create(req.body)
    .then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});