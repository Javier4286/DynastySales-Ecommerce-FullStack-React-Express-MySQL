import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/checkout";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AddProduct from "./pages/AddProduct/AddProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Trash from "./pages/Trash/Trash";
import NotFound from "./pages/NotFound/NotFound";
import useUserStore from "./store/useUserStore";

const App = () => {
  const { user, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, []);

  const AdminRoute = ({ children }) => {
    if (!user || !user.is_admin) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailProduct/:id" element={<ProductDetail />} />
          <Route path="/editProfile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/addProduct"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/editProduct/:id"
            element={
              <AdminRoute>
                <UpdateProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/trash"
            element={
              <AdminRoute>
                <Trash />
              </AdminRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
