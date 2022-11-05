var methods =require("./methods")
const express = require("express");
const app = express();
const port = 3000;
const wiki = require("./wiki.js");
const my_routs = require("./my_routs");
const drills = require("./drills_routes");
const logger = require("morgan");

app.use(logger("dev"));   
app.use("/dir", my_routs);
app.use("/drills", drills);
app.use("/main", express.static("public"));






app.get("/", function (req, res) {
    res.send("Express Server on port 3000, did not define url");
});


app.get("/index", function(req, res){
    res.send(req.url);
});

app.post("/",function(req,res){
    res.send("put request received")
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

console.log(`The area of a square with a width of 4 is ${methods.area(4)}`);
console.log('notice this is printed before the listening on port notification, as LOP is in a callback')