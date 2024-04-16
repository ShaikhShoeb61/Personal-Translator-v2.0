import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
