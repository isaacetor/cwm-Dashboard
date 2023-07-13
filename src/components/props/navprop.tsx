import { FC } from "react";
import { navpropsData } from "../../utils/types";
import { NavLink } from "react-router-dom";

const Navprop: FC<navpropsData> = ({ text, icon, route, color, size }) => {
  return (
    <div>
      <NavLink
        to={route}
        className="flex items-center justify-center gap-3 hover:scale-[1.12] transition-all ease-in duration-150"
      >
        {/* icon */}
        <p className={`text-${size} mb-[0.17rem] pl-1 text-${color}`}>{icon}</p>

        {/* nav */}
        <p className="max-lg:hidden text-sm">{text}</p>
      </NavLink>
    </div>
  );
};

export default Navprop;
