import { Outlet } from "react-router-dom";
import Msg_Sidebar from "../blocks/Message/Msg_Sidebar";

const MessageLayout = () => {
  return (
    <div className=" grid grid-cols-[0.3fr,1fr] max-md:grid-cols-1">
      <Msg_Sidebar />
      <Outlet />
    </div>
  );
};

export default MessageLayout;
