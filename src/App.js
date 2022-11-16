import "react-day-picker/dist/style.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes/Router";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto" data-theme="doctor">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
