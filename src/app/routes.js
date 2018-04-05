import Cookies from "../app/components/cookies/Cookies";
import About from "../app/components/about/about";
const routes = [

  {
    path: "/",
    exact: true,
    component: Cookies
  },

    {
        path: "/about",
        exact: true,
        component: About
    }

];

export default routes;
