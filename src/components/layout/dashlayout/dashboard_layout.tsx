import Header from "../../blocks/homeblock/headers/Header";
import { Outlet } from "react-router-dom";
import MobileHeader from "../../blocks/homeblock/headers/mobileHeader";
import TabletHeader from "../../blocks/homeblock/headers/tabletHeader";
import Notifications from "../../blocks/homeblock/notifications";
import { useState } from "react";
import SwitchHeader from "../../blocks/homeblock/headers/SwitchHeader";

const HomeLayout = () => {
  const [show, setSHow] = useState(true);

  return (
    <div className=" max-h-full bg-gradient-to-b from-indigo-200 flex max-md:block">
      {/* header */}
      <div
        className={`${
          show ? "w-[17%]" : "w-[5%]"
        } max-md:w-full h-screen max-md:h-full max-lg:w-[8%]  flex items-center justify-center sticky top-0`}
      >
        {show ? <Header /> : <SwitchHeader />}

        {/* tablet header */}
        <TabletHeader />

        {/* mobile screen header */}
        <MobileHeader />
      </div>
      {/* dashbord components */}
      <div className="w-full pl-4 bg-white max-md:w-full max-md:pl-0">
        <Outlet />
      </div>

      {/* notification */}
      <div className="w-[25%] hidden transition-all duration-100 ease-in-out ">
        <Notifications />
      </div>

      {/* switch */}
      <div
        className={`py-3 px-2 bg-black text-white rounded-full absolute ${
          show ? "left-[13rem]" : "left-[3rem]"
        } top-16 max-lg:hidden `}
        onClick={() => {
          setSHow(!show);
        }}
      >
        click
      </div>
    </div>
  );
};

export default HomeLayout;
