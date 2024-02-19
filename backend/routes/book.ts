import express from "express";
import { Book } from "../models/bookModel";

const router = express.Router();

//get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({
      count: books.length,
      data: books,
    });
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

//get book by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).send(book);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

//add new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author) {
      return res.status(400).send({ message: "Title and Author are required" });
    }
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
    });
    const savedBook = await Book.create(newBook);
    return res.status(201).send(savedBook);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

//update book by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author) {
      return res.status(400).send({ message: "Title and Author are required" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

//delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
