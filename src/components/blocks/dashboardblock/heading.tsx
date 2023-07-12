import { PiUserCircleDuotone } from "react-icons/pi";

const Heading = () => {
  return (
    <div className="w-full h-[10vh] bg-white flex items-center justify-between">
      <h1 className="text-xl">Dashboard</h1>
      <p className="text-4xl">
        <PiUserCircleDuotone />
      </p>
    </div>
  );
};

export default Heading;
