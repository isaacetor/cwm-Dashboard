import { NavLink } from "react-router-dom";
import logo from "../../assets/twma.png";
import { useRegister } from "../../hooks/useRegister";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { tempUserData } from "../../global/RecoilState";

const Ward = () => {
  const [formdata, setFormdata] = useRecoilState(tempUserData);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const { register, loading } = useRegister();

  const handleRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Update formdata with new values
    const updatedFormData = {
      ...formdata,
      ward: formdata.ward,
      password: formdata.password,
    };
    try {
      // Call the register function with updated formdata
      await register(updatedFormData);

      // Clear tempUserData from local storage on successful registration
      localStorage.removeItem("tempUserData");
    } catch (error) {
      // Handle registration error
      console.log(`an error occured registering user`, error);
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmedPwd = e.target.value;
    setConfirmedPassword(confirmedPwd);
    setPasswordsMatch(formdata.password === confirmedPwd);
  };

  console.log(`this is userData`, formdata);

  const isFormFilled =
    passwordsMatch !== false &&
    formdata.password &&
    formdata.ward &&
    confirmedPassword !== "";

  return (
    <div className="w-[50%] h-[90vh]  flex justify-start items-center max-md:w-full max-md:justify-center">
      <div className="w-[48%] h-[80%] flex flex-col gap-2 max-lg:w-[310px] max-sm:w-full">
        {/* top */}
        <div className="w-full h-[90%]  bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none max-md:h-full">
          <div className="w-full flex flex-col justify-center h-full bg-white py-7 px-8 max-md:py-3">
            {/* logo */}
            <div className="w-full grid place-items-center mb-6">
              <img src={logo} alt="twma logo" width={150} height={150} />
            </div>
            {/* form */}
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* select ward */}
              <div>
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm bg-[#f5f5f5] font-medium text-gray-900 border-x border-t border-gray-200 px-3 pt-3"
                >
                  Select Ward
                </label>

                <div className="relative bg-[#f5f5f5] border-x border-b border-gray-200 px-3">
                  <select
                    id="HeadlineAct"
                    required
                    className="w-full bg-[#f5f5f5] outline-0 py-2 rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm"
                    onChange={(e: any) => {
                      setFormdata({ ...formdata, ward: e.target.value });
                    }}
                    value={formdata.ward}
                  >
                    <option value="" disabled hidden>
                      Please Select Ward
                    </option>
                    <option value="Sari Ward">Sari ward</option>
                    <option value="Apapa Ward">Apapa ward</option>
                  </select>
                </div>
              </div>

              {/* password */}
              <label className="relative bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="password"
                  placeholder="enter password"
                  required
                  className="peer lowercase  h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={formdata.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormdata({ ...formdata, password: e.target.value });
                  }}
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  enter password
                </span>
              </label>

              {/* confirm password */}
              <label className="relative lowercase bg-[#f5f5f5] block overflow-hidden border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-[var(--primary-color)] focus-within:ring-1 focus-within:ring-[var(--primary-color)]">
                <input
                  type="password"
                  placeholder="confirm password"
                  required
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={confirmedPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  confirm password
                </span>
              </label>

              {/* Add a check for password match */}
              {!passwordsMatch && (
                <p className="text-red-500 text-xs mt-1">
                  Passwords do not match
                </p>
              )}

              {/* register button */}
              <div className="flex flex-col mt-5 gap-2">
                {isFormFilled ? (
                  <button
                    className="py-2 px-3 bg-[var(--primary-color)] text-white"
                    type="submit"
                    onClick={handleRegister}
                    disabled={loading}
                  >
                    {loading ? "One moment, please..." : "Register"}
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-5 text-center py-2 px-3 bg-gray-300 text-gray-600 cursor-not-allowed"
                  >
                    Register
                  </button>
                )}

                <NavLink
                  to="/"
                  className="text-center py-2 px-3 bg-[var(--accent-color)] text-white hover:text-white"
                >
                  <button>Back</button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full h-[10%] bg-gradient-to-r from-indigo-500 to-orange-500  p-[1.2px] max-md:bg-none ">
          <div className="w-full h-full bg-white p-4 flex justify-center gap-1 text-sm">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-[var(--accent-color)] font-semibold"
            >
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ward;
