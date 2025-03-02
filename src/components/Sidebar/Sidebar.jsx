import axios from "axios";
import { lazy, Suspense, useState, useEffect } from "react";

const DesktopSidebar = lazy(() => import("./DesktopSidebar"));
const UsersList = lazy(() => import("../Users/UsersList"));

const API_URL = import.meta.env.VITE_API_URI;
const Sidebar = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get(`${API_URL}/user/getAllUsers`)
      .then((res) => {
        if (res.status === 200) {
          setAllUsers(res.data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
     <div className="w-[25rem] h-full flex">
      {/* Sidebar Navigation - Fixed Width */}
      <div className="w-20 flex-shrink-0">
        <DesktopSidebar />
      </div>

      {/* User List - Takes Remaining Space */}
      <div className="flex-1 border">
        <UsersList allUsers={allUsers} />
      </div>
    </div>


    </>
  );
};

export default Sidebar;
