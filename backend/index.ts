import express from "express";
import { PORT, mongoURL } from "./config";
import mongoose from "mongoose";
import bookRouter from "./routes/book";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/books", bookRouter);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
