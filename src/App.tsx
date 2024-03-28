import { Suspense, lazy, useEffect } from "react";
import { User } from "firebase/auth";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./store/store";
import { getUser } from "./utils/firebase/firebase.utils";
import { setUser } from "./store/slices/userSlice";
import Spinner from "./components/spinner/Spinner";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { device } from "./utils/helper/helper";

const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Home = lazy(() => import("./pages/home/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Preview = lazy(() => import("./pages/preview/Preview"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const AppContainer = styled.div`
  overflow: hidden;
`;

const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ user }) => user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && location.pathname === "/login") navigate("/");

    const unsubscribe = getUser((user: User) => {
      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [dispatch, location, navigate, user]);

  return (
    <AppContainer>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" Component={Navigation}>
            <Route index Component={!user ? Home : Dashboard} />
            <Route path="/login" Component={Login} />
            <Route path="/*" Component={NotFound} />
          </Route>
          {!device && user && <Route path={"/preview/*"} Component={Preview} />}
        </Routes>
      </Suspense>
    </AppContainer>
  );
};

export default App;
