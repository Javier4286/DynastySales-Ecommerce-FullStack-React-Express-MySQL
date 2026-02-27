const { body, validationResult } = require("express-validator");
const { User } = require("../../models");

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

const registerRules = [
  body("first_name")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ max: 100 })
    .withMessage("First name cannot exceed 100 characters"),

  body("last_name")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ max: 100 })
    .withMessage("Last name cannot exceed 100 characters"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ max: 20 })
    .withMessage("Phone number too long (max 20"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ max: 255 })
    .withMessage("Address too long (max 255)"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ max: 150 })
    .withMessage("Email too long (max 150)")
    .custom(async (value) => {
      const user = await User.findOne({ where: { email: value } });
      if (user) {
        throw new Error("Email already in use");
      }
      return true;
    }),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  validateFields,
];

const loginRules = [
  body("email").trim().isEmail().withMessage("Please enter a valid email"),

  body("password").notEmpty().withMessage("Password is required"),

  validateFields,
];

const editRules = [
  body("first_name")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ max: 100 })
    .withMessage("First name cannot exceed 100 characters"),

  body("last_name")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ max: 100 })
    .withMessage("Last name cannot exceed 100 characters"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ max: 20 })
    .withMessage("Phone number too long (max 20"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ max: 255 })
    .withMessage("Address too long (max 255)"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ max: 150 })
    .withMessage("Email too long (max 150)"),

  body("password").notEmpty().withMessage("Password is required"),

  validateFields,
];

module.exports = { registerRules, loginRules, editRules };
