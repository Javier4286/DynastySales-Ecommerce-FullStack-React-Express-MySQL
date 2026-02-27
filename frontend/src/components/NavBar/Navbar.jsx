import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import Nav from "./navbar.styles";
import SearchBar from "../searchBar/SearchBar";
import LocalTime from "../localTime/LocalTime";
import logoImg from "../../assets/dynastySales_logo.png";
import {
  EditOutlined,
  LoginOutlined,
  LogoutOutlined,
  PlusSquareOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const isHomePage = location.pathname === "/";

  return (
    <Nav>
      <div className="nav-top">
        <div className="nav-left">{!isAuthPage && <LocalTime />}</div>

        <div className="logo-wrapper">
          <Link to="/">
            <img src={logoImg} alt="DynastySales" />
          </Link>
        </div>

        <div className="nav-actions">
          {!isAuthPage && (
            <>
              {!user ? (
                <>
                  <Tooltip title="Register">
                    <Link to="/register">
                      <UserAddOutlined />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Login">
                    <Link to="/login">
                      <LoginOutlined />
                    </Link>
                  </Tooltip>
                </>
              ) : (
                <>
                  <span className="welcome-msg">Hello {user.first_name}!</span>
                  {!user.is_admin ? (
                    <Tooltip title="My Cart">
                      <Link to="/cart">
                        <ShoppingCartOutlined />
                      </Link>
                    </Tooltip>
                  ) : (
                    <>
                      <Tooltip title="Trash / Restore">
                        <Link to="/admin/trash">
                          <RestOutlined />
                        </Link>
                      </Tooltip>
                      <Tooltip title="Add Product">
                        <Link to="/addProduct">
                          <PlusSquareOutlined />
                        </Link>
                      </Tooltip>
                    </>
                  )}
                  <Tooltip title="Edit Profile">
                    <Link to="/editProfile">
                      <EditOutlined />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Logout">
                    <button onClick={handleLogout} className="logout-btn">
                      <LogoutOutlined />
                    </button>
                  </Tooltip>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {isHomePage && (
        <div className="nav-bottom">
          <SearchBar />
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
