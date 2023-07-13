import { LiaUserCircle } from "react-icons/lia";

const Heading = () => {
  return (
    <div className="w-full h-[10vh] bg-white flex items-center justify-between">
      <h1 className="text-lg text-slate-400 font-medium">Dashboard</h1>
      <p className="text-4xl text-[#9EA5AD] ">
        <LiaUserCircle />
      </p>
    </div>
  );
};

export default Heading;
