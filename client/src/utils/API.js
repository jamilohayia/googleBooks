import axios from "axios";

export default {
  // search function to retrive the books
  searchTitle: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // get the books with a given ID 
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // delete the books with a given ID 
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // this code saves the book to a database 
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
