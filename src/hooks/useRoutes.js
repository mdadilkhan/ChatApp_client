import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { setUser, setError, setLoading } from "../store/slices/authSlices";
const API_URL = import.meta.env.VITE_API_URI;
import useConversation from "./useConversation";

const useRoutes = () => {
  const { logout } = useAuth0();
  const location = useLocation();
  const dispatch = useDispatch();
  const { conversationId } = useConversation();
  console.log(location);
  const pathname = location.pathname;

  const userLogout = () => {
    axios
      .post(`${API_URL}/auth/logout`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUser(null));
          toast.success(res.data.message);
          logout({ logoutParams: { returnTo: window.location.origin } });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
  };

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowLeftOnRectangle,
        onCLick: userLogout,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};


export default useRoutes

// import { useAuth0 } from "@auth0/auth0-react";

// const { logout } = useAuth0();

//   const userLogout = () => {
//     axios
//       .post(`${API_URL}/auth/logout`)
//       .then((res) => {
//         if (res.status === 200) {
//           dispatch(setUser(null))
//           toast.success(res.data.message);
//           logout({ logoutParams: { returnTo: window.location.origin } });
//         }
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//         console.log(err);
//       });
//   };

{
  /* <button
onClick={() => {
  userLogout();
}}
>
Logout
</button> */
}
