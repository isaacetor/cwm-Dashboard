import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const liveURI = "http://localhost:3333/twma";

export const usePost = () => {
  const [loading, setLoading] = useState(false);

  const PostData = async (data: any, user_id: string, admin_id: string) => {
    setLoading(true);

    return await axios
      .post(`${liveURI}/admin-msg/message-user/${admin_id}/${user_id}`, data)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return res.data.data;
      })
      .catch((error: any) => {
        console.log(error.message);
        console.log(error);
        setLoading(false);
        toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return { loading, PostData };
};
export const useWard = () => {
  const [loading, setLoading] = useState(false);

  const PostData = async (data: any, user_id: string, admin_id: string) => {
    setLoading(true);

    return await axios
      .post(`${liveURI}/admin-msg/message-user/${admin_id}/${user_id}`, data)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return res.data.data;
        // console.log(`this is data, ${res.data.data}`);
      })
      .catch((error: any) => {
        console.log(error.message);
        console.log(error);
        setLoading(false);
        toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return { loading, PostData };
};
export const useCreateWard = () => {
  const [loading, setLoading] = useState(false);

  const wardData = async (data: any, admin_id: string) => {
    setLoading(true);

    return await axios
      .post(`${liveURI}/stations/new-station/${admin_id}`, data)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return res.data.data;
      })
      .catch((error: any) => {
        console.log(error.message);
        console.log(error);
        setLoading(false);
        toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return { loading, wardData };
};
