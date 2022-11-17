import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes/Router";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto" data-theme="doctor">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
