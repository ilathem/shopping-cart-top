import PageNotFound from './page-not-found';
import Root from './root';
import Home from './home';
import Shop from './shop';

const routesConfig = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/*',
        element: <PageNotFound />,
      },
    ],
  },
];

export default routesConfig;
