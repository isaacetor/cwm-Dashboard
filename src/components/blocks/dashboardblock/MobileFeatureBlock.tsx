import { FC } from "react";
import { NavLink } from "react-router-dom";
type iData = {
  icon: React.ReactNode;
  title: string;
  description: string;
  route: string;
  onclick?: () => void;
};

const MobileFeatureBlock: FC<iData> = ({
  icon,
  title,
  description,
  route,
  onclick,
}) => {
  return (
    <div>
      <div className="max-w-[87%] p-6 bg-orange-50 border border-gray-200 rounded-lg flex flex-col gap-2  dark:bg-gray-800 dark:border-gray-700">
        <p className="py-2 px-2 w-9 rounded-full bg-[#A9AFBC] text-white text-xl mb-2">
          {icon}
        </p>
        {/* title */}
        <div className="flex">
          <h3 className=" capitalize text-xl font-semibold ">
            {title}
            <p className=" font-light text-base lowercase">{description}</p>
          </h3>
        </div>

        {/* link */}
        <NavLink to={route}>
          <p className="font-semibold text-[var(--primary-color)] hover:text-[var(--prima-color)] ease-in transition-all">
            proceed
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileFeatureBlock;
