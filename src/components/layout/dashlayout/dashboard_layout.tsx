import Header from "../../blocks/homeblock/Header";

import { Outlet } from "react-router-dom";
import MobileHeader from "../../blocks/homeblock/mobileHeader";
import TabletHeader from "../../blocks/homeblock/tabletHeader";

const HomeLayout = () => {
  return (
    <div className=" max-h-full bg-[#F3F4F8] flex max-md:block">
      {/* header */}
      <div className="w-[18%] max-md:w-full h-screen max-md:h-fit max-lg:w-[8%]  flex items-center justify-center sticky top-0">
        <Header />

        {/* tablet header */}
        <TabletHeader />

        {/* mobile screen header */}
        <MobileHeader />
      </div>
      {/* dashbord components */}
      <div className="w-full pl-4 bg-white max-md:w-full max-md:pl-0">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
