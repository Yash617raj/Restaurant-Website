const connection = require("./connection");
const path = require("path");
const express = require("express");
const route = require("./routes/user");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const cookieParser = require("cookie-parser");


const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.none());
app.use(express.static("public"));
app.use(cookieParser());

app.use("/",route);
app.listen(PORT, () => {console.log(`server started at ${PORT}`)});