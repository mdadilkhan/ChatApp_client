import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setError, setLoading } from "../store/slices/authSlices";
import axios from "axios";
import toast from "react-hot-toast";



const API_URL = import.meta.env.VITE_API_URI;
const Home = () => {
  const dispatch = useDispatch();



const getUserDetials=()=>{
  axios.get(`${API_URL}/user/getUserDetials`).then((res)=>{
    if(res.status===200){
      dispatch(setUser(res.data.data))
    }
  }).catch((err)=>{
     console.log(err);
  })
}

  useEffect(()=>{
    console.log("hello");
    getUserDetials()
  },[])
  return <div>welcome Home</div>;
};

export default Home;
