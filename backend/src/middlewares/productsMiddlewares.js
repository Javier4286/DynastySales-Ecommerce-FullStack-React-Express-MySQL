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

const isAdmin = (req, res, next) => {
  if (req.session && req.session.user && req.session.user.is_admin) {
    next();
  } else {
    return res.status(403).json({
      message: "Access denied. Administrator privileges required.",
    });
  }
};

const productRules = [
  body("category_id")
    .isInt({ min: 1 })
    .withMessage("Please select a valid category"),

  body("album")
    .trim()
    .notEmpty()
    .withMessage("Album name cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Album name is too long (max 100)"),

  body("artist")
    .trim()
    .notEmpty()
    .withMessage("Artist name cannot be empty")
    .isLength({ max: 100 })
    .withMessage("Artist name is too long (max 100)"),

  body("release_year")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage(`Year must be between 1900 and ${new Date().getFullYear()}`),

  body("price")
    .isFloat({ min: 0.01 })
    .withMessage("Price must be greater than 0"),

  body("stock").isInt({ min: 0 }).withMessage("Stock cannot be negative"),

  body("description").trim().notEmpty().withMessage("Description is required"),

  body("image")
    .trim()
    .notEmpty()
    .withMessage("Image URL is required")
    .isURL({
      protocols: ["http", "https"],
      require_tld: false,
      require_protocol: true,
    })
    .withMessage("Image must be a valid URL")
    .isLength({ max: 255 })
    .withMessage("Image URL is too long (max 255 characters)"),

  validateFields,
];

const categoryRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Category name is required")
    .isLength({ max: 100 })
    .withMessage("Category name is too long (max 100)"),

  validateFields,
];

module.exports = { isAdmin, productRules, categoryRules };
