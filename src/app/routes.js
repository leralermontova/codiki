//import Header from "../app/components/header/Header";
import App from "./App";
import About from "../app/components/about/about";
import Carousel from "../app/components/carousel/Carousel";

const routes = [

  {
    path: "/lol",
    component: Carousel
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/",
    exact: true,
    component: App
  }
];

export default routes;
