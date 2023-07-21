import { Suspense } from "react";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Suspense>
      <GlobalStyles />
      <h1>hello</h1>
      <button>test</button>
    </Suspense>
  );
};

export default App;
