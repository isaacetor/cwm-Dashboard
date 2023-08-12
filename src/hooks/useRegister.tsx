import axios from "axios";
import { userData } from "../utils/types";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const liveURI = "https://twma-be.onrender.com/twma/";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (data: userData) => {
    setLoading(true);

    return await axios
      .post(`${liveURI}/auth/register`, data)
      .then((res) => {
        console.log(res.data.data);
        setLoading(false);
        toast.success("account created successfully", {
          position: "top-right",
          autoClose: 5000,
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
        navigate("/dashboard");
      });
  };
  return { loading, register };
};
