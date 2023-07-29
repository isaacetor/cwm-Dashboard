import Header from "../../blocks/homeblock/headers/Header";
import Footer from "../../blocks/homeblock/Footer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
