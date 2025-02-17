import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URI;
import { Spin } from "antd";
import toast from "react-hot-toast";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const PrivateRoute = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const getUserDetials = () => {
    axios
      .get(`${API_URL}/user/getUserDetials`)
      .then((res) => {
        console.log("res>>>", res);
        if (res.status === 200) {
          setIsAuthenticated(true);
          toast.success("Authentication successful")
        }
      })
      .catch((err) => {
        setIsAuthenticated(false);
      })
  };


  useEffect(() => {
    getUserDetials();
  }, []);

  if (isAuthenticated === null) {
    return (
      <>
        <div className="flex justify-center items-center w-full h-screen">
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        </div>
      </>
    ); // Show loader while checking auth
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
