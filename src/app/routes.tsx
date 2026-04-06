import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Retreats from "./pages/Retreats";
import Speaking from "./pages/Speaking";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "tours", Component: Tours },
      { path: "retreats", Component: Retreats },
      { path: "speaking", Component: Speaking },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
