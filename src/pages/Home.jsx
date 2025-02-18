import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setError, setLoading } from "../store/slices/authSlices";
import axios from "axios";
import toast from "react-hot-toast";


const EmptyState=lazy(()=>import("../components/EmptyState/EmptyState")) 
const Layout =lazy(()=>import("../layout/Layout"))
const API_URL = import.meta.env.VITE_API_URI;


const Home = () => {
  const dispatch = useDispatch();


  const userData=useSelector((state)=>state.authDetails)
  console.log(userData);
  const getUserDetials = () => {
    axios
      .get(`${API_URL}/user/getUserDetials`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUser(res.data.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    getUserDetials();
  }, []);

  return (
    <>
   

    <Layout>
    <div className="hidden lg:block h-full">
      <EmptyState/>
    </div>
    </Layout>

    </>


  );
};

export default Home;


// import { useAuth0 } from "@auth0/auth0-react";

// const { logout } = useAuth0();

  // const userLogout = () => {
  //   axios
  //     .post(`${API_URL}/auth/logout`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         dispatch(setUser(null))
  //         toast.success(res.data.message);
  //         logout({ logoutParams: { returnTo: window.location.origin } });
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err.response.data.message);
  //       console.log(err);
  //     });
  // };

{/* <button
onClick={() => {
  userLogout();
}}
>
Logout
</button> */}
