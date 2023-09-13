import { Outlet } from "react-router-dom";
import Footer from "../blocks/homeblock/Footer";

const AuthLayout = () => {
  return (
    <div className=" w-full h-screen">
      <div className="flex place-content-center  gap-14 ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
