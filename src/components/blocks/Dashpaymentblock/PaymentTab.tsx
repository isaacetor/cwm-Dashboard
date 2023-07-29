import { useState } from "react";

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
                ? "border-indigo-600 text-indigo-600"
                : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem === idx}
              aria-controls={`tabpanel-${idx + 1}`}
              className={`py-2.5 rounded-lg duration-150 hover:text-indigo-600 border-transparent   font-medium ${
                idx === 0 ? "mr-3" : ""
              } `} // Added text-left class to align the button text to the left
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center mt-2">
        <p className="text-gray-500 font-medium">
          {selectedItem === 0 ? "Current Bill" : "Arrears"} is active
        </p>
      </div>
    </div>
  );
};

export default PaymentTab;
