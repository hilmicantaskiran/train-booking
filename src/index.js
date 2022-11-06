const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const db = require("./utils/db");
const trainRouter = require("./routes/train");
const wagonRouter = require("./routes/wagon");
const bookRouter = require("./routes/book");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Train Booking API");
});

app.use("/api/v1/train", trainRouter);
app.use("/api/v1/wagon", wagonRouter);
app.use("/api/v1/book", bookRouter);

db.connect()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
