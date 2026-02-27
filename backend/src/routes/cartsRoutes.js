const express = require("express");
const { cartRules } = require("../middlewares/cartsMiddlewares");

const router = express.Router();

const {
  getCart,
  addToCart,
  updateQuantity,
  removeFromCart,
} = require("../controllers/cartsControllers");

router.get("/:userId", getCart);

router.post("/add", cartRules, addToCart);

router.put("/update-quantity", cartRules, updateQuantity);

router.delete("/clear/:userId/:productId", removeFromCart);

module.exports = router;
