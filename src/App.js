import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./page/Home";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <div className="max-w-[1320px]  mx-auto   ">
        <hr class="h-px my-8 bg-gray-800 border-0 dark:bg-gray-700"></hr>
        <div className=" text-center md:text-left  px-5">
          <div className="text-2xl font-semibold ">
            57<span className="text-green-500">D</span>entcare
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
