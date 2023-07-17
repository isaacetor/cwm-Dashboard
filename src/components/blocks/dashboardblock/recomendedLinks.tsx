import FeatureBlock from "./featureBlock";
import { TbRecycle, TbCurrencyNaira } from "react-icons/tb";
import { BiSolidHelpCircle } from "react-icons/bi";
import { greetUser } from "../../reusables/greetingFunction";

const RecomendedLinks = () => {
  return (
    <div className="py-7 bg-white ">
      <div className="grid h-full gap-3 grid-cols-5 max-lg:grid-cols-4 max-md:block">
        <div className="col-span-2 flex justify-center flex-col h-full text-slate-700">
          <h1 className="text-3xl">{greetUser("Isaac")}</h1>
          <p className="text-gray-500 font-light">
            Welcome to your dashboard. See a quick summary of your transactions
            below.
          </p>
        </div>
        <FeatureBlock
          icon={<TbCurrencyNaira />}
          text="renew your monthly waste bill"
          titleText="Make a payment"
          route=""
        />
        <FeatureBlock
          icon={<BiSolidHelpCircle />}
          text="request for waste evacuation"
          titleText="make custom request"
          route=""
        />
        <FeatureBlock
          icon={<TbRecycle />}
          text="sell recyclabe waste"
          titleText="Earn with us"
          route=""
        />
      </div>
    </div>
  );
};

export default RecomendedLinks;
