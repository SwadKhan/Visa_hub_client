import { createBrowserRouter, Link } from "react-router-dom";
import HomeLayout from "../Components/LayoutComponent/HomeLayout";
import AuthLayout from "../Components/LayoutComponent/AuthLayout";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
// import Learn from "../Components/Pages/Learn";
// import CategoryLearn from "../Components/Pages/CategoryLearn";
import PrivateRoutes from "./PrivateRoutes";
// import Tutorial from "../Components/Pages/Tutorial";
// import AllTutorials from "../Components/Pages/AllTutorials";
import ForgetPassword from "../Components/Pages/ForgetPassword";
import MyProfile from "../Components/Pages/MyProfile";
import UpdateProfile from "../Components/Pages/UpdateProfile";
import About from "../Components/Pages/About";
import AddVisa from "../Components/Pages/AddVisa";
import AllVisa from "../Components/Pages/AllVisa";
import LatestVisa from "../Components/Pages/LatestVisa";
import MyAddedVisa from "../Components/Pages/MyAddedVisa";
import VisaDetails from "../Components/Pages/VisaDetails";
import UpdateVisa from "../Components/Pages/UpdateVisa";
import ViewMyApplication from "../Components/Pages/ViewMyApplication";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("https://visa-hub-master.vercel.app/latestVisa"),
  },
  {
    path: "allVisa",
    element: <AllVisa></AllVisa>,
    loader: () => fetch("https://visa-hub-master.vercel.app/allVisa"),
  },
  {
    path: "myAddedVisa",
    element: (
      <PrivateRoutes>
        <MyAddedVisa></MyAddedVisa>,
      </PrivateRoutes>
    ),
  },

  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "addVisa",
    element: (
      <PrivateRoutes>
        <AddVisa></AddVisa>
      </PrivateRoutes>
    ),
  },

  {
    path: "forget",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "myProfile",
    element: (
      <PrivateRoutes>
        <MyProfile></MyProfile>
      </PrivateRoutes>
    ),
  },
  {
    path: "appliedVisa",
    element: (
      <PrivateRoutes>
        <ViewMyApplication></ViewMyApplication>
      </PrivateRoutes>
    ),
  },
  {
    path: "visaDetails/:id",
    element: <VisaDetails></VisaDetails>,
  },
  {
    path: "updateVisa/:id",
    element: <UpdateVisa></UpdateVisa>,
    loader: ({ params }) =>
      fetch(`https://visa-hub-master.vercel.app/allVisa/${params.id}`),
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 font-bold text-2xl">Not Found Page</h1>
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
]);

export default Routes;
