const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({
  title: {type: String, required: true, unique: true},
  date: {type: Date, default:Date.now},
  url: {type: String, unique: true}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
