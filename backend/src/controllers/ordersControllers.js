const { ShoppingCart, Product, Order, OrderDetail } = require("../../models");

const createOrder = async (req, res) => {
  try {
    const { user_id, delivery_method, shipping_address } = req.body;

    const finalAddress =
      delivery_method === "pickup" ? "Store Pickup" : shipping_address;

    const cart = await ShoppingCart.findAll({
      where: { user_id: user_id },
      include: [{ model: Product }],
    });

    if (cart.length === 0) {
      return res.status(400).json({ message: "You cart is empty" });
    }

    for (const item of cart) {
      if (item.Product.stock < item.quantity) {
        return res.status(400).json({
          message: `Insufficient stock for ${item.Product.album}. Only ${item.Product.stock} left`,
        });
      }
    }

    const totalAmount = cart.reduce((acc, item) => {
      return acc + item.quantity * item.Product.price;
    }, 0);

    const newOrder = await Order.create({
      user_id,
      order_date: new Date(),
      delivery_method,
      shipping_address: finalAddress,
      total: totalAmount,
    });

    for (const item of cart) {
      await OrderDetail.create({
        order_id: newOrder.id,
        product_id: item.product_id,
        price: item.Product.price,
        quantity: item.quantity,
      });

      await Product.decrement("stock", {
        by: item.quantity,
        where: { id: item.product_id },
      });
    }

    await ShoppingCart.destroy({ where: { user_id: user_id } });

    return res
      .status(201)
      .json({ message: "Order placed successfully!", orderId: newOrder.id });
  } catch (error) {
    return res.status(500).json({ message: "Could not process purchase" });
  }
};

module.exports = { createOrder };
