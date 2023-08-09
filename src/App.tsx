import { RouterProvider } from "react-router-dom";
import { element } from "./routes/MainRoutes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={element} />
      <ToastContainer />
    </div>
  );
};

export default App;
