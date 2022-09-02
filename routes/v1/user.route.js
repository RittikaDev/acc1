const express = require("express");
const userControllers = require("../../controllers/user.controller");
const viewCount = require("../../middleware/viewCount");
const router = express.Router();

// router
//   .route("/")
//   .get((req, res) => {
//     res.send("User Found");
//   })
//   .post((req, res) => {
//     res.send("User Added");
//   });

router.route("/").post(userControllers.saveAUser);

router.route("/all").get(viewCount, userControllers.getAllUser);
router.route("/random").get(viewCount, userControllers.getARandomUser);

module.exports = router;
