require("dotenv").config();
console.log(process.env.MONGO_UR);

const express = require("express");
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = require("./config");
const signUpRouter = require("./routes/signup");
const signInRouter = require("./routes/signin");
const createRouter = require("./routes/create");
const readRouter = require("./routes/read");
const updateRouter = require("./routes/update");
const deleteRouter = require("./routes/delete");

const app = express();
app.use(express.json());

app.use("/api", signUpRouter);
app.use("/api", signInRouter);
app.use("/api", createRouter);
app.use("/api", readRouter);
app.use("/api", updateRouter);
app.use("/api", deleteRouter);

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
