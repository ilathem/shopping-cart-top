import PageNotFound from "./page-not-found";
import Root from "./root";
import Home from "./home";
import Shop, { loader } from "./shop";

const routesConfig = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: loader,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
];

export default routesConfig;
