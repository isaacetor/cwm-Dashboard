import Navprop from "../../../props/navprop";
import { MdDashboard, MdOutlinePayment, MdManageHistory } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsReceipt } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-[85%] h-[95%] flex items-start flex-col max-md:hidden max-lg:hidden">
      {/* logo and name */}
      {/* desktop logo view */}
      <div className="flex items-center gap-3  pb-8 ">
        {/* circle over text */}
        <div className="p-1 border-[#4F46E5] border rounded-full">
          <div className="py-[1px] px-[6px] bg-[#DBDEE2] text-white  text-xl  rounded-full">
            M
          </div>
        </div>

        {/* name */}
        <p className="text-slate-500">Area name</p>
      </div>
      {/* tablet logo view  */}

      {/* navigation */}
      <div className="flex flex-col justify-between h-full max-lg:hidden">
        {/* first nav */}
        <div className="">
          <div className="flex flex-col gap-5 items-start">
            <Navprop
              text="Home"
              icon={<MdDashboard />}
              route=""
              color="[#4F46E5]"
              size="xl"
            />
            <Navprop
              text="Payment"
              icon={<MdOutlinePayment />}
              route="payment"
              color="[#4F46E5]"
              size="xl"
            />
          </div>
          <br />
          <p className="text-[#6b6a6a]">tools</p>
          <br />
          <div className="flex flex-col gap-5 items-start">
            <Navprop
              text="Bills"
              icon={<BsReceipt />}
              route=""
              color="[#4F46E5]"
              size="xl"
            />
            <Navprop
              text="History"
              icon={<MdManageHistory />}
              route=""
              color="[#4F46E5]"
              size="xl"
            />
          </div>
        </div>
        {/* support nav */}

        <div>
          <div className="flex flex-col gap-5 items-start">
            <Navprop
              text="support"
              icon={<BiHeart />}
              route=""
              color="[#4F46E5]"
              size="xl"
            />
            <Navprop
              text="log out"
              icon={<RiLogoutCircleLine />}
              route=""
              color="[#4F46E5]"
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
