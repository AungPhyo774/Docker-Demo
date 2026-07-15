const express = require("express"); //express framework is imported to create the server
const mysql = require("mysql2"); //mysql driver is imported to connect to the MySQL database

const app = express(); //Express Application တစ်ခု Create လုပ်တယ်။

const connection = mysql.createConnection({
    host: "db", //Database Connection
    user: "root",
    password: "123456",
    database: "realContainerDB",
});

connection.connect((err) => {

    if (err) {

        console.log("Database Error");

    } else {

        console.log("Connected to MySQL");

    }

});

app.get("/", (req, res) => {

    res.send("RealContainer API Running Successfully");

});

app.listen(3000, () => {

    console.log("Server Running at Port 3000");

});