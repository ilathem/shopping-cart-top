import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter } from 'react-router';
import Root from './root';
import ErrorPage from './error-page';
import Home from './home';
import Shop from './shop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Route>
  )
);

export { router };
