const express = require("express");
const {
  registerRules,
  loginRules,
  editRules,
} = require("../middlewares/usersMiddlewares");

const router = express.Router();

const {
  checkAuth,
  getUser,
  register,
  login,
  logout,
  editProfile,
} = require("../controllers/usersControllers");

router.get("/check-auth", checkAuth);
router.get("/:id", getUser);

router.post("/register", registerRules, register);
router.post("/login", loginRules, login);
router.post("/logout", logout);

router.put("/edit/:id", editRules, editProfile);

module.exports = router;
