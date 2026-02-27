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

const orderRules = [
  body("user_id").isInt().withMessage("Invalid user ID"),

  body("delivery_method")
    .isIn(["pickup", "delivery"])
    .withMessage("Delivery method must be 'pickup or 'delivery'"),

  body("shipping_address")
    .if(body("delivery_method").equals("delivery"))
    .trim()
    .notEmpty()
    .withMessage("Shipping address is required for delivery")
    .isLength({ max: 255 })
    .withMessage("Address is too long (max 255)"),

  validateFields,
];

module.exports = { orderRules };
