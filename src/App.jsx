import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Authentication = lazy(() => import("./pages/Authentication"));
const Home = lazy(() => import("./pages/Home"));
const FallBackLoader = lazy(() => import("./components/FallBackLoader/FallBackLoader"));
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<FallBackLoader />}>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
