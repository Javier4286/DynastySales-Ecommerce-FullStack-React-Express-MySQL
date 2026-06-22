// import { Link, useLocation, useNavigate } from "react-router-dom";
// import useUserStore from "../../store/useUserStore";
// import Nav from "./navBar.styles";
// import SearchBar from "../SearchBar/SearchBar";
// import LocalTime from "../LocalTime/LocalTime";
// import logoImg from "../../assets/dynastySales_logo.png";
// import {
//   EditOutlined,
//   LoginOutlined,
//   LogoutOutlined,
//   PlusSquareOutlined,
//   ShoppingCartOutlined,
//   UserAddOutlined,
//   RestOutlined,
//   SunOutlined,
//   MoonOutlined,
// } from "@ant-design/icons";
// import { Tooltip } from "antd";
// import useThemeStore from "../../store/useThemeStore";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { isDarkMode, toggleTheme } = useThemeStore();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/");
//   };

//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/register";

//   const isHomePage = location.pathname === "/";

//   return (
//     <Nav $isDarkMode={isDarkMode}>
//       <div className="nav-top">
//         <div className="nav-left">{!isAuthPage && <LocalTime />}</div>

//         <div className="logo-wrapper">
//           <Link to="/">
//             <img src={logoImg} alt="DynastySales" />
//           </Link>
//         </div>

//         <div className="nav-actions">
//           {!isAuthPage && (
//             <>
//               <Tooltip
//                 title={isDarkMode ? "Light Mode" : "Dark Mode"}
//                 mouseLeaveDelay={0}
//               >
//                 <button
//                   onClick={toggleTheme}
//                   className={`theme-btn ${isDarkMode ? "dark" : "light"}`}
//                 >
//                   {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
//                 </button>
//               </Tooltip>

//               {!user ? (
//                 <>
//                   <Tooltip title="Register" mouseLeaveDelay={0}>
//                     <Link to="/register" className="action-icon-wrapper">
//                       <UserAddOutlined />
//                     </Link>
//                   </Tooltip>
//                   <Tooltip title="Login" mouseLeaveDelay={0}>
//                     <Link to="/login" className="action-icon-wrapper">
//                       <LoginOutlined />
//                     </Link>
//                   </Tooltip>
//                 </>
//               ) : (
//                 <>
//                   <span className="welcome-msg">Hello {user.first_name}!</span>
//                   {!user.is_admin ? (
//                     <Tooltip title="My Cart" mouseLeaveDelay={0}>
//                       <Link to="/cart" className="action-icon-wrapper">
//                         <ShoppingCartOutlined />
//                       </Link>
//                     </Tooltip>
//                   ) : (
//                     <>
//                       <Tooltip title="Trash / Restore" mouseLeaveDelay={0}>
//                         <Link to="/admin/trash" className="action-icon-wrapper">
//                           <RestOutlined />
//                         </Link>
//                       </Tooltip>
//                       <Tooltip title="Add Product" mouseLeaveDelay={0}>
//                         <Link to="/addProduct" className="action-icon-wrapper">
//                           <PlusSquareOutlined />
//                         </Link>
//                       </Tooltip>
//                     </>
//                   )}
//                   <Tooltip title="Edit Profile" mouseLeaveDelay={0}>
//                     <Link to="/editProfile" className="action-icon-wrapper">
//                       <EditOutlined />
//                     </Link>
//                   </Tooltip>
//                   <Tooltip title="Logout" mouseLeaveDelay={0}>
//                     <button
//                       onClick={handleLogout}
//                       className="logout-btn action-icon-wrapper"
//                     >
//                       <LogoutOutlined />
//                     </button>
//                   </Tooltip>
//                 </>
//               )}
//             </>
//           )}
//         </div>
//       </div>

//       {isHomePage && (
//         <div className="nav-bottom">
//           <SearchBar />
//         </div>
//       )}
//     </Nav>
//   );
// };

// export default Navbar;
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import Nav from "./navBar.styles";
import SearchBar from "../SearchBar/SearchBar";
import LocalTime from "../LocalTime/LocalTime";
import logoImg from "../../assets/dynastySales_logo.png";
import {
  EditOutlined,
  LoginOutlined,
  LogoutOutlined,
  PlusSquareOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  RestOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import useThemeStore from "../../store/useThemeStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useThemeStore();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const isHomePage = location.pathname === "/";

  return (
    <Nav $isDarkMode={isDarkMode}>
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
              <div className="action-group">
                <button
                  onClick={toggleTheme}
                  className={`theme-btn ${isDarkMode ? "dark" : "light"}`}
                >
                  {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
                </button>
                <span className="action-label">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </div>

              {!user ? (
                <>
                  <div className="action-group">
                    <Link to="/register" className="action-icon-wrapper">
                      <UserAddOutlined />
                    </Link>
                    <span className="action-label">Register</span>
                  </div>

                  <div className="action-group">
                    <Link to="/login" className="action-icon-wrapper">
                      <LoginOutlined />
                    </Link>
                    <span className="action-label">Login</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="welcome-msg">Hello {user.first_name}!</span>

                  {!user.is_admin ? (
                    <div className="action-group">
                      <Link to="/cart" className="action-icon-wrapper">
                        <ShoppingCartOutlined />
                      </Link>
                      <span className="action-label">My Cart</span>
                    </div>
                  ) : (
                    <>
                      <div className="action-group">
                        <Link
                          to="/admin/trash"
                          className="action-icon-wrapper"
                        >
                          <RestOutlined />
                        </Link>
                        <span className="action-label">
                          Trash / Restore
                        </span>
                      </div>

                      <div className="action-group">
                        <Link
                          to="/addProduct"
                          className="action-icon-wrapper"
                        >
                          <PlusSquareOutlined />
                        </Link>
                        <span className="action-label">Add Product</span>
                      </div>
                    </>
                  )}

                  <div className="action-group">
                    <Link to="/editProfile" className="action-icon-wrapper">
                      <EditOutlined />
                    </Link>
                    <span className="action-label">Edit Profile</span>
                  </div>

                  <div className="action-group">
                    <button
                      onClick={handleLogout}
                      className="logout-btn action-icon-wrapper"
                    >
                      <LogoutOutlined />
                    </button>
                    <span className="action-label">Logout</span>
                  </div>
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