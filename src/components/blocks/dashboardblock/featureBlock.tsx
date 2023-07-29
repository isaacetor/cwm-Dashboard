import { FC } from "react";
import { NavLink } from "react-router-dom";
import { navpropsData } from "../../../utils/types";

const FeatureBlock: FC<navpropsData> = ({ icon, text, titleText, route }) => {
  return (
    <div className="flex flex-col gap-3 justify-center max-md:py-4">
      <div className="border-l-[1px] border-[#e4e8f0] pl-4 max-md:border-b max-md:border-l-0">
        {/* icon */}
        <p className="py-2 px-2 w-8 rounded-full bg-[#A9AFBC] text-white mb-2">
          {icon}
        </p>

        {/* title */}
        <div className="flex">
          <h3 className="font-medium capitalize ">
            {titleText}
            <p className=" font-light lowercase">{text}</p>
          </h3>
        </div>

        {/* link */}
        <NavLink to={route}>
          <p className="font-semibold text-[#4F46E5] hover:text-[#584ff3] ease-in transition-all">
            proceed
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default FeatureBlock;
