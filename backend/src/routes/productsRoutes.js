const express = require("express");
const {
  categoryRules,
  productRules,
  isAdmin,
} = require("../middlewares/productsMiddlewares");

const router = express.Router();

const {
  getProducts,
  getCategories,
  getProductDetail,
  addCategory,
  addProduct,
  editProduct,
  deleteProduct,
  restoreProduct,
  getTrashedProducts,
} = require("../controllers/productsControllers");

router.get("/", getProducts);
router.get("/categories", getCategories);
router.get("/detailProduct/:id", getProductDetail);
router.get("/trashed", isAdmin, getTrashedProducts);

router.post("/restore/:id", isAdmin, restoreProduct);
router.post("/categories/addCategory", isAdmin, categoryRules, addCategory);
router.post("/addProduct", productRules, isAdmin, addProduct);

router.put("/editProduct/:id", isAdmin, productRules, editProduct);

router.delete("/:id", isAdmin, deleteProduct);

module.exports = router;
