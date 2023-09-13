import { FC, useState } from "react";
import location from "../assets/location-pin.svg";
import { useRecoilValue } from "recoil";
import { new_user } from "../global/RecoilState";
import { useCreateWard } from "../hooks/usePost";

type stateData = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateWard: FC<stateData> = ({ state, setState }) => {
  [state, setState] = useState(true);

  const [formdata, setFormdata] = useState({
    ward: "",
  });

  const { _id } = useRecoilValue(new_user);

  const { wardData, loading } = useCreateWard();

  const handleMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      // Call the register function with updated formdata
      await wardData(formdata, _id);
    } catch (error) {
      console.log(`an error occured registering user`, error);
    }
  };

  return state ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setState(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setState(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg capitalize font-medium text-gray-800">
              Create Ward Request
            </h4>
            <p className="text-[15px] text-gray-600">
              Here you can create all the wards that your PSP covers
            </p>
            <form onSubmit={handleMessage}>
              <div className="relative">
                <img
                  src={location}
                  alt="location"
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                />
                <input
                  placeholder="Enter ward name..."
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-indigo-600 shadow-sm rounded-lg"
                  onChange={(e: any) => {
                    setFormdata(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="block capitalize w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color)] active:bg-[var(--primary-color)] rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
              >
                {loading ? "creating ward..." : "create new ward"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CreateWard;
