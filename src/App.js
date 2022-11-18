import { useContext } from "react";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./contexts/AuthProvider";
import router from "./routes/Routes/Router";

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div data-theme={dark ? "dark" : "doctor"}>
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App;
