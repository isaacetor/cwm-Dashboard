import { Link } from "react-router-dom";
// import useSWR from "swr";
// import { createClient } from "../../utils/api";

const Register = () => {
  // const { data, mutate } = useSWR(createClient);

  return (
    <div className="">
      <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center bg-gray-900 lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <h2 className="tracking-tighter font-bold text-3xl text-indigo-600">
              CWM by Devigs
            </h2>
            <div className=" mt-5 space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Start growing your business quickly
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features to manage your
                waste.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 my-auto bg-primaryColor"></div>
        </div>
        <div className="flex-1 flex items-center justify-center h-screen">
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
            <div className="">
              <h2 className="lg:hidden text-2xl font-bold">CWM by Devigs</h2>
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Sign up
                </h3>
                <p className="flex gap-2">
                  Already have an account?
                  <Link to="login">
                    <a className="font-medium text-indigo-500 hover:text-indigo-500">
                      Log in
                    </a>
                  </Link>
                </p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-500 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-500 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-500 shadow-sm rounded-lg"
                />
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-500 hover:bg-indigo-500 active:bg-indigo-500 rounded-lg duration-150">
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
