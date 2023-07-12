import Header from "../../blocks/homeblock/Header";

import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="min-h-screen max-h-full flex max-md:block">
      {/* header */}
      <div className="w-[20%] h-screen max-lg:w-[10%] max-md:h-[10vh] flex items-center justify-center max-md:bg-[#ff7417] max-md:w-full sticky top-0">
        <Header />
      </div>
      {/* dashbord components */}
      <div className="w-full bg-red-500 max-md:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;