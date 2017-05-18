const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

app.use(bodyParser());
app.use(cors());
app.use(express.static(__dirname))


app.post("/api/test",function(req, res, next){
  console.log(req.body); //try .name, .age, .gender after body. then check terminal to see data recived on thebody. 
  res.status(200).send("Empire Strikes Back!")
})


const PORT = 3030;

app.listen(PORT, function() {
  console.log(`Listening on: ${PORT}`);
})
