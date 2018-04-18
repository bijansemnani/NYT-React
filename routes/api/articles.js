const router = require("express").Router();
const articleControllers = require("../../controllers/articleControllers");

router.route("/articles")
  .get(articleControllers.findAll)
  .post(articleControllers.create);


module.exports = router;
