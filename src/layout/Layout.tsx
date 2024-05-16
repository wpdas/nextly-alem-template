import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeContext from "../contexts/ThemeProvider";

const Layout = ({ children }: { children: React.ReactElement | React.ReactElement[] | any }) => {
  const themeData = ThemeContext(); // 171717

  return (
    <div className={themeData.theme}>
      <Navbar />
      {children}
      <Footer />
      {/* background */}
      <div className={themeData.themeStyles[themeData.theme]} />
    </div>
  );
};

export default Layout;
