import Heading from "../../components/blocks/dashboardblock/heading";
import RecomendedLinks from "../../components/blocks/dashboardblock/recomendedLinks";

const Dashboard = () => {
  return (
    <div className="h-screen w-[95%] m-auto ">
      <div className="max-md:hidden  ">
        <Heading />
      </div>
      {/* greeting with links */}
      <div className="mb-3">
        <RecomendedLinks />
      </div>
      Account Overview
      <div className="w-full h-[50vh] border border-gray-200 mt-5 rounded-md"></div>
    </div>
  );
};

export default Dashboard;
