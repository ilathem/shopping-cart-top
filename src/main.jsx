import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Root from './routes/root';
import PageNotFound from './routes/page-not-found';
import Home from './routes/home';
import Shop from './routes/shop';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root />}>
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Home />} />
//         <Route path='shop' element={<Shop />} />
//       </Route>
//     </Route>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='/*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
