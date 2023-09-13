import Navprop from "../../../props/navprop";
import {
  MdDashboard,
  MdOutlinePayment,
  MdManageHistory,
  MdOutlineAddHome,
} from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsArrowLeftRight, BsReceipt } from "react-icons/bs";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { log_out } from "../../../../global/RecoilState";
import { useNavigate } from "react-router-dom";
import { TiMessages } from "react-icons/ti";

const Header = () => {
  const [show, setShow] = useState(true);
  const [auth, setAuth] = useRecoilState(log_out);

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <div
      className={`${
        show
          ? "w-[200px] bg-gradient-to-b from-orange-200"
          : "w-[80px] bg-[var(--primary-color)]"
      }  flex items-center relative justify-center  transition-all ease-linear duration-[200ms]  max-md:hidden max-lg:hidden max-md:w-full h-screen max-md:h-full max-lg:w-[8%]`}
    >
      <div
        className={`${
          show ? "w-[90%]" : "w-[60%] "
        } h-[95%] flex items-start flex-col`}
      >
        {/* logo and name */}
        {/* desktop logo view */}
        <div className="flex items-center gap-3  pb-8 ">
          {/* circle over text */}
          <div
            className={`p-1 ${
              show
                ? "border-[var(--primary-color)]"
                : "border-white w-full flex justify-center"
            } border rounded-full`}
          >
            <div className="py-[1px] px-[6px] bg-[#DBDEE2] text-white  text-xl  rounded-full">
              M
            </div>
          </div>

          {/* name */}
          {show ? <p className="text-slate-500">Area name</p> : null}
        </div>
        {/* tablet logo view  */}

        {/* navigation */}
        <div className="flex flex-col justify-between h-full max-lg:hidden">
          {/* first nav */}
          <div className="">
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
              <Navprop
                text={show ? "Home" : ""}
                icon={<MdDashboard />}
                route=""
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
              <Navprop
                text={show ? "Wards" : ""}
                icon={<MdOutlineAddHome />}
                route="wards"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
              <Navprop
                text={show ? "Payment" : ""}
                icon={<MdOutlinePayment />}
                route="payment"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
            </div>
            <br />
            <p className="text-[#6b6a6a]">tools</p>
            <br />
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
              <Navprop
                text={show ? "Message" : ""}
                icon={<TiMessages />}
                route="message"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
              <Navprop
                text={show ? "Bills" : ""}
                icon={<BsReceipt />}
                route="bills"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
              <Navprop
                text={show ? "History" : ""}
                icon={<MdManageHistory />}
                route="history"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
            </div>
          </div>
          {/* support nav */}

          <div>
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
              <a href="mailto:isaacetor7@gmail.com">
                <Navprop
                  text={show ? "support" : ""}
                  icon={<BiHeart />}
                  route=""
                  color={show ? "[#ff6e00]" : "white"}
                  size={show ? "xl" : "3xl"}
                />
              </a>
              <p onClick={handleLogout}>
                <Navprop
                  text={show ? "log out" : ""}
                  icon={<RiLogoutCircleLine />}
                  route=""
                  color={show ? "[#ff6e00]" : "white"}
                  size={show ? "xl" : "3xl"}
                />
              </p>
            </div>
          </div>

          {/* toggle */}
          <div
            className="p-3 cursor-pointer text-lg shadow-md bg-[var(--primary-color)] rounded-full text-white absolute top-14 -right-5"
            onClick={() => setShow(!show)}
          >
            <BsArrowLeftRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
