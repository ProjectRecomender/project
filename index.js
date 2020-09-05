const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
const morgan = require("morgan");

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build", { maxAge: 8640000 }));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}else {
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
      credentials: true,
    }),
  );
}

app.use("/recommend", require("./routes/recommend"));

app.get("/",(req, res)=>{
    res.send("he")
})

app.use(morgan("dev"));
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
