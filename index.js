require("dotenv").config();
console.log(process.env.MONGO_UR);

const express = require("express");
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = require("./config");
const { signUpRouter } = require("./routes/signup");
const { signInRouter } = require("./routes/signin");
const { createRouter } = require("./routes/create");

const app = express();
app.use(express.json());
app.use("/api", signUpRouter);
app.use("/api", signInRouter);
app.use("/api", createRouter);

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to mongodb url!");

    app.listen(PORT, () => {
      console.log(`Port is listening on ${PORT}`);
    });
  } catch (e) {
    console.log("Failed to connect to the db", e);
  }
}

main();
