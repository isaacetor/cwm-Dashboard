import { Outlet } from "react-router-dom";
import AuthHeader from "../../common/authHeader";
import Footer from "../../blocks/homeblock/Footer";

const AuthLayout = () => {
  return (
    <div>
      <div className="flex gap-10">
        <AuthHeader />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
