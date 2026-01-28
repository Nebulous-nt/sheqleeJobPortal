import React from "react";
import "./App.css";
import "./styles/fonts/fonts.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/HomePage";
import AllJobsPage from "./pages/AllJobsPage";
import CategoriesPage from "./pages/CategoriesPage";
import ClientsPage from "./pages/ClientsPage";
import CampaniesPage from "./pages/CampaniesPage";
import LoginPage from "./pages/LoginPage";
import TagsPage from "./pages/TagsPage";
import CompanySignupPage from "./pages/CompanySignupPage";
import ProfessionalSignupPage from "./pages/ProfessionalSignupPage";
import Contact from "./pages/ContactPage";

//import PageNotFound from "./pages/PageNotFound";
// import FAQ from "./pages/FAQ";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/alljobs",
        element: <AllJobsPage />,
      },
      {
        path: "/clients",
        element: <ClientsPage />,
      },
      {
        path: "/companies",
        element: <CampaniesPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/tags",
        element: <TagsPage />,
      },
      {
        path: "/companysignup",
        element: <CompanySignupPage />,
      },
      {
        path: "/professionalsignup",
        element: <ProfessionalSignupPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// {
//   path: "/privacy-policy/:id",
//   element: <PrivacyPolicy />,
// },

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
