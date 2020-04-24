import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&projection=lite&key=AIzaSyCEKMLZZUR7u8pmixYL_xyHXyVLk9AHhP0";



export default {
  getSaved: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBooks: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
};
