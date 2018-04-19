import axios from "axios";

export default {

  searchArticles: function (query, beginYear, endYear) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${beginYear}&end_date=${endYear}&api-key=f1bb266b9dff4541b8d3d390a067ccbe`)
  },
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  // getArticles: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // Deletes the book with the given id
  deleteArticles: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
