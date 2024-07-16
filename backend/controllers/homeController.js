const { adminis } = require("../firebase/firebase");

let getHomePage = async (req, res) => {
  try {
    return res.render("homepage.ejs");
  } catch (error) {
    console.log(error);
  }
};

let getBookPage = async (req, res) => {
  try {
    return res.render("bookpage.ejs");
  } catch (error) {
    console.log(error);
  }
};

let addBook = async (req, res) => {
  const db = adminis.firestore();
  const { title, author, description, img, oldPrice, newPrice, category } = req.body;

  try {
    const bookRef = db.collection("books").doc();
    const newBook = {
      id: bookRef.id,
      title: title,
      author: author,
      description: description,
      img: img,
      oldPrice: parseFloat(oldPrice),
      newPrice: parseFloat(newPrice),
      category: category,
    };
    await bookRef.set(newBook);
    console.log("Book added successfully:", newBook);
    res.status(200).send("Book added successfully");
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).send("Error adding book");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getBookPage: getBookPage,
  addBook: addBook,
};
