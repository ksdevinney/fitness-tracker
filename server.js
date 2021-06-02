const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongoDB://localhost/fitness-tracker")

app.use(require("./routes/apiroutes.js"))
app.use(require("./routes/htmlroutes.js"))
app.listen(PORT, function(){
    console.log("App listening on PORT", PORT)
})