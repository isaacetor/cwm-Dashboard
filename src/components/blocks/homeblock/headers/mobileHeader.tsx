import { useState } from "react";

const MobileHeader = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "" },
    { title: "Payment", path: "/dashboard/payment" },
    { title: "Bills", path: "#faq" },
    { title: "History", path: "#subscribe" },
  ];

  return (
    <div className="w-full  bg-primaryColor  border-b sticky top-0 hidden max-md:block">
      <div className="w-full py-5  items-center justify-center">
        <div className="w-[95%] m-auto h-full flex justify-between items-center ">
          <a href="#">
            {/* <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            /> */}
            <h1 className="text-2xl text-white font-bold tracking-tighter ">
              cwm
            </h1>
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`pb-3 mt-8 w-[95%] m-auto  ${state ? "block" : "hidden"}`}
        >
          <ul className="justify-end items-center space-y-6">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-white">
                  <a href={item.path} className="block hover:text-white">
                    {item.title}
                  </a>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <a
                  href="javascript:void(0)"
                  className="block py-3 text-center text-white hover:text-white border rounded-lg md:border-none"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-500  hover:text-white active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                >
                  Log out
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
