// import Home from "../app/components/home/Home";
import News from "../app/components/news/News";
import Cookies from "../app/components/cookies/Cookies";

const routes = [

  {
    path: "/news",
    component: News
  },
  {
    path: "/",
    exact: true,
    component: Cookies
  }
];

export default routes;
