const { Op } = require("sequelize");
const { Product, Category } = require("../../models");

const getProducts = async (req, res) => {
  try {
    const { byArtistOrAlbum, byCategory, byMinPrice, byMaxPrice, bySort } =
      req.query;

    let whereClause = {};

    if (byArtistOrAlbum) {
      whereClause[Op.or] = [
        { artist: { [Op.like]: `%${byArtistOrAlbum}%` } },
        { album: { [Op.like]: `%${byArtistOrAlbum}%` } },
      ];
    }

    if (byCategory) {
      whereClause.category_id = byCategory;
    }

    if (byMinPrice || byMaxPrice) {
      whereClause.price = {};

      if (byMinPrice) whereClause.price[Op.gte] = parseFloat(byMinPrice);

      if (byMaxPrice) whereClause.price[Op.lte] = parseFloat(byMaxPrice);
    }

    let orderClause = [];

    if (bySort === "asc") {
      orderClause = [["price", "ASC"]];
    } else if (bySort === "desc") {
      orderClause = [["price", "DESC"]];
    }

    const products = await Product.findAll({
      where: whereClause,
      order: orderClause,
      include: {
        model: Category,
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving products" });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: { model: Category },
    });

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving product" });
  }
};

const addProduct = async (req, res) => {
  try {
    await Product.create(req.body);

    return res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating product" });
  }
};

const editProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json({ message: "Product updated successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    const products = await Product.findAll({
      include: {
        model: Category,
      },
    });

    return res.status(200).json({
      message: "Product removed from catalog successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting product" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving categories" });
  }
};

const addCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    return res
      .status(201)
      .json({ message: "Category created", data: category });
  } catch (error) {
    return res.status(500).json({ message: "Error creating category" });
  }
};

const getTrashedProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        deletedAt: { [Op.ne]: null },
      },
      paranoid: false,
      include: {
        model: Category,
      },
    });

    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving trashed products" });
  }
};

const restoreProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, { paranoid: false });

    if (!product) {
      return res.status(404).json({ message: "Product not found in trash" });
    }

    await product.restore();

    return res.status(200).json({ message: "Product restored successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error restoring product" });
  }
};

module.exports = {
  getProducts,
  getCategories,
  addCategory,
  getProductDetail,
  addProduct,
  deleteProduct,
  editProduct,
  getTrashedProducts,
  restoreProduct,
};
