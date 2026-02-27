const { ShoppingCart, Product } = require("../../models");

const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cartItems = await ShoppingCart.findAll({
      where: { user_id: userId },
      include: [{ model: Product }],
    });

    const response = cartItems.map((item) => ({
      ...item.Product.get(),
      quantity: item.quantity,
    }));

    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving cart" });
  }
};

const addToCart = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    const product = await Product.findByPk(product_id);

    if (!product) return res.status(400).json({ message: "Product not found" });

    const existingItem = await ShoppingCart.findOne({
      where: { user_id, product_id },
    });

    const currentQuantity = existingItem ? existingItem.quantity : 0;

    const newQuantity = currentQuantity + quantity;

    if (newQuantity > product.stock) {
      return res.status(400).json({ message: "Insufficient stock available" });
    }

    if (existingItem) {
      await existingItem.update({ quantity: newQuantity });

      return res.status(200).json({ message: "Cart updated" });
    } else {
      await ShoppingCart.create({ user_id, product_id, quantity });

      res.status(201).json({ message: "Product added to cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const item = await ShoppingCart.findOne({
      where: { user_id: userId, product_id: productId },
    });

    if (!item)
      return res.status(404).json({ message: "Item not found in cart" });

    if (item.quantity > 1) {
      await item.update({ quantity: item.quantity - 1 });

      return res.status(200).json({ message: "Quantity decreased" });
    } else {
      await item.destroy();

      return res.status(200).json({ message: "Product removed from cart" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error removing from cart" });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    const [updated] = await ShoppingCart.update(
      { quantity },
      { where: { user_id, product_id } },
    );

    if (!updated) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    return res.status(200).json({ message: "Quantity updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating quantity" });
  }
};

module.exports = { getCart, addToCart, removeFromCart, updateQuantity };
