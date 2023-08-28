import { TbCurrencyNaira } from "react-icons/tb";
import HistoryBlock from "../../components/blocks/dashboardblock/HistoryBlock";
import MobileFeatureBlock from "../../components/blocks/dashboardblock/MobileFeatureBlock";
import PaymentBlock from "../../components/blocks/dashboardblock/PaymentBlock";
import Heading from "../../components/blocks/dashboardblock/heading";
import RecomendedLinks from "../../components/blocks/dashboardblock/recomendedLinks";

const Dashboard = () => {
  const FeaturesData = [
    {
      icon: <TbCurrencyNaira />,
      title: "Make a payment",
      description: "renew your monthly waste bill",
      route: "",
      onclick: () => {},
    },
    {
      icon: <TbCurrencyNaira />,
      title: "Make a payment",
      description: "renew your monthly waste bill",
      route: "",
      onclick: () => {},
    },
    {
      icon: <TbCurrencyNaira />,
      title: "Make a payment",
      description: "renew your monthly waste bill",
      route: "",
      onclick: () => {},
    },
  ];

  return (
    <div className="max-h-full  w-[95%] max-md:w-full m-auto ">
      <div className="max-md:border-b sticky top-0 ">
        <Heading title="Dashboard" />
      </div>
      {/* greeting with links */}
      <div className="mb-3  w-[90%] m-auto">
        <RecomendedLinks />
      </div>

      {/* mobile Feature Block */}
      <div className="md:hidden flex flex-col gap-3 w-[90%] m-auto">
        {FeaturesData.map(() => (
          <MobileFeatureBlock
            icon={<TbCurrencyNaira />}
            description="renew your monthly waste bill"
            title="Make a payment"
            route=""
          />
        ))}
      </div>

      {/* account overview */}
      <div className="mt-16  w-[90%] m-auto">
        <p className="text-xl">Account Overview</p>
        <div className="w-full p-7  border border-gray-200 mt-5 rounded-md grid gap-8 grid-cols-3 max-lg:grid-cols-1">
          <div className="max-lg:order-2 col-span-2">
            <HistoryBlock />
          </div>
          <div className="max-lg:order-1 h-full ">
            <PaymentBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
