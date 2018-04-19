const path = require("path");
const router = require("express").Router();
const articleControllers = require("../controllers/articleControllers.js");

// API Routes
//router.use("/api", apiRoutes);
router.route("/api/articles")
  .get(articleControllers.findAll)
  .post(articleControllers.create);

router.route("/api/articles/:id")
  .delete(articleControllers.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
