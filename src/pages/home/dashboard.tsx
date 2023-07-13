import Heading from "../../components/blocks/dashboardblock/heading";
import RecomendedLinks from "../../components/blocks/dashboardblock/recomendedLinks";

const Dashboard = () => {
  return (
    <div className=" max-h-full  w-[95%] m-auto ">
      <div className="max-md:hidden sticky top-0 ">
        <Heading />
      </div>
      {/* greeting with links */}
      <div className="mb-3">
        <RecomendedLinks />
      </div>

      {/* account overview */}
      <div className="mt-16">
        <p className="text-xl">Account Overview</p>
        <div className="w-full h-[50vh] border border-gray-200 mt-5 rounded-md"></div>
      </div>
    </div>
  );
};

export default Dashboard;
