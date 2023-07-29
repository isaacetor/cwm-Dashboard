import { MdDashboard, MdManageHistory, MdOutlinePayment } from "react-icons/md";
import Navprop from "../../../props/navprop";
import { BsReceipt } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";

const SwitchHeader = () => {
  return (
    <div className="w-full h-full  bg-primaryColor max-lg:hidden">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[95%] h-[95%] flex flex-col  items-center gap-6 ">
          {/* logo */}
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="p-1 border-white border rounded-full">
              <div className="py-[1px] px-[6px] bg-[#DBDEE2] text-white  text-xl  rounded-full">
                M
              </div>
            </div>
            <p className="text-[11px] text-center text-white">Area name</p>
          </div>
          <hr className="w-full" />
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
                route="payment"
                color="white"
                size="3xl"
              />
              <Navprop
                icon={<BsReceipt />}
                route="bills"
                color="white"
                size="3xl"
              />
              <Navprop
                icon={<MdManageHistory />}
                route="history"
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

export default SwitchHeader;
