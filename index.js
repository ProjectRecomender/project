const express = require("express");
const app = express();

const path = require("path");
const morgan = require("morgan");

if (process.env.MODE === "PROD") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

 
app.use("/recommend", require("./routes/recommend"));

app.get("/",(req, res)=>{
    res.send("he")
})

app.use(morgan("dev"));
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
