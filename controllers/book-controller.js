const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: 'All books fetched successfully',
        data: allBooks,
      });
    }
    else {
      res.status(404).json({
        success: false,
        message: 'No books found in collection',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error! please try again',
    });

  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookID);
    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message: 'Book with the current id is not found! please try with a different id',
      });
    }
    res.status(200).json({
      success: true,
      data: bookDetailsById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error! please try again',
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFromData = req.body;
    const newlyCreatedBook = await Book.create(newBookFromData);
    if (newlyCreatedBook) {
      res.status(201).json(
        {
          success: true,
          message: 'Book added successfully',
          data: newlyCreatedBook,
        }
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error! please try again',
    });

  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFromData = req.body;
    const getCurrentBookID = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFromData, {
      new: true,
    });
    if (!updateBook) {
      return res.status(404).json({
        success: false,
        message: 'Book with the current id is not found! please try with a different id',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updateBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error! please try again',
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: 'Book with the current id is not found! please try with a different id',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: deletedBook
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error! please try again',
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};