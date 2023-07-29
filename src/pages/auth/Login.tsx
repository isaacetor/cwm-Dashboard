import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center bg-hero justify-center bg-gray-50 sm:px-4 max-md:bg-gray-100">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md max-md:h-full max-md:bg-white max-md:flex max-md:flex-col max-md:justify-center">
        <div className="text-center max-md:flex max-md:flex-col max-md:items-start max-md:pl-5">
          <h2 className="text-3xl font-bold text-orange-500 tracking-tighter ">
            CWM by Devigs
          </h2>
          <div className="mt-2 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p>
              Don't have an account?{" "}
              <Link to="/">
                <a className="m-0 p-0 font-medium text-orange-600 hover:text-orange-500">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 py-6 space-y-8 sm:p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600  "
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600  "
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600  duration-150">
              Sign in
            </button>
          </form>
        </div>
        <div className="text-center w-full py-3 bg-white shadow-lg">
          <a href="javascript:void(0)" className="hover:text-orange-600">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
