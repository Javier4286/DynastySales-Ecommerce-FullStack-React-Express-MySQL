import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import useThemeStore from "../../store/useThemeStore";
import { LayoutContainer, GlobalLayoutStyles } from "./layout.styles";

const Layout = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <LayoutContainer $isDarkMode={isDarkMode}>
      <GlobalLayoutStyles $isDarkMode={isDarkMode} />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
