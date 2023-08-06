import { NavLink } from "react-router-dom";
import logo from "../../assets/twma.png";

const Register = () => {
  return (
    <div className="w-[50%] h-[90vh] flex justify-start items-center max-md:w-full max-md:justify-center">
      <div className="w-[48%] h-[80%] flex flex-col gap-2 max-lg:w-[310px] max-sm:w-full">
        {/* top */}
        <div className="w-full h-[90%]  bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none max-md:h-full">
          <div className="w-full flex flex-col justify-center h-full bg-white py-7 px-8">
            {/* logo */}
            <div className="w-full grid place-items-center mb-6">
              <img src={logo} alt="twma logo" width={150} height={150} />
            </div>
            {/* form */}
            <form className="flex flex-col gap-2">
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="text"
                  required
                  placeholder="your name"
                  className="peer  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Username
                </span>
              </label>

              {/* user mail */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="text"
                  placeholder="Your email"
                  required
                  className="peer  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Email
                </span>
              </label>

              {/* select ward */}
              <div>
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm bg-[#f5f5f5] font-medium text-gray-900  border-x border-t border-gray-200 px-3 pt-3 "
                >
                  Select Ward
                </label>

                <div className="relative bg-[#f5f5f5] border-x border-b border-gray-200 px-3">
                  <input
                    type="text"
                    list="HeadlineActArtist"
                    id="HeadlineAct"
                    required
                    className="w-full bg-[#f5f5f5] outline-0 py-2 rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                    placeholder="Please select"
                  />

                  <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </div>

                <datalist id="HeadlineActArtist">
                  <option value="SR">Sari Ward</option>
                  <option value="AW">Apapa Ward</option>
                </datalist>
              </div>

              {/* password */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="password"
                  required
                  placeholder="password"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  password
                </span>
              </label>

              <button
                type="submit"
                className="mt-5 py-2 px-3 bg-[var(--primary-color)] text-indigo-500"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full h-[10%] bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none ">
          <div className="w-full h-full bg-white p-4 flex justify-center gap-1 text-sm">
            Don't have an account?{" "}
            <NavLink
              to="/login"
              className="text-[var(--accent-color)] font-semibold"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
