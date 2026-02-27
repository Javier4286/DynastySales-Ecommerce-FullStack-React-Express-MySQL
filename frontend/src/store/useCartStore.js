import { create } from "zustand";
import api from "../utils/api";

const useCartStore = create((set, get) => ({
  cart: [],

  fetchCart: async (userId) => {
    try {
      const { data } = await api.get(`/carts/${userId}`);

      set({ cart: Array.isArray(data) ? data : [] });
    } catch (error) {
      set({ cart: [] });
    }
  },

  addToCart: async (userId, product) => {
    try {
      const response = await api.post("/carts/add", {
        user_id: userId,
        product_id: product.id,
        quantity: 1,
      });

      await get().fetchCart(userId);

      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message,
      };
    }
  },

  updateQuantity: async (userId, productId, newQuantity) => {
    try {
      const response = await api.put("/carts/update-quantity", {
        user_id: userId,
        product_id: productId,
        quantity: newQuantity,
      });

      await get().fetchCart(userId);

      return response;
    } catch (error) {
      console.error("Update error", error);
      throw error;
    }
  },

  removeFromCart: async (userId, productId) => {
    try {
      const response = await api.delete(`/carts/clear/${userId}/${productId}`);

      await get().fetchCart(userId);

      return response;
    } catch (error) {
      console.error("Delete error", error);
      throw error;
    }
  },

  createOrder: async (orderData) => {
    try {
      const { data } = await api.post("/orders", orderData);

      set({ cart: [] });

      return { success: true, orderId: data.orderId };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Purchase failed",
      };
    }
  },

  clearCartLocal: () => set({ cart: [] }),
}));

export default useCartStore;
