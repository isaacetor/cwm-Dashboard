import logo from "../../assets/twma.png";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { new_user } from "../../global/RecoilState";
import { useOnboarding } from "../../hooks/useRegister";

const Onboarding = () => {
  const [wards, setWards] = useState<string[]>([]);
  const [formdata, setFormdata] = useState({
    phoneNum: "",
    pspName: "",
    officeAddress: "",
    station: "",
  });
  const { _id } = useRecoilValue(new_user);

  const { Onboarding, loading } = useOnboarding();

  const addWard = () => {
    setWards([...wards, ""]);
  };

  const handleOnboarding = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      // Call the register function with updated formdata
      await Onboarding(formdata, _id);
    } catch (error) {
      console.log(`an error occured registering user`, error);
    }
  };

  return (
    <div className=" w-full min-h-screen max-h-full bg-white  flex gap-5 flex-col justify-center items-center text-white">
      <div className="mt-5">
        <img src={logo} alt="twma logo" width={150} height={102} />
      </div>
      <div className="w-[44%] mb-4  bg-gradient-to-r  shadow-md from-green-200 to-orange-500  p-[.6px] max-md:bg-none max-md:w-full max-lg:w-[50%] max-md:shadow-none">
        <div className="w-full   bg-white   text-black flex">
          {/* company container */}
          <div className="w-[65%] p-5 max-md:w-[95%] max-md:m-auto flex flex-col max-md:justify-center max-lg:w-full ">
            <p>Hello, username</p>
            <p className="font-semibold pb-2">
              Please, update your company information
            </p>
            {/* form */}
            <form
              // onClick={(e) => {

              //   e.preventDefault();
              // }}
              onSubmit={handleOnboarding}
            >
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-700">
                  PSP NAME
                </label>

                <input
                  type="text"
                  placeholder="PSP NAME"
                  className="mt-1 max-md:bg-[#f5f5f5] py-3 outline-none px-3 w-full border sm:text-sm max-md:w-full"
                  value={formdata.pspName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, pspName: e.target.value });
                  }}
                />
              </div>
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-700">
                  OFFICE ADDRESS
                </label>

                <input
                  type="text"
                  placeholder="ADDRESS"
                  className="mt-1 max-md:bg-[#f5f5f5] py-3 outline-none px-3 w-full border sm:text-sm"
                  value={formdata.officeAddress}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, officeAddress: e.target.value });
                  }}
                />
              </div>
              <div className="py-2">
                <label className="block text-sm font-medium text-gray-700">
                  CONTACT PHONE NUMBER
                </label>

                <input
                  type="number"
                  placeholder="PHONE NUMBER"
                  className="mt-1 max-md:bg-[#f5f5f5] py-3 outline-none px-3 w-full border sm:text-sm"
                  value={formdata.phoneNum}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, phoneNum: e.target.value });
                  }}
                />
              </div>
              {wards.map((index: any) => (
                <div
                  className="py-2 transition-opacity duration-300 ease-in-out"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  key={index}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    WARD
                  </label>
                  <input
                    type="text"
                    placeholder="WARD"
                    className="mt-1 transition-opacity duration-300 ease-in-out max-md:bg-[#f5f5f5] py-3 outline-none px-3 w-full border sm:text-sm"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFormdata({ ...formdata, station: e.target.value });
                    }}
                  />
                </div>
              ))}

              <div>
                <button
                  type="button"
                  onClick={addWard}
                  className="bg-[#84BA3F] hover:bg-[#68ac10] text-white font-bold py-2 px-4 rounded mt-4 transition-all duration-300 ease-in-out"
                >
                  {wards.length <= 0 ? "Add Ward +" : "Add More Wards +"}
                </button>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 rounded py-2 px-4 mt-5 text-white"
              >
                {loading ? "a moment please" : " Submit"}
              </button>
            </form>
          </div>

          {/* image container */}
          <div className="w-[35%] p-5 bg-orange-500 flex items-center justify-center max-lg:hidden">
            <p>some text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
