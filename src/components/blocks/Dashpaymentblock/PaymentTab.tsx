import { useState } from "react";
import HistoryBlock from "../dashboardblock/HistoryBlock";
import PaymentBlock from "../dashboardblock/PaymentBlock";

const PaymentTab = () => {
  const tabItems = ["Current Bill", "Arrears"];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="">
      <ul
        role="tablist"
        className="mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem === idx
                ? "border-orange-600 text-orange-600"
                : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem === idx}
              aria-controls={`tabpanel-${idx + 1}`}
              className={`py-2.5 rounded-lg duration-150 hover:text-orange-600 border-transparent font-medium ${
                idx === 0 ? "mr-3" : ""
              } `} // Added text-left class to align the button text to the left
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-8">
        <p className="text-gray-500 font-medium">
          {selectedItem === 0 ? (
            <>
              {/* account overview */}
              <div className="mt-4">
                <p className="text-xl text-left">Account Overview</p>
                <div className="w-full p-7  border border-gray-200 mt-5 rounded-md grid gap-8 grid-cols-3 max-lg:grid-cols-1">
                  <div className="max-lg:order-2 col-span-2">
                    {/* <HistoryBlock /> */}
                  </div>
                  <div className="max-lg:order-1 h-full">
                    {/* <PaymentBlock /> */}
                  </div>
                </div>
              </div>
            </>
          ) : (
            "Arrears"
          )}
        </p>
      </div>
    </div>
  );
};

export default PaymentTab;
