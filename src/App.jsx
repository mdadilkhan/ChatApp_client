import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Authentication = lazy(() => import("./pages/Authentication"));
const Home = lazy(() => import("./pages/Home"));
const FallBackLoader = lazy(() => import("./components/FallBackLoader/FallBackLoader"));
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";






axios.defaults.withCredentials = true;
function App() {




  return (
    <>
      <Suspense fallback={<FallBackLoader />}>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route element={<PrivateRoute/>}>
               <Route path="/home" element={<Home />} />
            </Route>
   
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
