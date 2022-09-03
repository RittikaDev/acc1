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

// router.route("/").post(userControllers.saveAUser);

router.route("/all").get(viewCount, userControllers.getAllUser);
router.route("/random").get(viewCount, userControllers.getARandomUser);
router.route("/save").post(viewCount, userControllers.saveARandomUser);
router.route("/update/:id").patch(userControllers.updateARandomUser);
router.route("/bulk-update").patch(userControllers.bulkUpdate);
router.route("/delete/:id").delete(userControllers.deleteAUser);

module.exports = router;
