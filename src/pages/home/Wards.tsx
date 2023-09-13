import { useRecoilValue } from "recoil";
import Heading from "../../components/blocks/dashboardblock/heading";
import Ward_Details from "../../components/blocks/ward/Ward_Details";
import { new_user } from "../../global/RecoilState";
import { getOneAdmin } from "../../utils/api";
import useSWR from "swr";

const Wards = () => {
  const user = useRecoilValue(new_user);

  //   const { data } = useSWR("64fb1b39b343e01e60c7abc8", getOneAdmin);

  //   console.log(`this is data`, data);

  return (
    <div className=" max-h-full  w-[95%] m-auto">
      <div className="max-md:hidden sticky top-0 ">
        <Heading title="Wards" />
      </div>

      <Ward_Details />
    </div>
  );
};

export default Wards;
