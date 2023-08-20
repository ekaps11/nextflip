import { Suspense, lazy } from "react";
import GlobalStyles from "./GlobalStyles";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <Suspense>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
