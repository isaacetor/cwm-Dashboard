import FeatureBlock from "./featureBlock";
import { TbRecycle } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { BiSolidHelpCircle } from "react-icons/bi";
import { greetUser } from "../../../reusables/greetingFunction";
import { useState } from "react";
import CreateWard from "../../../modal/createWard";
import { useRecoilValue } from "recoil";
import { new_user } from "../../../global/RecoilState";

const RecomendedLinks = () => {
  const [state, setState] = useState(false);
  const activeUser = useRecoilValue(new_user);

  const toggle = () => {
    setState(!state);
  };

  return (
    <div className="py-7 bg-white ">
      <div className="grid h-full gap-3 grid-cols-5 max-lg:grid-cols-4 max-md:block max-md:grid-cols-2">
        <div className="col-span-2 flex justify-center flex-col h-full text-slate-700">
          <h1 className="text-3xl">{greetUser(activeUser.name)}</h1>
          <p className="text-gray-500 font-light">
            Welcome to your dashboard. See a quick summary of your transactions
            below.
          </p>
        </div>
        <FeatureBlock
          icon={<GrAnnounce />}
          text="send an annoucement to your wards"
          titleText="Send message"
          route=""
        />
        {/* custom request */}

        <div onClick={toggle}>
          <FeatureBlock
            icon={<BiSolidHelpCircle />}
            text="update the wards you cover"
            titleText="Create Ward"
            route=""
          />
        </div>

        <FeatureBlock
          icon={<TbRecycle />}
          text="sell recyclabe waste"
          titleText="Earn with us"
          route=""
        />
      </div>

      {state ? <CreateWard state={state} setState={setState} /> : null}
    </div>
  );
};

export default RecomendedLinks;
