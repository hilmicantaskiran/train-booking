const express = require("express");

const router = express.Router();

const { getBooks, createBook, deleteBook } = require("../controllers/book");

router.get("/", getBooks);
router.post("/", createBook);
router.delete("/", deleteBook);

module.exports = router;
