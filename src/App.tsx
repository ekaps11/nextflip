import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./store/store";
import { getUser } from "./utils/firebase/firebase.utils";
import { setUser } from "./store/slices/userSlice";
import Spinner from "./components/spinner/Spinner";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { device } from "./utils/helper/helper";
import { firestore } from "./api/firestore";

const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Home = lazy(() => import("./pages/home/Home"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Preview = lazy(() => import("./pages/preview/Preview"));
const Search = lazy(() => import("./pages/search/Search"));
const BrowseByGenre = lazy(() => import("./pages/browse/Browse"));
const MyList = lazy(() => import("./pages/my-list/MyList"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const AppContainer = styled.div`
  overflow: hidden;
`;

const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ user }) => user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && location.pathname === "/login") navigate("/");

    // subscription
    const unsubscribe = getUser((user) => {
      dispatch(setUser(user));
      dispatch(firestore.util.resetApiState());
    });

    return unsubscribe;
  }, [dispatch, navigate, location, user]);

  return (
    <AppContainer>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={!user ? <Home /> : <Dashboard />} />
            <Route path="login" element={<Login />} />
            {user && (
              <>
                {!device && <Route path={"preview/*"} element={<Preview />} />}
                <Route path="search/*" element={<Search />} />
                <Route path="my-list" element={<MyList />} />
                <Route path="browse/*" element={<BrowseByGenre />} />
              </>
            )}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
};

export default App;
