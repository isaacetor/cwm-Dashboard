import { MdDashboard, MdManageHistory, MdOutlinePayment } from "react-icons/md";
import Navprop from "../../props/navprop";
import { BsReceipt } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";

const TabletHeader = () => {
  return (
    <div className="w-full h-full hidden bg-primaryColor max-lg:block max-md:hidden">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[95%] h-[95%] flex flex-col  items-center gap-6 ">
          {/* logo */}
          <h1 className="text-3xl text-white">DE</h1>
          <hr className=" w-full" />

          {/* navigation */}
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <Navprop
                icon={<MdDashboard />}
                route=""
                color="white"
                size="3xl"
              />

              <Navprop
                icon={<MdOutlinePayment />}
                route=""
                color="white"
                size="3xl"
              />
              <Navprop icon={<BsReceipt />} route="" color="white" size="3xl" />
              <Navprop
                icon={<MdManageHistory />}
                route=""
                color="white"
                size="3xl"
              />
            </div>

            {/* support */}
            <div className="flex flex-col gap-8">
              <Navprop icon={<BiHeart />} route="" color="white" size="3xl" />
              <Navprop
                icon={<RiLogoutCircleLine />}
                route=""
                color="white"
                size="3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletHeader;
