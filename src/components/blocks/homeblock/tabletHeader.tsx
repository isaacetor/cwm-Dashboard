import { MdDashboard } from "react-icons/md";
import Navprop from "../../props/navprop";

const TabletHeader = () => {
  return (
    <div className="w-full h-full hidden bg-primaryColor max-lg:block max-md:hidden">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[95%] h-[95%] flex flex-col  items-center gap-3">
          {/* logo */}
          <h1 className="text-3xl text-white">DE</h1>

          {/* navigation */}
          <div>
            <Navprop icon={<MdDashboard />} route="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletHeader;
