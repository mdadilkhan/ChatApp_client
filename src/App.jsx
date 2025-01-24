import { useEffect, Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
import "./App.css";

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Home />
    </>
  );
}

export default App;
