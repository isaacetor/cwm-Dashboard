import { NavLink } from "react-router-dom";
import logo from "../../assets/twma.png";

const Login = () => {
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
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
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
                className="my-5 py-2 px-3 bg-[var(--primary-color)] text-white"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-3 text-sm ">forgot password?</p>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full h-[10%] bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none ">
          <div className="w-full h-full bg-white p-4 flex justify-center gap-1 text-sm">
            Don't have an account?{" "}
            <NavLink
              to="/"
              className="text-[var(--accent-color)] font-semibold"
            >
              Create one
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
