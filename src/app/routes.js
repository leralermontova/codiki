// import Home from "../app/components/home/Home";
// import News from "../app/components/news/News";
import Header from "../app/components/header/Header";
import App from "./App";
import Carousel from "../app/components/carousel/Carousel";

const routes = [

  {
    path: "/lol",
    component: Carousel
  },
  {
    path: "/",
    exact: true,
    component: App
  }
];

export default routes;
