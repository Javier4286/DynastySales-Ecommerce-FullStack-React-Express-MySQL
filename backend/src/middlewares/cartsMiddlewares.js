const { body, validationResult } = require("express-validator");

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }

  next();
};

const cartRules = [
  body("user_id").isInt().withMessage("Invalid user ID"),

  body("product_id").isInt().withMessage("Invalid product ID"),

  body("quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1"),

  validateFields,
];

module.exports = { cartRules };
