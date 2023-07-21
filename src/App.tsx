import { Suspense, lazy } from "react";
import GlobalStyles from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";

const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <Suspense>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
