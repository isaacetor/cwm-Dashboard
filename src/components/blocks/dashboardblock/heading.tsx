import { LiaUserCircle } from "react-icons/lia";
import { FC, useState } from "react";

type headerdata = {
  title: string;
};

const Heading: FC<headerdata> = ({ title }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-[10vh] bg-white flex items-center justify-between relative max-md:w-[90%] max-md:m-auto">
      <h1 className="text-lg text-slate-400 font-medium">{title}</h1>
      <p
        className="text-4xl text-[#9EA5AD] "
        onClick={() => {
          setShow(!show);
        }}
      >
        <LiaUserCircle />
      </p>

      {/* {show ? (
        <div className="absolute top-[10vh] right-0 w-[20%] h-[90vh]">
          <Notifications />
        </div>
      ) : null} */}
    </div>
  );
};

export default Heading;
