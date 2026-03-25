const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", protect, userController.getProfile);
router.get("/", protect, admin, userController.getAll);
router.get("/:id", protect, admin, userController.getOne);
router.put("/:id", protect, admin, userController.update);
router.delete("/:id", protect, admin, userController.remove);

module.exports = router;