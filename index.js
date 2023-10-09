const express = require("express");
const mongoose = require("mongoose");
const dmsrouter = require('./routes/dmsrouter');

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://tej2544:rh65kq30@cluster0.z706d23.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).catch(error => {
    console.log(error)
  });

app.use("/",dmsrouter);
app.listen(3000, () => {
  console.log("Server is running...");
});