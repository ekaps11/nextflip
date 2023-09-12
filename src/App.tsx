import { Suspense, lazy, useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./store/store";
import { authState, UserAuth } from "./utils/firebase/firebase.utils";
import { setUser } from "./store/slices/userSlice";

const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Spinner = lazy(() => import("./components/spinner/Spinner"));
const Home = lazy(() => import("./pages/home/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ user }) => user);

  useEffect(() => {
    const unsubscribe = authState((user: UserAuth) => {
      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={!user ? <Home /> : <Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
