import { useState } from "react";

const Msg_Sidebar = () => {
  const tabItems = ["Announcement", "Ward", "Resident"];
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className=" md:px-8">
      <p className="pt-5 font-semibold capitalize"> send a Message</p>
      <ul
        role="tablist"
        className="max-w-screen-xl mx-auto border-b flex items-center overflow-x-auto text-sm"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem == idx
                ? "border-[var(--accent-color)] text-[var(--accent-color)]"
                : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem == idx ? true : false}
              aria-controls={`tabpanel-${idx + 1}`}
              className="py-2.5 px-4 rounded-lg duration-150 hover:text-[var(--accent-color)] hover:bg-gray-50 active:bg-gray-100 font-medium"
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Msg_Sidebar;
