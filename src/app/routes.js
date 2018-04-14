//import Header from "../app/components/header/Header";
import App from "./App";
import About from "../app/components/about/about";
import Carousel from "../app/components/carousel/Carousel";
import Local from "./components/localizacja/Localizacja";
import Oferta from "./components/oferta/Oferta";
import Main from "./components/main/Main";

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
    path: "/local",
    component: Local
  },
  {
    path: "/oferta",
    component: Oferta
  },
  {
    path: "/main",
    component: Main
  },
  {
    path: "/",
    exact: true,
    component: App
  }
];

export default routes;
