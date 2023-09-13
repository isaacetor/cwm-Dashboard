import Header from "../blocks/homeblock/headers/Header";
import { Outlet } from "react-router-dom";
import MobileHeader from "../blocks/homeblock/headers/mobileHeader";
import TabletHeader from "../blocks/homeblock/headers/tabletHeader";
import Notifications from "../blocks/homeblock/notifications";

const HomeLayout = () => {
  return (
    <div className="max-h-full flex max-md:block">
      {/* header */}
      <div
        className={`
         h-full sticky top-0`}
      >
        <Header />
        <TabletHeader />

        {/* mobile screen header */}
        <MobileHeader />
      </div>
      {/* dashbord components */}
      <div className="w-full pl-4 bg-white max-md:w-full max-md:pl-0">
        <Outlet />
      </div>

      {/* notification */}
      <div className="w-[25%] hidden transition-all ease-in duration-500 ">
        <Notifications />
      </div>
    </div>
  );
};

export default HomeLayout;
