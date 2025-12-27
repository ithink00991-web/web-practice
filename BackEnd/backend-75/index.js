
const express = require("express"); // express instant
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000; //server start

app.use(express.json()); // middle ware

const todoroutes = require("./routes/todoroutes");
const dbconnect = require("./config/database");

app.use("/api/v1",todoroutes);


const dbconnect1 = require("./config/database");
dbconnect1();

app.listen(PORT, ()=>{
    console.log("app is started ---------------")
});


app.get("/", (req,res) =>{
    res.send(`<h1>hello ji home page pe aagye </h1>`)
})