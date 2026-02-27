const express = require("express");
const { orderRules } = require("../middlewares/ordersMiddlewares");
const { createOrder } = require("../controllers/ordersControllers");

const router = express.Router();

router.post("/", orderRules, createOrder);

module.exports = router;
